"use client";

import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

export default function SearchText({
  handleSearchText,
}: {
  handleSearchText: (text: string) => void;
}): React.ReactNode {
  const [value, setValue] = useState("");

  const handleClear = () => {
    setValue("");
    handleSearchText("");
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
    setValue(newValue);
    handleSearchText(newValue);
  };

  return (
    <TextField
      id="search"
      name="search"
      variant="outlined"
      placeholder="Search Service"
      autoComplete="off"
      className="tw-bg-white tw-w-[100%] tw-rounded-[2px]"
      value={value}
      onChange={handleSearch}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            {value && (
              <IconButton onClick={handleClear} className="materialBtn">
                <CancelIcon />
              </IconButton>
            )}
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
