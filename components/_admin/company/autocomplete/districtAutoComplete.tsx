import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { IDistrict } from "@/types/locations/vn_location_json";

interface IDistrictAutocompleteProps {
    setDistrict: (value: IDistrict | null) => void;
    cityCode: string | null;
    district:IDistrict|null
}

const CompanyDistrictAutocomplete = (props: IDistrictAutocompleteProps) => {
    const { setDistrict, cityCode,district } = props;
    const [districts, setDistricts] = useState<IDistrict[]>([]);

    useEffect(() => {
        if (cityCode) {
            import(`@/vn_location/quan-huyen/${cityCode}.json`)
                .then((data) => {
                    const districtList = Object.values(data) as IDistrict[];
                    setDistricts(districtList);
                })
                .catch((err) => {
                    console.error("Error loading districts:", err);
                    setDistricts([]);
                });
        } else {
            setDistricts([]);
        }
    }, [cityCode]);

    return (
        <Autocomplete
            disablePortal
            size="small"
            id="company-district-autocomplete"
            options={districts}
            getOptionLabel={(option) => option.name} // Display the 'name' from district data
            onChange={(_, value: IDistrict | null) =>
                setDistrict(value || null)
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label={district ? "" : "Select District"}
                    InputLabelProps={{ shrink: false }}
                />
            )}
            disabled={!cityCode} // Disable if cityCode is null
        />
    );
};

export default CompanyDistrictAutocomplete;
