// import Image from "next/image";
// import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";

const skills = ["Javascript", "Nextjs", "Reactjs", "Tailwind", "HTML", "CSS", "Nodejs", "PostgreSQL", "Spring Boot"]

export default function Home() {
  return (
    <MainContainer>
      <div className="">
        <h1 className="font-semibold text-4xl mb-4 text-slate-950">
          Title
          <span className="block text-slate-500 font-normal text-2xl">
            Subtitle
          </span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="my-4">
        <strong>Skills</strong>
        <div className="flex gap-4 flex-wrap mt-4">
          {skills.map((skill, i) => {
            return <div key={i}
            className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">{skill}</div>;
          })}
        </div>
      </div>
    </MainContainer>
  );
}
