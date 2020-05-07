import React from "react"

export const SearchBar = ({ setTerms }) => (
    <fieldset>
        <div className="form-group">
            <input onKeyUp={ e => setTerms(e.target.value) }
                type="text"
                id="searchTerms"
                autoFocus
                placeholder="Search apartments"
                className="search-box"
            />
        </div>
    </fieldset>
)