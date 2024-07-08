// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { Pagination, PaginationItem, Stack } from "@mui/material";
// import { FC } from "react";
// interface PaginationComponentProps {
//   count: number;
//   page: number;
//   onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
// }
// const PaginationComponent: FC<PaginationComponentProps> = ({ count, page, onPageChange }) => {
//   return (
//     <Stack spacing={2}>
//       <Pagination
//         variant="outlined"
//         shape="rounded"
//         count={10}
//         renderItem={(item) => (
//           <PaginationItem
//             slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
//             {...item}
//           />
//         )}
//       />
//     </Stack>
//   );
// };

// export default PaginationComponent;
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Pagination, PaginationItem, Stack } from "@mui/material";
import { FC } from "react";

interface PaginationComponentProps {
  count: number;
  page: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const PaginationComponent: FC<PaginationComponentProps> = ({ count, page, onPageChange }) => {
  return (
    <Stack spacing={2}>
      <Pagination
        variant="outlined"
        shape="rounded"
        count={count}
        page={page}
        onChange={onPageChange}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
};

export default PaginationComponent;
