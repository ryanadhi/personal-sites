"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";
import MainContainer from "./components/MainContainer";

const skills = [
  "Javascript",
  "Nextjs",
  "Reactjs",
  "Tailwind",
  "HTML",
  "CSS",
  "Nodejs",
  "PostgreSQL",
  "Spring Boot",
];

export default function Home() {
  return (
    <MainContainer>
      <div className="">
        <h1 className="font-semibold text-4xl mb-4 text-slate-950">
          Ryan
          <span className="block text-slate-500 font-normal text-2xl">
            Fullstack Developer
          </span>
        </h1>
        <p>
          As a geophysicist turned fullstack developer with 4 years of
          experience. My expertise in ReactJS, Node.js, and PostgreSQL, combined
          with my background in geophysics where I honed my skills in data
          analysis and problem-solving, allows me to build intuitive and
          engaging web applications. I am proactive and driven, with excellent
          communication and collaboration skills. My passion for continuous
          learning and innovation ensures that I am always improving in my role.
        </p>
      </div>
      <div className="mt-4">
        <Link href="/experiences">
          <button
            className="group flex items-center gap-2 border border-slate-200 rounded-md px-4 py-2 bg-slate-200 hover:bg-slate-100 text-slate-950 hover:text-slate-950"
            onClick={() => {
              const consent = localStorage.getItem("analytics_consent");
              if (consent === "true" && window.dataLayer) {
                sendGAEvent({ event: "cta_clicked", path: "/experiences" });
              }
            }}
          >
            More about me
            <span className="inline-block group-hover:translate-x-2 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </MainContainer>
  );
}
