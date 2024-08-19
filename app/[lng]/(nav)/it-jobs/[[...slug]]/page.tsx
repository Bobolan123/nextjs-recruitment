import { useTranslation } from "@/app/i18n";
import LocationSelect from "@/components/common/search-box/locationSelect";
import SearchText from "@/components/common/search-box/searchText";
import CompanySpotlight from "@/components/_it-jobs/companySpotlight";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import robot from "@/public/logo/robot.png";
import { TagCompanySpotLight } from "@/components/common/tags";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import VerticalTabJobs from "@/components/_it-jobs/verticalTabJobs";

export default async function ItJobs({
    params,
}: {
    params: { lng: string; slug: string[] };
}) {
    const { lng, slug } = params;
    const { t } = await useTranslation(lng,"itJobs");

    const tSearchText = {
        search: t("search"),
        enter_keyword: t("enter_keyword"),
    };
    const tJobPanel = {
        view: t("view"),
        jobs: t("jobs"),

    }
    const tJobTabs = {
        view: t("view"),
        job: t("job"),
        jobs: t("jobs"),
        job_in: t("job_in"),
        posted: t("posted"),
        day: t("day"),
        days: t("days"),
        ago: t("ago"),
        sign_in_to_view_salary: t("sign_in_to_view_salary"),
        skills: t("skills"),
        top_3_reason_to_join_us: t("top_3_reason_to_join_us"),
        job_description: t("job_description"),
        your_skills_and_experience: t("your_skills_and_experience"),
        why_working_here: t("why_working_here")
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
                                            {t('view')} 4 {t("jobs")}
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
                    4 <span className="text-red-500">typescript</span> {t("job_in")} Da Nang
                </Typography>
                <Box>
                    <VerticalTabJobs />
                </Box>
            </div>
        </div>
    );
}
