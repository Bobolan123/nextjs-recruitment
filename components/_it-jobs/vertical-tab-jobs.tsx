"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";
import robot from "@/public/logo/robot.png";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            sx={{
                width: "59%",
            }}
            className="bg-white"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ bgcolor: "white" }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabJobs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: "#f7f7f7",
                display: "flex",
                gap: 5,
            }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                    borderLeft: 1,
                    borderColor: "divider",
                    bgcolor: "white",
                    width: "41%",
                    gap: 10,
                    "& .Mui-selected": {
                        maxWidth: "100%",
                    },
                    "&& .MuiTab-root": {
                        alignItems: "baseline",
                    },
                }}
            >
                <Tab
                    className=""
                    label={
                        <React.Fragment>
                            <div className="text-left">
                                <Typography
                                    variant="subtitle2"
                                    color="textDarkGray"
                                >
                                    Label 1
                                </Typography>
                                <Link href="/it-jobs">
                                    <Box
                                        color="black"
                                        mt={2}
                                        mb={2}
                                        fontSize={18}
                                        sx={{ fontWeight: "bold" }}
                                        display="flex"
                                    >
                                        Fulltime Remote Frontend
                                        Javascript/Typescript/ReactJS
                                    </Box>
                                </Link>
                                <Link href="/it-jobs">
                                    <Typography
                                        variant="subtitle1"
                                        className="flex items-center gap-1"
                                    >
                                        <Image
                                            src={robot}
                                            width={48}
                                            height={48}
                                            alt="ok"
                                        ></Image>
                                        <span>Company name</span>
                                    </Typography>
                                </Link>

                                <div className="mt-3 mb-1 pb-3 border-b-2 border-gray-200 border-dashed">
                                    <Typography variant="subtitle1">
                                        <PaidOutlinedIcon className="mr-1" />

                                        <u>Sign in to view salary</u>
                                    </Typography>
                                </div>

                                <Typography variant="subtitle1">
                                    <ApartmentIcon
                                        sx={{ color: "textDarkGray" }}
                                    />{" "}
                                    asdf
                                </Typography>
                                <Typography variant="subtitle1">
                                    <FmdGoodOutlinedIcon
                                        sx={{ color: "textDarkGray" }}
                                    />
                                    HCM
                                </Typography>
                                <div className="flex space-x-2 mt-2">
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            color: "#414042",
                                            borderRadius: 100,
                                            padding: "1px 8px",
                                            border:1,
                                            borderColor:"textDarkGray"
                                        }}
                                    >
                                        Java
                                    </Typography>
                                   
                                </div>
                            </div>
                        </React.Fragment>
                    }
                    {...a11yProps(0)}
                />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>
    );
}
