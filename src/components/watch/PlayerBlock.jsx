"use client";

import React from "react";
import { Player } from "@/layout/player/Player";
import { Meta } from "@lib/meta";

/**
 * Blocco Player.
 * Mostra il player video dello show e gestisce il fullscreen container.
 *
 * @param {Object} show - Dettagli dello show
 * @param {React.Ref} containerRef - Riferimento al container per fullscreen
 */
const PlayerBlock = ({ show, containerRef }) => {
  return (
    <>
      <Meta title={`${show.name ?? "Watch"} | Stream`} />
      <Player show={show} fullscreenContainer={containerRef} />
    </>
  );
};

export default PlayerBlock;
