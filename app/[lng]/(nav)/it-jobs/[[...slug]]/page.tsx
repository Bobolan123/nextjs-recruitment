import { useTranslation } from "@/app/i18n";
import LocationSelect from "@/components/_home/search-box/location-select";
import SearchText from "@/components/_home/search-box/search-text";
import CompanySpotlight from "@/components/_it-jobs/company-spotlight";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import robot from "@/public/logo/robot.png";
import { TagCompanySpotLight } from "@/components/common/tags";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { blue } from "@mui/material/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import VerticalTabJobs from "@/components/_it-jobs/vertical-tab-jobs";

export default async function ItJobs({
    params,
}: {
    params: { lng: string; slug: string[] };
}) {
    const { lng, slug } = params;
    const { t } = await useTranslation(lng);
    const tSearchText = {
        search: t("search"),
        enter_keyword: t("enter_keyword"),
    };

    return (
        <div>
            <div className="bg-custom-gradient text-white ">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        maxWidth: "72rem",
                        flexDirection: "column",
                        gap: 3,
                        margin: "0 auto",
                        paddingTop: "45px",
                        paddingBottom: "104px",
                        height: 229,
                    }}
                >
                    <div className="md:grid md:grid-cols-12 gap-4 ">
                        <LocationSelect />
                        <div className="col-span-9">
                            <SearchText t={tSearchText} />
                        </div>
                    </div>
                </Box>
            </div>

            <div className="company-spotlight hidden md:block h-40 bg-gray-100">
                <Stack
                    alignItems={"center"}
                    className="d-flex flex-column flex-lg-row h-16"
                >
                    <Container
                        disableGutters
                        sx={{
                            maxWidth: "92%",
                            height: 200,
                            bgcolor: "white",
                            position: "relative",
                            top: 96,
                            marginTop: -20,
                            borderRadius: "8px",
                        }}
                        className=" flex"
                        maxWidth={false}
                    >
                        <div className="flex">
                            <TagCompanySpotLight />

                            <Link href="companies">
                                <Image
                                    src={robot}
                                    alt=""
                                    width={300}
                                    style={{ height: "200px" }}
                                ></Image>
                            </Link>
                            <div className="absolute left-56 top-10 ">
                                <Link href={`companies/`}>
                                    <Image
                                        src={robot}
                                        alt=""
                                        width={120}
                                        height={120}
                                    ></Image>
                                </Link>
                            </div>

                            <div className="ml-14 flex justify-center items-center w-5/12 border-r-2 border-gray-200 border-dashed">
                                <div>
                                    <Typography variant="h6">
                                        <Link href="">Company name</Link>
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        <FmdGoodIcon
                                            style={{ color: "gray" }}
                                        />
                                        HCM
                                    </Typography>
                                    <Typography
                                        variant="overline"
                                        fontSize={15}
                                    >
                                        Give people power Give people power Give
                                        people power Give people power
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        color="blue"
                                        className="flex items-center"
                                    >
                                        <Link href="jobs">
                                            View 4 jobs{" "}
                                            <ArrowForwardIosIcon
                                                style={{ fontSize: 15 }}
                                            />
                                        </Link>
                                    </Typography>
                                </div>
                            </div>
                            <div className="pl-2 pr-3 flex flex-col gap-3 justify-center items-center">
                                <Link href={"it-jobs"}>
                                    <Typography variant="subtitle1">
                                        <ArrowCircleRightOutlinedIcon
                                            color="warning"
                                            className="mr-2"
                                        />
                                        adsfasdf
                                    </Typography>
                                </Link>

                                <Typography variant="subtitle1">
                                    <ArrowCircleRightOutlinedIcon
                                        color="warning"
                                        className="mr-2"
                                    />
                                    adsfasdf
                                </Typography>
                            </div>
                        </div>
                    </Container>
                </Stack>
            </div>

            <div className="pl-16 pr-16 bg-gray-100">
                <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", mb: "20px" }}
                >
                    4 <span className="text-red-500">typescript</span> jobs in
                    Da Nang
                </Typography>
                <Box>
                    <VerticalTabJobs />
                </Box>
            </div>
        </div>
    );
}
