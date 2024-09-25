"use server";

import { revalidateTag } from "next/cache";
import { IAllCompany, IAllJob, IReadSkills, IUpdateJob } from "@/type";
import { getJwt } from "@/utils/utils";

export async function fetchAllSkill() {
  const fetchAllSkills = await fetch(`${process.env.API}/skills/read`, {
    method: "GET",
    next: { tags: ["skills"] },
    cache: "force-cache",
  });
  let skills: IReadSkills = await fetchAllSkills.json();
  return skills.data;
}

export async function fetchAllCompanies() {
  const fetchAllCompanies = await fetch(
    `${process.env.API}/company/readCompanies`,
    {
      method: "GET",
      next: { tags: ["list-companies"] },
    }
  );
  let fetchCompanies: IAllCompany = await fetchAllCompanies.json();
  const companies = fetchCompanies.data;
  return companies;
}

export async function fetchCreateJob(data: any) {
  const jwt = await getJwt();
  const res = await fetch(`${process.env.API}/job/create`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidateTag("skills");
  const newJob: IAllJob = await res.json();
  return newJob.data;
}

export async function fetchUpdateJob(data: any, id: any) {
  const jwt = await getJwt();
  const res = await fetch(`${process.env.API}/job/update/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    method: "PATCH",
    body: JSON.stringify(data),
  });

  revalidateTag("jobId");
  const newJob: IUpdateJob = await res.json();
  return newJob;
}

export const deleteJob = async (id: number) => {
  const jwt = await getJwt();
  await fetch(`http://localhost:3001/api/job/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  revalidateTag("jobs");
};

export const fetchJobById = async (id: number) => {
  const data = await fetch(`http://localhost:3001/api/job/read/${id}`, {
    method: "GET",
  });
  const job = await data.json();

  return job.data;
};
