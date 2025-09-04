import React, { useEffect } from "react";
import Wrapper from "@/layouts/Wrapper";
import Profile from "@/components/profile";
import { Meta } from "@lib/meta";
import { useRouter } from "next/router";

/**
 * Pagina Profile.
 * Include il Wrapper globale e il compositore Profile.
 */
const ProfilePage = () => {
  const { prefetch } = useRouter();

  useEffect(() => {
    prefetch("/profile/code"); // Prefetch per migliorare la navigazione
  }, [prefetch]);

  return (
    <Wrapper hideNavigation>
      <Meta title="Profile | Stream" />
      <Profile />
    </Wrapper>
  );
};

export default ProfilePage;
