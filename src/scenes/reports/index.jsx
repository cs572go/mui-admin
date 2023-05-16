import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Reports = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{p:2}}>
      
      <Box sx={{display:"flex", alignItems:"center", textAlign:"center" }}>

      </Box>
    </Box>
  )
}

export default Reports