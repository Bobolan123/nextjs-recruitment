import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import { Box, Container, Grid, Typography } from "@mui/material";
import LocationSelect from "@/components/_home/search-box/location-select";
import SearchText from "@/components/_home/search-box/search-text";
import CompanyItem from "@/components/_home/company-section/companyItem";

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

    return (
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
                    <Typography variant="h4" gutterBottom>
                        <b>{t("title")}</b>
                    </Typography>
                    <div className="md:grid md:grid-cols-12 gap-4 ">
                        <LocationSelect />
                        <div className="col-span-9">
                            <SearchText t={tSearchText} />
                        </div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <Typography variant="subtitle1" color={"gainsboro"}>
                            {t("suggest_for_you")}
                        </Typography>
                        <Typography
                            variant="h6"
                            color={"gainsboro"}
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
            <div className="company-section">
                <Container sx={{ maxWidth: "92%" }} maxWidth={false}>
                    <Typography className="text-center" variant="h4">
                        <b>{t('top_employers')}</b>
                    </Typography>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        justifyContent="center"
                    >
                        <CompanyItem tCompanyItem={tCompanyItem} />
                    </Grid>
                </Container>
            </div>
        </div>
    );
}
