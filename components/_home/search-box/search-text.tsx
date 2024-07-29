"use client";

import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from '@mui/icons-material/Search';

const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
];

interface ISearchTextProps {
    t: {
    enter_keyword:string,
    search:string
    }
}
const SearchText = (props: ISearchTextProps) => {
    const {t} = props

    return (
        <>
            <div className="flex space-x-3">
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
                        <TextField {...params} label="" placeholder={t.enter_keyword} />
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
                    <SearchIcon/> {t.search}
                </Button>
            </div>
        </>
    );
};

export default SearchText;
