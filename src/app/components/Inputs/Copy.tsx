import React from "react";
import { FormControl, MenuItem, OutlinedInput } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function Copy() {
  const [personName, setPersonName] = React.useState<string[]>([]);
  console.log("Copy: ", personName);
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <FormControl className="tw-bg-grey-input tw-rounded-xl tw-flex-1">
      <Select
        // multiple
        displayEmpty
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={selected => {
          if (selected.length === 0) {
            return <strong>Copy</strong>;
          }
          return selected.join(", ");
        }}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem disabled value="">
          <strong>Copy</strong>
        </MenuItem>
        {names.map(name => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Copy;