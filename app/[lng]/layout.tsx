import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { dir } from "i18next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Navbar from "@/components/_navbar/navbar-server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Recruitment",
    description: "Recruitment website",
};

const languages = ["en", "vi"];
export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
    children,
    params: { lng },
}: Readonly<{
    children: React.ReactNode;
    params: {
        lng: string;
    };
}>) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <body className={inter.className}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <AntdRegistry>
                            <Navbar lng ={lng}/>
                            {children}
                        </AntdRegistry>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
