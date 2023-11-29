import React from "react";
import { FormControl, MenuItem, OutlinedInput } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const prices = [
  "10",
  "20",
  "30",
  "50",
  "150",
  "100500",
  "100000000",
  "9999999999999999999999",
];

function Price() {
  const [price, setPrice] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof price>) => {
    const {
      target: { value },
    } = event;
    setPrice(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <FormControl className="tw-bg-grey-input tw-rounded-xl tw-flex-1">
      <Select
        // multiple
        displayEmpty
        value={price}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={selected => {
          if (selected.length === 0) {
            return <strong>price for seans</strong>;
          }
          return selected.join(", ");
        }}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem disabled value="">
          <strong>price for seans</strong>
        </MenuItem>
        {prices.map(price => (
          <MenuItem key={price} value={price}>
            {price}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Price;
