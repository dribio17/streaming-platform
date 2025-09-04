// app/layout.tsx
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@css/theme";
import { GlobalStyle } from "@css/GlobalStyle";
import { Provider as ReduxProvider } from "react-redux";
import { useRedux } from "@lib/redux";
import { ProfileProvider } from "@lib/context/profile/ProfileProvider";
import { WatchlistProvider } from "@lib/watchlist/context/WatchlistProvider";
import { NProgressProvider } from "@lib/context/nprogress/NProgressProvider";
import { Navigation } from "@/layout/global/Navigation/Navigation";
import { Popover } from "@/layout/global/Popover/Popover";

export const metadata = {
  title: "Stream App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = useRedux({}); // se hai pageProps puoi passarli qui

  return (
    <html lang="en">
      <body>
        <ReduxProvider store={store}>
          <ThemeProvider theme={theme}>
            <NProgressProvider>
              <ProfileProvider>
                <WatchlistProvider>
                  <GlobalStyle />
                  <Navigation />
                  {children}
                  <Popover />
                </WatchlistProvider>
              </ProfileProvider>
            </NProgressProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}