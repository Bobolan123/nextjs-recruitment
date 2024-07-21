import { MenuItem } from "@mui/material";

interface IJobItemsProps {
    jobItems: string[];
}
const JobItems = (props: IJobItemsProps) => {
    const { jobItems } = props;
    return (
        <>
            {jobItems.map((job, index) => {
                return <MenuItem>{job}</MenuItem>;
            })}
        </>
    );
};

export default JobItems;
