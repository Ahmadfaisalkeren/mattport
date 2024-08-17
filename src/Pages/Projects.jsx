import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Inventory App",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas corrupti quia debitis autem, officiis veniam inventore? Ratione, ipsa nam.",
      image: "https://picsum.photos/300/300",
    },
    {
      title: "Inventory App",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas corrupti quia debitis autem, officiis veniam inventore? Ratione, ipsa nam.",
      image: "https://picsum.photos/300/300",
    },
    {
      title: "Inventory App",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas corrupti quia debitis autem, officiis veniam inventore? Ratione, ipsa nam.",
      image: "https://picsum.photos/300/300",
    },
    {
      title: "Inventory App",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas corrupti quia debitis autem, officiis veniam inventore? Ratione, ipsa nam.",
      image: "https://picsum.photos/300/300",
    },
    {
      title: "Inventory App",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas corrupti quia debitis autem, officiis veniam inventore? Ratione, ipsa nam.",
      image: "https://picsum.photos/300/300",
    },
    {
      title: "Inventory App",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas corrupti quia debitis autem, officiis veniam inventore? Ratione, ipsa nam.",
      image: "https://picsum.photos/300/300",
    },
  ];

  return (
    <div id="projects">
      <div className="container mx-auto py-9">
        <h1 className="text-center text-2xl font-bold">My Projects</h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5 md:p-0 lg:p-0">
          {projects.map((project, index) => (
            <div className="h-300 p-3 rounded-md border border-secondary shadow-lg">
              <div key={index} className="">
                <img
                  src={project.image}
                  alt="Invalid Image"
                  className="w-full h-full rounded-md"
                />
                <p className="text-center mt-2 font-semibold text-primary">
                  {project.title}
                </p>
                <p className="text-justify">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
