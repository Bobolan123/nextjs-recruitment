import { auth } from "@/auth";
import { ICompany } from "@/types/companies/companies";
import { sendRequest } from "@/utils/api";

interface IData {
    companies: ICompany[];
    totalCompanies: number;
    totalPages: number;
}
//Fetch companies
export const fetchCompanies = async (
    page: number,
    limit: number,
    sort?: any
) => {
    const session = await auth()
    const res = await sendRequest<IBackendRes<IData>>({
        url: `${process.env.NEXT_PUBLIC_SERVER}/company`,
        method: "GET",
        queryParams: {
            page,
            limit,
            sort
        },
        headers:{
            Authorization: `Bearer ${session?.accessToken}`
        },
        nextOption:{
            next:{tags:['list-companies']}
        }
    });
    return res;
};


//Fetch companies
export const fetchJobs = async (
    page: number,
    limit: number,
    sort?: any
) => {
    const session = await auth()
    const res = await sendRequest<IBackendRes<IData>>({
        url: `${process.env.NEXT_PUBLIC_SERVER}/job`,
        method: "GET",
        queryParams: {
            page,
            limit,
        },
        headers:{
            Authorization: `Bearer ${session?.accessToken}`
        },
        nextOption:{
            next:{tags:['list-companies']}
        }
    });
    return res;
};
