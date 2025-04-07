import { projects } from "../../constants/project";
import Project from "../Project";

const ProjectList = () => {
  return (
    <section>
      <h2 className="highlight text-lg">Projects</h2>
      <div className="mt-4 flex flex-col gap-4">
        {projects.map((project, index) => {
          return <Project
            key={project.title + index}
            title={project.title}
            description={project.description}
            platforms={project.platforms}
            techs={project.techs}
          />
        })}
      </div>
    </section>
  );
};

export default ProjectList;
