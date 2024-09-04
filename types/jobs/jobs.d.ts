import { ICompany } from "@/types/companies/companies";
import { IResume } from "@/types/resumes/resumes";
import { ISkill } from "@/types/skills/skills";

export interface IJob {
    id: number;
    name: string;
    location?: string; // nullable: true fields are optional in TypeScript
    level?: string;
    description?: any; // since it's a JSON column, it's typed as `any`
    count?: number;
    status?: boolean;
    salary: number;
    startDate?: Date;
    endDate?: Date;
    resumes: IResume[];
    company: ICompany;
    postingType: PostingType;
    skills: ISkill[];
    created_at: Date;
    updated_at: Date;
}