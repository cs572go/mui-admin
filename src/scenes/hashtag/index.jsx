import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { TwitterHashtagButton } from 'react-twitter-embed';

const Hashtags = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{p:2}} >
      <Box sx={{ display: "flex", alignItems: "start",justifyContent:'space-between' }}>
        <Box >
          <TwitterHashtagButton
            onLoad={function noRefCheck() {}}
            tag="hatecrime"
          />
        </Box>
        <Box >
          <TwitterHashtagButton
            onLoad={function noRefCheck() {}}
            tag="bombthreat"
          />
        </Box>

        <Box >
          <TwitterHashtagButton
            onLoad={function noRefCheck() {}}
            tag="hatespeech"
          />
        </Box>

        <Box >
          <TwitterHashtagButton
            onLoad={function noRefCheck() {}}
            tag="cybercrime"
          />
        </Box>

        <Box >
          <TwitterHashtagButton
            onLoad={function noRefCheck() {}}
            tag="isis"
          />
        </Box>

        <Box >
          <TwitterHashtagButton
            onLoad={function noRefCheck() {}}
            tag="muslimterrorist"
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "start",justifyContent:'space-between' }}>
        <Box >
          <TwitterHashtagButton
            onLoad={function noRefCheck() {}}
            tag="hatecrime"
          />
        </Box>
        <Box >
          <TwitterHashtagButton
            onLoad={function noRefCheck() {}}
            tag="bombthreat"
          />
        </Box>

        <Box >
          <TwitterHashtagButton
            onLoad={function noRefCheck() {}}
            tag="hatespeech"
          />
        </Box>

        <Box >
          <TwitterHashtagButton
            onLoad={function noRefCheck() {}}
            tag="cybercrime"
          />
        </Box>

        <Box >
          <TwitterHashtagButton
            onLoad={function noRefCheck() {}}
            tag="isis"
          />
        </Box>

        <Box >
          <TwitterHashtagButton
            onLoad={function noRefCheck() {}}
            tag="muslimterrorist"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Hashtags