"use server";

import { revalidateTag } from "next/cache";
import { IAllCompany, IReadPermission, IReadSkills, IApi } from "@/type";
import { getJwt } from "@/utils/utils";

export async function fetchAllApi() {
  const fetchAllPermission = await fetch(`${process.env.API}/api/read`, {
    method: "GET",
    next: { tags: ["apis"] },
    cache: "no-store",
  });
  let fetchPermission: any = await fetchAllPermission.json();
  const apis = fetchPermission.data;
  return apis;
}

export async function fetchCreateApi(data: any) {
  const jwt = await getJwt();
  const res = await fetch(`${process.env.API}/api/create`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidateTag("apis");
  const newApi = await res.json();
  return newApi;
}

export async function fetchUpdateApi(data: any, id: any) {
  const jwt = await getJwt();
  const res = await fetch(`http://localhost:3001/api/api/update/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    method: "PATCH",
    body: JSON.stringify(data),
  });

  revalidateTag("apis");
  const newApi = await res.json();
  return newApi;
}

export const deleteApi = async (id: number) => {
  const jwt = await getJwt();
  await fetch(`http://localhost:3001/api/api/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  revalidateTag("apis");
};

export const fetchApiById = async (id: number) => {
  const data = await fetch(`http://localhost:3001/api/api/read/${id}`, {
    method: "GET",
  });
  const api = await data.json();

  return api.data;
};
