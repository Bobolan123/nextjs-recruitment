"use client";

import React, { useEffect, useState } from "react";
import { Modal, Select } from "antd";
import "react-quill/dist/quill.snow.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { IResume } from "@/type";
import { fetchUpdateResume } from "./actions/resumeServerAction";
import { toast } from "react-toastify";

interface IModelResumeProps {
  resume: IResume;
}

const ResumeModel: React.FC<IModelResumeProps> = (props: IModelResumeProps) => {
  const [resume, setResume] = useState(props.resume);
  const [status, setStatus] = useState("");

  const [isOpenResumeModel, setIsOpenResumeModel] = useState(false);

  const handleResumeModel = async () => {
    setIsOpenResumeModel(!isOpenResumeModel);
  };

  const handleOk = async () => {
    const res = await fetchUpdateResume({ status }, props.resume.id);
    if (res.statusCode === 200) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    handleResumeModel();
  };
  const handleChangeStatus = (value: string) => {
    setStatus(value);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleResumeModel}>
        Add
      </Button>
      <Modal
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
        title="Resume Information"
        centered
        okText="Change Status"
        open={isOpenResumeModel}
        onOk={() => handleOk()}
        onCancel={() => handleResumeModel()}
        style={{ maxWidth: "calc(100% - 320px)", marginLeft: "160px" }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 50 }} aria-label="simple table">
            <TableBody>
              <TableRow key="email" className="bg-slate-200">
                <TableCell component="th" scope="row">
                  Email
                </TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
              <TableRow
                key="email"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {resume.user.email}
                </TableCell>
                <TableCell align="center">
                  <Select
                    defaultValue={resume.status}
                    onChange={handleChangeStatus}
                    options={[
                      { value: "pending", label: "PENDING" },
                      { value: "reviewing", label: "REVIEWING" },
                      { value: "approved", label: "APPROVED" },
                      { value: "rejected", label: "REJECTED" },
                    ]}
                  />
                </TableCell>
              </TableRow>

              <TableRow key="email" className="bg-slate-200">
                <TableCell component="th" scope="row">
                  Job Name
                </TableCell>
                <TableCell align="center">Company Name</TableCell>
              </TableRow>
              <TableRow key="email">
                <TableCell component="th" scope="row">
                  {resume?.job?.name}
                </TableCell>
                <TableCell align="center">
                  {resume?.job?.company?.name}
                </TableCell> 
              </TableRow>
              <TableRow key="email" className="bg-slate-200">
                <TableCell component="th" scope="row">
                  Created Date
                </TableCell>
                <TableCell align="center">Updated Date</TableCell>
              </TableRow>
              <TableRow key="email">
                <TableCell component="th" scope="row">
                  {resume.created_at}
                </TableCell>
                <TableCell align="center">{resume.updated_at}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Modal>
    </div>
  );
};

export default ResumeModel;
