import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Twitter_Profiles = () => {
  return (
    <Box sx={{p:2}}>
      
      <Box sx={{display:"flex", alignItems:"center", textAlign:"center" }}>
                  {/* <TwitterTweetEmbed
                    onLoad={function noRefCheck() {}}
                    tweetId="933354946111705097"
                  /> */}

                  <TwitterTimelineEmbed
                    onLoad={function noRefCheck() {}}
                    options={{
                      height: 400,
                      width: 400,
                    }}
                    screenName="SCRise_"
                    sourceType="profile"
                    theme="dark"
                    
                  />
      </Box>
    </Box>
  )
}

export default Twitter_Profiles