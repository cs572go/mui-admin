import React from 'react'
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TagIcon from '@mui/icons-material/Tag';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';

import Divider from '@mui/material/Divider';

const Item = ({ title, to, icon, selected, setSelected }) => {
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
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Left_sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isLeftSideBarCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

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
      <ProSidebar collapsed={isLeftSideBarCollapsed}>
        <Menu iconShape="square"
          onMouseEnter={() => setIsCollapsed(!isLeftSideBarCollapsed)}
          onMouseLeave={() => setIsCollapsed(!isLeftSideBarCollapsed)}
        >
          
            <Item
              title="Username"
              to="/"
              icon={<AccountCircleIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Divider variant="middle" sx={{ backgroundColor: colors.primary[300] }}/>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Tweet"
              to="/tweet"
              icon={<TwitterIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Profile"
              to="/twitter_profile"
              icon={<AlternateEmailIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Hashtag"
              to="/hashtag"
              icon={<TagIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Tools
            </Typography> */}
            <Divider variant="middle" sx={{ backgroundColor: colors.primary[300] }}/>
            <Item
              title="Screener"
              to="/screener"
              icon={<TroubleshootIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Reports"
              to="/reports"
              icon={<AssessmentIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Divider variant="middle" sx={{ backgroundColor: colors.primary[300] }}/>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column'}}>
              <Item
                title="Logout"
                to="/Dashboard"
                icon={<LogoutIcon />}
                selected={selected}
                setSelected={setSelected}
                sx= {{position:'absolute', bottom:'0'}}
              />
            </Box>
          {/* </Box> */}
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Left_sidebar