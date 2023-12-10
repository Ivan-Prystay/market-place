import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import styled from "@emotion/styled";

//* Icons ;
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Input = styled.input`
  width: 56px;
  height: 32px;
  padding: 4px 0 4px 12px;
  font-size: 14px;
  border: 1px solid #d9d9d9;
  outline: none;

  //? Hide spin-buttons */
  /* -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  } */
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
const minDistance = 50;
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

export default function Price({
  handleChangePrice,
}: {
  handleChangePrice: (price: number[]) => void;
}) {
  const [price, setPrice] = React.useState([0, 400]);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleClick = (e: MouseEvent) => {
    setIsOpen(!isOpen);
  };

  const handleEscapeKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!(e.target as HTMLElement).closest(".my-open-slider")) {
      setIsOpen(false);
    }
  };

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 400 - minDistance);
        setPrice([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setPrice([clamped - minDistance, clamped]);
      }
    } else {
      setPrice(newValue as number[]);
    }
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

      if (newValues[0] === newValues[1]) {
        newValues[1] = newValues[1] + 10;
        newValues[0] = newValues[0] - 10;
      }

      if (newValues[1] < 10) {
        newValues[1] = 10;
      }

      if (newValues[0] > newValues[1]) {
        newValues[0] = newValues[1] - 10;
      }

      if (newValues[0] < 0) {
        newValues[0] = 0;
      }
      if (newValues[index] > 400) {
        newValues[index] = 400;
      }
    }
  };

  React.useEffect(() => {
    handleChangePrice(price);
  });

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscapeKeyPress);
    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [isOpen]);

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <Box className="tw-flex-1 tw-relative">
      <Box
        onClick={e => toggleClick((e as unknown) as MouseEvent)}
        sx={{
          display: "flex",
          width: "100%",
          height: 56,
          backgroundColor: "#79839B",
          pl: "14px",
          pr: "8px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          id="double-input-slider"
          sx={{ color: "#fff", margin: 0 }}
          gutterBottom
        >
          Price {price[0]} - {price[1]} $
        </Typography>
        {!isOpen ? (
          <ArrowDropDownIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
        ) : (
          <ArrowDropUpIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
        )}
      </Box>

      <Box
        className="tw-bg-white tw-mt-1 tw-rounded-[2px] my-open-slider tw-absolute"
        sx={{ display: isOpen ? "block" : "none", width: "100%" }}
      >
        <Grid container rowGap={1}>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "space-between",
              backgroundColor: "#F5F5F5",
              padding: "4px 24px 0",
              borderTopRightRadius: "2px",
              borderTopLeftRadius: "2px",
            }}
          >
            <Grid item>
              <Input
                value={price[0]}
                id="min"
                onChange={e => handleInputChange(e, 0)}
                step={10}
                min={0}
                max={390}
                aria-label="min-value-label"
                type={"number"}
                inputMode={"numeric"}
              />
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <div className=" tw-w-6 tw-h-[1px] tw-bg-black"></div>
            </Grid>

            <Grid item>
              <Input
                value={price[1]}
                id="max"
                onChange={e => handleInputChange(e, 1)}
                type={"number"}
                inputMode={"numeric"}
                step={10}
                min={10}
                max={400}
                aria-label="max-value-label"
              />
            </Grid>
          </Box>
          <Grid item xs={12} sx={{ padding: "0 20px", fontSize: "14px" }}>
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
              disableSwap
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
