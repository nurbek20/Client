import React, { useState } from "react";
import styles from "./Post.module.css";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { authServices } from "../../http/auth-services";
import { useSelector } from "react-redux";

export const Post = () => {
  const { user } = useSelector((state) => state.authReducer);
  console.log("posts>>>", user);
  const initialSate = {
    title: "",
    description: "",
    imageUrl: "",
  };
  const [val, setVal] = useState(initialSate);

  const handleChange = (event) => {
    setVal({
      ...val,
      [event.target.name]: event.target.value,
    });
    // console.log("val>>", val);
  };
  const handleSubmit =  async(e) => {
    e.preventDefault();
    const data = await authServices.createPosts({ ...val, user: user._id });
    console.log("data>>",data);
  }; 
  return (
    <div className={styles.post}>
      <Paper>
        <form className={styles.postInput} onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            name="title"
            fullWidth
            label="title"
            id="fullWidth"
          />
          <TextField
            onChange={handleChange}
            name="imageUrl"
            fullWidth
            label="imageUrl"
            id="fullWidth"
          />
          <TextareaAutosize
            onChange={handleChange}
            name="description"
            aria-label="Description textarea"
            placeholder="Description"
            minRows={7}
            fullWidth
            style={{ width: 494 }}
          />
          <div className={styles.buttons}>
            <Button type="submit" size="large" variant="contained">
              Опубликовать
            </Button>
            <Button  size="large" variant="contained">
              Отмена
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};
