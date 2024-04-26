import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Juxtum Project"
          description="Juxtum’s patented technology offers highly configurable IIoT solutions that allow manufacturers to digitize and network all their manufacturing assets with minimal risk."
          link="https://juxtum.com/"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Prolink Works"
          description="Prolink is a premier workforce solutions organization, fulfilling comprehensive staffing, technology, culture, data, and talent experience needs throughout the United States."
          link="https://prolinkworks.com/"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://juxtum.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
