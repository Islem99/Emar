import { ImagesPath } from "@/constants";

import {
  Box,
  Button,
  Grid,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const RequestBanner = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const ImageContainer = styled(Box)({
    position: "relative",
    maxWidth: "100%",
    height: "416px",
    overflow: "hidden",
    borderRadius: 10,
  });

  const BackgroundImage = styled("div")({
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    border: "0.94px solid #E6E6E6",
    backgroundImage: "url('../../src/assets/images/RequestBanner.jpg')"
  });
  const Image = styled("img")({
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  });

  const GradientOverlay = styled("div")({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    background: "linear-gradient(263.69deg, rgba(6, 150, 88, 0.8) 9.61%, #000000 93.5%)",
    boxShadow: "0px 4px 4px 0px #00000040",
    opacity:0.5,
  });

  const ContentContainer = styled(Box)({
    position: "absolute",
    top: "25%",
    left: "10%",
    p: 2,
    zIndex: 1,
    "& h4": {
      fontWeight: "700",
    }
  });
  return (
    <Grid sx={{ width: "100%", marginY: 6 }}>
      <Grid item xs={12}>
        <ImageContainer>
          <BackgroundImage />
          {!isSmallScreen && <GradientOverlay />}

          <ContentContainer>
            <Image
              src={ImagesPath.WhiteLogo}
              alt="Image"
              sx={{ width: "65%", height: "65%" }}
            />

            <Typography variant="h4" color="white" sx={{ marginY: 4 }}>
              ONE STEP SOLUTION FOR YOU
            </Typography>
            {!isSmallScreen && (
              <Button
              startIcon={<img src={ImagesPath.GetAQuoteIcon}/>}
                variant="contained"
                style={{ backgroundColor: "#38C64E", width: "50%",margin:"5px 0 5px 0" }}
              >
                Request a Quote
              </Button>
            )}
          </ContentContainer>
        </ImageContainer>
      </Grid>
    </Grid>
  );
};
