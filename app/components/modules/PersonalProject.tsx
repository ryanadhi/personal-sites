import Link from "next/link";
import Image from "next/image";
import Chip from "../Chip";

const projects = [
  {
    title: "UI Experiments",
    description:
      "A collection of UI experiments built with Next.js, Tailwind CSS, and Framer Motion.",
    techStack: ["NextJs", "Tailwind", "Framer Motion"],
    link: "https://rap-ui-experiments.vercel.app/",
  },
  {
    title: "Playstore Promo API",
    description:
      "A RESTful API built with Node.js and Express to serve data for Playstore discounts.",
    techStack: ["NodeJs", "Express", "PostgreSQL"],
    link: "https://github.com/ryanadhi/promo-playstore-api",
  },
];
const PersonalProject = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-950">
        Personal projects
      </h2>
      <ul className="mt-4">
        {projects.map((project) => (
          <li key={project.title} className="mb-4">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`go to ${project.title}`}
              className="group flex items-center gap-4 hover:bg-slate-100 px-2 py-2 rounded-md w-fit"
            >
              <Image
                src="/icons/rocket.svg"
                alt={project.title}
                width={20}
                height={20}
                className="group-hover:scale-125 transition-all duration-300"
              />
              <h3 className="text-lg md:text-xl font-semibold text-slate-950">
                {project.title}
              </h3>
            </Link>
            <p className="text-sm md:text-base my-2 ml-2">
              {project.description}
            </p>
            <div className="flex gap-2 mt-2 ml-2">
              {project.techStack.map((tech, i) => (
                <Chip key={tech + "-" + i} text={tech} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalProject;
