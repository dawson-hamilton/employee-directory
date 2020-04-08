import React, { useState, useEffect } from 'react';
import Container from "./components/Container";
import SearchForm from "./components/searchForm";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.prevenDefault();
  };

  return (
    <div>
      <Container>
        <h1 className="text-center">Employee Dashboard</h1>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          hadleInputChange={handleInputChange}
          results={search}
        />
        <SearchResults />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
