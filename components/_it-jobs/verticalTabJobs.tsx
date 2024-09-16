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
import { Button, useMediaQuery } from "@mui/material";
import TabPanelJobDetail from "./vertical-tab/tabPanelJobDetail";
import { IJob } from "@/types/jobs/jobs";

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

interface IVerticalTabJobs {
    t: {
        view: string;
        jobs: string;
        job_in: string;
        posted: string;
        day: string;
        days: string;
        ago: string;
        sign_in_to_view_salary: string;
        skills: string;
        top_3_reason_to_join_us: string;
        job_description: string;
        your_skills_and_experience: string;
        why_working_here: string;
    };
}
interface IVerticalTabJobsProps {
    jobs: IJob[];
}
export default function VerticalTabJobs(props: IVerticalTabJobsProps) {
    const { jobs } = props;

    const isSmallScreen = useMediaQuery("(max-width:950px)");

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
                flexDirection: isSmallScreen ? "column" : "row", // Stack on small screens
            }}
        >
            <Tabs
                orientation="vertical" // Switch orientation based on screen size
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                    bgcolor: "white",
                    width: isSmallScreen ? "100%" : "41%", // 100% width on small screens
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
                {jobs?.map((job, index) => {
                    return (
                        <>
                            <Tab
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
                                                Posted 1 hour ago
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
                                                    {job.name}
                                                </Box>
                                            </Link>
                                            <Link href="/it-jobs">
                                                <Typography
                                                    variant="subtitle1"
                                                    className="flex items-center gap-1"
                                                >
                                                    <Image
                                                        src={`${process.env.NEXT_PUBLIC_SERVER_COMPANY_IMAGE}/${job.company?.logo}`}
                                                        width={48}
                                                        height={48}
                                                        alt={`${job.company?.name}`}
                                                    ></Image>
                                                    <span>
                                                        {job?.company?.name}
                                                    </span>
                                                </Typography>
                                            </Link>
                                            <div className="mt-3 mb-1 pb-3 border-b-2 border-gray-200 border-dashed">
                                                <Typography variant="subtitle1">
                                                    <PaidOutlinedIcon className="mr-1" />

                                                    <u>
                                                        Sign in to view salary
                                                    </u>
                                                </Typography>
                                            </div>
                                            <Typography variant="subtitle1">
                                                <ApartmentIcon
                                                    sx={{
                                                        color: "textDarkGray",
                                                    }}
                                                />
                                                At work
                                            </Typography>
                                            <Typography variant="subtitle1">
                                                <FmdGoodOutlinedIcon
                                                    sx={{
                                                        color: "textDarkGray",
                                                    }}
                                                />
                                                {job.company?.locations
                                                    .slice(0, 2)
                                                    ?.map((location, index) =>
                                                        index === 0
                                                            ? location.city
                                                            : ` - ${location.city}`
                                                    )
                                                    .join("")}{" "}
                                            </Typography>
                                            <div className="flex space-x-2 mt-2">
                                                {job.skills.map((skill) => {
                                                    return (
                                                        <>
                                                            <Typography
                                                                key={skill.id}
                                                                variant="subtitle2"
                                                                sx={{
                                                                    color: "#414042",
                                                                    borderRadius: 100,
                                                                    padding:
                                                                        "1px 8px",
                                                                    border: 1,
                                                                    borderColor:
                                                                        "textDarkGray",
                                                                }}
                                                            >
                                                                {skill.name}
                                                            </Typography>
                                                        </>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                }
                                {...a11yProps(index)}
                            />
                        </>
                    );
                })}
            
                {/* <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} /> */} 
            </Tabs>

            {!isSmallScreen && (
                <>
                    <TabPanelJobDetail value={value} jobs={jobs}/>
                </>
            )}
        </Box>
    );
}
