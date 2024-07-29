import {
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import robot from "@/public/logo/robot.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AdjustIcon from "@mui/icons-material/Adjust";

interface ICompanyItemProps {
    tCompanyItem: {
        jobs: string;
    };
}
const CompanyItem = (props: ICompanyItemProps) => {
    const { tCompanyItem } = props;
    return (
        <>
            <Grid item key="123" xs={2} sm={4} md={4}>
                <Card
                    sx={{
                        width: 426,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <CardActionArea>
                        <Link href={`/company/`}>
                            <CardMedia component="div" sx={{}}>
                                <Image
                                    className="ml-auto mr-auto mt-10 shadow-2xl"
                                    src={robot}
                                    width={150}
                                    height={150}
                                    alt="Logo"
                                />
                            </CardMedia>

                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                    className="text-center"
                                >
                                    <b>Techcombank</b>
                                </Typography>
                                <div className="flex space-x-2">
                                    <Typography
                                        variant="subtitle1"
                                        color={"gainsboro"}
                                        sx={{
                                            color: "#414042",
                                            backgroundColor: "#f7f7f7",
                                            borderRadius: 100,
                                            padding: "1px 10px",
                                        }}
                                    >
                                        Java
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        color={"gainsboro"}
                                        sx={{
                                            color: "#414042",
                                            backgroundColor: "#f7f7f7",
                                            borderRadius: 100,
                                            padding: "1px 10px",
                                        }}
                                    >
                                        Java
                                    </Typography>
                                </div>
                            </CardContent>
                            <CardContent
                                sx={{
                                    backgroundColor: "#f0f0f0",
                                }}
                            >
                                <div className="grid grid-cols-2 gap-4 ">
                                    <Typography
                                        variant="subtitle1"
                                        component="h6"
                                    >
                                        HCM
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        component="h6"
                                        className="col-end-7 col-span-2"
                                    >
                                        <AdjustIcon sx={{ color: "green" }} />{" "}
                                        {tCompanyItem.jobs}
                                        <KeyboardArrowRightIcon />
                                    </Typography>
                                </div>
                            </CardContent>
                        </Link>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    );
};

export default CompanyItem;
