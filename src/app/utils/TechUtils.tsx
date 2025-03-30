import { JSX } from "react";
import Image from "next/image";
import { Tech } from "../constants/tech";

export const techIconMapping: { [key in Tech]: JSX.Element } = {
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
  [Tech.FLASK]: <i className="devicon-flask-original"></i>,
  [Tech.RUST]: <i className="devicon-rust-original"></i>,
  [Tech.FLUTTER]: <Image alt="flutter" width="20" height="20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" />,
  [Tech.FIREBASE]: <Image alt="firebase" width="20" height="20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" />,
  [Tech.FASTAPI]: <i className="devicon-fastapi-plain"></i>,
  [Tech.TOKIO]: <i className="devicon-rust-original"></i>, // NO ICON
  [Tech.GIN]: <i className="devicon-go-original"></i>, // NO ICON
  [Tech.GO_FIBER]: <i className="devicon-go-original-wordmark colored"></i>, // NO ICON
  [Tech.SPACY]: <i className="devicon-python-plain"></i>, // NO ICON
  [Tech.YOLO_V8]: <Image alt="yolov8" width="20" height="20" src="https://cdn.prod.website-files.com/646dd1f1a3703e451ba81ecc/6499468f33db295c5a1219ec_Ultralytics_mark_blue.svg" />, // NO ICON
  [Tech.OPEN_CV]: <Image alt="opencv" width="20" height="20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" />,
};
