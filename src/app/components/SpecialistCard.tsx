import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function SpecialistCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        paddingTop: "33px",
        paddingBottom: "34px",
        paddingLeft: "26px",
        paddingRight: "40px",
        backgroundColor: "transparent",
        border: "solid 1px white",
      }}
    >
      <CardMedia
        sx={{ height: 309, width: 206 }}
        title="jesicaP"
        image="/img/persons/jesicaP.jpg"
      />
      <CardContent>
        <Typography variant="body1" color="initial">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          veritatis labore animi fuga quas autem fugit unde saepe rem amet
          minima quos cum perspiciatis a veniam non, dignissimos nam libero?
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SpecialistCard;
