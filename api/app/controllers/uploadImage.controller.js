const multer = require("multer");
const path = require("path");

// Set storage engine
const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: function (req, file, cb) {
    const uniqueName =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

// Initialize upload
const uploadImages = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // Limit file size to 10MB per file
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).array("images", 10); // 'images' is the field name, and 10 is the maximum number of files

// Check file type
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

const uploadImagesHandler = (req, res) => {
  uploadImages(req, res, (err) => {
    if (err) {
      return res.status(400).send(err);
    } else {
      if (req.files === undefined) {
        return res.status(400).send("Error: No File Selected!");
      } else {
        return res.send("Files Uploaded!");
      }
    }
  });
};

module.exports = {
  uploadImagesHandler,
};
