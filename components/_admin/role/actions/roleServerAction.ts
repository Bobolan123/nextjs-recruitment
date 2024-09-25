"use server";

import { revalidateTag } from "next/cache";
import { IAllCompany, IReadAllRole, IReadSkills, IRole } from "@/type";
import { getJwt } from "@/utils/utils";

export async function fetchAllRole() {
  const fetchAllRole = await fetch(`${process.env.API}/role/read`, {
    method: "GET",
    next: { tags: ["roles"] },
    cache: "no-store",
  });
  let fetchRole: any = await fetchAllRole.json();
  const roles = fetchRole.data;
  return roles;
}

export async function fetchCreateRole(data: any) {
  const jwt = await getJwt();
  const res = await fetch(`${process.env.API}/role/create`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidateTag("roles");
  const newRole = await res.json();
  return newRole;
}

export async function fetchUpdateRole(data: any, id: any) {
  const jwt = await getJwt();

  const res = await fetch(`http://localhost:3001/api/role/update/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    method: "PATCH",
    body: JSON.stringify(data),
  });

  revalidateTag("roles");
  const newRole = await res.json();
  return newRole;
}

export const deleteRole = async (id: number) => {
  const jwt = await getJwt();

  await fetch(`http://localhost:3001/api/role/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  revalidateTag("roles");
};

export const fetchRoleById = async (id: number) => {
  const data = await fetch(`http://localhost:3001/api/role/read/${id}`, {
    method: "GET",
  });
  const role = await data.json();

  return role.data;
};

export const fetchApiForRole = async () => {
  const jwt = await getJwt();

  const data = await fetch(`http://localhost:3001/api/api/readForRole`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  const apis = await data.json();
  console.log(apis)
  return apis;
};
