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
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { TagHot } from "../common/tags";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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
                padding: "15px 20px",
                borderRadius: 2,
            }}
            className="bg-white"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ bgcolor: "white" }}>{children}</Box>}
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
                    bgcolor: "white",
                    width: "41%",
                    gap: 10,
                    "& .Mui-selected": {
                        maxWidth: "100%",
                        border: 1,
                        borderRadius: 2,
                        borderColor: "red",
                    },
                    "&& .MuiTab-root": {
                        alignItems: "baseline",
                    },
                    "& .MuiTabs-indicator": {
                        bgcolor: "red",
                        left: 0,
                        width: 6,
                        borderTopRightRadius: 8,
                        borderBottomRightRadius: 8,
                    },
                }}
            >
                <Tab
                    className=""
                    label={
                        <React.Fragment>
                            <div className="text-left ">
                                <div className="absolute right-0 top-4">
                                    <TagHot />
                                </div>
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
                                            border: 1,
                                            borderColor: "textDarkGray",
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
                <div className="flex items-center">
                    <Image
                        src={robot}
                        alt="robot"
                        width={100}
                        height={100}
                    ></Image>
                    <div className="flex flex-col gap-3">
                        <Box
                            sx={{
                                fontWeight: "bold",
                                fontSize: 22,
                                maxWidth: 300,
                            }}
                        >
                            Fulltime Remote Frontend
                            Javascript/Typescript/ReactJS
                        </Box>
                        <Typography variant="subtitle1">
                            Company name
                        </Typography>
                        <Typography variant="subtitle1">
                            <PaidOutlinedIcon className="mr-1" />

                            <u>Sign in to view salary</u>
                        </Typography>
                    </div>
                </div>

                <div className="flex gap-3 items-center mt-3 mb-4">
                    <Button
                        color="anger"
                        variant="contained"
                        sx={{ flexGrow: 1, minWidth: 140 }}
                    >
                        Apply now
                    </Button>
                    <FavoriteBorderIcon sx={{ color: "red", fontSize: 35 }} />
                </div>
                <hr className="mb-5" />
                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "calc(100vh - 300px)",
                        overflow: "hidden",
                        overflowY: "scroll",
                        scrollbarWidth: 'thin',

                    }}
                >
                    <section className="preview-job-overview pb-5 mb-5 border-b-2 border-gray-200 border-dashed">
                        <div className="flex flex-col gap-3">
                            <Typography variant="subtitle2" color={""}>
                                <FmdGoodOutlinedIcon
                                    sx={{ color: "textDarkGray" }}
                                />
                                SmartHub 18/2E Nguyen Cuu Van, Ward 17, Binh
                                Thanh District, HCMC, Binh Thanh, Ho Chi Minh
                            </Typography>
                            <Typography variant="subtitle2" color={""}>
                                <ApartmentIcon sx={{ color: "textDarkGray" }} />{" "}
                                At office
                            </Typography>
                            <Typography variant="subtitle2" color={""}>
                                <AccessTimeIcon
                                    sx={{ color: "textDarkGray" }}
                                />{" "}
                                2 days ago
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                className="flex gap-3 items-center "
                            >
                                Skills:{" "}
                                <div className="flex gap-1">
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            color: "#414042",
                                            borderRadius: 100,
                                            padding: "1px 8px",
                                            border: 1,
                                            borderColor: "textDarkGray",
                                        }}
                                    >
                                        Java
                                    </Typography>
                                </div>
                            </Typography>
                        </div>
                    </section>

                    <section className="reason-join-us pb-5 mb-5 border-b-2 border-gray-200 border-dashed">
                        <Typography
                            variant="h2"
                            fontSize={22}
                            fontWeight={700}
                            mb={2}
                        >
                            Top 3 reasons to join us
                        </Typography>
                        <ul className="marker:text-red-500 list-outside list-disc ml-6 leading-8">
                            <li>Fully Remote</li>
                            <li>International Team</li>
                            <li>Coaching to grow career</li>
                        </ul>
                    </section>

                    <section className="job-description pb-5 mb-5 border-b-2 border-gray-200 border-dashed">
                        <Typography
                            variant="h2"
                            fontSize={22}
                            fontWeight={700}
                            mb={2}
                        >
                            Job description
                        </Typography>
                        <Box
                            component="div"
                            sx={{
                                fontSize: 16,
                                fontWeight: 400,
                                lineHeight: 1.8,
                            }}
                        >
                            Text
                        </Box>
                    </section>

                    <section className="skill-exp pb-5 mb-5 border-b-2 border-gray-200 border-dashed">
                        <Typography
                            variant="h2"
                            fontSize={22}
                            fontWeight={700}
                            mb={2}
                        >
                            Your skills and experience
                        </Typography>
                        <Box
                            component="div"
                            sx={{
                                fontSize: 16,
                                fontWeight: 400,
                                lineHeight: 1.8,
                            }}
                        >
                            text
                        </Box>
                    </section>

                   
                    <section className="company-overview pb-5">
                        <Typography
                            variant="h2"
                            fontSize={22}
                            fontWeight={700}
                            mb={2}
                        >
                            Company name
                            <a className="ml-auto">View company </a>
                        </Typography>
                        
                    </section>
                </Box>
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
