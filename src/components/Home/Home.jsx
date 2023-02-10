import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from "@mui/icons-material/Clear";
import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/actions/auth-action";
import { authServices } from "../../http/auth-services";

export const Home = () => {
  const { post } = useSelector((state) => state.authReducer);
  console.log("post>>>", post);
  const dispatch = useDispatch();
  useEffect(async () => {
    const data = await authServices.getPost();
    dispatch(createPost(data));
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <DeleteIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://prophotos.ru/data/articles/0002/2622/image-rectangle_600_x.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          {/* <ShareIcon /> */}
          <EyeIcon />
        </IconButton>
      </CardActions>
      <Collapse timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
