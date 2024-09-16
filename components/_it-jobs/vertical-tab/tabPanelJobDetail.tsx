"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import robot from "@/public/logo/robot.png";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { Button, useMediaQuery } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LaunchIcon from "@mui/icons-material/Launch";
import { TagHot } from "@/components/common/tags";
import { IJob } from "@/types/jobs/jobs";

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
                position: "relative",
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
            {value === index && (
                <Box
                    sx={{
                        bgcolor: "white",
                        position: "sticky",
                        top: "100px",
                    }}
                >
                    {children}
                </Box>
            )}
        </Box>
    );
}

interface ITabPanelCompanyDetail {
    value: number;
    jobs: IJob[];
}
const TabPanelJobDetail = (props: ITabPanelCompanyDetail) => {
    const { value, jobs } = props;
    return (
        <>
            {jobs?.map((job, i) => {
                return (
                    <>
                        <TabPanel value={value} index={i}>
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
                                        {job?.name}
                                    </Box>
                                    <Typography variant="subtitle1">
                                        {job?.company?.name}
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
                                <FavoriteBorderIcon
                                    sx={{ color: "red", fontSize: 35 }}
                                />
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
                                    scrollbarWidth: "thin",
                                }}
                            >
                                <section className="preview-job-overview pb-5 mb-5 border-b-2 border-gray-200 border-dashed">
                                    <div className="flex flex-col gap-3">
                                        <Typography
                                            variant="subtitle2"
                                            color={""}
                                        >
                                            <FmdGoodOutlinedIcon
                                                sx={{ color: "textDarkGray" }}
                                            />
                                            {job?.location}
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            color={""}
                                        >
                                            <ApartmentIcon
                                                sx={{ color: "textDarkGray" }}
                                            />{" "}
                                            At office
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            color={""}
                                        >
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
                                                        borderColor:
                                                            "textDarkGray",
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
                                        dangerouslySetInnerHTML={{
                                            __html: job.description,
                                        }} // Injecting HTML safely here
                                    ></Box>
                                </section>

                                <section className="company-overview pb-5">
                                    <div className="flex">
                                        <Typography
                                            variant="h2"
                                            fontSize={22}
                                            fontWeight={700}
                                            mb={2}
                                        >
                                            Company name
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            ml="auto"
                                            color="blue"
                                            mr={1}
                                        >
                                            Xem công ty <LaunchIcon />
                                        </Typography>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <Typography color="textDarkGray">
                                                Mô hình công ty
                                            </Typography>
                                            Dịch vụ và Tư vấn giải pháp
                                        </div>
                                        <div>
                                            <Typography color="textDarkGray">
                                                Lĩnh vực công ty
                                            </Typography>
                                            Dịch Vụ và Tư Vấn IT
                                        </div>
                                        <div>
                                            <Typography color="textDarkGray">
                                                Quy mô công ty
                                            </Typography>
                                            1000+
                                        </div>
                                        <div>
                                            <Typography color="textDarkGray">
                                                Quốc gia
                                            </Typography>
                                            Vietnam
                                        </div>
                                        <div>
                                            <Typography color="textDarkGray">
                                                Thời gian làm việc
                                            </Typography>
                                            Thứ 2 - Thứ 6
                                        </div>
                                        <div>
                                            <Typography color="textDarkGray">
                                                Làm việc ngoài giờ
                                            </Typography>
                                            Thêm lương OT
                                        </div>
                                    </div>
                                </section>
                            </Box>
                        </TabPanel>
                    </>
                );
            })}

            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </>
    );
};

export default TabPanelJobDetail;
