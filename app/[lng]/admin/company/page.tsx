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
    TablePagination,
    TableRow,
    TextField,
} from "@mui/material";
import CompanyTable from "@/components/_admin/company/companyTable";
import AddCompanyButton from "@/components/_admin/company/addCompany.button";
import { sendRequest } from "@/utils/api";
import { fetchCompanies } from "@/services/api.service";
import PaginationCompanyTable from "@/components/_admin/company/paginationCompanyTable";

export default async function Company({
    searchParams,
}: {
    searchParams: { page: string | undefined; limit: string | undefined };
}) {
    const page = searchParams.page ? +searchParams.page : 1;
    const limit = searchParams.limit ? +searchParams.limit : 2;
    let companies = await fetchCompanies(page, limit, { sort: "desc" });

    return (
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
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
                    <Paper
                        sx={{ p: 2, display: "flex", flexDirection: "column" }}
                    >
                        <div className="flex justify-between mb-5">
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: "bold" }}
                            >
                                List of companies
                            </Typography>

                            <AddCompanyButton />
                        </div>
                        <TableContainer component={Paper}>
                            <Table
                                sx={{ minWidth: 650 }}
                                aria-label="simple table"
                            >
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
                                {companies && companies.data && (
                                    <CompanyTable data={companies.data} />
                                )}
                            </Table>
                        </TableContainer>

                        <PaginationCompanyTable
                            companyLength={
                                companies.data?.companies?.length as number
                            }
                            limit={limit}
                            page={page}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
