"use client";

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
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DraftsIcon from "@mui/icons-material/Drafts";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut, useSession } from "next-auth/react";
import { handleFormatLink } from "@/utils/utils";

interface INavbarRightProps {
    settings: string[];
    signIn: string;
    signUp: string;
    session: any;
}

const iconProfile = [
    <PermIdentityIcon />,
    <WorkOutlineIcon />,
    <DraftsIcon />,
    <MailOutlineIcon />,
    <SettingsIcon />,
    <LogoutIcon />,
];
const NavbarRight = (props: INavbarRightProps) => {
    // const { data: session, status } = useSession()
    const { settings, signIn, signUp, session } = props;
    const pathname = usePathname();
    const params = useParams<{ lng: string }>();

    const router = useRouter();
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClickMenuItem = async (profileItem: string) => {
        if (profileItem === "Sign Out" || profileItem === "Đăng xuất") {
            await signOut();
        } else {
            router.push(`${handleFormatLink(profileItem)}`);
        }
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
                    {!session ? (
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
                    {session ? (
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <p className="text-white text-lg flex justify-center items-center">
                                    {session?.user?.name}
                                </p>
                            </IconButton>
                        </Tooltip>
                    ) : null}
                </div>

                {/* Menu of Profile */}
                <Menu
                    sx={{
                        mt: "45px",
                        "& .MuiMenu-paper": {
                            backgroundColor: "#121212",
                        },
                        "& .MuiMenuItem-root": {
                            color: "textDarkGray",
                        },
                        "& .MuiMenuItem-root:hover": {
                            backgroundColor: "#a6a6a6",
                            color: "white",
                        },
                    }}
                    MenuListProps={{ sx: { py: 0 } }}
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
                    {settings.map((setting, index) => (
                        <MenuItem
                            key={setting}
                            onClick={() => handleClickMenuItem(setting)}
                            sx={{ display: "flex", gap: "5px" }}
                        >
                            {iconProfile[index]} {setting}
                        </MenuItem>
                    ))}
                </Menu>
                <ToastContainer />
            </Box>
        </>
    );
};

export default NavbarRight;
