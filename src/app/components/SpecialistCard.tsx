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
        borderRadius: 0,
      }}
    >
      <CardMedia
        sx={{ height: 309, width: 206 }}
        title="jesicaP"
        image="/img/persons/jesicaP.jpg"
      />
      <CardContent>
        <Typography variant="body1" color="white">
          Hello! I&apos;m a tarot reader and numerologist ready to help unravel
          the mysteries of your life. Order my services, and together we&apos;ll
          harness the magic of tarot cards and numbers to provide you with
          unique insights and guidance in personal development. Allow the cards
          and numbers to open new perspectives for you on the path to harmony
          and success.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SpecialistCard;
