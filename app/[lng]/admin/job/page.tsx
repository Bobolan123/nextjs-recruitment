import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import RoleTable from "@/components/_admin/role/roleTable";
import {
  Button,
  Container,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import JobTable from "@/components/_admin/job/JobTable";
import { IAllJob } from "@/type";
import Link from "next/link";

export default async function Job() {
  const fetchJobs = await fetch(`${process.env.API}/job/readAllJob/`, {
    method: "GET",
    next: { tags: ["jobs"] },
    cache: "no-store",
  });
  let jobs: IAllJob = await fetchJobs.json();
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
              label="job name"
              variant="outlined"
            />
            Salary:{" "}
            <TextField
              className="ml-3"
              size="small"
              id="outlined-basic"
              label="salary"
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
                List of Jobs
              </Typography>
              <Link href={"job/upsert"}>
                <Button variant="contained" color="primary">
                  Create
                </Button>
              </Link>
            </div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name:</TableCell>
                    <TableCell>CreatedAt</TableCell>
                    <TableCell>UpdatedAt</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <JobTable jobs={jobs.data} />
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
