import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "NotARealClientId",
      clientSecret: "NotARealClientSecret",
    }),
    GithubProvider({
      clientId: "NotARealClientId",
      clientSecret: "NotARealClientSecret",
    }),
    CredentialsProvider({
      name: "Login with email",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "sv8112004@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        //Request sent to DB for checking the user credentials for Authentication

        const user = {
          name: "Shubham Vishwakarma",
          id: "1",
          username: "sv8112004@gmail.com",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});
export { handler as GET, handler as POST };
