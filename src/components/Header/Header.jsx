import React from "react";
import styles from "./Header.module.css";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/actions/auth-action";

export const Header = () => {
  const {user}=useSelector(state=>state.authReducer)
  const dispatch=useDispatch()
  const logout=()=>{
    dispatch(logoutAction())
    localStorage.removeItem('userData')
  }
  // const isAuth = false;

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>NURBEK BLOG</div>
          </Link>
          <div className={styles.buttons}>
            {user.fullName ? (
              <>
                <Link to="/posts/create">
                  <Button variant="contained">Написать пост</Button>
                </Link>
                <Button onClick={logout} variant="contained" color="error">
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth/sign-in">
                  <Button variant="contained">Войти</Button>
                </Link>
                <Link to="/auth/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
