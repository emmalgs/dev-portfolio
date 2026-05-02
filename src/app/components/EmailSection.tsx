"use client";
import React, { useState } from "react";
import Background from "../../../public/images/colorbg2.png";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    label: "elgerig@gmail.com",
    href: "mailto:elgerig@gmail.com",
    note: null,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emma-gerig/",
    note: null,
  },
  {
    label: "GitHub",
    href: "https://github.com/emmalgs",
    note: null,
  },
  {
    label: "emmagerig.com",
    href: "https://emmagerig.com",
    note: "check out my art",
  },
];

const EmailSection = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: (e.currentTarget.email as HTMLInputElement).value,
      name: (e.currentTarget.sender as HTMLInputElement).value,
      subject: (e.currentTarget.subject as HTMLInputElement).value,
      message: (e.currentTarget.message as HTMLInputElement).value,
    };
    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      setStatus("Your message has been sent!");
      setTimeout(() => setStatus(""), 10000);
    } else {
      setStatus("Sorry, message failed to send. Please try again.");
      setTimeout(() => setStatus(""), 10000);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 py-24 gap-12 border-t border-stone-300 relative"
    >
      <Image
        src={Background}
        height={700}
        width={700}
        alt=""
        aria-hidden
        className="absolute opacity-40 pointer-events-none"
      />

      {/* Left column — direct contact links */}
      <div className="z-10 flex flex-col gap-8">
        <div>
          <h2 className="text-4xl font-bold text-stone-900 mb-3 font-mono">
            CONNECT
          </h2>
          <p className="text-stone-600 text-base leading-relaxed max-w-sm">
            Open to new roles. Reach out directly or use the form.
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          {links.map(({ label, href, note }) => (
            <li key={href}>
              <Link
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-stone-700 hover:text-[#3535DC] transition-colors group"
              >
                <span className="text-[#3535DC] group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
                {label}
                {note && (
                  <span className="text-blue-800 font-normal not-italic ml-1">
                    — {note}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right column — contact form */}
      <form onSubmit={handleSubmit} className="flex flex-col z-10 gap-4">
        <div>
          <label className="text-stone-700 block mb-2 text-sm font-mono font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="bg-white border border-stone-300 rounded-xl px-4 py-3 block w-full focus:outline-none focus:border-[#3535DC] focus:ring-2 focus:ring-[#3535DC]/20 transition-colors"
            id="email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="text-stone-700 block mb-2 text-sm font-mono font-semibold" htmlFor="sender">
            Name
          </label>
          <input
            className="bg-white border border-stone-300 rounded-xl px-4 py-3 block w-full focus:outline-none focus:border-[#3535DC] focus:ring-2 focus:ring-[#3535DC]/20 transition-colors"
            id="sender"
            type="text"
            name="sender"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="text-stone-700 block text-sm mb-2 font-mono font-semibold" htmlFor="subject">
            Subject
          </label>
          <input
            className="bg-white border border-stone-300 rounded-xl px-4 py-3 block w-full focus:outline-none focus:border-[#3535DC] focus:ring-2 focus:ring-[#3535DC]/20 transition-colors"
            id="subject"
            type="text"
            name="subject"
            required
            placeholder="Tell me more..."
          />
        </div>
        <div>
          <label htmlFor="message" className="text-stone-700 block text-sm mb-2 font-mono font-semibold">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={7}
            className="bg-white border border-stone-300 rounded-xl px-4 py-3 block w-full focus:outline-none focus:border-[#3535DC] focus:ring-2 focus:ring-[#3535DC]/20 transition-colors resize-none"
            placeholder="Your message here..."
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#3535DC] text-white font-mono font-semibold py-3 px-6 rounded-full hover:bg-[#2828B5] transition-colors w-full"
        >
          Send Message
        </button>
        {status && (
          <p className="text-stone-700 font-mono text-center text-sm">{status}</p>
        )}
      </form>

      <Image
        src="/images/greenbg.png"
        height={700}
        width={700}
        alt=""
        aria-hidden
        className="absolute opacity-30 w-full h-full -bottom-40 right-20 pointer-events-none"
      />
    </section>
  );
};

export default EmailSection;
