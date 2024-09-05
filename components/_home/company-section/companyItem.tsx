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
import { ICompany } from "@/types/companies/companies";

interface ICompanyItemProps {
    company: ICompany;
    tCompanyItem: {
        jobs: string;
    };
}
const CompanyItem = (props: ICompanyItemProps) => {
    const { tCompanyItem, company } = props;

    return (
        <>
            <Grid item key="123" xs={12} sm={6} md={4}>
                <Card
                    sx={{
                        minWidth: 250,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <CardActionArea>
                        <Link href={`/company/`}>
                            <CardMedia component="div">
                                <Image
                                    className="ml-auto mr-auto mt-10 shadow-2xl"
                                    src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE}/company/${company.logo}`}
                                    // src={robot}
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
                                    <b>{company.name}</b>
                                </Typography>
                                <div className="flex space-x-2 justify-center min-h-6">
                                    {company?.skills
                                        ?.slice(0, 3)
                                        .map((skill, index) => {
                                            return (
                                                <>
                                                    <Typography
                                                        key={`${skill}-${index}`}
                                                        variant="subtitle2"
                                                        color={"textDarkGray"}
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
                            <CardContent
                                sx={{
                                    backgroundColor: "#f0f0f0",
                                }}
                            >
                                <div className="flex justify-between items-center gap-4 ">
                                    <Typography
                                        variant="subtitle1"
                                        component="h6"
                                    >
                                        {company?.locations
                                            ?.map((location, index) =>
                                                index === 0
                                                    ? location.address_city
                                                    : ` - ${location.address_city}`
                                            )
                                            .join("")} 
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        component="h6"
                                        className="col-end-7 col-span-2"
                                    >
                                        <AdjustIcon sx={{ color: "green" }} />{" "}
                                        {company?.jobs?.length}{" "}
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
