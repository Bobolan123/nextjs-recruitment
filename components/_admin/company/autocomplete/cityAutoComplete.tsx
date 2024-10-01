import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import city from "@/vn_location/tinh_tp.json";
import { ICity } from "@/types/locations/vn_location_json";

// Create the options array from city data
const cityOptions: ICity[] = Object.values(city).sort((a, b) =>
    a.name.localeCompare(b.name)
);
interface ICompanyCityAutocompleteProps {
    setCity: (value: ICity | null) => void; // Accept the onChange prop
    city:ICity | null
}

const CompanyCityAutocomplete = (
    props: ICompanyCityAutocompleteProps
) => {
    const { setCity, city } = props;

    return (
        <Autocomplete
            disablePortal
            size="small"
            id="company-industry-autocomplete"
            options={cityOptions}
            getOptionLabel={(option) => option.name} // Display the 'name' from city data
            onChange={(_, value: ICity | null) => {setCity(value || null)
                console.log(value)
            }} 
            renderInput={(params) => (
                <TextField
                    {...params}
                    InputLabelProps={{ shrink: false }}
                    variant="outlined"
                    label={city ? "" : "Select District"}

                />
            )}
        />
    );
};

export default CompanyCityAutocomplete;
