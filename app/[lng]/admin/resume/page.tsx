import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Container, TextField } from "@mui/material";
import dynamic from "next/dynamic";
import ResumeTable from "@/components/_admin/resume/resumeTable";
import { fetchAllResumes } from "@/components/_admin/resume/actions/resumeServerAction";
import { IResume } from "@/type";

const ResumeModel = dynamic(
  () => import("../../../components/_admin/resume/resumeModel"),
  { ssr: false }
);  

export default async function Resume() {
  const resumes:IResume[] = await fetchAllResumes()
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12}>
          <Paper
            sx={{
              gap: 1,
              p: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            Name:{" "}
            <TextField
              className="ml-3 mr-5"
              size="small"
              id="outlined-basic"
              label="company name"
              variant="outlined"
            />
            Address:{" "}
            <TextField
              className="ml-3"
              size="small"
              id="outlined-basic"
              label="location"
              variant="outlined"
            />
            <Button variant="contained" size="small">
              Search
            </Button>
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <div className="flex justify-between mb-5">
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                List of Resumes
              </Typography>
            </div> 
            <ResumeTable resumes={resumes}/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
