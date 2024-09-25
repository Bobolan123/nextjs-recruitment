"use client";

import { TablePagination } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

interface IPaginationCompanyTableProps {
    companyLength: number;
    page: number;
    limit: number;
}
const PaginationCompanyTable = (props: IPaginationCompanyTableProps) => {
    const { companyLength, page, limit } = props;
    const router = useRouter();
    const pathname = usePathname();
    const handleChangePage = (event: unknown, newPage: number) => {
        router.push(`${process.env.NEXT_PUBLIC_SERVER_CLIENT}${pathname}?page=${newPage}`)
                
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        router.push(`${process.env.NEXT_PUBLIC_SERVER_CLIENT}${pathname}?limit=${+event.target.value}`)

    };
    return (
        <>
            <TablePagination
                component="div"
                count={companyLength}
                rowsPerPage={limit}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    );
};

export default PaginationCompanyTable;
