import { auth } from "@/auth";
import { IJob } from "@/types/jobs/jobs";
import { sendRequest } from "@/utils/api";

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
