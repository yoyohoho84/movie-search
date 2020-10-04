import React, { useState, useEffect } from "react";
import { makeStyles, withStyles, Button, Grid } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { green, purple } from "@material-ui/core/colors";
// import "../styles/header.sass";

const Header = ({ activeButton, setActiveButton }) => {

  const ColorButton = withStyles((theme) => ({
    root: {
      margin: "10px 0px 10px 0px",
      width: "160px",
      color: "#fff",
      backgroundColor: "#db7093",
      "&:hover": {
        backgroundColor: "#db7093",
      },
      "&:focus": {
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
      },
    },
  }))(Button);

  function goMovie() {
    setActiveButton({ ...activeButton, btnMovie: true, btnBookmarks: false });
    console.log("goMovie active:", activeButton);
  }

  function goBookmarks() {
    setActiveButton({ ...activeButton, btnMovie: false, btnBookmarks: true });
    console.log("goBookmarks activeButton:", activeButton);
  }

  return (
    <div className="headerRoot">
      <Grid container spacing={1} align="center" >
        <Grid item xs={12} sm={6} align="center">
          <Link
            style={{
              textDecoration: "none",
            }}
            onClick={goMovie}
            // to="/movie"
          >
            <ColorButton
              variant="contained"
              color="primary"
              style={{
                backgroundColor: activeButton.btnMovie ? "#db7093" : "gray",
              }}
            >
              Фильмы
            </ColorButton>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} align="center">
          <Link
            style={{
              textDecoration: "none",
            }}
            onClick={goBookmarks}
            // to="/bookmarks"
          >
            <ColorButton
              variant="contained"
              color="primary"
              style={{
                backgroundColor: activeButton.btnBookmarks ? "#db7093" : "gray",
              }}
            >
              Закладки
            </ColorButton>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
export { Header };
