"use client";

import React, { useEffect, useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

interface ComponentProps {
  searchText: string;
  handleSearchText: (text: string) => void;
}

export default function SearchText({
  searchText,
  handleSearchText,
}: ComponentProps): React.ReactNode {
  const [value, setValue] = useState("");

  const handleClear = () => {
    setValue("");
    handleSearchText("");
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
    setTimeout(() => handleSearchText(newValue), 50);
  };

  useEffect(() => {
    setValue(searchText);
  }, [searchText]);

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
