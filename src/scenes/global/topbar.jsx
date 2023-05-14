import { Box, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Top Search Bar*/}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="10px"
        sx={{flex: 1}}
      >
        <InputBase sx={{ ml: 1, flex: 1}} placeholder="Search #, @ or a topic" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

    </Box>
  );
};

export default Topbar;