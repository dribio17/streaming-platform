"use client";

import React from "react";
import styled from "styled-components";
import { Spinner } from "@/layout/shared/Spinner";

const SpinnerWrapper = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 50%;
  left: 50%;
`;

/**
 * Blocco Spinner.
 * Mostra lo spinner durante il caricamento del player.
 */
const SpinnerBlock = () => (
  <SpinnerWrapper>
    <Spinner />
  </SpinnerWrapper>
);

export default SpinnerBlock;
