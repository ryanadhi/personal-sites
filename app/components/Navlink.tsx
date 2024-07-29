"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  link: {
    title: string;
    url: string;
  };
};

const NavLink = (props: NavLinkProps) => {
  const { link } = props;
  const pathName = usePathname();

  return (
    <Link
      className="p-1 rounded sm:hover:bg-slate-200 sm:hover:text-slate-950"
      href={link.url}
    >
        <span className={`${pathName === link.url && "border-b-2 border-slate-400"}`}>
        {link.title}

        </span>
    </Link>
  );
};

export default NavLink;