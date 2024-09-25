import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Container, TextField } from "@mui/material";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface IJwt {
  id: number;
  email: string;
  role: string;
}
export default async function Dashboard() {


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
                Jobs for developer
              </Typography>
              <Button variant="contained">Add</Button>
            </div>
            ADMIN
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
