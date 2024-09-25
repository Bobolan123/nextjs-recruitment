import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IApi } from "@/type";
import { Button } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import DeletePermission from "./deletePermission.button";
import UpdatePermissionModel from "./updatePermission.button";

interface IPermission {
  apis: IApi[] | [];
}
export default function PermissionTable(props: IPermission) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Endpoint</TableCell>
            <TableCell align="left">Method</TableCell>
            <TableCell align="left">Module</TableCell>
            <TableCell align="left">CreatedAt</TableCell>
            <TableCell align="left">UpdatedAt</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.apis.map((api) => (
            <TableRow
              key={api.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="api">
                {api.id}
              </TableCell>
              <TableCell align="left">{api.description}</TableCell>
              <TableCell align="left">{api.endpoint}</TableCell>
              <TableCell align="left">{api.method}</TableCell>
              <TableCell align="left">{api.module}</TableCell>
              <TableCell align="left">{api.created_at}</TableCell>
              <TableCell align="left">{api.updated_at}</TableCell>
              <TableCell className="flex">
                <UpdatePermissionModel api= {api}/>
                <DeletePermission id={+api.id} />
              </TableCell>{" "}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
