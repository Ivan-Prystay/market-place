import React, { useEffect, useState } from "react";
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

interface ComponentProps {
  changeTypeSession: string | null;
  handleChangeTypeSession: (typeSession: string | null) => void;
}

const options = ["On-line", "Off-line"];

function TypeSession({
  changeTypeSession,
  handleChangeTypeSession,
}: ComponentProps) {
  const [typeSession, setTypeSession] = useState<string | null>(null);

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: string | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<string> | undefined
  ) => {
    handleChangeTypeSession(newValue);
  };

  React.useEffect(() => {
    setTypeSession(changeTypeSession);
  }, [changeTypeSession]);

  return (
    <FormControl className="tw-rounded-xl tw-flex-1 ">
      <ThemeProvider theme={theme}>
        <Autocomplete
          sx={{ border: "none", backgroundColor: "#79839B" }}
          disablePortal
          id="change-type-session"
          placeholder="Type session"
          options={options}
          value={typeSession}
          onChange={handleChange}
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
