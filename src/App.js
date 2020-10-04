import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage, ProfilePage } from "./pages";
import "./styles/header.sass";
import "./styles/homePage.sass";

function App() {

  const [userId, setUserId] = useState(null);

  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact
        />
        {/* <Route
          path="/movie"
          component={() => <MoviePage />}
          exact
        />
        <Route
          path="/bookmarks"
          component={() => (
            <BookmarksPage userId={userId} setUserId={setUserId} />
          )}
          exact
        /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
