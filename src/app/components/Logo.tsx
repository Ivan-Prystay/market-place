"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import logoImg from "../../../public/svg/logo.svg";
import logoImgHover from "../../../public/svg/logo_hover.svg";

const Logo = () => {
  const [isHovered, setHovered] = useState(false);

  return (
    <Link href={"/"}>
      <Image
        src={isHovered ? logoImgHover : logoImg}
        height={55}
        alt="Logo picture"
        priority
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      />
    </Link>
  );
};

export default Logo;
