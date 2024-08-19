import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import dynamic from "next/dynamic";
import RoleTable from "@/components/_admin/role/roleTable";
import {
  fetchAllRole,
  fetchApiForRole,
} from "@/components/_admin/role/actions/roleServerAction";
import { IApi, IRole } from "@/type";

const RoleModel = dynamic(
  () => import("../../../components/_admin/role/roleModel"),
  { ssr: false }
);

export default async function Role() {
  const roles: IRole[] = await fetchAllRole();
  const apiForRole = await fetchApiForRole();
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
                List of Roles
              </Typography>
              <RoleModel apis={apiForRole} />
            </div>
            <RoleTable roles={roles} apis={apiForRole}/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
