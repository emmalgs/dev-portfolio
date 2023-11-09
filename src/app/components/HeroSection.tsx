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
            <span className="text-green-600">Hello there, I&apos;m </span>
            <br></br>
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
          <p className="text-base sm:text-lg mb-6 lg:text-xl mr-10">
            With a background in contemporary art, I bring out-of-the-box
            thinking to solving problems for both users and code that results in
            readable and innovative solutions.
          </p>
          <div className="flex flex-row gap-2 py-6">
            <Link href="#contact" className="font-mono px-6 py-3 w-full sm:w-fit mt-2 bg-transparent hover:bg-stone-800 hover:text-white border-2 border-black">
              Connect
            </Link>
            <Link href="https://github.com/emmalgs" className="font-mono px-6 py-3 w-full sm:w-fit mt-2 bg-transparent hover:bg-stone-800 hover:text-white border-2 border-black">
              Github
            </Link>
          </div>
        </motion.div>
        <motion.div           
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className="col-span-5 place-self-center ml-4 mt-4 lg:mt-0">
          <div className="rounded-full bg-stone-300 w-[290px] h-[290px] lg:w-[400px] lg:h-[400px] relative">
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
