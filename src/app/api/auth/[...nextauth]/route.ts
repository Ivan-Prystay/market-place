import NextAuth from "next-auth";
import Googleprovider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";



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


  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
});

export { handler as GET, handler as POST };
