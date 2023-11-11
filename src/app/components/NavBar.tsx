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
      <ul className="text-white flex justify-between gap-12 text-2xl">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={`${
                pathName === link.href
                  ? "header-link underline "
                  : "header-link"
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
