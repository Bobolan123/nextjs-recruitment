'use client'

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface INavbarRightProps {
    settings: string[],
    signIn: string,
    signUp:string
}
const NavbarRight = (props: INavbarRightProps) => {
    const {settings, signIn,signUp} = props
    const pathname = usePathname();
    const params = useParams<{ lng: string }>();

    const router = useRouter();

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(
        null
    );

   
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleChangeLanguage = (lngButValue: string) => {
        if (lngButValue === params.lng) {
            return;
        } else {
            const newHref = pathname.replace(params.lng, lngButValue);
            router.push(newHref);
        }
    };
    return (
        <>
            <Box sx={{ flexGrow: 0 }}>
                <div className="flex space-x-8">
                    {!pathname.includes("sign_in") ? (
                        <Link
                            href="sign_in"
                            className="text-white text-base flex justify-center items-center"
                        >
                            {signIn}/{signUp}
                        </Link>
                    ) : null}

                    <p className="text-white text-base flex justify-center items-center space-x-2">
                        <button
                            value="en"
                            onClick={(event) => {
                                const value = (
                                    event.target as HTMLButtonElement
                                ).value;
                                handleChangeLanguage(value);
                            }}
                            className={`${
                                params.lng !== "en" ? "text-gray-400" : ""
                            }`}
                        >
                            EN
                        </button>
                        <span>|</span>
                        <button
                            value="vi"
                            onClick={(event) => {
                                const value = (
                                    event.target as HTMLButtonElement
                                ).value;
                                handleChangeLanguage(value);
                            }}
                            className={`${
                                params.lng !== "vi" ? "text-gray-400" : ""
                            }`}
                        >
                            VI
                        </button>
                    </p>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <p className="text-white text-lg flex justify-center items-center">
                                Profile
                            </p>
                        </IconButton>
                    </Tooltip>
                </div>

                <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">
                                {setting}
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </>
    );
};

export default NavbarRight;
