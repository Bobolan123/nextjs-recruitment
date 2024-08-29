import { useTranslation } from "@/app/i18n";
import SignInBox from "@/components/_authentication/sign-in";
import { Button, Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import GoogleIcon from "@mui/icons-material/Google";
import DoneIcon from "@mui/icons-material/Done";
import Image from "next/image";
import { auth, signIn } from "@/auth";

export default async function SignIn({
    params: { lng },
}: {
    params: { lng: string };
}) {
    const { t } = await useTranslation(lng, "auth");
    const sign_in_benefits = [
        t("sign_in_benefit_1"),
        t("sign_in_benefit_2"),
        t("sign_in_benefit_3"),
        t("sign_in_benefit_4"),
    ];
    const lngObj = {
        email: t("email"),
        password: t("password"),
        forgot_password: t("forgot_password"),
        sign_in_with_email: t("sign_in_with_email"),
        do_not_have_account: t("do_not_have_account"),
        sign_up_now: t("sign_up_now"),
    };

    const session = await auth();
    // if (!session.user) return null

    return (
        <Container sx={{ maxWidth: 1350 }} maxWidth={false}>
            <div className="xl:container md:mx-auto pt-6 ">
                <div className="grid grid-cols-2 gap-x-36">
                    <div className="left">
                        <div className="mt-3">
                            <Typography typography="h5">
                                <b>{t("welcome_to")} ITJob</b>
                            </Typography>
                            <p className="mt-4 mb-3">{t("policy")}</p>
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

                        <SignInBox lngObj={lngObj} />
                    </div>

                    <div className="right">
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            sx={{ minHeight: "50vh" }}
                        >
                            <div className="flex flex-col gap-4">
                                <Typography typography="h5">
                                    <b>{t("sign_in_benefit_title")}</b>
                                </Typography>

                                {sign_in_benefits.map(
                                    (sign_in_benefit, index) => (
                                        <Typography typography="p">
                                            <DoneIcon className="text-green-600 mr-1" />
                                            {sign_in_benefit}
                                        </Typography>
                                    )
                                )}
                            </div>
                        </Grid>
                    </div>
                </div>
            </div>
        </Container>
    );
}
