import { FC, HTMLAttributes } from "react";

interface ChipListProps extends HTMLAttributes<HTMLDivElement> {
  items: string[]
}

const ChipList: FC<ChipListProps> = ({ items, className, ...rest }) => {
  return (
    <div className={`flex gap-2 flex-wrap ${className}`} {...rest}>
      {items.map((item, index) => {
        return (
          <div key={item + index} className="chip">
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ChipList;
