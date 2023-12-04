"use client";

import Link from "next/link";
const Logo = () => {
  return (
    <Link href={"/"}>
      <div
        className={
          "tw-ease-linear tw-duration-700 hover:tw-duration-300 hover:tw-ease-linear tw-w-[144px] tw-h-[77px] tw-bg-my-logo hover:tw-bg-my-logo-hover"
        }
      ></div>
    </Link>
  );
};

export default Logo;
