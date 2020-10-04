import React, { useState, useEffect } from "react";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
  Button,
} from "@material-ui/core/";
import StarIcon from "@material-ui/icons/MoveToInbox";
import { Link } from "react-router-dom";
import { FilmItem } from "../items";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "150%",
    maxWidth: 460,
    backgroundColor: theme.palette.background.paper,
  },
}));

const FilmsList = ({
  activeButton,
  updFilms,
  bookmarks,
  pickDeleteBookmarks,
  searchResults,
  setSearchResult,
}) => {
  const classes = useStyles();

  const ColorButton = withStyles((theme) => ({
    root: {
      margin: "5px 0px 20px 0px",
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

  const renderFilms = updFilms.map((item, index) => {
    return (
      <FilmItem
        id={index + 1}
        key={index}
        title={item.title}
        // test={item.tags}
        added={item.added}
        pickDeleteBookmarks={pickDeleteBookmarks}
        bookmarks={bookmarks}
      />
    );
  });

  const renderSearchFilms = searchResults.map((item, index) => {
    return (
      <FilmItem
        id={index + 1}
        key={index}
        title={item.title}
        // test={item.tags}
        added={item.added}
        pickDeleteBookmarks={pickDeleteBookmarks}
        bookmarks={bookmarks}
      />
    );
  });

  const renderBookmarks = bookmarks.map((item, index) => {
    return (
      <FilmItem
        id={index + 1}
        key={index}
        title={item.title}
        // tags={item.tags}
        added={item.added}
        pickDeleteBookmarks={pickDeleteBookmarks}
        bookmarks={bookmarks}
      />
    );
  });

  return (
    <>
      {activeButton.btnMovie ? (
        <>
          <List component="nav" className={classes.root} aria-label="contacts">
            {renderSearchFilms ? renderSearchFilms : renderFilms}
          </List>
          {renderFilms.length > 0 ? (
            <div
              style={{
                display: "flex",
              }}
            >
              <ColorButton variant="contained" color="primary">
                Показать еще
              </ColorButton>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        <>
          <List component="nav" className={classes.root} aria-label="contacts">
            {renderBookmarks}
          </List>
          {renderBookmarks.length > 0 ? (
            <div
              style={{
                display: "flex",
              }}
            >
              <ColorButton variant="contained" color="primary">
                Показать еще
              </ColorButton>
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};
export { FilmsList };
