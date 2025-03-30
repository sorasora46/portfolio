import { FC, HTMLAttributes, JSX } from "react";
import Image from "next/image";
import { Tech } from "../constants/tech";

interface ChipListProps extends HTMLAttributes<HTMLDivElement> {
  items: Tech[]
}

const techIconMapping: { [key in Tech]: JSX.Element } = {
  [Tech.JAVA]: <Image alt="java" width="20" height="20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />,
  [Tech.JAVASCRIPT]: <Image alt="javascript" width="20" height="20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />,
  [Tech.TYPESCRIPT]: <Image alt="typescript" width="20" height="20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />,
  [Tech.GO]: <Image alt="golang" width="20" height="20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" />,
  [Tech.PYTHON]: <Image alt="python (programming language)" width="20" height="20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />,
  [Tech.SPRING_BOOT]: <Image alt="spring boot" width="20" height="20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />,
  [Tech.REACT_JS]: <Image alt="react.js" width="20" height="20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />,
  [Tech.NEXT_JS]: <i className="devicon-nextjs-plain"></i>,
  [Tech.EXPRESS_JS]: <i className="devicon-express-original"></i>,
  [Tech.NODE_JS]: <Image alt="node.js" width="20" height="20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />,
  [Tech.GIT]: <Image alt="git" width="20" height="20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />,
  [Tech.DOCKER]: <Image alt="docker" width="20" height="20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />,
  [Tech.TENSORFLOW]: <Image alt="tensorflow" width="20" height="20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" />,
  [Tech.WEB_RTC]: <Image alt="webRTC" width="20" height="20" src="https://webrtc.github.io/webrtc-org/assets/images/webrtc-logo-vert-retro-dist.svg" />,
  [Tech.TAIL_WIND_CSS]: <Image alt="tailwindcss" width="20" height="20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />,
  [Tech.FLASK]: <i className="devicon-flask-original"></i>
};

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
