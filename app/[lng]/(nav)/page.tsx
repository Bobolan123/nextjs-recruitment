import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import LocationSelect from "@/components/common/search-box/locationSelect";
import SearchText from "@/components/common/search-box/searchText";
import CompanyItem from "@/components/_home/company-section/companyItem";
import JobItem from "@/components/_home/job-section/jobItem";
import NavbarServer from "@/components/_navbar/navbar-server";
import { fetchCompanies, fetchJobs } from "@/services/home/home.service";

export default async function Home({
    params: { lng },
}: {
    params: { lng: string };
}) {
    const { t } = await useTranslation(lng);
    const tSearchText = {
        search: t("search"),
        enter_keyword: t("enter_keyword"),
    };
    const tCompanyItem = {
        jobs: t("jobs"),
    };
    const tJobItem = {
        posted: t("posted"),
        hour_ago: t("hour_ago"),
        hour_agos: t("hour_agos"),
        sign_in_to_view: t("sign_in_to_view"),
        at_office: t("at_office"),
    };

    const resTopCompany = await fetchCompanies(1, 6);
    const resNewJobs = await fetchJobs(1, 8, "desc");
    console.log(resNewJobs);
    return (
        <>
            <div className="flex flex-col  space-y-20">
                <div className="bg-custom-gradient text-white ">
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            maxWidth: "72rem",
                            flexDirection: "column",
                            gap: 3,
                            margin: "0 auto",
                            paddingTop: "64px",
                            paddingBottom: "64px",
                        }}
                    >
                        <Typography variant="h4" color="white" gutterBottom>
                            <b>{t("title")} </b>
                        </Typography>
                        <div className="md:grid md:grid-cols-12 gap-4 ">
                            <LocationSelect />
                            <div className="col-span-9">
                                <SearchText t={tSearchText} />
                            </div>
                        </div>

                        <div className="flex gap-2 items-center">
                            <Typography
                                variant="subtitle1"
                                color={"textDarkGray"}
                            >
                                {t("suggest_for_you")}
                            </Typography>
                            <Typography
                                variant="h6"
                                color={"textDarkGray"}
                                sx={{
                                    border: "rgb(65, 64, 66)",
                                    borderStyle: "solid",
                                    borderWidth: "1px",
                                    borderRadius: 100,
                                    padding: "1px 10px",
                                }}
                            >
                                Java
                            </Typography>
                        </div>
                    </Box>
                </div>
                {resTopCompany?.data && (
                    <div className="company-section">
                        <Container>
                            <Typography className="text-center" variant="h4">
                                <b>{t("top_employers")}</b>
                            </Typography>
                            <Grid
                                container
                                spacing={{ xs: 2, md: 3 }}
                                columns={{ xs: 4, sm: 12, md: 12 }}
                                justifyContent="center"
                            >
                                {resTopCompany?.data?.companies.map(
                                    (company, index) => {
                                        return (
                                            <CompanyItem
                                                company={company}
                                                tCompanyItem={tCompanyItem}
                                            />
                                        );
                                    }
                                )}
                            </Grid>
                        </Container>
                    </div>
                )}

                <div className="job-section">
                    <Container sx={{ maxWidth: "92%" }} maxWidth={false}>
                        <Typography className="text-center" variant="h4">
                            <b>{t("top_employers")}</b>
                        </Typography>
                        <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 12, md: 12 }}
                            justifyContent="center"
                        >
                            <JobItem tJobItem={tJobItem} />
                        </Grid>
                    </Container>
                    <Box textAlign="center">
                        <Button
                            variant="outlined"
                            color="anger"
                            sx={{
                                padding: "10px 15px",
                                marginTop: 5,
                            }}
                        >
                            <span>
                                {t("view_more")} 12 {t("jobs")}
                            </span>
                        </Button>
                    </Box>
                </div>
            </div>
        </>
    );
}
