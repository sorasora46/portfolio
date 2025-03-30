import { FC, HTMLAttributes } from "react";
import { Tech } from "../constants/tech";
import { techIconMapping } from "../utils/TechUtils";

interface ChipListProps extends HTMLAttributes<HTMLDivElement> {
  items: Tech[]
}

const ChipList: FC<ChipListProps> = ({ items, className, ...rest }) => {
  return (
    <div className={`flex gap-2 flex-wrap items-center ${className}`} {...rest}>
      {items.map((item, index) => {
        return (
          <div key={item + index} className="chip flex justify-center items-center gap-1">
            {techIconMapping[item]}
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ChipList;
