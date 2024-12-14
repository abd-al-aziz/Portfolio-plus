import React from "react";
import project1 from "../assets/images/portfolio.png";
import project2 from "../assets/images/steam.png";
import project3 from "../assets/images/Mobi.png";
import project4 from "../assets/images/unique.png";
import project_person from "../assets/images/code.jpg";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Portfolio",
      github_link: "https://github.com/Sridhar-C-25",
    },
    {
      img: project2,
      name: "Steam Kiddy",
      github_link: "https://github.com/shahedaltrakiah/SteamProject.github.io",
    },
    {
      img: project3,
      name: "Mobix E-commerce",
      github_link: "https://github.com/belal-shakra/e-commerce_php",
    },
    {
      img: project4,
      name: "Unique E-commerce",
      github_link: "https://github.com/shahedaltrakiah/UniqueProject",
    },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center justify-between">
        {projects.map((project_info, i) => (
          <div
            key={i}
            className="w-[23%] bg-slate-700 p-4 rounded-xl flex flex-col items-center"
          >
            <img
              src={project_info.img}
              alt={project_info.name}
              className="rounded-lg mb-4 w-full"
            />
            <h3 className="text-xl my-4">{project_info.name}</h3>
            <div className="flex gap-3">
              <a
                href={project_info.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
              >
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Project;
