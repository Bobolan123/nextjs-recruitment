"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { fetchVerifyOTP } from "@/services/auth.service";

interface IVerifyBoxProps {
    id: string;

    lngObj: {
        email: string;
        forgot_password: string;
        sign_in_with_email: string;
        do_not_have_account: string;
        sign_up_now: string;
    };
}
const VerifyBox = (props: IVerifyBoxProps) => {
    const { lngObj, id } = props;
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const otp = data.get("otp");
        if (otp && !Number.isNaN(otp)) {
            const res = await fetchVerifyOTP(+otp, +id);

            if (res?.statusCode === 201) {
                toast.success(res.message);
            } else {
                toast.error(res.message || "An error occurred");
            }
        } else {
            toast.error("OTP is not valid");
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
                <Typography>OTP sent to your email!</Typography>
                <TextField
                    required
                    margin="normal"
                    fullWidth
                    name="otp"
                    label="OTP"
                    id="otp"
                    autoComplete="current-otp"
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
            </Box>
        </Box>
    );
};

export default VerifyBox;
