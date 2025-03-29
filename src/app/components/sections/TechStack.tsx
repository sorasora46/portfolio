import { techs } from "../../constants/tech";
import ChipList from "../ChipList";

const TechStack = () => {
  return (
    <section>
      <h2 className="highlight text-lg">Tech Stack</h2>
      <ChipList items={techs} />
    </section>
  );
};

export default TechStack;
