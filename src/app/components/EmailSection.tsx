"use client";
import React, { useState } from "react";
import GitHubIcon from "../../../public/images/githubMove.gif";
import LinkedInIcon from "../../../public/images/linkedinMove.gif";
import Background from "../../../public/images/colorbg2.png";
import Link from "next/link";
import Image from "next/image";

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
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
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
      className="grid md:grid-cols-2 my-12 py-24 gap-4 border-t border-stone-300 relative"
    >
      <Image
        src={Background}
        height={700}
        width={700}
        alt="blue squiggle"
        className="absolute opacity-40"
      />
      <div className="z-10">
        <h2 className="text-4xl font-bold text-stone-900 mb-4 font-mono">
          CONNECT
        </h2>
        <p className="text-xl text-stone-600 mb-4 md:mb-1 max-w-md font-mono">
          <em>
            I&apos;m actively seeking employment in the fields of web development and
            software engineering. I&apos;d love to hear from you! If you&apos;re looking
            for my paintings and fine art, head over to{" "}
            <Link className="text-[#3535DC] hover:underline" href="https://emmagerigscott.com">
              my painting website
            </Link>
          </em>
        </p>
        <div className="socials flex flex-row gap-2 mt-6">
          <Link href="https://github.com/emmalgs">
            <Image src={GitHubIcon} alt="github" width={55} height={55} />
          </Link>
          <Link href="https://www.linkedin.com/in/emmagerigscott/">
            <Image src={LinkedInIcon} alt="linkedin" width={50} height={50} />
          </Link>
        </div>
      </div>
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
            placeholder="dragon@fire.net"
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
            rows={8}
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
        {status && <p className="text-stone-700 font-mono text-center text-sm">{status}</p>}
      </form>
      <Image
        src="/images/greenbg.png"
        height={700}
        width={700}
        alt="green squiggle"
        className="absolute opacity-30 w-full h-full -bottom-40 right-20"
      />
    </section>
  );
};

export default EmailSection;
