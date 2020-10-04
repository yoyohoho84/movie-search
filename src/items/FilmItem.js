import React, { useState, useEffect } from "react";
import {
  makeStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@material-ui/core/";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const FilmItem = ({ id, title, pickDeleteBookmarks, bookmarks, added }) => {
  // const [added, setAdded] = useState(false);
  
  return (
    <ListItem id={id} button>
      <ListItemText primary={`${title}`} />
      <ListItemIcon onClick={() => {
        pickDeleteBookmarks(title, id)
        
      }}>
        {added ? <StarIcon style={{ color: "#db7093" }}/> : <StarBorderIcon />}
      </ListItemIcon>
    </ListItem>
  );
};
export { FilmItem };
