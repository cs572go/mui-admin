import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/topbar";
import Left_sidebar from "./scenes/global/left_sidebar";
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Right_sidebar from "./scenes/global/right_sidebar";
// import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";
// import mainContentScroll from "./scenes/global/mainContentScroll";
import Dashboard from "./scenes/dashboard";
import Hashtags from "./scenes/hashtag";
import Tweets from "./scenes/tweets";
import Twitter_Profiles from "./scenes/twitter_profile";
import Reports from "./scenes/reports";
import Screener from "./scenes/screener";

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
              sx={{ height: "100vh", width: "10vw", backgroundColor: "white" }}
              setIsSidebar={isSidebar}
            ></Left_sidebar>
            <Box
              sx={{
                height: "100vh",
                width: "80vw",
                flex: 1,
              }}
            >
              <Topbar setIsSidebar={isSidebar} />
              <main className="content">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/tweet" element={<Tweets />} />
                  <Route path="/hashtag" element={<Hashtags />} />
                  <Route path="/twitter_profile" element={<Twitter_Profiles />} />
                  <Route path="/screener" element={<Screener />} />
                  <Route path="/reports" element={<Reports />} />
                  
                  
                </Routes>
              </main>
            </Box>
            <Right_sidebar
              sx={{ height: "100vh", width: "10vw", backgroundColor: "white" }}
            ></Right_sidebar>
          </Box>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
