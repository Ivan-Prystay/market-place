import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FormControl } from "@mui/material";

const categories = ["Astrology's", "Numerology's", "Tarot"];

function Specialist() {
  return (
    <FormControl className="tw-bg-grey-input tw-rounded-xl tw-flex-1">
      <Autocomplete
        sx={{ border: "none" }}
        disablePortal
        id="combo-box-demo"
        options={categories}
        renderInput={params => (
          <TextField {...params} placeholder="Favorites" />
        )}
      />
    </FormControl>
  );
}
export default Specialist;
