import React from "react";
import NavLink from "./Navlink";
import { NavLinkProps } from "./Navlink";

interface MenuOverlayProps {
  links: NavLinkProps[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link: NavLinkProps, index: number) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
