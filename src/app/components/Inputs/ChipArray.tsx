import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { ChipData } from "../../page";

interface ComponentProps {
  chipData: ChipData[];
  handleDelete: (chipToDelete: ChipData) => void;
}

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const ChipsArray: React.FC<ComponentProps> = ({ chipData, handleDelete }) => {
  const [chips, setChips] = React.useState(chipData);

  React.useEffect(() => {
    setChips(chipData);
  }, [chipData]);

  return (
    <Paper
      sx={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        backgroundColor: "transparent",
        top: "320px",
        m: 0,
      }}
      component="ul"
    >
      {chips.map(chip => {
        return (
          <ListItem key={chip.key}>
            <Chip
              sx={{ backgroundColor: "white", borderRadius: "2px" }}
              label={chip.label}
              onDelete={() => {
                setChips(chips.filter(d => d !== chip));
                handleDelete(chip);
              }}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
};

export default ChipsArray;
