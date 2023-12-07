"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/teams", label: "Teams" },
  { href: "/blog", label: "Blog" },
  { href: "/contacts", label: "Contacts" },
];

const NavBar = () => {
  const pathName = usePathname();

  return (
    <nav>
      <ul className="tw-text-white tw-flex tw-justify-between tw-gap-12 tw-text-2xl">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={`${
                pathName === link.href
                  ? "tw-ease-linear tw-duration-700 hover:tw-duration-300 hover:tw-ease-linear hover:tw-text-accent-color tw-underline "
                  : "tw-ease-linear tw-duration-700 hover:tw-duration-300 hover:tw-ease-linear hover:tw-text-accent-color "
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
