"use server";

import { revalidateTag } from "next/cache";
import { IAllCompany, IReadResumes, IReadSkills, IResume } from "@/type";
import { getJwt } from "@/utils/utils";

export async function fetchAllResumes() {
  const fetchAllResumes = await fetch(`${process.env.API}/resume/read`, {
    method: "GET",
    next: { tags: ["list-resumes"] },
    cache: "no-store",
  });
  let fetchResumes: IReadResumes = await fetchAllResumes.json();
  const companies = fetchResumes.data;
  return companies;
}

export async function fetchCreateResume(data: any) {
  const jwt = await getJwt();

  const res = await fetch(`${process.env.API}/resume/create`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidateTag("resumes");
  const newResume = await res.json();
  return newResume.data;
}

export async function fetchUpdateResume(data: any, id: any) {
  const jwt = await getJwt();

  const res = await fetch(`${process.env.API}/resume/update/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    method: "PATCH",
    body: JSON.stringify(data),
  });

  revalidateTag("resumes");
  const newResume = await res.json();
  return newResume;
}

export const deleteResume = async (id: number) => {
  const jwt = await getJwt();

  const res = await fetch(`http://localhost:3001/api/resume/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  const response = await res.json();

  revalidateTag("resumes");
  return response;
};

export const fetchResumeById = async (id: number) => {
  const data = await fetch(`http://localhost:3001/api/resume/read/${id}`, {
    method: "GET",
  });
  const resume = await data.json();

  return resume.data;
};
