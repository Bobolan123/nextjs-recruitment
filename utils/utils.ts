"use server";

import { cookies } from "next/headers";

const getJwt = () => {
    console.log(123);
    const cookieStore = cookies();
    const access_token = cookieStore.get("access_token");
    console.log(access_token);
    if (access_token) {
        return access_token;
    } else {
        return null;
    }
};

const endcodeJWT = async () => {
    const cookieStore = cookies();
    const jwt = cookieStore.get("jwt");
    const res = await fetch(`${process.env.API}/auth/profile/`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    });
    const user = await res.json();
    return user?.data;
};

export {getJwt, endcodeJWT}