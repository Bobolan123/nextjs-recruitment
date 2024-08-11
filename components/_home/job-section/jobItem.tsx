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
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { t } from "i18next";
import { TagHot, TagSuperHot } from "@/components/common/tags";

interface IJobItemProps {
    tJobItem: {
        posted: string;
        hour_ago: string;
        hour_agos: string;
        sign_in_to_view: string;
        at_office: string;
    };
}
const JobItem = (props: IJobItemProps) => {
    const { tJobItem } = props;
    return (
        <>
            <Grid item key="123" xs={6} sm={4} md={3}>
                <Card
                    sx={{
                        minWidth: 150,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <CardActionArea className="static">
                        <div className="absolute right-0 top-4">
                            <TagHot />
                        </div> 
                        <Link href={`/company/`}>
                            <CardMedia component="div" sx={{}}></CardMedia>

                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography
                                    gutterBottom
                                    variant="subtitle1"
                                    component="h2"
                                    color={"lightgray"}
                                    className=""
                                >
                                    {tJobItem.posted} 4 {tJobItem.hour_agos}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h6"
                                    className=""
                                >
                                    <b>
                                        Middle/ Senior Backend Engineer (Java,
                                        English)
                                    </b>
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="subtitle1"
                                    component="h6"
                                    className="flex space-x-3"
                                >
                                    <Image
                                        src="/logo/robot.png"
                                        width={50}
                                        height={50}
                                        alt=""
                                    />
                                    <span>Company name</span>
                                </Typography>
                                <div className="flex space-x-1">
                                    <PaidOutlinedIcon />
                                    <u className="font-semibold ">
                                        {tJobItem.sign_in_to_view}
                                    </u>
                                </div>
                                <hr className="mt-2 mb-3"></hr>
                                <Typography variant="subtitle1" color={""}>
                                    <ApartmentIcon
                                        sx={{ color: "textDarkGray" }}
                                    />{" "}
                                    {tJobItem.at_office}
                                </Typography>
                                <Typography variant="subtitle1" color={""}>
                                    <FmdGoodOutlinedIcon
                                        sx={{ color: "textDarkGray" }}
                                    />
                                    HCM
                                </Typography>
                                <div className="flex space-x-2">
                                    <Typography
                                        variant="subtitle1"
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
                        </Link>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    );
};

export default JobItem;
