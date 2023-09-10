"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import { UserType } from "@/types/userType";
import { FC } from "react";
import Image from "next/image";
import { ChannelImage } from "@/components/StyledComponents/channels/ChannelImage";
import Link from "next/link";

type UserProps = {
  user: UserType;
};

const UserHeader: FC<UserProps> = ({ user }) => {
  console.log(user);
  return (
    <Box sx={{ borderBottom: 1, borderColor: "#2e3056" }}>
      <AppBar position="static" elevation={0} sx={{ padding: "10px 0" }}>
        <Toolbar>
          <Link href={"/"}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ marginLeft: "5px" }}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </Link>
          <ChannelImage variant="header">
            <Image
              src={user?.avatar}
              alt={user?.first_name}
              layout="fill"
              style={{ borderRadius: "50%" }}
            />
          </ChannelImage>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, marginRight: "10px" }}
          >
            {user?.first_name} {user?.last_name}
          </Typography>
          <SearchIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default UserHeader;
