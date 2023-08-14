import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Reports = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>Reports</Box>
  )
}

export default Reports