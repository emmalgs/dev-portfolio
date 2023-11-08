import React from "react";
import GitHubIcon from "../../../public/images/githubMove.png";
import LinkedInIcon from "../../../public/images/linkedinMove.png";
import Background from "../../../public/images/colorbg2.png"
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 border-t-2 border-black">
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
            I'm actively seeking employment in the fields of web development and
            software engineering. I'd love to hear from you! If you're looking
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
      <form className="flex flex-col">
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
          Send
        </button>
      </form>
    </section>
  );
};

export default EmailSection;

// <a className="text-blue-500" href="mailto:"></a>