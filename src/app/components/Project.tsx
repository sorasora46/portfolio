import { FC } from "react";
import ChipList from "./ChipList";
import { Platform, ProjectDetail } from "../constants/project";
import WebChip from "./WebChip";
import DesktopChip from "./DesktopChip";
import MobileChip from "./MobileChip";

type ProjectProps = ProjectDetail;

const platformChipMap: Record<Platform, FC> = {
  web: WebChip,
  mobile: MobileChip,
  desktop: DesktopChip,
};

const Project: FC<ProjectProps> = ({ title, description, platforms, techs }) => {
  return (
    <div className="p-4 border rounded-lg">
      <div className="sm:flex gap-3 items-center">
        <h3 className="font-semibold text-xl">{title}</h3>
        {platforms.map((platform, index) => {
          const ChipComponent = platformChipMap[platform];
          return <ChipComponent key={`${platform}-${index}`} />;
        })}
      </div>
      <p className="mt-2">{description}</p>
      <ChipList className="mt-2" items={techs ?? []} />
    </div>
  );
}

export default Project;
