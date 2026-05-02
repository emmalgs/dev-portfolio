import React from "react";
import Link from "next/link";

const footerLinks = [
  { label: "Email", href: "mailto:elgerig@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emma-gerig/" },
  { label: "GitHub", href: "https://github.com/emmalgs" },
  { label: "Art site", href: "https://emmagerig.com" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0F0F1A] text-white">
      <div className="container px-12 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-stone-400 font-mono text-sm">
          © 2026 Emma Gerig — Ladies IT Department
        </p>
        <ul className="flex flex-row flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-stone-400 font-mono text-sm hover:text-white transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
