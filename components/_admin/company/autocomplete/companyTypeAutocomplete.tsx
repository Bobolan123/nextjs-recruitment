import React from "react";
import { Autocomplete, TextField } from "@mui/material";

interface ICompanyTypeAutocompleteProps {
    setCompanyType: (value: string | null) => void; // Accept the onChange prop
    companyType:string |null
}
const CompanyTypeAutocomplete = (props: ICompanyTypeAutocompleteProps) => {
    const { setCompanyType,companyType } = props;

    return (
        <Autocomplete
            size="small"
            disablePortal
            id="company-type-autocomplete"
            options={companyTypes}
            getOptionLabel={(option) => option.label}
            onChange={(_, value: any) => setCompanyType(value?.label)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    InputLabelProps={{ shrink: false }}
                    label={companyType?"":"Select company type"}
                />
            )}
        />
    );
};

export default CompanyTypeAutocomplete;

interface ICompanyTypes {
    label: string;
}
const companyTypes: readonly ICompanyTypes[] = [
    { label: "IT Product" },
    { label: "IT Outsourcing" },
    { label: "Consulting" },
    { label: "Telecommunications" },
    { label: "E-commerce" },
    { label: "Cloud Services" },
    { label: "Cybersecurity" },
    { label: "Hardware" },
    { label: "Networking" },
    { label: "FinTech" },
    { label: "HealthTech" },
];
