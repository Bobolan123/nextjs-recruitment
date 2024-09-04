import { IJob } from "@/types/jobs/jobs";

export interface ICompany {
    id: number;
    name?: string; // The "nullable: true" in TypeORM is equivalent to optional in TypeScript
    description?: string;
    logo?: string;
    country?: string;
    company_type?: string;
    jobs: IJob[];
    reviews: Review[];
    locations: ILocation[];
    skills: Skill[];
    created_at: Date;
    updated_at: Date;
}

export interface ILocation {
    id: number;
    address: string;
    address_city: string;
    address1: string;
    address_city1: string;
    address2: string;
    address_city2: string;
    address3: string;
    address_city3: string;
    company: ICompany;
}
