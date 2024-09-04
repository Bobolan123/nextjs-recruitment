import { useTranslation } from "@/app/i18n";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import NavbarLeft from "./navbar-left";
import NavbarRight from "./navbar-right";
import { auth } from "@/auth";

interface INavbarServerProps {
    lng: string;
}

export default async function NavbarServer(props: INavbarServerProps) {
    const session = await auth()

    const { t } = await useTranslation(props.lng, "navbar");
    const settings = [
        t("profile.profile_cv"),
        t("profile.my_job"),
        t("profile.job_invitation"),
        t("profile.email_subscription"),
        t("profile.setting"),
        t("profile.sign_out"),
    ];
    const pages = [t("jobs"), t("companies")];
    const jobTitles= [t("job_by_skill"),t("job_by_title"),t("job_by_company"),t("job_by_city"),]
    const companyTitles = [t("best_company"), t("company_review")]


    return (
        <>
            <AppBar 
                position="sticky"
                className="bg-custom-gradient "
                sx={{
                    height: 88.8,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <NavbarLeft pages={pages} jobTitles={jobTitles} companyTitles={companyTitles}/>

                        <NavbarRight
                            settings={settings}
                            signIn={t("sign_in")}
                            signUp={t("sign_up")}
                            session={session}
                        />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
