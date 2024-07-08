import { FC } from "react";
import {
  Box,
  Breadcrumbs,
  Container,
  Link,
  Stack,
  styled,
} from "@mui/material";

const BreadCrumbsMainDiv = styled(Box)(({ theme }: any) => ({
  backgroundColor: theme.palette.common.breadCrumbBackground,
  padding: "15px 0px 15px 0px",
  "& a": {
    color: theme.palette.common.black,
  },
}));

interface Propsobject {
  link: string;
  text: string;
}

interface BreadCrumbProps {
  data: Propsobject[];
}

const BreadCrumbs: FC<BreadCrumbProps> = ({ data }) => {
  return (
    <BreadCrumbsMainDiv>
      <Container maxWidth="xl">
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {data?.map((item) => (
              <Link underline="hover" color="inherit" href={item?.link}>
                {item?.text}
              </Link>
            ))}
          </Breadcrumbs>
        </Stack>
      </Container>
    </BreadCrumbsMainDiv>
  );
};

export default BreadCrumbs;
