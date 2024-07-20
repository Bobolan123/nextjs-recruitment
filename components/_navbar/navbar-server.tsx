import { useTranslation } from "@/app/i18n";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import NavbarLeft from "./navbar-left";
import NavbarRight from "./navbar-right";

interface INavbarServerProps {
    lng: string;
}

export default async function NavbarServer(props: INavbarServerProps) {
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

    return (
        <>
            <AppBar
                position="static"
                className="bg-custom-gradient"
                sx={{
                    height: 88.8,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <NavbarLeft pages={pages} />

                        <NavbarRight
                            settings={settings}
                            signIn={t("sign_in")}
                            signUp={t("sign_up")}
                        />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
