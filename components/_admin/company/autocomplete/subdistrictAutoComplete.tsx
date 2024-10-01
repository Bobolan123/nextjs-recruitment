import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { ISubDistrict } from "@/types/locations/vn_location_json";

interface ISubDistrictAutocompleteProps {
    setSubdistrict: (value: ISubDistrict | null) => void;
    districtCode: string | null;
    subdistrict: ISubDistrict | null;
}

const CompanySubdistrictAutocomplete = (
    props: ISubDistrictAutocompleteProps
) => {
    const { setSubdistrict, districtCode, subdistrict } = props;
    const [districts, setSubdistricts] = useState<ISubDistrict[]>([]);

    useEffect(() => {
        if (districtCode) {
            import(`@/vn_location/xa-phuong/${districtCode}.json`)
                .then((data) => {
                    const districtList = Object.values(data) as ISubDistrict[];
                    setSubdistricts(districtList);
                })
                .catch((err) => {
                    console.error("Error loading Subdistrict:", err);
                    setSubdistricts([]);
                });
        } else {
            setSubdistricts([]);
        }
    }, [districtCode]);

    return (
        <Autocomplete
            disablePortal
            size="small"
            id="subdistrict-autocomplete"
            options={districts}
            getOptionLabel={(option) => option.name} // Display the 'name' from district data
            onChange={(_, value: ISubDistrict | null) =>
                setSubdistrict(value || null)
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label={subdistrict ? "" : "Select Subdistrict"}
                    InputLabelProps={{ shrink: false }}
                />
            )}
            disabled={!districtCode} // Disable if districtCode is null
        />
    );
};

export default CompanySubdistrictAutocomplete;
