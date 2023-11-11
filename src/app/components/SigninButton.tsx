"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const SigninButton = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session && session.user ? (
        <button className="text-white text-xl" onClick={() => signOut()}>
          {/*font-family: Nixie One;
font-size: 20px;
font-weight: 400;
line-height: 23px; */}
          Sign Out
        </button>
      ) : (
        <button className="text-white text-xl" onClick={() => signIn()}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default SigninButton;
