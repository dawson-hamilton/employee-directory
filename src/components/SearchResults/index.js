import React from "react";

function SearchResults(props) {
    return (
        <ul className="list-group search-results">
            <li className="list-group-item">
                <h1>Name: Dawson Hamilton</h1>
                <h3>Email: dawsondhamilton@gmail.com</h3>
                <h3>Phone Number: 385-274-8009</h3>
            </li>
            <li className="list-group-item">
                <h1>Name: Jacob Dolph</h1>
                <h3>Email: jacobdolph@gmail.com</h3>
                <h3>Phone Number: 888-888-8888</h3>
            </li>
        </ul>
    );
}

export default SearchResults;