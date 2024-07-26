import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import {
    Box,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import LocationSelect from "@/components/_home/search-box/location-select";
import SearchText from "@/components/_home/search-box/search-text";

export default async function Home({
    params: { lng },
}: {
    params: { lng: string };
}) {
    const { t } = await useTranslation(lng);

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
                        paddingTop: "64px",
                        paddingBottom: "64px",
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        <b>195 it job</b>
                    </Typography>
                    <div className="md:grid md:grid-cols-12 gap-4 ">
                        <LocationSelect />
                        <div className="col-span-9">
                            <SearchText />
                        </div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <Typography variant="subtitle1" color={"gainsboro"}>
                            Suggest for you
                        </Typography>
                        <Typography
                            variant="h6"
                            color={"gainsboro"}
                            sx={{
                                border: "rgb(65, 64, 66)",
                                borderStyle: "solid",
                                borderWidth: "1px",
                                borderRadius:100,
                                padding:'1px 10px'
                            }}
                        >
                            Java
                        </Typography>
                    </div>
                </Box>
            </div>
        </div>
    );
}
