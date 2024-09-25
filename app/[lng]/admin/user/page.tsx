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
import { IAllUser } from "@/type";
import UserTable from "@/components/_admin/user/userTable";
import AddUserButton from "@/components/_admin/user/addUser.button";

export default async function User() {
  const fetchAllUsers = await fetch(
    `${process.env.API}/user/read`,
    {
      method: "GET",
      next: { tags: ["users"]},
      cache: 'no-store'
    }
  );
  let fetchUsers: IAllUser = await fetchAllUsers.json();
  const users = fetchUsers.data;
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
                List of users
              </Typography>

              <AddUserButton/>
            </div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Email:</TableCell>
                    <TableCell>Password:</TableCell>
                    <TableCell>Name:</TableCell>
                    <TableCell>Age:</TableCell>
                    <TableCell>Gender:</TableCell>
                    <TableCell>Location:</TableCell>
                    <TableCell>Role:</TableCell>
                    <TableCell>CreatedAt</TableCell>
                    <TableCell>UpdatedAt</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <UserTable users={users}/>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
