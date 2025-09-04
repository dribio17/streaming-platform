import React from "react";
import { Opener as OpenerComponent } from "@/layout/shared/Opener";

/**
 * Componente Opener
 * Mostra lo show in evidenza nella Hero section.
 *
 * @param {Object} featured - Show da mostrare
 */
const Opener = ({ featured }) => {
  return <OpenerComponent {...featured} />;
};

export default Opener;
