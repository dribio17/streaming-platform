import React from "react";
import SearchInputBlock from "./SearchInputBlock";
import SearchResultsBlock from "./SearchResultsBlock";

/**
 * Componente compositore della pagina Search.
 * Coordina l’input di ricerca e la visualizzazione dei risultati.
 */
const Search = () => {
  return (
    <div>
      {/* Input di ricerca */}
      <SearchInputBlock />

      {/* Risultati della ricerca */}
      <SearchResultsBlock />
    </div>
  );
};

export default Search;
