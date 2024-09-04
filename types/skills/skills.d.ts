import { IJob } from "@/types/jobs/jobs";

export interface ISkill {
    id: number;
    name: string;
    // userSkillLevels: UserSkillLevel[];
    jobs: IJob[];
}
