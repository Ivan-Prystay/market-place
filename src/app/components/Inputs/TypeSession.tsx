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

const typesSession = ["On-line", "Off-line"];

function TypeSession() {
  const [typeSession, setTypeSession] = useState<string | null>(null);

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: string | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<string> | undefined
  ) => {
    setTypeSession(newValue);
  };

  return (
    <FormControl className="tw-rounded-xl tw-flex-1 ">
      <ThemeProvider theme={theme}>
        <Autocomplete
          // limitTags={1}
          // multiple
          sx={{ border: "none", backgroundColor: "#79839B" }}
          disablePortal
          id="change-type-session"
          placeholder="Type session"
          options={typesSession}
          // filterSelectedOptions
          // value={typeSession}
          onChange={handleChange}
          // renderOption={(props, option) => {
          //   return (
          //     <li {...props} key={option}>
          //       {option}
          //     </li>
          //   );
          // }}
          // renderTags={(tagValue, getTagProps) => {
          //   return tagValue.map((option, index) => (
          //     <Chip {...getTagProps({ index })} key={option} label={option} />
          //   ));
          // }}
          renderInput={params => (
            <TextField
              {...params}
              placeholder="Type session"
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

export default TypeSession;
