import React from "react";
import Wrapper from "@/layouts/Wrapper";
import Home from "@/components/home";
import { Meta } from "@lib/meta";
import { getShowById, getTrending } from "@lib/api/tmdb";
import { FEATURED_SHOW } from "@lib/api/tmdb/config";

/**
 * Metadata della pagina
 */
export const metadata = {
  title: "Home | Stream",
};

/**
 * Pagina principale della Home
 * Carica dati server-side (featured e trending) e li passa a Home.
 */
const HomePage = async () => {
  const featured = await getShowById(FEATURED_SHOW);
  const trending = await getTrending();

  return (
    <Wrapper>
      <Meta title="Home | Stream" />
      <Home featured={featured} trending={trending} />
    </Wrapper>
  );
};

export default HomePage;
