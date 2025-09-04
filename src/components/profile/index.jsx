import React, { useState } from "react";
import ProfileOverviewBlock from "./ProfileOverviewBlock";
import ProfileLoadingBlock from "./ProfileLoadingBlock";
import CloseButtonBlock from "./CloseButtonBlock";
import { useProfile } from "@lib/context/profile";

/**
 * Componente compositore della pagina Profile
 * Coordina la visualizzazione dell'overview dei profili e il loading.
 */
const Profile = () => {
  const { profile } = useProfile();
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <ProfileLoadingBlock />
      ) : (
        <>
          {profile && <CloseButtonBlock />}
          <ProfileOverviewBlock onSelect={() => setLoading(true)} />
        </>
      )}
    </>
  );
};

export default Profile;
