"use client";
import React, { useRef } from "react";
import InputBox from "./InputBox";
import { Button } from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

type Props = {
  callbackUrl?: string;
  error?: string;
};

const Login = (props: Props) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const userMail = useRef("");
  const pass = useRef("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userMail.current,
      password: pass.current,
      redirect: false,
    });

    if (!res?.error) {
      router.push(props.callbackUrl ?? "/");
    } else {
      alert("Невірний логін або пароль");
    }
  };

  return session && session.user ? (
    <div className=" tw-text-white tw-text-center tw-text-9xl">Loading ...</div>
  ) : (
    <div className="tw-mx-auto tw-text-white">
      <p>If you don’t have an account Sign up</p>
      <h1 className="tw-p-2 tw-text-center tw-text-white">Log in</h1>
      {!!props.error && (
        <p className="tw-bg-red-100 tw-text-red-600 tw-text-center tw-p-2">
          Authentication Failed
        </p>
      )}
      <div className="tw-flex tw-flex-col tw-gap-[26px] ">
        <Button onClick={() => signIn("google", { callbackUrl: "/" })}>
          Continue with Google
        </Button>
        <Button onClick={() => signIn("facebook", { callbackUrl: "/" })}>
          Continue with Facebook
        </Button>
      </div>
      <p>or</p>
      <form onSubmit={onSubmit} className="tw-p-2 tw-flex tw-flex-col tw-gap-3">
        <InputBox
          name="username"
          placeholder="Your email"
          onChange={e => (userMail.current = e.target.value)}
        />
        <InputBox
          name="password"
          type="password"
          placeholder="Your password"
          onChange={e => (pass.current = e.target.value)}
        />
        <div className="tw-flex tw-items-center tw-justify-center tw-mt-2 tw-gap-2">
          {
            <button
              type="submit"
              className={
                status !== "unauthenticated"
                  ? "tw-bg-orange-400"
                  : "tw-bg-green-400"
              }
              disabled={status !== "unauthenticated" ? true : false}
            >
              Sign In
            </button>
          }
          <Link
            href={props.callbackUrl ?? "/"}
            className="tw-w-28 tw-border tw-border-red-600 tw-text-center tw-py-2 tw-rounded-md tw-text-red-600 tw-transition tw-hover:bg-red-600 tw-hover:text-white tw-hover:border-transparent tw-active:scale-95"
          >
            Cancel
          </Link>
        </div>
      </form>
      Ще не маєте акаунту? <Link href={"/register"}>Зареєструвати</Link>
    </div>
  );
};

export default Login;
