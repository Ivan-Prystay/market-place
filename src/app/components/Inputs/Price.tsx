import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import styled from "@emotion/styled";

const Input = styled(MuiInput)`
  width: 42px;
`;

const CustomSliderStyles = {
  "& .MuiSlider-thumb": {
    width: 14,
    height: 14,
    backgroundColor: "#fff",
    border: "2px solid currentColor",

    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-track": {
    // color: "#B08450",
  },
  "& .MuiSlider-rail": {
    color: "grey",
  },
  "& .MuiSlider-active": {
    color: "red",
  },
  "& .MuiSlider-mark": {
    color: "white",
    width: 8,
    height: 8,
    borderRadius: "50%",
    border: "solid 2px black",
  },
  "& .MuiSlider-markActive": {
    color: "black",
  },
};

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 50,
    label: "50$",
  },

  {
    value: 150,
    label: "150$",
  },

  {
    value: 250,
    label: "250$",
  },

  {
    value: 350,
    label: "350$",
  },
];

function valuetext(value: number) {
  return `${value} $`;
}

export default function Price() {
  const [price, setPrice] = React.useState([40, 170]);

  console.log("price: ", price);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const value =
      event.target.value === "" ? undefined : Number(event.target.value);

    if (value !== undefined) {
      const newValues = [...price];
      newValues[index] = value;
      setPrice(newValues);
    }
  };

  return (
    <Box className="tw-flex-1">
      <Box
        sx={{
          width: "100%",
          height: 56,
          backgroundColor: "#79839B",
          pl: "14px",
        }}
      >
        <Typography
          id="double-input-slider"
          sx={{ color: "#fff" }}
          gutterBottom
        >
          Price
        </Typography>
      </Box>
      <Box className="tw-bg-white tw-rounded-xl tw-py-1 tw-px-2 tw-mt-1 ">
        {/* //** tw-hidden  */}
        <Grid container rowGap={1}>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "space-between",
            }}
          >
            <Grid item>
              <Typography id="min-value-label">Min:</Typography>
              <Input
                value={price[0]}
                id="min"
                onChange={e => handleInputChange(e, 0)}
                inputProps={{
                  step: 5,
                  min: 0,
                  max: 400,
                  type: "number",
                  "aria-labelledby": "min-value-label",
                }}
              />
            </Grid>
            <Grid item>
              <Typography id="max-value-label">Max:</Typography>
              <Input
                value={price[1]}
                id="max"
                onChange={e => handleInputChange(e, 1)}
                inputProps={{
                  step: 5,
                  min: 10,
                  max: 400,
                  type: "number",
                  "aria-labelledby": "max-value-label",
                }}
              />
            </Grid>
          </Box>
          <Grid item xs={12}>
            <Slider
              sx={CustomSliderStyles}
              className="tw-text-accent-color"
              min={0}
              step={5}
              max={400}
              marks={marks}
              value={price}
              onChange={handleChange}
              aria-labelledby="double-input-slider"
              valueLabelDisplay="off"
              getAriaValueText={valuetext}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";
// import { FormControl } from "@mui/material";

// function valuetext(value: number) {
//   return `${value} $`;
// }
// function Price() {
//   const [value, setValue] = React.useState<number[]>([90, 240]);

//   const handleChange = (event: Event, newValue: number | number[]) => {
//     setValue(newValue as number[]);
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;

//     setValue(prevValues => ({
//       ...prevValues,
//       [name]: parseInt(value) || 0,
//     }));
//   };

//   const marks = [
//     {
//       value: 50,
//       label: "50$",
//     },

//     {
//       value: 150,
//       label: "150$",
//     },

//     {
//       value: 250,
//       label: "250$",
//     },

//     {
//       value: 350,
//       label: "350$",
//     },
//   ];

//   return (
//     <FormControl className="tw-bg-grey-input tw-rounded-xl tw-flex-1">
//       <Box sx={{ width: "100%" }}>
//         <div className="tw-flex tw-justify-between tw-flex-1">
//           <input
//             type="number"
//             name="0"
//             min={0}
//             max={400}
//             step={5}
//             onChange={handleInputChange}
//             value={value[0]}
//             className="tw-p-1 tw-border-black tw-border-solid tw-border-2 tw-w-12"
//           ></input>
//           <input
//             name="1"
//             min={0}
//             max={400}
//             step={5}
//             onChange={handleInputChange}
//             value={value[1]}
//             className="tw-p-1 tw-border-black tw-border-solid tw-border-2 tw-w-9"
//           ></input>
//         </div>
//         <Slider
//           getAriaLabel={() => "Price"}
//           value={value}
//           min={0}
//           step={5}
//           marks={marks}
//           max={400}
//           onChange={handleChange}
//           valueLabelDisplay="off"
//           getAriaValueText={valuetext}
//         />
//       </Box>
//     </FormControl>
//   );
// }

// export default Price;
