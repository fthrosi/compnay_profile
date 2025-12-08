import NextAuth, {DefaultSession} from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      role: number;
    } & DefaultSession["user"];
  }
  interface User {
    id: number;
    role: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    role: number;
  }
}