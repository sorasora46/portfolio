import { FC } from "react";
import ChipList from "./ChipList";
import { ProjectDetail } from "../constants/project";

type ProjectProps = ProjectDetail;

const Project: FC<ProjectProps> = ({ title, description, techs }) => {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="mt-2">{description}</p>
      <ChipList className="mt-2" items={techs ?? []} />
    </div>
  );  
}

export default Project;
