"use client";

import AutoCompleteCountry from "@/components/_admin/company/autocomplete/countryAutocomplete";
import CompanyTypeAutocomplete from "@/components/_admin/company/autocomplete/companyTypeAutocomplete";
import {
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    FormLabel,
    Grid,
    OutlinedInput,
    Paper,
    Typography,
} from "@mui/material";
import { useState } from "react";
import CompanyIndustryAutocomplete from "@/components/_admin/company/autocomplete/companyIndustryAutoComplete";
import CompanySizeAutocomplete from "@/components/_admin/company/autocomplete/companySizeAutocomplete";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// Dynamically import ReactQuill for client-side rendering only
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CreateCompany = () => {
    const [companyName, setCompanyName] = useState<string | null>("");
    const [briefIntroduction, setBriefIntroduction] = useState<string>("");
    const [companyType, setCompanyType] = useState<string | null>(null);
    const [companyIndustry, setCompanyIndustry] = useState<string | null>(null);
    const [companySize, setCompanySize] = useState<string | null>(null);
    const [country, setCountry] = useState<string | null>(null);
    const [description, setDescription] = useState("");

    function handleChangeQuill(
        content: any,
        delta: any,
        source: any,
        editor: any
    ) {
        setDescription(content);
    }
    const handleCreateNewCompany = () => {
        const companyData = {
            companyName,
            briefIntroduction,
            companyType,
            companyIndustry,
            companySize,
            country,
        };
        console.log("Submitted Company Data:", companyData);
        // Add further submission logic here (e.g., API call)
    };
    return (
        <>
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
                <Paper sx={{ p: "30px 30px" }}>
                    <Typography variant="h4">Create new Company</Typography>
                    <Typography variant="h5">General information</Typography>

                    <Grid container spacing={2}>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <FormLabel
                                htmlFor="company-name"
                                required
                                sx={{ fontWeight: "bold" }}
                            >
                                Name of company:
                            </FormLabel>
                            <OutlinedInput
                                id="companyName"
                                name="companyName"
                                type="name"
                                placeholder="Company name"
                                autoComplete="companyName"
                                required
                                size="small"
                                onChange={(e: any) =>
                                    setCompanyName(e.target.value)
                                } // Handle company name change
                            />
                        </Grid>

                        <Grid
                            item
                            xs={6}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <FormLabel
                                htmlFor="briefIntroductoin"
                                required
                                sx={{ fontWeight: "bold", gap: 1 }}
                            >
                                Brief introductoin
                            </FormLabel>
                            <OutlinedInput
                                id="briefIntroductoin"
                                name="briefIntroductoin"
                                type="briefIntroductoin"
                                placeholder="Brief introduction"
                                autoComplete="shipping briefIntroductoin"
                                required
                                size="small"
                                onChange={(e: any) =>
                                    setBriefIntroduction(e.target.value)
                                } // Handle introduction change
                            />
                        </Grid>
                        <Grid
                            item
                            xs={3}
                            sx={{
                                md: 6,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <FormLabel
                                htmlFor="company-type"
                                required
                                sx={{ fontWeight: "bold" }}
                            >
                                Company type
                            </FormLabel>
                            <CompanyTypeAutocomplete
                                setCompanyType={setCompanyType}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={3}
                            sx={{
                                md: 6,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <FormLabel
                                htmlFor="company-type"
                                required
                                sx={{ fontWeight: "bold" }}
                            >
                                Company industry
                            </FormLabel>
                            <CompanyIndustryAutocomplete
                                setCompanyIndustry={setCompanyIndustry}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={3}
                            sx={{
                                md: 6,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <FormLabel
                                htmlFor="company-size"
                                required
                                sx={{ fontWeight: "bold" }}
                            >
                                Company size
                            </FormLabel>
                            <CompanySizeAutocomplete
                                setCompanySize={setCompanySize}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={3}
                            sx={{
                                md: 6,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <FormLabel
                                htmlFor="country"
                                required
                                sx={{ fontWeight: "bold" }}
                            >
                                Country
                            </FormLabel>
                            <AutoCompleteCountry setCountry={setCountry} />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                md: 6,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <FormLabel
                                htmlFor="description"
                                required
                                sx={{ fontWeight: "bold" }}
                            >
                                Description
                            </FormLabel>
                            <ReactQuill
                                value={description}
                                onChange={handleChangeQuill}
                                style={{ height: 100, marginBottom: 30 }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        sx={{ m: "auto" }}
                        onClick={handleCreateNewCompany}
                    >
                        Submit
                    </Button>
                </Paper>
            </Container>
        </>
    );
};

export default CreateCompany;
