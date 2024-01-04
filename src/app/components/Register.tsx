"use client";
import React, { useRef } from "react";
import InputBox from "./InputBox";
import { Button } from "./Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
  callbackUrl?: string;
  error?: string;
};

const Register = (props: Props) => {
  const router = useRouter();
  const userMail = useRef("");
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: userMail.current,
      password: pass.current,
      userName: userName.current,
    };
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      const result = await res.json();
      console.log("result: ", result);
      if (!result.error) {
        router.push(props.callbackUrl ?? "/login");
        alert("Вітаємо Вас зареєстровано, а тепер увійдіть в обліковий запис");
      }
    } catch (error) {
      console.log("res: ", res);
      alert("Помилка");
    }
  };

  return (
    <div className={props.className}>
      <p>If you don’t have an account Sign up</p>
      <h1 className="tw-p-2 tw-text-center tw-text-white">Sign Up</h1>
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
          labelText="Name"
          name="userName"
          placeholder="Your name"
          onChange={e => (userName.current = e.target.value)}
        />
        <InputBox
          name="userMail"
          placeholder="Your email"
          onChange={e => (userMail.current = e.target.value)}
        />
        <InputBox
          name="password"
          type="password"
          placeholder="Your password"
          autoComplete="off"
          onChange={e => (pass.current = e.target.value)}
        />
        <div className="tw-flex tw-items-center tw-justify-center tw-mt-2 tw-gap-2">
          <Button type="submit" className="tw-w-28">
            Sign Up
          </Button>
          <Link
            href={props.callbackUrl ?? "/"}
            className="tw-w-28 tw-border tw-border-red-600 tw-text-center tw-py-2 tw-rounded-md tw-text-red-600 tw-transition tw-hover:bg-red-600 tw-hover:text-white tw-hover:border-transparent tw-active:scale-95"
          >
            Cancel
          </Link>
        </div>
      </form>
      Уже маєте акаунт? <Link href={"/login"}>Увійти</Link>
    </div>
  );
};

export default Register;
