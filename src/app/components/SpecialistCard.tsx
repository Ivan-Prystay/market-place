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
  Stack,
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
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

/*                  **TYPE                    */
import { Person } from "../types/SpecialistCard";
import Link from "next/link";

function SpecialistCard({
  specialist: { name, about, id },
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
      className=" tw-font-sans"
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
      <Box
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          marginRight: "56px",
        }}
      >
        <CardContent
          sx={{
            paddingTop: 0,
            paddingLeft: 5,
            flexGrow: 1,
          }}
        >
          <div className="tw-flex tw-items-center tw-gap-2">
            <Typography
              className="tw-font-medium tw-underline-offset-[5px] "
              sx={{
                textDecorationLine: "underline",
                fontSize: 24,
              }}
            >
              {name}
            </Typography>
            {confirmed && <TaskAltIcon sx={{ color: "white", fontSize: 27 }} />}
            {diploma && (
              <WorkspacePremiumOutlinedIcon
                sx={{ color: "white", fontSize: 28 }}
              />
            )}
          </div>

          <List className="tw-p-0 tw-mt-[10px] tw-space-y-1">
            {categories.map(category => (
              <ListItem key={category} className="tw-m-0 tw-py-0">
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

          <Typography variant="body1" sx={{ marginTop: "22px" }}>
            {description}
          </Typography>
        </CardContent>

        <div className="tw-text-end">
          <Link
            className="tw-underline tw-underline-offset-4 tw-font-extralight tw-text-[15px]"
            href={`/specialists/${id}`}
          >
            read more
          </Link>
        </div>
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

        <Stack
          direction={"column"}
          spacing={"22px"}
          sx={{ width: "100%" }}
          className=" tw-ml-0"
        >
          <Button
            className="tw-bg-accent-color hover:tw-bg-accent-hover tw-py-[18px] hover:tw-py-[17px] hover:tw-border-solid hover:tw-border-accent-color hover:tw-border-[1px] tw-box-border"
            variant="contained"
            sx={{ borderRadius: 3, textTransform: "lowercase", fontSize: 18 }}
          >
            make appointment
          </Button>
          <Button
            className="tw-py-[17px] hover:tw-bg-accent-hover hover:tw-border-solid tw-border-solid tw-border-[1px] hover:tw-border-accent-color tw-border-accent-color hover:tw-border-[1px]"
            variant="contained"
            sx={{
              borderRadius: 3,
              textTransform: "lowercase",
              fontSize: 18,
            }}
          >
            message
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}

export default SpecialistCard;
