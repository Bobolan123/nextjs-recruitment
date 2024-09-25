import "@/app/globals.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Navbar from "@/components/_navbar/navbar-server";

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
        <section>
            <Navbar lng={lng} />
            {children}
        </section>
    );
}
