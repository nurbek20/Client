import React from "react";
import styles from "./Post.module.css";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export const Post = () => {
  return (
    <div className={styles.post}>
      <Paper className={styles.postInput}>
        <TextField fullWidth label="title" id="fullWidth" />
        <TextField fullWidth label="imageUrl" id="fullWidth" />
        <TextareaAutosize
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
          <Button type="submit" size="large" variant="contained">
            Отмена
          </Button>
        </div>
      </Paper>
    </div>
  );
};
