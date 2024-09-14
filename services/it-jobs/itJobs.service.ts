import { auth } from "@/auth";
import { ICompany } from "@/types/companies/companies";
import { IJob } from "@/types/jobs/jobs";
import { sendRequest } from "@/utils/api";

//Fetch companies
export const fetchSpotlightCompany = async () => {
    const session = await auth();
    const res = await sendRequest<IBackendRes<ICompany>>({
        url: `${process.env.NEXT_PUBLIC_SERVER}/company/spotlight`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${session?.accessToken}`,
        },
        nextOption: {
            next: { tags: ["spotlight-company"] },
        },
    });
    return res;
};
