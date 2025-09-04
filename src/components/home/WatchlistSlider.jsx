"use client";

import React from "react";
import { BasicSlider } from "@/layout/shared/BasicSlider/BasicSlider";
import { useWatchlist } from "@lib/watchlist/context";

/**
 * Slider per la Watchlist dell'utente
 * Mostra gli show attivi nella watchlist.
 */
const WatchlistSlider = () => {
  const { activeShows } = useWatchlist();

  // Se non ci sono show attivi, non renderizzare nulla
  if (!activeShows.length) return null;

  return <BasicSlider title="Your watchlist" shows={activeShows} />;
};

export default WatchlistSlider;
