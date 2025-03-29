import { FC } from "react";

interface ChipListProps {
    items: string[]
}

const ChipList: FC<ChipListProps> = ({ items }) => {
  return (
    <div className="flex gap-2 flex-wrap">
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
