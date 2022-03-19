import React from "react";
import ProductGrid from "./ProductGrid";

class Search extends React.Component {
  render() {
    return (
      <>
        <input placeholder="Seach Product" />
        <button> Search </button>
      </>
    );
  }
}

export default Search;
