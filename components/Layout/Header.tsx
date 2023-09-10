"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchAppBar() {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "#2e3056" }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            textAlign="center"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            پیام های سازمانی
          </Typography>
          <SearchIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
