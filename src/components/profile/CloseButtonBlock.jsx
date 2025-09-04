"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { IconX } from "@icon/IconX";
import { square } from "@css/helper";
import { transition } from "@css/helper";

const CloseButton = styled(Link)`
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  color: ${p => p.theme.gray600};
  ${transition("color", "0.2s")};

  @media (hover: hover) {
    &:hover {
      color: ${p => p.theme.gray900};
    }
  }

  &:active {
    color: ${p => p.theme.gray900};
  }
`;

const Close = styled(IconX)`
  ${square("6rem")};
`;

/**
 * Blocco pulsante di chiusura.
 * Mostra la "X" per tornare alla home quando il profilo è selezionato.
 */
const CloseButtonBlock = () => (
  <CloseButton href="/" passHref>
    <Close />
  </CloseButton>
);

export default CloseButtonBlock;
