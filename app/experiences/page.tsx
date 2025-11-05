import Image from "next/image";
import MainContainer from "../components/MainContainer";
import type { Metadata } from "next";
import baseMetadata from "../layout";

export const runtime = "edge";

const experiences = [
  {
    logo: "/bp.png",
    company: "bp",
    from: "August 2025",
    to: "Present",
    title: "Software Engineer",
  },
  {
    logo: "/dataspark.png",
    company: "DataSpark",
    from: "October 2022",
    to: "August 2025",
    title: "Frontend Engineer",
  },
  {
    logo: "/bithealth.png",
    company: "BitHealth",
    from: "September 2020",
    to: "October 2022",
    title: "Software Engineer",
  },
  {
    logo: "/mediatropy.png",
    company: "Mediatropy Digital Agency",
    from: "June 2020",
    to: "August 2020",
    title: "Web Developer",
  },
];

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Ryan | Experiences",
  description:
    "Discover Ryan's professional journey and expertise in fullstack development.",
};

const ExperiencePage = () => {
  return (
    <MainContainer>
      <header className="">
        <h1 className="font-semibold tracking-tight text-4xl mb-6 text-slate-900 pb-6 border-b border-slate-200">
          Experiences
        </h1>
      </header>
      <div className="flex flex-col gap-4">
        <p>
          I'm a Software Engineer at bp, where I’m part of a global team supporting business needs through scalable and efficient software solutions.
        </p>
        <p>
          Before bp, I worked as a Frontend Engineer at DataSpark in Singapore, building data-driven tools for the telecom industry. Earlier, I helped develop healthcare appointment and payment systems at BitHealth to improve patient experiences. My tech journey started at Mediatropy, where I contributed to digital brainstorming tools for creative teams.
        </p>
        <p>
          I enjoy working with modern web technologies, especially <span className="text-slate-700 font-semibold">ReactJS</span> and <span className="text-slate-700 font-semibold">Next.js</span> on the frontend. On the backend, I’ve used <span className="text-slate-700 font-semibold">Node.js</span> and <span className="text-slate-700 font-semibold">Spring Boot</span>, and I’m currently expanding my skills in <span className="text-slate-700 font-semibold">.NET</span>. I'm also comfortable with database management, particularly <span className="text-slate-700 font-semibold">PostgreSQL</span>, which helps me build well-integrated, end-to-end web applications.
        </p>
      </div>
      <div className="w-full divide-y divide-slate-200 mt-4">
        {experiences.map((experience, index) => (
          <div className="flex gap-4 py-4" key={index}>
            <div className="">
              <Image
                className="w-14 h-14 rounded-xl"
                src={experience.logo}
                alt={experience.company + " logo"}
                width={56}
                height={56}
              />
            </div>
            <div className="flex flex-col col-span-9">
              <p className="text-slate-800 text-xl font-semibold">
                {experience.company}
              </p>
              <p className="text-slate-700 text-lg">{experience.title}</p>
              <p className="block mt-4 text-slate-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
                {experience.from} → {experience.to}
              </p>
            </div>
          </div>
        ))}
      </div>
    </MainContainer>
  );
};

export default ExperiencePage;
