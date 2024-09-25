"use client";

import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import dynamic from "next/dynamic";
import { deleteCompany } from "./actions/companyServerAction";
import { toast } from "react-toastify";
import { ICompany } from "@/types/companies/companies";
const dayjs = require("dayjs");

interface ICompanyTable {
    data: {
        companies: ICompany[];
        totalCompanies: number;
        totalPages: number;
    };
}
export default function CompanyTable(props: ICompanyTable) {
    // const UpdateCompanyButton = dynamic(
    //     () => import("./updateCompany.button"),
    //     {
    //         ssr: false,
    //     }
    // );

    const handleDeleteCompany = async (id: number) => {
        try {
            await deleteCompany(id);
            toast.success("Company deleted successfully");
        } catch (error: any) {
            toast.error("Error deleting company: " + error.message);
        }
    };

    return (
        <>
            <TableBody>
                {props.data.companies.map((company: ICompany) => (
                    <TableRow
                        key={company.id}
                        sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                        }}
                    >
                        <TableCell component="th" scope="company">
                            {company.id}
                        </TableCell>
                        <TableCell>{company.name}</TableCell>
                        <TableCell>
                            {company?.locations
                                ?.map((location, index) =>
                                    index === 0
                                        ? location.city
                                        : ` - ${location.city}`
                                )
                                .join("")}
                        </TableCell>
                        <TableCell>
                            {dayjs(company.created_at).format("DD/MM/YYYY")}
                        </TableCell>
                        <TableCell>
                            {dayjs(company.updated_at).format("DD/MM/YYYY")}
                        </TableCell>
                        <TableCell className="flex">
                            {/* <UpdateCompanyButton id={company.id} /> */}
                            <Button
                                className="m-0"
                                onClick={() => {
                                    handleDeleteCompany(company.id);
                                }}
                            >
                                <MdDeleteOutline color="red" size={20} />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </>
    );
}
