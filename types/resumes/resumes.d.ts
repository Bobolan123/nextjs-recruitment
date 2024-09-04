import { IJob } from "@/types/jobs/jobs";
import { IUser } from "@/types/users/users";

export interface IResume {
    id: number;
    status: string;
    cvFile?: string; // nullable field, marked as optional
    user: IUser;
    job?: IJob; // job can be null due to onDelete: 'SET NULL'
    created_at: Date;
    updated_at: Date;
  }