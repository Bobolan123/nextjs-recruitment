import { useTranslation } from "@/app/i18n";
import SignInBox from "@/components/_authentication/sign-in";
import { Button, Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import GoogleIcon from "@mui/icons-material/Google";
import DoneIcon from "@mui/icons-material/Done";
import Image from "next/image";
import { auth, signIn } from "@/auth";
import VerifyBox from "@/components/_verify/verifyBox";

export default async function Verify({
    params: { lng, id },
}: {
    params: { lng: string, id:string };
}) {
    const { t } = await useTranslation(lng, "auth");
    const lngObj = {
        email: t("email"),
        forgot_password: t("forgot_password"),
        sign_in_with_email: t("sign_in_with_email"),
        do_not_have_account: t("do_not_have_account"),
        sign_up_now: t("sign_up_now"),
    };

    const session = await auth();
    // if (!session.user) return null

    return (
        <Container sx={{ maxWidth: 500 }} maxWidth={false}>
            <div className="mt-36">
                <Typography typography="h4">
                    <b>{t("welcome_to")} Verify Account</b>
                </Typography>{" "}
                <VerifyBox lngObj={lngObj} id={id}/>
            </div>
        </Container>
    );
}
