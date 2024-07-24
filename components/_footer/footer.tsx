import { useTranslation } from "@/app/i18n";
import { Paper, Box, Typography, Container } from "@mui/material";
import Image from "next/image";

interface INavbarServerProps {
    lng: string;
}
export default async function GuestFooter(props: INavbarServerProps) {
    const { t } = await useTranslation(props.lng, "footer");

    return (
        <Paper
            sx={{
                marginTop: "calc(10% + 60px)",
                width: "100%",
                position: "fixed",
                bottom: 0,
            }}
            component="footer"
            square
            variant="outlined"
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        my: 1,
                    }}
                >
                    <Image
                        src="/google-icon-2048x2048-pks9lbdv.png"
                        width={100}
                        height={200}
                        alt="Picture of the Google"
                        className="mr-1"
                    />
                </Box>

                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                    }}
                >
                    <Typography variant="caption" color="initial">
                        Copyright ©2022. [] Limited
                    </Typography>
                </Box>
            </Container>
        </Paper>
    );
}
