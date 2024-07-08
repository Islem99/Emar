import { FC } from "react";
import { Box, styled, Typography } from "@mui/material";
import { StyledBackgroundBox } from "@/styles";

const StyledBox = styled(Box)({
  "&.flex-center": {
    display: "block",
    margin: "0 10px",
  },
  "@media(min-width: 480px)": {
    "&.flex-center": {
      margin: "0 20px",
    },
  },
  "@media(min-width: 768px)": {
    "&.flex-center": {
      display: "flex",
      alignItems: "stretch",
      margin: "0 40px",
    },
  },
});
export const AboutUs: FC = () => {
  return (
    <StyledBox className="flex-center">
      <StyledBackgroundBox
        backgroundImageUrl={"url('../../../src/assets/Rectangle 1363.jpg')"}
        className="content-box"
      >
        <Box className="content-holder">
          <h4 className="sub-heading-text">
            <span className="line-span-holder">
              <span className="line-span" />
              <span className="line-span" />
            </span>
            ABOUT US
          </h4>
          <h1 className="heading-text">Build Everything You Need</h1>
          <Typography
            variant="body1"
            className="para-text"
            sx={{ textAlign: "justify" }}
          >
            Emartech is on a mission to redefine project management in the
            construction industry through its revolutionary platform. Through
            offering a seamless experience for promoters, suppliers and
            stakeholders.
          </Typography>
          <Typography
            variant="body1"
            className="para-text"
            sx={{ textAlign: "justify", paddingTop: "10px" }}
          >
            Emartech is aiming to simplify project monitoring, resource
            management, and procurement processes. With real-time insights and
            proactive notifications, promoters can stay ahead of the curve,
            making informed decisions to drive project success. Embrace the
            future of construction with Emartech by your side.
          </Typography>
        </Box>
      </StyledBackgroundBox>
      <StyledBackgroundBox className="image-box"></StyledBackgroundBox>
    </StyledBox>
  );
};
