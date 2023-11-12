"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const SigninButton = () => {
  const { data: session } = useSession();

  const image = session?.user?.image;

  return (
    <div>
      {session && session.user ? (
        <div className="flex flex-row gap-2">
          {image && <Image src={image} width={30} height={30} alt="#"></Image>}
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
