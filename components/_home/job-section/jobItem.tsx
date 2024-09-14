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
import { TagHot, TagSuperHot } from "@/components/common/tags";
import { IJob } from "@/types/jobs/jobs";
import { auth } from "@/auth";
import {
    getDaysSinceCreation,
    getHoursSinceCreation,
    isLessThanOneDay,
} from "@/utils/time/time";

interface IJobItemProps {
    job: IJob;
    tJobItem: {
        posted: string;
        hour_ago: string;
        hour_agos: string;
        day_agos: string;
        day_ago: string;
        sign_in_to_view: string;
        at_office: string;
    };
}
const JobItem = async (props: IJobItemProps) => {
    const { tJobItem, job } = props;
    const session = await auth();

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
                                    {tJobItem.posted}{" "}
                                    {isLessThanOneDay(job.created_at) ? (
                                        <>
                                            {getHoursSinceCreation(
                                                job.created_at
                                            )}{" "}
                                            {getHoursSinceCreation(
                                                job.created_at
                                            ) === 1
                                                ? tJobItem.hour_ago
                                                : tJobItem.hour_agos}
                                        </>
                                    ) : (
                                        <>
                                            {getDaysSinceCreation(
                                                job.created_at
                                            )}{" "}
                                            {getDaysSinceCreation(
                                                job.created_at
                                            ) === 1
                                                ? tJobItem.day_ago
                                                : tJobItem.day_agos}
                                        </>
                                    )}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h6"
                                    className=""
                                >
                                    <b>{job.name}</b>
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="subtitle1"
                                    component="h6"
                                    className="flex items-center space-x-3"
                                >
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_SERVER_COMPANY_IMAGE}/${job.company.logo}`}
                                        width={50}
                                        height={50}
                                        alt=""
                                    />
                                    <span>{job.company.name}</span>
                                </Typography>
                                <div className="flex space-x-1 items-center">
                                    <PaidOutlinedIcon />

                                    {session?.user ? (
                                        <Typography variant="h6" color="green">
                                            {job.salary}
                                        </Typography>
                                    ) : (
                                        <u className="font-semibold ">
                                            {tJobItem.sign_in_to_view}
                                        </u>
                                    )}
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
                                    {job.location}
                                </Typography>
                                <div className="flex space-x-2">
                                    {job.skills.map((skill) => {
                                        return (
                                            <>
                                                <Typography
                                                    key={skill.id}
                                                    variant="subtitle1"
                                                    sx={{
                                                        color: "#414042",
                                                        backgroundColor:
                                                            "#f7f7f7",
                                                        borderRadius: 100,
                                                        padding: "1px 10px",
                                                    }}
                                                >
                                                    {skill.name}
                                                </Typography>
                                            </>
                                        );
                                    })}
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
