"use client";

import { Roboto, Lexend } from "next/font/google";
import { createTheme, PaletteColorOptions } from "@mui/material/styles";

const lexend = Lexend({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

declare module "@mui/material/styles" {
    interface CustomPalette {
        anger: PaletteColorOptions;
        textDarkGray: string;
    }
    interface Palette extends CustomPalette {}
    interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        anger: true;
        textDarkGray: true;
    }
}
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: any) =>
    augmentColor({ color: { main: mainColor } });
const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& label": {
                        color: "#a6a6a6",
                    },
                    "& label.Mui-focused": {
                        color: "#353527",
                    },
                    "& .MuiInput-underline:after": {
                        borderBottomColor: "1px solid #dedede",
                    },
                    "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                            borderColor: "1px solid #dedede",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#353527",
                        },
                    },
                },
            },
        },
    },
    typography: {
        fontFamily: lexend.style.fontFamily,
        button: {
            textTransform: "none", // unstyle button text
        },
        allVariants: {
            color: "black",
        },
    },
    palette: {
        anger: createColor("#ed1b2f"), //button color
        textDarkGray: "#a6a6a6", //text color
    },
});

export default theme;
