import { MenuItem } from "@mui/material";

interface ICompanyItemsProps {
    companyItems: string[];
}
const CompanyItems = (props: ICompanyItemsProps) => {
    const { companyItems } = props;

    return (
        <>
             {companyItems.map((company) => {
                return <MenuItem>{company}</MenuItem>;
            })}
        </>
    );
};

export default CompanyItems;
