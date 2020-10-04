import React, { useState, useEffect } from "react";
import { makeStyles, TextField, Button, Grid } from "@material-ui/core/";
import { Link } from "react-router-dom";
import films from "../data/films";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px 0px 0px 0px",
  },
  form: {
    width: "400px",
  },
  input: {
    width: "100%",
  },
}));

const SearchInput = ({
  updFilms,
  bookmarks,
  setUpdFilms,
  searchResults,
  setSearchResult,
  input,
  setInput,
  setActiveButtonTags
}) => {
  const classes = useStyles();

  useEffect(() => {
    const results = updFilms.filter((item) =>
      item.title.toLowerCase().includes(input)
    );
    setSearchResult(results);
    setActiveButtonTags([]);
  }, [input]);

  const handleInputChange = (e) => {
    setInput(e.target.value.toLowerCase());

    console.log("SearchInput input", input);
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          className={classes.input}
          id="outlined-basic"
          label="Поиск"
          variant="outlined"
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};
export { SearchInput };
