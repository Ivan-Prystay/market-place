"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const SigninButton = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session && session.user ? (
        <div className="tw-flex tw-flex-row tw-gap-2">
          <p className=" tw-text-orange-400 tw-text-xl">{session.user.name}</p>
          <button
            className="tw-text-white tw-text-xl"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button className="tw-text-white tw-text-xl" onClick={() => signIn()}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default SigninButton;
