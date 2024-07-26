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
import JobItems from "./left-items/job-items";
import CompanyItems from "./left-items/company-items";

interface INavbarLeftProps {
    pages: string[];
    jobTitles: string[];
    companyTitles: string[];
}
const NavbarLeft = (props: INavbarLeftProps) => {
    const { pages, jobTitles, companyTitles } = props;

    const [age, setAge] = React.useState("");

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

    return (
        <>
            <Link href="/">
                <Typography
                    variant="h6"
                    noWrap
                    component="p"
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
                    <AdbIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    LOGOasdf
                </Typography>
            </Link>
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "none", alignItems: "center" },
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
                <Link href="/">
                    <Typography
                        variant="h5"
                        noWrap
                        component="span"
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
                        <AdbIcon
                            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                        />
                        LOGO
                    </Typography>
                </Link>
            </Box>

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
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "left",
                                    },
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "left",
                                    },
                                    getContentAnchorEl: null,
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
                                        <p
                                            className={`text-gray-400 text-lg flex justify-center items-center`}
                                        >
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
                            {(() => {
                                switch (page) {
                                    case pages[0]:
                                        return (
                                            <JobItems jobTitles={jobTitles} />
                                        );
                                    case pages[1]:
                                        return (
                                            <CompanyItems
                                                companyTitles={companyTitles}
                                            />
                                        );
                                    default:
                                        return null;
                                }
                            })()}
                        </Select>
                    </FormControl>
                ))}
            </Box>
        </>
    );
};

export default NavbarLeft;
