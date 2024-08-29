"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { sendRequest } from "@/utils/api";
import { fetchRegister } from "@/services/auth.service";

interface ISignUpBoxProps {
    lngObj: {
        email: string;
        password: string;
        forgot_password: string;
        sign_in_with_email: string;
        do_not_have_account: string;
        sign_up_now: string;
        already_have_account: string;
        sign_in_now: string;
        password_validate: string;
        confirm_password: string;
    };
}
const SignUpBox = (props: ISignUpBoxProps) => {
    const router = useRouter();
    const { lngObj } = props;
    const session = useSession();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const email = data.get("email");
        const password = data.get("password");
        const confirmPassword = data.get("confirmPassword");

        if (email && password && confirmPassword) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.toString())) {
                console.error("Invalid email format");
                toast.error("Invalid email format");
                return;
            }
            if (password !== confirmPassword) {
                toast.error("Password doesn't match");
                return;
            }
            const res = await fetchRegister(email.toString(), password.toString());

            if (res?.data) {
                router.push(`verify/${res.data.id}`);
            } else {
                toast.error(res?.message);
            }
        } else {
            toast.error("Email or password or confirm password is missing");
        }
    };

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowConfirmPassword = () =>
        setShowConfirmPassword(!showConfirmPassword);
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box component="form" onSubmit={handleSubmit} noValidate>
                <TextField
                    margin="normal"
                    required
                    size="small"
                    fullWidth
                    id="email"
                    label={lngObj.email}
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    size="small"
                    fullWidth
                    name="password"
                    label={lngObj.password}
                    id="password"
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                >
                                    {showPassword ? (
                                        <VisibilityIcon />
                                    ) : (
                                        <VisibilityOffIcon />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    size="small"
                    name="confirmPassword"
                    label={lngObj.confirm_password}
                    id="confirmPassword"
                    autoComplete="current-password"
                    type={showConfirmPassword ? "text" : "password"}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfirmPassword}
                                >
                                    {showConfirmPassword ? (
                                        <VisibilityIcon />
                                    ) : (
                                        <VisibilityOffIcon />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    color="anger"
                >
                    {lngObj.sign_in_with_email}
                </Button>
                <p className="text-center">
                    <span className="mr-1"> {lngObj.already_have_account}</span>

                    <Link href="/sign_in" variant="body2">
                        {lngObj.sign_in_now}
                    </Link>
                </p>
            </Box>
        </Box>
    );
};

export default SignUpBox;
