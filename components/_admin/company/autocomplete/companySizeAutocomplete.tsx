import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";

interface ICompanySizeAutocompleteProps {
    setCompanySize: (value: string | null) => void;  // Accept the onChange prop
  }  
const CompanySizeAutocomplete = (props:ICompanySizeAutocompleteProps) => {
    const {setCompanySize} = props

  
    return (
        <Autocomplete
            disablePortal
            size="small"
            id="company-size-autocomplete"
            options={companySizeOptions}
            getOptionLabel={(option) => option.label}
            onChange={(_, value:any) => setCompanySize(value?.label) } 

            renderInput={(params) => (
                <TextField
                    {...params}
                    // label="Company Size"
                    variant="outlined"
                    InputLabelProps={{shrink: false}}

                />
            )}
        />
    );
};

export default CompanySizeAutocomplete;


// Define the type for company size options
interface ICompanySizeType {
    label: string;
}

const companySizeOptions: ICompanySizeType[] = [
    { label: "0-100" },
    { label: "100-500" },
    { label: "500-1000" },
    { label: "1000+" },
];
