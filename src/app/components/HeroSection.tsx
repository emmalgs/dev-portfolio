"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold font-mono">
            <span className="text-[#3535DC]">Hello there, I&apos;m </span>
            <br />
            <TypeAnimation
              sequence={[
                "a web developer",
                1000,
                "a software engineer",
                1000,
                "Emma",
                1000,
              ]}
              wrapper="span"
              speed={20}
              style={{ fontSize: "2rem", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-base sm:text-lg mb-6 lg:text-xl mr-10 text-stone-600">
            With a background in contemporary art, I bring out-of-the-box
            thinking to solving problems for both users and code that results in
            readable and innovative solutions.
          </p>
          <div className="flex flex-row gap-3 py-6">
            <Link
              href="#contact"
              className="font-mono px-6 py-3 w-full sm:w-fit mt-2 rounded-full bg-[#3535DC] text-white hover:bg-[#2828B5] transition-colors"
            >
              Connect
            </Link>
            <Link
              href="https://github.com/emmalgs"
              className="font-mono px-6 py-3 w-full sm:w-fit mt-2 rounded-lg border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors"
            >
              Github
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center ml-4 mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#EEF0FF] w-[290px] h-[290px] lg:w-[400px] lg:h-[400px] relative border-2 border-[#3535DC]/20">
            <Image
              src="/images/keyboard.gif"
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
