"use client";

import React from "react";
import { BasicSlider } from "@/layout/shared/BasicSlider/BasicSlider";
import { useWatchlist } from "@lib/watchlist/context";

/**
 * Slider per contenuti da continuare a guardare
 */
const KeepWatchingSlider = () => {
  const { keepWatching } = useWatchlist();

  // Se non ci sono show da continuare, non renderizzare nulla
  if (!keepWatching.length) return null;

  return <BasicSlider title="Keep watching" shows={keepWatching} />;
};

export default KeepWatchingSlider;
