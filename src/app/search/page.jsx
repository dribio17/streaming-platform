import React from "react";
import Wrapper from "@/layouts/Wrapper";
import Search from "@/components/search";
import { Meta } from "@lib/meta";

/**
 * Pagina Search.
 * Include il Wrapper globale e il compositore Search.
 */
const SearchPage = () => {
  return (
    <Wrapper>
      <Meta title="Search | Stream" />
      <Search />
    </Wrapper>
  );
};

export default SearchPage;
