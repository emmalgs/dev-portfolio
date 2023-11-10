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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    if (response.status === 200) {
      setStatus("Your message has been sent!");
      // set timeout to clear status message after 5 seconds
      setTimeout(() => {
        setStatus("");
      }, 10000);
    } else if (response.status !== 200) {
      setStatus("Sorry, message failed to send. Please try again.");
      setTimeout(() => {
        setStatus("");
      }, 10000);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 border-t-2 border-black relative"
    >
      <Image
        src={Background}
        height={700}
        width={700}
        alt="blue squiggle"
        className="absolute opacity-50"
      />
      <div className="z-10">
        <h2 className="text-4xl font-bold text-black mb-4 font-mono">
          CONNECT
        </h2>
        <p className="text-2xl text-black mb-4 md:mb-1 max-w-md font-mono">
          {" "}
          <em>
            I&apos;m actively seeking employment in the fields of web development and
            software engineering. I&apos;d love to hear from you! If you&apos;re looking
            for my paintings and fine art, head over to{" "}
            <Link className="text-blue-500" href="https://emmagerigscott.com">
              my painting website
            </Link>
          </em>
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/emmalgs">
            <Image src={GitHubIcon} alt="github" width={55} height={55} />
          </Link>
          <Link href="https://www.linkedin.com/in/emmagerigscott/">
            <Image src={LinkedInIcon} alt="linkedin" width={50} height={50} />
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col z-10">
        <div className="mb-6">
          <label
            className="text-black block mb-2 text-sm font-mono"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border-2 border-black rounded-sm px-4 py-2 block w-full"
            id="email"
            type="email"
            name="email"
            required
            placeholder="dragon@fire.net"
          />
        </div>
        <div className="mb-6">
          <label
            className="text-black block mb-2 text-sm font-mono"
            htmlFor="sender"
          >
            Name
          </label>
          <input
            className="border-2 border-black rounded-sm px-4 py-2 block w-full"
            id="sender"
            type="text"
            name="sender"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-6">
          <label
            className="text-black block text-sm mb-2 font-mono"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="border-2 border-black rounded-sm px-4 py-2 block w-full"
            id="subject"
            type="text"
            name="subject"
            required
            placeholder="Tell me more..."
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="text-black block text-sm mb-2 font-mono"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            className="border-2 border-black rounded-sm px-4 py-2 block w-full"
            placeholder="Your message here..."
            required
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white font-mono py-2 px-4 rounded-sm hover:bg-stone-700 hover:text-white w-full"
        >
          Send Message
        </button>
        <p className="text-black font-mono text-center mt-4">{status}</p>
      </form>
      <Image
        src="/images/greenbg.png"
        height={700}
        width={700}
        alt="green squiggle"
        className="absolute opacity-50 w-full h-full -bottom-40 right-20"
      />
    </section>
  );
};

export default EmailSection;
