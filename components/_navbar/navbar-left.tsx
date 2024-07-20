"use client";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { FormControl, Select, SelectChangeEvent } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import React, { useState } from "react";

interface INavbarLeftProps {
    pages: string[];
}

const NavbarLeft = (props: INavbarLeftProps) => {
    const pages = props.pages;

    const [age, setAge] = React.useState("");
    const [openCompanyMenu, setOpenCompanyMenu] = useState(false)
    const [openJobMenu, setOpenJobMenu] = useState(false)
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseHover = (label:string) => {
        label===pages[0]?setOpenJobMenu(false):null
        label===pages[0]?setOpenCompanyMenu(false):null
      };
    
      const handleOpenHover = (label:string) => {
        label===pages[0]?setOpenJobMenu(true):null
        label===pages[0]?setOpenCompanyMenu(true):null
      };
    return (
        <>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
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
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
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
                    <FormControl sx={{ maxWidth: 300 }} key={page}>
                        <Select
                            inputProps={{
                                MenuProps: {
                                    MenuListProps: {
                                        sx: {
                                            backgroundColor: "#121212",
                                            color: "#a6a6a6",
                                        },
                                    },
                                    sx: {
                                        "&& .Mui-selected": {
                                            backgroundColor: "#121212",
                                        },
                                        "& .MuiMenuItem-root:hover": {
                                            backgroundColor: "#a6a6a6",
                                            color: "white",
                                        },
                                    },
                                },
                            }}
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
                            label={page} 
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
                                    <p className="text-gray-400 text-lg flex justify-center items-center">
                                        {page} <IoIosArrowDown />
                                    </p>
                                );
                            }}
                        >
                            <MenuItem value={age} selected>
                                Cleaadfr
                            </MenuItem>
                            <MenuItem value={age}>Clear</MenuItem>
                            <MenuItem value={age}>Clear</MenuItem>
                        </Select>
                    </FormControl>
                ))}
            </Box>
        </>
    );
};

export default NavbarLeft;
