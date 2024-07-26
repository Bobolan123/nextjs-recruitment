"use client";

import {
    SelectChangeEvent,
    FormControl,
    Select,
    MenuItem,
} from "@mui/material";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PlaceIcon from "@mui/icons-material/Place";
import { CiLocationOn } from "react-icons/ci";

const LocationSelect = (props: any) => {
    const [location, setLocation] = useState("Hanoi");

    const handleChange = (event: SelectChangeEvent) => {
        setLocation(event.target.value as string);
    };

    return (
        <>
            <FormControl fullWidth key="locationBox" className="md:col-span-3">
                <Select
                    key="locationSelect"
                    inputProps={{
                        IconComponent: () => null,
                        inputProps: { sx: { padding: "0 !important" } },
                    }}
                    fullWidth
                    sx={{
                        backgroundColor: "white",
                        boxShadow: "none",
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                            {
                                boxShadow: "0px 0px 2px 2px #ffdfdf",
                                border: "1px solid #414042",
                            },
                        "& .MuiSelect-select": {
                            paddingRight: "14px !important",
                        },
                    }}
                    notched={true}
                    value={location}
                    onChange={handleChange}
                    renderValue={(selected) => {
                        return (
                            <p
                                className={`text-lg flex justify-between items-center `}
                            >
                                <span
                                    className="flex items-center space-x-3"
                                    style={{ height: 23 }}
                                >
                                    <CiLocationOn />
                                    <span>{location}</span>
                                </span>
                                <IoIosArrowDown />
                            </p>
                        );
                    }}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                </Select>
            </FormControl>
        </>
    );
};

export default LocationSelect;
