"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";
import Image from "next/image";
import MainContainer from "../components/MainContainer";

const socialMedias = [
  {
    icon: "/github.svg",
    link: "https://github.com/ryanadhi",
    label: "GitHub",
  },
  {
    icon: "/x.svg",
    link: "https://x.com/ryanadhip",
    label: "X",
  },
  {
    icon: "/youtube.svg",
    link: "https://www.youtube.com/@ryanadhi",
    label: "YouTube",
  },
];

const ContactPage = () => {
  return (
    <MainContainer>
      <header className="">
        <h1 className="font-semibold tracking-tight text-4xl mb-6 text-slate-900 pb-6 border-b border-slate-200">
          Contact
        </h1>
      </header>
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p>
            If you would like to get in touch, you can reach me on the following
            platforms:
          </p>
          <div className="flex flex-col gap-2">
            <Link
              href="mailto:your.email@example.com"
              className="group flex items-center gap-4 hover:bg-slate-100 px-4 py-2 rounded-md w-fit"
            >
              <Image
                src="/email.svg"
                alt="Email"
                width={20}
                height={20}
                className="group-hover:scale-105 transition-all duration-300"
              />
              <span>Email</span>
            </Link>
            <Link
              href="https://linkedin.com/in/ryanadhi"
              className="group flex items-center gap-4 hover:bg-slate-100 px-4 py-2 rounded-md w-fit"
              target="_blank"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
                className="group-hover:scale-105 transition-all duration-300"
              />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            To see more of my work, interests, and daily updates, follow me on:
          </p>
          <div className="flex flex-col gap-2">
            {socialMedias.map((socialMedia, index) => (
              <Link
                onClick={() => {
                  const consent = localStorage.getItem("analytics_consent");
                  if (consent === "true" && window.dataLayer) {
                    sendGTMEvent({
                      event: "social_media_click",
                      social_media: socialMedia.label,
                    });
                  }
                }}
                key={index}
                href={socialMedia.link}
                className="group flex items-center gap-4 hover:bg-slate-100 px-4 py-2 rounded-md w-fit"
                target="_blank"
              >
                <Image
                  src={socialMedia.icon}
                  alt={socialMedia.label}
                  width={20}
                  height={20}
                  className="group-hover:scale-105 transition-all duration-300"
                />
                <span>{socialMedia.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MainContainer>
  );
};

export default ContactPage;
