import React, { useRef } from "react";
import PlayerBlock from "./PlayerBlock";
import SpinnerBlock from "./SpinnerBlock";
import IncompatibleBlock from "./IncompatibleBlock";
import { useAppSelector } from "@lib/redux";

/**
 * Componente compositore della pagina Watch.
 * Coordina Player, Spinner e blocco per browser non compatibili.
 *
 * @param {Object} props - Proprietà della pagina Watch
 * @param {Object} props.show - Dettagli dello show
 * @param {boolean} props.browserCompatible - Flag compatibilità browser
 */
const Watch = ({ show, browserCompatible }) => {
  const containerRef = useRef(null);
  const waiting = useAppSelector(state => state.player.waiting);

  if (!browserCompatible) {
    return <IncompatibleBlock />;
  }

  return (
    <div ref={containerRef}>
      <PlayerBlock show={show} containerRef={containerRef} />
      {waiting && <SpinnerBlock />}
    </div>
  );
};

export default Watch;
