"use client";

import React from "react";
import styled from "styled-components";
import { SearchInput } from "@/layout/shared/SearchInput";
import { useSearch } from "@lib/hook/useSearch";

const SearchInputWrapper = styled.div`
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: ${p => p.theme.gray50};
  padding-top: ${p => p.theme.navigationHeight};
`;

/**
 * Blocco input di ricerca.
 * Gestisce il focus e l’invio dell’input.
 */
const SearchInputBlock = () => {
  const { inputFocusRef, handleInput } = useSearch();

  return (
    <SearchInputWrapper>
      <SearchInput
        ref={inputFocusRef}
        placeholder="What are you looking for?"
        onInput={handleInput}
      />
    </SearchInputWrapper>
  );
};

export default SearchInputBlock;
