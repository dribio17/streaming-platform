import React from "react";
import Wrapper from "@/layouts/Wrapper";
import Watch from "@/components/watch";
import { getShowById } from "@lib/api/tmdb";
import { checkBrowserCompatibility } from "@lib/browser";

/**
 * Pagina Watch.
 * Include il Wrapper globale e il compositore Watch.
 */
const WatchPage = async ({ params }) => {
  const id = params.identifier;

  if (!id) {
    return null;
  }

  const show = await getShowById(parseInt(id));
  if (!show) {
    return null;
  }

  const compatible = checkBrowserCompatibility();

  return (
    <Wrapper hideNavigation={!compatible}>
      <Watch show={show} browserCompatible={compatible} />
    </Wrapper>
  );
};

export default WatchPage;
