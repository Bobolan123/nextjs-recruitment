import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
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
import CompanyTable from "@/components/_admin/company/companyTable";
import AddCompanyButton from "@/components/_admin/company/addCompany.button";
import { IAllCompany } from "@/components/_company/type";

export default async function Company() {

  const fetchAllCompanies = await fetch(
    `${process.env.API}/company/readCompanies`,
    {
      method: "GET",
      next: { tags: ["list-companies"] },
    }
  );
  let fetchCompanies: IAllCompany = await fetchAllCompanies.json();
  const companies = fetchCompanies.data;

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
                List of companies
              </Typography>

              <AddCompanyButton />
            </div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>CreatedAt</TableCell>
                    <TableCell>UpdatedAt</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <CompanyTable companies={companies} />
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
