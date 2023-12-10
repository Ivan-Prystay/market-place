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

// ChipsArray.tsx

const ChipsArray: React.FC<ComponentProps> = ({ chipData, handleDelete }) => {
  const [chips, setChips] = React.useState(chipData);

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
      {chips.map(data => {
        return (
          <ListItem key={data.key}>
            <Chip
              sx={{ backgroundColor: "white", borderRadius: "2px" }}
              label={data.label}
              onDelete={() => {
                handleDelete(data);
                setChips(chips.filter(d => d !== data));
              }} // Update state after deleting chip
            />
          </ListItem>
        );
      })}
    </Paper>
  );
};

export default ChipsArray;
