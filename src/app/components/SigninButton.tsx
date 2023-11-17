"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const SigninButton = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session && session.user ? (
        <div className="flex flex-row gap-2">
          <p className=" text-orange-400 text-xl">{session.user.name}</p>
          <button className="text-white text-xl" onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      ) : (
        <button className="text-white text-xl" onClick={() => signIn()}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default SigninButton;
