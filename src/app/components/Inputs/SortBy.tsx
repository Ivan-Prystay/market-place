import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
} from "@mui/material/Autocomplete";
import { FormControl } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          marginTop: "4px",
          width: "100%",
          borderRadius: 2,
        },
      },
    },
  },
});

const sortParameters = [
  "Price: highest first",
  "Price: lowest first",
  "Numbers of reviews",
  "Best rating",
  "Newest advertisement",
  "Available now",
];

function SortBy({
  handleChangeSortBy,
}: {
  handleChangeSortBy: (nameSort: string | null) => void;
}) {
  const [sortParam, setSortParam] = useState<string | null>(null);

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: string | null,
    reason: AutocompleteChangeReason,
    details: AutocompleteChangeDetails<string> | undefined
  ) => {
    setSortParam(newValue);
    handleChangeSortBy(newValue);
  };

  React.useEffect(() => {
    handleChangeSortBy(sortParam);
  });

  return (
    <FormControl className="tw-rounded-xl tw-flex-1">
      <ThemeProvider theme={theme}>
        <Autocomplete
          sx={{ border: "none", backgroundColor: "#79839B" }}
          disablePortal
          id="change-sort-by"
          options={sortParameters}
          onChange={handleChange}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option}>
                {option}
              </li>
            );
          }}
          renderInput={params => (
            <TextField
              {...params}
              placeholder="Sort by:"
              sx={{
                "& .MuiInputBase-input::placeholder": {
                  opacity: 1,
                  color: "#fff ",
                },
              }}
            />
          )}
        />
      </ThemeProvider>
    </FormControl>
  );
}
export default SortBy;
