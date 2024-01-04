"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const SigninButton = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      {session && session.user ? (
        <div className="tw-flex tw-flex-row tw-gap-2">
          <p className=" tw-text-orange-400 tw-text-xl">{session.user.name}</p>
          <button
            className="tw-text-white tw-text-xl tw-ease-linear tw-duration-700 hover:tw-ease-linear hover:tw-duration-300 hover:tw-text-accent-color"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          className="tw-text-white tw-text-xl tw-ease-linear tw-duration-700 hover:tw-ease-linear hover:tw-duration-300 hover:tw-text-accent-color"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default SigninButton;
