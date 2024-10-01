import { auth } from "@/auth";
import { ICompany } from "@/types/companies/companies";
import { IJob } from "@/types/jobs/jobs";
import { ISkill } from "@/types/skills/skills";
import { sendRequest } from "@/utils/api";

interface IDataCompany {
    companies: ICompany[];
    totalCompanies: number;
    totalPages: number;
}
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

interface IDataJobs {
    jobs: IJob[];
    totalJobs: number;
    totalPages: number;
}
//Fetch jobs
export const fetchJobs = async (
    page: number,
    limit: number,
    qs?: { sort: string }
) => {
    const session = await auth();
    const res = await sendRequest<IBackendRes<IDataJobs>>({
        url: `${process.env.NEXT_PUBLIC_SERVER}/job?page=${
            page || 1
        }&limit=${limit}&sort=${qs?.sort}`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${session?.accessToken}`,
        },
        nextOption: {
            next: { tags: ["jobs"] },
        },
    });
    return res;
};

//Fetch skills
export const fetchSkills = async (
    page?: number,
    limit?: number,
    qs?: { sort: string }
) => {
    const session = await auth();
    const res = await sendRequest<IBackendRes<ISkill[]>>({
        url: `${process.env.NEXT_PUBLIC_SERVER}/skills?page=${
            page 
        }&limit=${limit}&sort=${qs?.sort}`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${session?.accessToken}`,
        },
        nextOption: {
            next: { tags: ["skills"] },
        },
    });
    return res;
};
