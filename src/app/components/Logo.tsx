"use client";

import Link from "next/link";
const Logo = () => {
  return (
    <Link
      className={
        "tw-ease-linear tw-duration-700 hover:tw-duration-300 hover:tw-ease-linear  tw-h-[76px] tw-w-[144px] tw-bg-contain tw-bg-my-logo hover:tw-bg-my-logo-hover tw-bg-no-repeat"
      }
      href={"/"}
    ></Link>
  );
};

export default Logo;
