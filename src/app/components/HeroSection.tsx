"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <p className="font-mono text-[#3535DC] font-semibold text-lg mb-2 uppercase tracking-widest">
            Full Stack Software Engineer
          </p>
          <h1 className="mb-5 text-5xl sm:text-6xl lg:text-6xl font-extrabold font-mono leading-tight">
            Hi, I&apos;m Emma.
          </h1>
          <div className="space-y-4 text-stone-600 text-base sm:text-lg lg:text-lg mr-6 leading-relaxed">
            <p>
              I build things in{" "}
              <span className="font-semibold text-stone-900">TypeScript</span>,{" "}
              <span className="font-semibold text-stone-900">React</span>, and{" "}
              <span className="font-semibold text-stone-900">Next.js</span>.
              Lately that has meant integrating LLM APIs and vector databases
              into production AI systems, shipping Twilio-powered SMS platforms,
              and building enterprise-scale BI tools for Fortune 5 clients.
            </p>
            <p>
              Before software, I spent years as a working artist — that
              background shapes how I approach interfaces, documentation, and
              the craft of writing clean code.
            </p>
            <p className="font-medium text-stone-800">
              I&apos;m actively looking for my next role. If something I&apos;ve
              built looks useful to your team, I&apos;d love to hear from you.
            </p>
          </div>
          <div className="flex flex-row gap-3 pt-8">
            <Link
              href="https://www.linkedin.com/in/emmagerigscott/"
              className="font-mono px-6 py-3 w-full sm:w-fit rounded-full bg-[#3535DC] text-white hover:bg-[#2828B5] transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="#contact"
              className="font-mono px-6 py-3 w-full sm:w-fit rounded-lg border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors"
            >
              Get in touch
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
