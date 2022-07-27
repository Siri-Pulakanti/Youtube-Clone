import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { Link } from "react-router-dom";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    });
    history.push("/search");
  };
  return (
    <div className="header__input">
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Search"
      />

      <SearchIcon onClick={search} className="header__inputButton" />
    </div>
  );
}

export default Search;
