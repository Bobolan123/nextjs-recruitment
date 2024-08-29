import { useTranslation } from "@/app/i18n";
import SignUpBox from "@/components/_authentication/sign-up";
import { Button, Checkbox, Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { pink } from "@mui/material/colors";
import robot from "@/public/logo/robot.png";

export default async function SignIn({
    params: { lng },
}: {
    params: { lng: string };
}) {
    const { t } = await useTranslation(lng, "auth");

    const lngObj = {
        email: t("email"),
        password: t("password"),
        forgot_password: t("forgot_password"),
        sign_in_with_email: t("sign_in_with_email"),
        do_not_have_account: t("do_not_have_account"),
        sign_up_now: t("sign_up_now"),
        already_have_account: t("already_have_account"),
        sign_in_now: t("sign_in_now"),
        password_validate: t("password_validate"),
        confirm_password: t("confirm_password"),
    };

   

    return (
        <Container sx={{ maxWidth: 1350 }} maxWidth={false}>
            <div className="xl:container md:mx-auto pt-6 ">
                <div className="grid grid-cols-2">
                    <div className="left">
                        <div className="mt-3">
                            <Typography typography="h5">
                                <b>{t("welcome_to")} ITJob</b>
                            </Typography>
                            <p className="mt-4 mb-3">
                                <Checkbox
                                    size="medium"
                                    sx={{
                                        color: pink[800],
                                        "&.Mui-checked": {
                                            color: pink[600],
                                        },
                                    }}
                                    defaultChecked
                                />
                                {t("google_policy")}
                            </p>
                            <Button
                                fullWidth
                                variant="outlined"
                                color="anger"
                                sx={{
                                    padding: "10px 20px",
                                    color: "red",
                                }}
                            >
                                <Image
                                    src="/google-icon-2048x2048-pks9lbdv.png"
                                    width={30}
                                    height={30}
                                    alt="Picture of the Google"
                                    className="mr-1"
                                />
                                {t("sign_in_gg")}
                            </Button>
                        </div>
                        <p className="text-center m-3">{t("or")}</p>
                        <Typography typography="h6">{t("account")}:</Typography>

                        <SignUpBox
                            lngObj={lngObj}
                        />
                    </div>

                    <div className="right">
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            sx={{ minHeight: "60vh" }}
                        >
                            <Image
                                src={robot}
                                width={300}
                                height={300}
                                alt="Logo"
                            />
                        </Grid>
                    </div>
                </div>
            </div>
        </Container>
    );
}
