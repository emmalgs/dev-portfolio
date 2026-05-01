import Link from "next/link";

type NavLinkProps = {
  href: string;
  title: string;
};

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-stone-700 sm:text-base rounded md:p-0 hover:text-[#3535DC] transition-colors"
    >
      {title}
    </Link>
  );
};

export default NavLink;
export type { NavLinkProps };
