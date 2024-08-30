"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { TextField } from "@mui/material";
import { sendRequest } from "@/utils/api";
import { fetchResendOtp, fetchVerifyOTP } from "@/services/auth.service";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const steps = ["Login", "Verify", "Done"];

interface IResendOtpModelProps {
    handleCloseModel: any;
    isOpenModel: boolean;
    email: string;
    id: number;
}
export default function ResendOtpModel(props: any) {
    const { isOpenModel, handleCloseModel, email } = props;
    const [step, setStep] = React.useState<number>(0);
    const [userId, setUserId] = React.useState<number>(0);
    const [otp, setOtp] = React.useState<string>("");

    const handleResendOtp = async (email: string) => {
        const res = await fetchResendOtp(email);
        if (res?.data) {
            setStep(1);
            setUserId(res?.data?.id);
        }
    };
    const handleVerify = async (id: number, otp: number) => {
        const res = await fetchVerifyOTP(id, otp);
        if (res?.data) {
            setStep(2);
        }
    };
    const handleDone = async () => {
        handleCloseModel();
    };
    return (
        <div>
            <Modal
                open={isOpenModel}
                onClose={handleCloseModel}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stepper activeStep={step} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <Box
                        mt={3}
                        gap={2}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {step === 0 && (
                            <>
                                <Typography>
                                    Your account aren't verified
                                </Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    disabled
                                    id="email"
                                    name="email"
                                    label="Email"
                                    defaultValue={email}
                                />
                                <Button
                                    variant="contained"
                                    onClick={() => handleResendOtp(email)}
                                >
                                    Resend OTP
                                </Button>
                            </>
                        )}
                        {step === 1 && (
                            <>
                                <Typography>Verify your account!</Typography>
                                <TextField
                                    name="otp"
                                    size="small"
                                    id="otp"
                                    label="OTP"
                                    defaultValue=""
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                                <Button
                                    variant="contained"
                                    onClick={() => handleVerify(userId, +otp)}
                                >
                                    Verify
                                </Button>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <Typography>
                                    Succesfully. Please sign up
                                </Typography>
                                <Button
                                    variant="contained"
                                    onClick={() => handleDone()}
                                >
                                    Done
                                </Button>
                            </>
                        )}
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
