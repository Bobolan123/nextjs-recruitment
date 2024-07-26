"use client";

import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
];

const SearchText = (props: any) => {
    return (
        <>
            <div className="flex ">
                <Autocomplete
                    className="flex-auto"
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{
                        borderRadius: "5px",
                        backgroundColor: "white", // border: "1px solid blue",
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            // border: "none",
                            boxShadow: "0px 0px 2px 2px #ffdfdf",
                            border: "1px solid #414042",
                        },
                    }}
                    renderInput={(params) => (
                        <TextField {...params} label="" placeholder="Search" />
                    )}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="anger"
                    sx={{
                        paddingLeft: 10,
                        paddingRight: 10,
                    }}
                >
                    Search
                </Button>
            </div>
        </>
    );
};

export default SearchText;
