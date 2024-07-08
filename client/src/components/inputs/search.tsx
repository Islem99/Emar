import SearchIcon from "@mui/icons-material/Search";
import { Grid, IconButton, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as React from "react";

interface SearchComponentProps {
  onSearch: (query: string) => void;
}

const SearchContainer = styled(Grid)({
  display: "flex",
  alignItems: "center",
  color: "white",
  border: "0px solid #ccc",
  borderRadius: "40px",
  backgroundColor: " #D9D9D94D",
  margin: "0px 10px",
  minWidth: "317px",
  height: "38px",
  width: "100%",


  "@media (max-width: 600px)": {
    margin: "0px 5px",
  },
});

const SearchInput = styled(InputBase)({
  margin: "8px",
  paddingTop: "6px !important",
  fontSize: "10.52px",
  fontWeight: "500",
});
export const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        size="small"
        margin="dense"
        placeholder="Looking For..."
        fullWidth
        onChange={handleInputChange}
      />
      <IconButton>
        <SearchIcon sx={{ color: "#9E9E9E" }} />
      </IconButton>
    </SearchContainer>
  );
};
