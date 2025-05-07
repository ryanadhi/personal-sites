import Image from "next/image";
import MainContainer from "../components/MainContainer";
import type { Metadata } from "next";
import baseMetadata from "../layout";

export const runtime = "edge";

const experiences = [
  {
    logo: "/dataspark.png",
    company: "DataSpark",
    from: "October 2022",
    to: "Present",
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
          Currently I am working as a Frontend Engineer at DataSpark in
          Singapore, where I am helping build innovative data-driven solutions
          for the telecommunications industry. Before that, I was a Software
          Engineer at BitHealth, developing healthcare appointment and payment
          systems that improved patient experiences. My journey in tech began at
          Mediatropy, where I contributed to creating digital brainstorming
          tools.
        </p>
        <p>
          My tech stack is centered around modern web technologies. I specialize
          in frontend development with{" "}
          <span className="text-slate-700 font-semibold">ReactJS</span> and{" "}
          <span className="text-slate-700 font-semibold">Next.js</span>,
          crafting responsive and intuitive user interfaces. On the backend, I
          am proficient with{" "}
          <span className="text-slate-700 font-semibold">Node.js</span> and have
          recently expanded my skills to include{" "}
          <span className="text-slate-700 font-semibold">Spring Boot</span>. I
          am well-versed in database management, particularly with{" "}
          <span className="text-slate-700 font-semibold">PostgreSQL</span>. This
          full-stack expertise allows me to build comprehensive web applications
          from the ground up, ensuring seamless integration between frontend and
          backend components.
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
