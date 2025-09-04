"use client";

import React from "react";
import styled from "styled-components";
import { fillParent } from "@css/helper";
import { Content } from "@css/helper/content";

const PlayerIncompatible = styled.div`
  ${fillParent};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

/**
 * Blocco Browser Incompatibile.
 * Mostra un messaggio quando il device/browser non è compatibile.
 */
const IncompatibleBlock = () => (
  <PlayerIncompatible>
    <Content>
      Your device/browser seems to be incompatible. Please download our app for the
      best experience!
    </Content>
  </PlayerIncompatible>
);

export default IncompatibleBlock;
