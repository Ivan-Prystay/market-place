import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
} from "@mui/material/Autocomplete";
import { Chip, FormControl } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface ComponentProps {
  changeCategories: string[];
  handleChangeCategories: (categories: string[]) => void;
}

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

const categories = ["Astrology's", "Numerology's", "Tarot"];

function Categories({
  handleChangeCategories,
  changeCategories,
}: ComponentProps): React.ReactNode {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: string[],
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<string> | undefined
  ) => {
    handleChangeCategories(newValue);
  };
  useEffect(() => {
    setSelectedCategory(changeCategories);
  }, [changeCategories]);

  return (
    <FormControl className="tw-rounded-xl tw-flex-1 ">
      <ThemeProvider theme={theme}>
        <Autocomplete
          limitTags={1}
          multiple
          sx={{ border: "none", backgroundColor: "#79839B" }}
          disablePortal
          id="change-categories-specialist"
          options={categories}
          value={selectedCategory}
          onChange={handleChange}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option}>
                {option}
              </li>
            );
          }}
          renderTags={(tagValue, getTagProps) => {
            return tagValue.map((option, index) => (
              <Chip {...getTagProps({ index })} key={option} label={option} />
            ));
          }}
          renderInput={params => (
            <TextField
              {...params}
              placeholder="Categories"
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
export default Categories;
