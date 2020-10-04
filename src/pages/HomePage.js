import React, { useState, useEffect } from "react";
import { makeStyles, Box, Button } from "@material-ui/core/";
import {
  MenuApp,
  Table,
  Header,
  SearchInput,
  FilmsList,
  TagsList,
} from "../components";
import films from "../data/films";
import tags from "../data/tags";

import { APIManager } from "../helpers";

const { callMethod } = APIManager;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "600px",
  },
}));

const HomePage = ({}) => {
  const classes = useStyles();
  const [activeButton, setActiveButton] = useState({
    btnMovie: true,
    btnBookmarks: false,
  });
  const [updFilms, setUpdFilms] = useState(films);
  const [bookmarks, setBookmarks] = useState([]);
  const [searchResults, setSearchResult] = useState(updFilms);
  const [input, setInput] = useState("");
  const [activeButtonTags, setActiveButtonTags] = useState([]);

  useEffect(() => {
    const getLocalStorageFilms = localStorage.getItem("films");
    const resStorageFilms = JSON.parse(getLocalStorageFilms);

    if (resStorageFilms) {
      setSearchResult(resStorageFilms);
      setUpdFilms(resStorageFilms);
      setBookmarks(
        resStorageFilms.filter((item) => {
          if (item.added) {
            return item;
          }
        })
      );
    }
  }, []);

  const pickDeleteBookmarks = (title, id) => {
    const findIdBookmarks = bookmarks.find(
      (item, index) => item.title === title
    );

    const findIndexBookmarks = bookmarks.findIndex(
      (item, index) => item.title === title
    );

    if (!bookmarks || findIdBookmarks === undefined) {
      setUpdFilms(
        updFilms.map((item) => {
          if (item.title === title) {
            item.added = true;
          }
          return item;
        })
      );
      setBookmarks([...bookmarks, { ...updFilms[id - 1], added: true }]);
    } else {
      setUpdFilms(
        updFilms.map((item) => {
          if (item.title === title) {
            item.added = false;
          }
          return item;
        })
      );
      bookmarks.splice(findIndexBookmarks, 1);
      setBookmarks(bookmarks);
    }
    localStorage.setItem("films", JSON.stringify(updFilms));
  };

  function tagsFilter(_tags, index) {
    console.log("tagsFilter arr:", _tags);

    const findTags = searchResults.filter((item) => {
      const f = item.tags.find((itemTags) => _tags.includes(itemTags));
      if (f !== undefined) {
        return item;
      }
    });

    const findIndexTags = activeButtonTags.findIndex(
      (item, index) => item === _tags
    );

    if (findIndexTags === -1) {
      setSearchResult(findTags);
      console.log("tagsFilter:", findTags);
      setActiveButtonTags([...activeButtonTags, _tags]);
      console.log("tagsFilter activeButtonTags:", activeButtonTags);
    } else {
      setSearchResult(updFilms);
      activeButtonTags.splice(findIndexTags, 1);
      setActiveButtonTags(activeButtonTags);
      console.log("tagsFilter delete:", updFilms);
    }
  }

  return (
    <div className="homePageRoot">
      <Header activeButton={activeButton} setActiveButton={setActiveButton} />
      {activeButton.btnMovie ? (
        <>
          <SearchInput
            updFilms={updFilms}
            setUpdFilms={setUpdFilms}
            bookmarks={bookmarks}
            searchResults={searchResults}
            setSearchResult={setSearchResult}
            input={input}
            setInput={setInput}
            setActiveButtonTags={setActiveButtonTags}
          />
          <TagsList
            tagsFilter={tagsFilter}
            activeButtonTags={activeButtonTags}
            setActiveButtonTags={setActiveButtonTags}
          />
        </>
      ) : (
        ""
      )}

      <FilmsList
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        updFilms={updFilms}
        bookmarks={bookmarks}
        pickDeleteBookmarks={pickDeleteBookmarks}
        searchResults={searchResults}
        setSearchResult={setSearchResult}
      />
    </div>
  );
};
export { HomePage };
