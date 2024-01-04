import NextAuth from "next-auth";
import Googleprovider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    Googleprovider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "",
    }),

    CredentialsProvider({
      name: 'Login',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@mail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        const res = await fetch("https://marketplace-auth.onrender.com/v1/auth/sign-in", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const customUser = await res.json()
        if (res.ok && customUser) {
          const user = {
            name: customUser.result.account.userName,
            email: customUser.result.email,
            image: null,
            id: customUser.result.account.id
          }

          return user
        }
        return null
      }
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
});

export { handler as GET, handler as POST };
