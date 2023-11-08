import React from "react";
import GitHubIcon from "../../../public/images/githubMove.png";
import LinkedInIcon from "../../../public/images/linkedinMove.png";
import Link from "next/link";
import Image from "next/image"

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-black mb-4 md:mb-1 font-mono">
          CONNECT
        </h2>
        <p className="text-2xl text-black mb-4 md:mb-1 max-w-md font-mono">
          {" "}
          <em>Talk to me!</em>
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/emmalgs">
            <Image src={GitHubIcon} alt="github" width={55} height={55} />
          </Link>
          <Link href="https://www.linkedin.com/in/emmagerigscott/">
            <Image src={LinkedInIcon} alt="linkedin" width={50} height={50} />
          </Link>
        </div>
        <form className="flex flex-col gap-4 mt-8">
          <label className="text-black font-mono" htmlFor="email">Email</label>
          <input
            className="border-2 border-black rounded-sm px-4 py-2"
            id="email"
            type="email"
            name="email" 
            required
            placeholder="dragon@fire.net"
            />
        </form>
      </div>
    </section>
  );
};

export default EmailSection;

// <a className="text-blue-500" href="mailto:"></a>
