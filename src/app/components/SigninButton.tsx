"use client";
import React, { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const SigninButton = () => {
  const { data: session } = useSession();
  console.log("session: ", session);

  return (
    <div className="flex gap-4 ml-auto">
      {session && session.user ? (
        <>
          <p className="flex-sky-600 dark:text-black">{session.user.name}</p>
          <button className="text-red-600" onClick={() => signOut()}>
            Sign Out
          </button>
        </>
      ) : (
        <button className="text-green-600" onClick={() => signIn()}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default SigninButton;
