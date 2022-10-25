import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AHeaderLabel from "../labels/header/AHeaderLabel";
import { ColorPalette } from "../../theme/ColorPalette";
import AGridItem from "../grids/AGridItem";
import AGrid from "../grids/AGrid";

interface IASearchProps {
  placeholder?: string;
  searched?: any;
  searching?(value: any): void;
  label?: string;
  sx?: any;
  value?: string;
  onChange?: any;
}

const Search = styled("div")(() => ({
  position: "relative",
  backgroundColor: ColorPalette.hoverDropdown,
  border: "solid" + ColorPalette.circleGray,
  borderRadius: "8px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: ColorPalette.grayy,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));
export default function ASearch(props: IASearchProps) {
  const { searched, searching, placeholder, onChange, label, sx } = props;
  const [value, SetValue] = useState(searched);
  const placeholderValue = placeholder;

  return (
    <AGrid>
      <AGridItem xs={12}>
        <AHeaderLabel text={label} color={ColorPalette.grayy} size={2} />
      </AGridItem>

      <AGridItem xs={12}>
        <Search placeholder={placeholder}>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: ColorPalette.grayy }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder={placeholderValue}
            inputProps={{ "aria-label": "search" }}
            onChange={onChange}
            value={value}
          />
        </Search>
      </AGridItem>
    </AGrid>
  );
}
