"use client";

import React from "react";
import { useAppSelector } from "@lib/redux";
import { BasicSlider } from "@/layout/shared/BasicSlider/BasicSlider";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useDispatch } from "react-redux";
import { fetchGenrePage } from "@lib/redux/reducer/genre";

/**
 * Slider per ogni genere
 * Gestisce l'infinite scroll per il caricamento dinamico dei contenuti
 */
const GenreSliders = () => {
  const dispatch = useDispatch();
  const { genreResults, loading, hasNextPage } = useAppSelector(state => state.genre);

  // Hook per infinite scroll
  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    rootMargin: "500px",
    onLoadMore: () => dispatch(fetchGenrePage()),
  });

  return (
    <>
      {Object.keys(genreResults).map(showKey => (
        <BasicSlider key={showKey} title={showKey} shows={genreResults[showKey]} />
      ))}

      {/* Skeleton loader per infinite scroll */}
      {(loading || hasNextPage) && <BasicSlider.Skeleton ref={sentryRef} />}
    </>
  );
};

export default GenreSliders;
