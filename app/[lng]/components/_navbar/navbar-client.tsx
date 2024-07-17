"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import type { MenuProps } from "antd";
import { Menu as MenuAntd } from "antd";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

type MenuItem = Required<MenuProps>["items"][number];
const VerticalMenu: React.FC = () => (
    <MenuAntd
      style={{ width: 200 }}
      defaultSelectedKeys={['1']}
      mode="vertical"
      items={[
        { key: '1', label: 'Vertical Option 1' },
        { key: '2', label: 'Vertical Option 2' },
      ]}
    />
  );
const items: MenuItem[] = [
    {
        key: "sub2",
        label: "<VerticalMenu/>",
        children: [
            {
                key: "sub3",
                label: "Submenu",
                children: [
                    { key: "7", label: "Option 7" },
                    { key: "8", label: "Option 8" },
                ],
            },
        ],
        
    },
];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const onClick: MenuProps["onClick"] = (e) => {
        console.log("click", e);
    };

    return (
        <div>
            
        </div>

    );
}
export default ResponsiveAppBar;
