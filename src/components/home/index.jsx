import React from "react";
// Import dei blocchi modulari della home
import Opener from "./Opener";
import WatchlistSlider from "./WatchlistSlider";
import KeepWatchingSlider from "./KeepWatchingSlider";
import TrendingSliderBlock from "./TrendingSliderBlock";
import GenreSliders from "./GenreSliders";

/**
 * Componente principale della Home
 * Questo componente funge da "compositore" dei blocchi modulari.
 * Tutta la logica dei blocchi è incapsulata nei singoli componenti.
 *
 * @param {Object} props - Proprietà della Home
 * @param {Object} props.featured - Show in evidenza
 * @param {Array} props.trending - Lista show trending
 */
const Home = ({ featured, trending }) => {
  return (
    <>
      {/* Sezione Hero / Featured show */}
      {featured && <Opener featured={featured} />}

      {/* Slider della Watchlist dell’utente */}
      <WatchlistSlider />

      {/* Slider dei contenuti da continuare a guardare */}
      <KeepWatchingSlider />

      {/* Slider dei contenuti Trending */}
      {trending && <TrendingSliderBlock trending={trending} />}

      {/* Slider per ogni genere con infinite scroll */}
      <GenreSliders />
    </>
  );
};

export default Home;
