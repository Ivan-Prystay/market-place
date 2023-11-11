import Link from "next/link";
import Image from "next/image";

import logoImg from "../../../public/svg/logo.svg";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={logoImg} height={77} alt="Logo picture" priority />
    </Link>
  );
};
export default Logo;
