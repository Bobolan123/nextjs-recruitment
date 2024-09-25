import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IApi, IRole } from "@/type";
import { Button } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import DeletePermission from "./deleteRole.button";
import UpdatePermissionModel from "./updateRole.button";

interface IPermission {
  roles: IRole[] | [];
  apis: {
    module: string;
    endpoints: IApi[];
  }[];
}
export default function PermissionTable(props: IPermission) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">CreatedAt</TableCell>
            <TableCell align="left">UpdatedAt</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.roles.map((role) => (
            <TableRow
              key={role.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="role">
                {role.id}
              </TableCell>
              <TableCell align="left">{role.name}</TableCell>
              <TableCell align="left">{role.description}</TableCell>
              <TableCell align="left">{role.created_at}</TableCell>
              <TableCell align="left">{role.updated_at}</TableCell>
              <TableCell className="flex">
                <UpdatePermissionModel role={role} apis={props.apis}/>
                <DeletePermission id={+role.id} />
              </TableCell>{" "}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
