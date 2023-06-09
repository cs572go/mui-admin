import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import React from 'react'




const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{p:2}}>
      
      <Box sx={{display:"flex", alignItems:"center", textAlign:"center" }}>
        Twitter Sentiment Analysis and Bot Detection Dashboard
      </Box>
    </Box>
  );
};

export default Dashboard;