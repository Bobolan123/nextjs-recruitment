import CreateCompany from "@/components/_admin/company/create/createCompany";
import { fetchSkills } from "@/services/api.service";

// const CreateCompany = dynamic(() => import('@/components/_admin/company/create/createCompany'), { ssr: false });

const CreateCompanyMain = async () => {

    const resJob = await fetchSkills()
    const skills = resJob?.data ?? [];
    
    return (
        <>
            <CreateCompany skills={skills}/>
        </>
    );
};

export default CreateCompanyMain;
