"use client";

import React from "react";
import { TrendingSlider } from "@/layout/shared/TrendingSlider/TrendingSlider";

/**
 * Slider dei contenuti Trending
 *
 * @param {Array} trending - Lista show trending
 */
const TrendingSliderBlock = ({ trending }) => {
  if (!trending) return null;

  return <TrendingSlider title="Trending" shows={trending} />;
};

export default TrendingSliderBlock;
