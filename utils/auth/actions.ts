"use server";

import { signIn } from "@/auth";

export const customSignin = async (email: string, password: string) => {
    try {
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });
        return res;
    } catch (error) {
        console.log("<<error>>>>", error);
        if ((error as any).name === "InvalidEmailPasswordError") {
            return {
                error: (error as any).type,
                code: 1,
            };
        } else if ((error as any).name === "InvalidActive") {
            return {
                error: (error as any).type,
                code: 2,
            };
        } else {
            return {
                error: "Internal server error",
                code: 0,
            };
        }
    }
};
