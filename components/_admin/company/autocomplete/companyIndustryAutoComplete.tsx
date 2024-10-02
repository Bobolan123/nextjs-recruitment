import React from "react";
import { Autocomplete, TextField } from "@mui/material";

// Define the type for the industry options
interface IndustryType {
    label: string;
}

const industryOptions: IndustryType[] = [
    { label: "Software Development Outsourcing" },
    { label: "IT Services" },
    { label: "IT Consulting" },
    { label: "Cloud Computing" },
    { label: "Cybersecurity" },
    { label: "Data Analytics" },
    { label: "Artificial Intelligence" },
    { label: "E-commerce" },
    { label: "HealthTech" },
    { label: "FinTech" },
    { label: "Telecommunications" },
];

interface ICompanyIndustryAutocompleteProps {
    setCompanyIndustry: (value: string | null) => void; // Accept the onChange prop
    companyIndustry: string | null;
}
const CompanyIndustryAutocomplete = (
    props: ICompanyIndustryAutocompleteProps
) => {
    const { setCompanyIndustry, companyIndustry } = props;

    return (
        <Autocomplete
            disablePortal
            size="small"
            id="company-industry-autocomplete"
            options={industryOptions}
            getOptionLabel={(option) => option.label} // Map the option to the label
            onChange={(_, value: any) => setCompanyIndustry(value?.label)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    InputLabelProps={{ shrink: false }}
                    variant="outlined"
                    label={companyIndustry ? "" : "Select company type"}
                />
            )}
        />
    );
};

export default CompanyIndustryAutocomplete;
