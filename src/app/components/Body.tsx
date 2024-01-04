"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import AppBar from "./AppBar";

type Props = {
  pages?: ReactNode;
};

function Body(props: Props) {
  const pathName = usePathname();

  return (
    <body
      className={`${
        pathName === "/login" || pathName === "/register"
          ? "tw-bg-no-repeat tw-bg-top tw-bg-[#050F25] tw-w-[1440px] tw-mx-auto "
          : "tw-bg-my-image tw-bg-no-repeat tw-bg-top tw-bg-[#050F25] tw-w-[1440px] tw-mx-auto"
      }`}
    >
      {pathName === "/login" || pathName === "/register" ? (
        <>
          <div className="stars -tw-z-50"></div>
          <div className="twinkling -tw-z-50"></div>
          <div className="planets -tw-z-50"></div>
        </>
      ) : null}
      <AppBar />
      {props.pages}
    </body>
  );
}

export default Body;
