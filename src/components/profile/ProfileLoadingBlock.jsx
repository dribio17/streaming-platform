"use client";

import React from "react";
import styled from "styled-components";
import { Spinner } from "@/layout/shared/Spinner";

const ProfileLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

/**
 * Blocco che mostra lo spinner di caricamento durante il cambio profilo.
 */
const ProfileLoadingBlock = () => (
  <ProfileLoading>
    <Spinner />
  </ProfileLoading>
);

export default ProfileLoadingBlock;
