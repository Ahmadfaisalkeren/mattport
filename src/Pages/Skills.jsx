import React from "react";
import bootstrap from "../Assets/icons/bootstrap.png";
import laravel from "../Assets/icons/laravel.png";
import mysql from "../Assets/icons/mysql.png";
import nginx from "../Assets/icons/nginx.png";
import reactjs from "../Assets/icons/reactjs.png";
import tailwind from "../Assets/icons/tailwind.png";

const Skills = () => {
  const skills = [
    {
      name: "Laravel",
      image: laravel,
    },
    {
      name: "React Js",
      image: reactjs,
    },
    {
      name: "Bootstrap",
      image: bootstrap,
    },
    {
      name: "Tailwind",
      image: tailwind,
    },
    {
      name: "Nginx",
      image: nginx,
    },
    {
      name: "MySQL",
      image: mysql,
    },
  ];
  return (
    <div id="skills">
      <div className="container mx-auto py-9">
        <h1 className="text-center text-2xl font-bold">My Skills</h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-5 md:p-0 lg:p-0">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="h-150 rounded-md p-2 shadow-md border border-secondary hover:shadow-lg hover:shadow-secondary duration-300"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-20 h-20 mx-auto hover:scale-105 hover:rotate-12 duration-300 cursor-pointer"
              />
              <p className="text-center mt-2 font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
