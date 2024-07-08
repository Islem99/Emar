import { FC } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { ImagesPath } from "@/constants";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BannersMainDiv = styled(Box)(({ theme }: any) => ({

  // backgroundColor: theme.palette.common.breadCrumbBackground,
  paddingBottom: "5rem",
  paddingTop: "180px",
  "@media (max-width:900px)": {
    paddingTop: "185px",
  },
  "@media (max-width:805px)": {
    paddingTop: "225px",
  },
  "@media (max-width:765px)": {
    paddingTop: "80px",
  },
  "& .secondGrid": {
    "@media (max-width:500px)": {
      display: "none",
    },
  },
  "& .imgContainer": {
    width: "100%",
    borderRadius: "10px",
    position: "relative",
    "& .imageBox": {
      width: "100%",
      borderRadius: "10px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    "& .gradientDiv": {
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      background:
        "linear-gradient(263.69deg, rgba(6, 150, 88, 0.8) 9.61%, #000000 93.5%)",
      // boxShadow: "0px 4px 4px 0px #00000040",
      opacity: 0.5,
      borderRadius: "10px",
    },
    "& .textContent": {
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      position: "absolute",
      borderRadius: "10px",
      paddingLeft: "8%",
      paddingRight: "8%",
      paddingTop: "1rem",
      zIndex: 10,
      paddingBottom: "1rem",
    },
  },
}));

const BannerGrids: FC = () => {
  return (
    <BannersMainDiv>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={8}>
            <div className="imgContainer">
              <Box
                className="imageBox"
                sx={{
                  backgroundImage:
                    "url('../../src/assets/images/HomeBanner01.jpg')",
                  height: "70vh",
                }}
              />
              <div className="gradientDiv"></div>
              <Box
                className="textContent"
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Typography
                  variant="h3"
                  className="heading-text"
                  color="white"
                  sx={{ fontWeight: "500", flex: "none !important" }}
                >
                  Build Everything
                  <br /> You Need
                </Typography>
                <Box
                  component="section"
                  sx={{
                    borderLeft: 4,
                    color: "#84D187",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: 1,
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      className="para-text"
                      variant="body1"
                      color="white"
                      sx={{
                        paddingY: 2,
                      }}
                    >
                      Sale up to
                      <span
                        style={{
                          backgroundColor: "#39C64E",
                          marginLeft: 4,
                          padding: "0px 6px",
                          borderRadius: 6,
                        }}
                      >
                        30% OFF
                      </span>
                    </Typography>

                    <Typography
                      className="para-text"
                      variant="body1"
                      color="#FFFFFF"
                    >
                      Free Shipping on all your order
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{}}>
                  <Button
                    className="para-text   radius-0"
                    variant="contained"
                    type="submit"
                    style={{
                      borderRadius: 100,
                      backgroundColor: "#FFF",
                      marginTop: 10,
                      width: "fit-content",
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontWeight={"600"}
                      color="#39C64E"
                    >
                      Send Now
                    </Typography>
                    <ArrowForwardIcon style={{ fill: "#39C64E" }} />
                  </Button>
                </Box>
              </Box>
            </div>
          </Grid>
          <Grid className="secondGrid" item xs={12} sm={12} md={4}>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              <Grid item xs={12}>
                <div className="imgContainer">
                  <Box
                    className="imageBox"
                    sx={{
                      backgroundImage:
                        "url('../../src/assets/images/HomeBanner02.jpg')",
                      height: "calc(35vh - 12px)",
                    }}
                  />
                  <div className="gradientDiv"></div>
                  <Box className="textContent">
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems={"center"}
                    >
                      <Typography color="white">
                        Summer Sale
                        <span style={{ fontWeight: "600", marginLeft: 2 }}>
                          75% OFF
                        </span>
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight={"600"}
                        color="white"
                      >
                        Construction Tools
                      </Typography>
                    </Box>
                    <Box position="absolute" sx={{ width: "10rem" }} right={1}>
                      <Button
                        className="para-text  radius-0"
                        variant="text"
                        type="submit"
                        sx={{ borderWidth: 0 }}
                      >
                        <Typography
                          variant="body1"
                          fontWeight={"600"}
                          color="#39C64E"
                        >
                          Shop Now
                        </Typography>
                        <ArrowForwardIcon style={{ fill: "#39C64E" }} />
                      </Button>
                    </Box>
                  </Box>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="imgContainer">
                  <Box
                    className="imageBox"
                    sx={{
                      backgroundImage:
                        "url('../../src/assets/images/HomeBanner03.jpg')",
                      height: "calc(35vh - 12px)",
                    }}
                  />
                  <div className="gradientDiv"></div>
                  <Box
                    className="textContent"
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                  >
                    <Typography
                      variant="body1"
                      color="white"
                      sx={{ textAlign: "center" }}
                    >
                      Best Deal
                    </Typography>
                    <Typography
                      sx={{ textAlign: "center" }}
                      fontWeight={"600"}
                      fontSize={"30px"}
                      color="white"
                    >
                      Special Products Deal of the Month
                    </Typography>

                    <Box>
                      <Button
                        className="para-text   radius-0"
                        variant="text"
                        type="submit"
                        sx={{ borderWidth: 0, alignSelf: "center" }}
                      >
                        <Typography
                          sx={{ textAlign: "center" }}
                          variant="body1"
                          fontWeight={"600"}
                          color="#39C64E"
                        >
                          Shop Now
                        </Typography>
                        <ArrowForwardIcon style={{ fill: "#39C64E" }} />
                      </Button>
                    </Box>
                  </Box>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

    </BannersMainDiv>
  );
};

export default BannerGrids;
