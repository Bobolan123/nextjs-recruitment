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
    openModel:boolean
    email:string
    id:number
}
export default function ResendOtpModel(props: any) {
    const [step, setStep] = React.useState(0);
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);

    const handleResendOtp = async () => {
        setStep(1);
        // const res = sendRequest({})
    };
    const handleVerify = async () => {
        setStep(2);
        // const res = sendRequest({})
    };
    const handleDone = async () => {
        setOpen(false);
    };
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
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
                                    size="small"
                                    disabled
                                    id="outlined-disabled"
                                    label="Email"
                                    defaultValue="bobolan@gmail.com"
                                />
                                <Button
                                    variant="contained"
                                    onClick={() => handleResendOtp()}
                                >
                                    Resend OTP
                                </Button>
                            </>
                        )}
                        {step === 1 && (
                            <>
                                <Typography>Verify your account!</Typography>
                                <TextField
                                    size="small"
                                    id="verify"
                                    label="OTP"
                                    defaultValue=""
                                />
                                <Button
                                    variant="contained"
                                    onClick={() => handleVerify()}
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
