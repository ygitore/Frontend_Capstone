import React from "react";
import '../Layout.css';

export const SearchBar = ({ setTerms }) => (
    <input onKeyUp={ e => setTerms(e.target.value) }
        type="text"
        id="searchTerms"
        autoFocus
        placeholder="Search apartments"
        className="search-box"
    />
)