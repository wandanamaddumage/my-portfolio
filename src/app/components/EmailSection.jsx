"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import MailIcon from "../../../public/mail-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section id="contact" className="my-12 md:my-12 gap-4 relative">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            Let&apos;s Connect
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-2xl">
            {" "}
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials justify-center flex flex-row gap-2">
            <Link href="https://github.com/wandanamaddumage">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/wandana-maddumage-a923071ba/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
            <Link href="wandanamaddumage@gmail.com">
              <Image src={MailIcon} alt="Mail Icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
