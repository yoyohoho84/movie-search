import React, { useState, useEffect } from "react";
import { makeStyles, TextField, Button, Grid, List } from "@material-ui/core/";
import { Link } from "react-router-dom";
import tags from "../data/tags";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "5px 0px 0px 0px",
    width: "400px",
    // height: "50%",
  },
  form: {
    width: "400px",
  },
  button: {
    color: "white",
    backgroundColor: "gray",
    fontSize: "9px",
    width: "85px",
    height: "25px",
  },
}));

const TagsList = ({ tagsFilter, activeButtonTags, setActiveButtonTags }) => {
  const classes = useStyles();
  let arrTags = [];
  // function onButtonTags(_tags, index) {
  //   if (activeButtonTags.includes(_tags)) {
  //     activeButtonTags.splice(index, 1);
  //     setActiveButtonTags(activeButtonTags);
  //   } else {
  //     setActiveButtonTags([...activeButtonTags, _tags]);
  //     console.log("activeButtonTags", activeButtonTags);
  //   }
  // }

  return (
    <>
      <List component="nav" className={classes.root} aria-label="contacts">
        {tags.map((item, index) => {
          if (index < 4) {
            return (
              <Button
                key={index}
                onClick={() => {
                  // setActiveButtonTags([...activeButtonTags, item]);
                  tagsFilter(item, index);
                }}
                className={classes.button}
                variant="contained"
                style={{
                  backgroundColor: activeButtonTags.includes(item)
                    ? "#db7093"
                    : "gray",
                }}
              >
                {item}
              </Button>
            );
          }
        })}
      </List>
      <List component="nav" className={classes.root} aria-label="contacts">
        {tags.map((item, index) => {
          if (index > 3 && index < 8) {
            return (
              <Button
                key={index}
                onClick={() => {
                  tagsFilter(item, index);
                }}
                className={classes.button}
                variant="contained"
                style={{
                  backgroundColor: activeButtonTags.includes(item)
                    ? "#db7093"
                    : "gray",
                }}
              >
                {item}
              </Button>
            );
          }
        })}
      </List>
      <List component="nav" className={classes.root} aria-label="contacts">
        {tags.map((item, index) => {
          if (index > 7 && index < 12) {
            return (
              <Button
                key={index}
                onClick={() => {
                  tagsFilter(item, index);
                }}
                className={classes.button}
                variant="contained"
                style={{
                  backgroundColor: activeButtonTags.includes(item)
                    ? "#db7093"
                    : "gray",
                }}
              >
                {item}
              </Button>
            );
          }
        })}
      </List>
    </>
  );
};
export { TagsList };
