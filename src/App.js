import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/topbar";
import Left_sidebar from "./scenes/global/left_sidebar";
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Right_sidebar from "./scenes/global/right_sidebar";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

import mainContentScroll from "./scenes/global/mainContentScroll";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Box
            sx={{
              width: "100vw",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Left_sidebar
              sx={{ height: "100vh", width: "10%", backgroundColor: "white" }}
              setIsSidebar={isSidebar}
            ></Left_sidebar>
            <Box
              sx={{
                height: "100vh",
                width: "80%",
                flex: 1
              }}
            >
              <main className="content">
                <Topbar setIsSidebar={isSidebar} />
                {/* <div className="centerContent">
              <div className="selfCenter spaceBetween">
                <TwitterTweetEmbed
                  onLoad={function noRefCheck() {}}
                  tweetId="933354946111705097"
                />
              </div>
            </div> */}
                {/* <Box
                  sx={{
                    p: 2,
                    flex: 1,
                    overflowX: "hidden",
                    overflowY: "scroll",
                    maxHeight: "75%",
                  }}
                >
                  <TwitterTimelineEmbed
                    onLoad={function noRefCheck() {}}
                    options={{ maxWidth: "600" }}
                    theme="dark"
                    sourceType="profile"
                    userId="1120431456109715457"
                  />
                  <div className="centerContent">
                    <div className="selfCenter spaceBetween">
                      <TwitterTweetEmbed
                        onLoad={function noRefCheck() {}}
                        tweetId="1083592734038929408"
                      />
                    </div>
                  </div>
                </Box> */}

                <Routes></Routes>
              </main>
            </Box>
            <Right_sidebar
              sx={{ height: "100vh", width: "10%", backgroundColor: "white" }}
            ></Right_sidebar>
          </Box>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
