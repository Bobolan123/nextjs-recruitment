import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Container } from "@mui/material";
import IdFormUpsert from "@/components/_admin/job/IdFormUpsert";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { IJob } from "@/type";
import { fetchAllCompanies, fetchAllSkill } from "@/components/_admin/job/actions/jobServerAction";

export default async function IdUpsertJob(props:any) {
  const {params} = props
  const fetchJob = await fetch(`http://localhost:3001/api/job/readJob/${params.id}`, {
    next: { tags: ["jobId"] },
    method:"GET"
  });
  const job: IJob = await fetchJob.json();
  const skills = await fetchAllSkill()
  const companies = await fetchAllCompanies()

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <div className="flex justify-between mb-5">
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Upsert Job
              </Typography>
              <Link href="/admin/job">
                <Button variant="text" color="primary">
                  <FaArrowLeft />
                </Button>
              </Link>
            </div>

            <IdFormUpsert job = {job} skills={skills} companies = {companies} id ={params.id}/>

          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
