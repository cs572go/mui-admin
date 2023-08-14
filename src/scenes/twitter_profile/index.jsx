import React from "react";
import {  Box,  Button, IconButton,  Typography,  useTheme,} from "@mui/material";
import { tokens } from "../../theme";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Twitter_Profiles = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const botAnalysis = botAnalysis();
  // const threatAnalysis = threatAnalysis();
  // const addToWatchlist = addToWatchlist();
  // const reportProfile = reportProfile();
  return (
    <Box sx={{ p: 2 }}>
      <Typography></Typography>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <TwitterTimelineEmbed
          onLoad={function noRefCheck() {}}
          options={{
            height: 400,
            width: 1000,
          }}
          screenName="asadowaisi"
          sourceType="profile"
          theme="dark"
        />
      </Box>
      
        <Box box spacing={4} sx={{marginTop:'20px'}}>
          <Button variant="outlined" color="secondary"
            // onClick={()=>botAnalysis()}
            >
            Bot Analysis
          </Button>

          <Button variant="outlined" color="secondary"
            // onClick={()=>threatAnalysis()}
            >
            Threat Analysis
          </Button>

          <Button variant="outlined" color="secondary"
            // onClick={()=>addToWatchlist()}
            >
            Add to Watchlist
          </Button>

          <Button variant="outlined" color="secondary"
            // onClick={()=>reportProfile()}
            >
            Report
          </Button>
        </Box>
      
    </Box>
  );
};

export default Twitter_Profiles;
