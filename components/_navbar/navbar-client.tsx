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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import {
    FormControl,
    InputLabel,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBarClient(props:any) {

    const pathname = usePathname();
    const params = useParams<{ lng: string }>();
    // console.log(pathname)

    const [age, setAge] = React.useState("");
    const [openVerticalDropdown, setOpenVerticalDropdown] = React.useState();

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

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

    return (
        <AppBar
            position="static"
            className="bg-custom-gradient"
            sx={{
                height: 88.8,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((page) => (
                            <FormControl sx={{ maxWidth: 130 }} key={page}>
                                <Select
                                    sx={{
                                        boxShadow: "none",
                                        ".MuiOutlinedInput-notchedOutline": {
                                            border: 0,
                                        },
                                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                                            {
                                                border: 0,
                                            },
                                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                            {
                                                border: 0,
                                            },
                                    }}
                                    labelId="demo-simple-select-label"
                                    label="Age"
                                    displayEmpty
                                    notched={true}
                                    value={age}
                                    onChange={handleChange}
                                    renderValue={(selected) => {
                                        if (selected === age) {
                                            return (
                                                <p className="text-gray-400 text-lg flex justify-center items-center">
                                                    {page} <IoIosArrowDown />
                                                </p>
                                            );
                                        }

                                        return (
                                            <Typography
                                                variant="h5"
                                                gutterBottom
                                            >
                                                {page}
                                            </Typography>
                                        );
                                    }}
                                >
                                    <MenuItem value={age}>
                                        <em>Clear</em>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <div className="flex space-x-8">
                            {!pathname.includes("sign_in") ? (
                                <Link
                                    href="sign_in"
                                    className="text-white text-base flex justify-center items-center"
                                >
                                    Sign in/Sign up
                                </Link>
                            ) : null}

                            <p className="text-white text-base flex justify-center items-center space-x-2">
                                <Link
                                    href={'en'}
                                    className={`${
                                        params.lng !== "en"
                                            ? "text-gray-400"
                                            : ""
                                    }`}
                                >
                                    EN
                                </Link>
                                <span>|</span>
                                <Link
                                    href="vi"
                                    className={`${
                                        params.lng !== "vi"
                                            ? "text-gray-400"
                                            : ""
                                    }`}
                                >
                                    VI
                                </Link>
                            </p>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <p className="text-white text-lg flex justify-center items-center">
                                        Profile
                                    </p>
                                </IconButton>
                            </Tooltip>
                        </div>

                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBarClient;
