"use client";

import React from "react";
import { ProfileOverview } from "@/layout/profile/ProfileOverview/ProfileOverview";
import { MOCK_PROFILES } from "@lib/mock/profile";

/**
 * Blocco che mostra l'overview dei profili.
 * Riceve callback onSelect per gestire la selezione del profilo.
 */
const ProfileOverviewBlock = ({ onSelect }) => {
  return <ProfileOverview profiles={MOCK_PROFILES} onSelect={onSelect} />;
};

export default ProfileOverviewBlock;
