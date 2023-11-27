import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  List,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import {
  AttachMoneyOutlined,
  FavoriteBorder,
  HeartBroken,
  StarBorder,
} from "@mui/icons-material";

//                ***     Icons
import CircleIcon from "@mui/icons-material/Circle";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

/*                  **TYPE                    */
import { Person } from "../types/SpecialistCard";

function SpecialistCard({
  specialist: { name, about },
}: {
  specialist: Person;
}): React.JSX.Element {
  const {
    image,
    categories,
    rating,
    price,
    diploma,
    confirmed,
    review,
    description,
  } = about;

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
        display: "flex",
      }}
    >
      <Box>
        <CardMedia
          sx={{ height: 309, width: 206 }}
          title={name}
          image={image}
        />
      </Box>
      <Box>
        <CardContent sx={{ color: "white", paddingTop: 0, paddingLeft: 5 }}>
          <div className="tw-flex tw-justify-center tw-items-center tw-gap-3">
            <Typography sx={{ textDecorationLine: "underline", fontSize: 24 }}>
              {name}
            </Typography>
            {confirmed && <TaskAltIcon sx={{ color: "white" }} />}
            {diploma && <WorkspacePremiumIcon sx={{ color: "white" }} />}
          </div>

          <List>
            {categories.map(category => (
              <ListItem key={category}>
                <ListItemIcon sx={{ marginRight: "-46px" }}>
                  <CircleIcon sx={{ color: "white", fontSize: "6px" }} />
                </ListItemIcon>
                <ListItemText primary={category} />
              </ListItem>
            ))}
          </List>

          <div className=" tw-flex tw-flex-row tw-gap-1 tw-mb-2">
            <PermIdentityIcon />
            <Typography>{review.positiveReview} positive review</Typography>
          </div>
          <Typography variant="body1">{description}</Typography>
        </CardContent>
      </Box>

      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 302,
            gap: "49px",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <StarBorder />
              <Typography sx={{ ml: "6px", fontSize: "18px" }}>
                {rating}
              </Typography>
            </Box>
            <Typography variant="subtitle2">
              {review.allReview} review
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ fontSize: "18px" }}>{price}</Typography>
              <AttachMoneyOutlined sx={{ ml: "6px" }} />
            </Box>
            <Typography>for 1 session</Typography>
          </Box>

          <FavoriteBorder />
        </Box>

        <Box>
          <Button variant="contained">make appointment</Button>
          <Button>make +++++++ appointment</Button>
        </Box>
      </CardActions>
    </Card>
  );
}

export default SpecialistCard;
