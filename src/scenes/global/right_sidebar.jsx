import React from "react";
import { ProSidebar, Menu, MenuItem, rtl } from "react-pro-sidebar";
import { useState } from "react";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeIcon from "@mui/icons-material/Home";
import TwitterIcon from "@mui/icons-material/Twitter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TagIcon from "@mui/icons-material/Tag";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LogoutIcon from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import DvrIcon from "@mui/icons-material/Dvr";

const RightSidebarButton = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "white",
      }}
    >
      {/* <Typography>{title}</Typography> */}
      <Link to={to} />
    </MenuItem>
  );
};

const Right_sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isRightSideBarCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  // const {rtl} = useProSidebar();
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "10px 20px 10px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar rtl collapsed={isRightSideBarCollapsed}>
        <Menu iconShape="square">
          
          <Box
            sx={{
              m: '10px 20px 10px 10px',
              color: colors.grey[100],
            }}
          >
            <IconButton
              onClick={() => setIsCollapsed(!isRightSideBarCollapsed)}
            >
              <DvrIcon />
            </IconButton>
            
            {/* {!isRightSideBarCollapsed && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "left",
                  ml: "5px",
                }}
              >

              </Box>
            )} */}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Right_sidebar;
