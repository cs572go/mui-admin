import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { TwitterTweetEmbed } from "react-twitter-embed";
const Tweets = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{p:2}} >
      <Box sx={{ display: "flex", alignItems: "start",justifyContent:'space-between' }}>
        <Box >
          <TwitterTweetEmbed
            onLoad={function noRefCheck() {}}
            tweetId="1658413814247833600"
          />
        </Box>
        <Box >
          <TwitterTweetEmbed
            onLoad={function noRefCheck() {}}
            tweetId="1658413730500317184"
          />
        </Box>

        <Box >
          <TwitterTweetEmbed
            onLoad={function noRefCheck() {}}
            tweetId="1658413765149302787"
          />
        </Box>

        <Box >
          <TwitterTweetEmbed
            onLoad={function noRefCheck() {}}
            tweetId="1658413814038269952"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Tweets;
