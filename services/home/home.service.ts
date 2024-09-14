import { auth } from "@/auth";
import { ICompany } from "@/types/companies/companies";
import { IJob } from "@/types/jobs/jobs";
import { sendRequest } from "@/utils/api";

interface IDataCompany {
    companies: ICompany[];
    totalCompanies: number;
    totalPages: number;
}
//Fetch companies
export const fetchCompanies = async (
    page: number,
    limit: number,
    qsObject?: {
        sort: string;
    }
) => {
    const session = await auth();
    const res = await sendRequest<IBackendRes<IDataCompany>>({
        url: `${process.env.NEXT_PUBLIC_SERVER}/company`,
        method: "GET",
        queryParams: {
            page,
            limit,
            sort: qsObject?.sort,
        },
        headers: {
            Authorization: `Bearer ${session?.accessToken}`,
        },
        nextOption: {
            next: { tags: ["list-companies"] },
        },
    });
    return res;
};

interface IDataJob {
    jobs: IJob[];
    totalJobs: number;
    totalPages: number;
}
//Fetch companies
export const fetchJobs = async (
    page: number,
    limit: number,
    qsObject?: {
        sort: string;
    }
) => {
    const session = await auth();
    const res = await sendRequest<IBackendRes<IDataJob>>({
        url: `${process.env.NEXT_PUBLIC_SERVER}/job`,
        method: "GET",
        queryParams: {
            page,
            limit,
            sort: qsObject?.sort,
        },
        headers: {
            Authorization: `Bearer ${session?.accessToken}`,
        },
        nextOption: {
            next: { tags: ["list-companies"] },
        },
    });
    return res;
};
