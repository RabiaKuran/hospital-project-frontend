import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

interface IASearchButton {
  onClick?: any,
  onChange?:any
  placeholder:any
}

export default function ASearchButton(props: IASearchButton) {
  const { onClick,onChange,placeholder } = props;
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400, marginBottom:"60px"}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ "aria-label": "search google maps" }}
        onChange={onChange}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={onClick}
        
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
