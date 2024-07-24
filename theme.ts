"use client";
import { Roboto } from "next/font/google";
import { createTheme, PaletteColorOptions } from "@mui/material/styles";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

declare module "@mui/material/styles" {
    interface CustomPalette {
        anger: PaletteColorOptions;
        apple: PaletteColorOptions;
        steelBlue: PaletteColorOptions;
        violet: PaletteColorOptions;
    }
    interface Palette extends CustomPalette {}
    interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        anger: true;
        apple: true;
        steelBlue: true;
        violet: true;
    }
}
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: any) =>
    augmentColor({ color: { main: mainColor } });
const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    palette: {
        anger: createColor("#ed1b2f"),
        apple: createColor("#5DBA40"),
        steelBlue: createColor("#5C76B7"),
        violet: createColor("#BC00A3"),
    },
});

export default theme;
