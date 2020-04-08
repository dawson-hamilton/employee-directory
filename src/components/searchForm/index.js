import React from "react";

function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="language">search for a employee's name here:</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="term"
                    list="term"
                    type="text"
                    className="form-control"
                    placeholder="type in a name to begin"
                    id="term"
                />
            </div>
        </form>
    )
}

export default SearchForm;