export interface ICompany {
    id: number;
    name: string;
    description: string;
    logo: {
        type: string;
        data: number[];
    };
    location: string;
    created_at: string;
    updated_at: string;

}

export interface IJob {
    id: number;
    name: string;
    description: string;
    skills: string;
    count: number;
    status: string;
    salary: number;
    created_at: string;
    updated_at: string;
    company: ICompany;
    level: string,
    resumes: []
    timeDifference:string
}

export interface IResume {
    id: number;
    status: string;
    created_at: string;
    updated_at: string;
    user: IUser;
    job: any;
}

export interface IRole {
    id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    apis: IApi[];
    users: IUser[];

}

export interface IApi {
    id: number;
    endpoint: string;
    description: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    age: number;
    location: string;
    gender: string;
    created_at: string;
    updated_at: string;
    resumes: IResume[];
    role: IRole | null;
}