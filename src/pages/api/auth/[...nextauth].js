import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "0bec6da3f98ced68b7d8",//process.env.GITHUB_ID,
      clientSecret: "5883e4326a93e5d6cf0f88a7a3c9b01f3d67f273"//process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)