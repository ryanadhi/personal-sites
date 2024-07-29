import Image from "next/image";
import MainContainer from "../components/MainContainer";

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
    }
]


const ExperiencePage = () => {
    return (
        <MainContainer>
            <div className="w-full divide-y divide-slate-200">
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
                            <p className="text-slate-800 text-xl font-semibold">{experience.company}</p>
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