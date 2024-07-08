const express = require("express");
const router = express.Router();
const { protectRoute } = require("../middleware/authMiddleware");

const {
  uploadImagesHandler,
} = require("../controllers/uploadImage.controller");

// Upload Images
router.post("/images", protectRoute, uploadImagesHandler);

module.exports = router;
