import { useTranslation } from "@/app/i18n";
import ResponsiveAppBarClient from "./navbar-client";

interface INavbarServerProps{
    lng:string
}

export default async function NavbarServer(props: INavbarServerProps) {
    const { t } = await useTranslation(props.lng, 'navbar');
    console.log(t);
    return (
        <>
            <ResponsiveAppBarClient />
        </>
    );
}
