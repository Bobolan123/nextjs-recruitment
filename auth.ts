import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { InvalidActive, InvalidEmailPasswordError } from "./utils/auth/error";
import { IUser } from "./types/next-auth";
import { fetchSignIn } from "./services/auth.service";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                let user = null;
                const res = await fetchSignIn(
                    credentials.email as string,
                    credentials.password as string
                );
                if (res.statusCode === 201) {
                    user = res.data;
                    return user;
                }
                if (+res.statusCode === 401) {
                    throw new InvalidEmailPasswordError();
                } else if (res.statusCode === 400) {
                    throw new InvalidActive();
                } else {
                    throw new Error("User not found.");
                }
                return user;
            },
        }),
    ],
    pages: {
        signIn: "/vi/sign_in",
    },
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                // User is available during sign-in
                token.user = user as IUser;
            }
            return token;
        },
        session({ session, token }) {
            (session.user as IUser) = token.user;
            return session;
        },
        authorized: async ({ auth }) => {
            // Logged in users are authenticated, otherwise redirect to login page
            return !!auth;
        },
    },
});
