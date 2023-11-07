import Link from "next/link";

type NavLinkProps = {
  href: string;
  title: string;
};

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-slate-200 sm:text-xl rounded md:p-0 hover:text-slate-800"
    >
      {title}
    </Link>
  );
};

export default NavLink 
export type { NavLinkProps };

