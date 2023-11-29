import React from "react";
import { FormControl, Menu, MenuItem, OutlinedInput } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const categories = ["Astrology's", "Numerology's", "Tarot"];

function Specialist() {
  const [specialistCategory, setSpecialistCategory] = React.useState<string[]>(
    []
  );
  const handleChange = (
    event: SelectChangeEvent<typeof specialistCategory>
  ) => {
    const {
      target: { value },
    } = event;
    setSpecialistCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <FormControl className="tw-bg-grey-input tw-rounded-xl tw-flex-1">
      <Select
        id="changeCategory"
        name="changeCategory"
        multiple
        displayEmpty
        value={specialistCategory}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={selected => {
          if (selected.length === 0) {
            return <strong>Specialist</strong>;
          }
          return selected.join(", ");
        }}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem disabled value="">
          <strong>Specialist</strong>
        </MenuItem>
        {categories.map(category => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Specialist;
