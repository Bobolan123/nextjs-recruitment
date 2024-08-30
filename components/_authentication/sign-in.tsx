"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState } from "react";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { signIn } from "next-auth/react";
import { customSignin } from "@/utils/auth/actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import ResendOtpModel from "./resendOtp.model";
import ForgotPasswordModel from "./forgotPassword.model";

interface ISignInBoxProps {
    lngObj: {
        email: string;
        password: string;
        forgot_password: string;
        sign_in_with_email: string;
        do_not_have_account: string;
        sign_up_now: string;
    };
}
const SignInBox = (props: ISignInBoxProps) => {
    const { lngObj } = props;

    const [showPassword, setShowPassword] = useState(false);
    const [isOpenModelResendOtp, setIsOpenModelResendOtp] = useState(false);
    const [isOpenModelForgotPassword, setIsOpenModelForgotPassword] =
        useState(false);
    const [emailModel, setEmailModel] = useState("");

    const handleCloseModelResendOtp = () => setIsOpenModelResendOtp(false);
    const handleCloseModelForgotPassword = () =>
        setIsOpenModelForgotPassword(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get("email")?.toString();
        const password = data.get("password")?.toString();

        if (email && password) {
            // Regular expression to validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                toast.error("Invalid email format");
                return;
            }
            const res = await customSignin(email, password);
            if (res?.error && res.code === 1) {
                //invalid email password
                toast.error(res.error);
            } else if (res?.error && res.code === 2) {
                //inverified account
                setEmailModel(email);
                setIsOpenModelResendOtp(true);
            } else {
                // Handle successful sign-in here
                router.push("/");
            }
        } else {
            toast.error("Email or password is missing");
        }
    };

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

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    color="anger"
                >
                    {lngObj.sign_in_with_email}
                </Button>
                <Grid container>
                    <Grid item xs>
                        <button
                            type="button"
                            onClick={() => setIsOpenModelForgotPassword(true)}
                        >
                            <Typography
                                variant="subtitle2"
                                color="#1976D2"
                                sx={{ cursor: "pointer" }}
                            >
                                {lngObj.forgot_password}
                            </Typography>
                        </button>
                    </Grid>
                    <Grid item>
                        <span className="mr-1">
                            {" "}
                            {lngObj.do_not_have_account}
                        </span>

                        <Link href="/sign_up" variant="body2">
                            {lngObj.sign_up_now}
                        </Link>
                    </Grid>
                </Grid>
                <ResendOtpModel
                    isOpenModelResendOtp={isOpenModelResendOtp}
                    handleCloseModelResendOtp={handleCloseModelResendOtp}
                    email={emailModel}
                />
                <ForgotPasswordModel
                    isOpenModelForgotPassword={isOpenModelForgotPassword}
                    handleCloseModelForgotPassword={
                        handleCloseModelForgotPassword
                    }
                />
            </Box>
        </Box>
    );
};

export default SignInBox;
