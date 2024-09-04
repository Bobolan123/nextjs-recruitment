import { IResume } from "@/types/resumes/resumes";

export interface IUser {
    id: number;
    name?: string; // nullable: true fields are optional in TypeScript
    email: string;
    age?: number;
    location?: string;
    isActive?: boolean;
    gender?: 'male' | 'female'; // enum type in TypeScript
    coin_balance?: number;
    role: IRole;
    resumes: IResume[];
    reviews: Review[];
    // coinTransactions: CoinTransaction[];
    // UserSkillLevels: UserSkillLevel[];
    created_at: Date;
    updated_at: Date;
}

export interface IRole {
    id: number;
    name: 'admin' | 'user' | 'hr'; // Enum values as a union type
    description: string;
    users: User[];
    apis: Api[];
    created_at: Date;
    updated_at: Date;
  }