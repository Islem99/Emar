import { TempImages } from "@/constants";
import React, {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { FC } from "react";

export const CategoryCard: FC<any> = ({ name, image }) => {
  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={3}
      lg={2}

    >
      <Card
        sx={{
          width: "100%",
          height: 199.77,
          display: "flex",

          flexDirection: "column",
          justifyContent: "space-evenly",
          border: "0.94px solid #E6E6E6",
          "&:hover": {
            border: "0.94px solid #00B207",
            boxShadow: "0 1px 4px rgba(0, 178, 7, 1)",
          },
        }}
      >
        <CardContent>
          <Box
            sx={{
              borderRadius: "50%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                display: "flex",
              }}
            >
              <Avatar
                src={TempImages.DummyOne}
                sx={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Box>
        </CardContent>
        <CardActions sx={{ alignSelf: "center", color: "inherit" }}>
          <Typography variant="caption">{name}</Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};
