"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IResume } from "@/type";
import ResumeModel from "./resumeModel";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { deleteResume } from "./actions/resumeServerAction";
import { MdDeleteOutline } from "react-icons/md";

interface IResumeProps {
  resumes: IResume[];
}

export default function ResumeTable(props: IResumeProps) {
  const handleOpenPdf = (cvFile: string) => {
    if (cvFile) {
      window.open(`http://localhost:8080/asset/resumes/${cvFile}`, "_blank");
    } else {
      toast.error("Not found pdf CV");
    }
  };

  const handleDelete = async (id: number) => {
    const res = await deleteResume(id);
    if (res.statusCode === 200) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Job</TableCell>
            <TableCell align="left">Company</TableCell>
            <TableCell align="left">CreatedAt</TableCell>
            <TableCell align="left">UpdatedAt</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.resumes.map((resume) => (
            <TableRow
              key={resume.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="resume">
                <Button
                  onClick={() => {
                    handleOpenPdf(resume.cvFile);
                  }}
                >
                  {resume.id}
                </Button>
              </TableCell>
              <TableCell align="left">{resume.status}</TableCell>
              <TableCell align="left">{resume?.job?.name}</TableCell>
              <TableCell align="left">{resume?.job?.company?.name}</TableCell>
              <TableCell align="left">{resume.created_at}</TableCell>
              <TableCell align="left">{resume.updated_at}</TableCell>
              <TableCell align="left">
                <ResumeModel resume={resume} />
              </TableCell>
              <TableCell align="left">
                <Button onClick={() => handleDelete(resume?.id)}>
                  <MdDeleteOutline color="red" size={20} />{" "}
                </Button>{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
