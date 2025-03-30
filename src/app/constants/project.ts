import { Tech } from "./tech";

export interface ProjectDetail {
  title: string;
  description: string;
  techs?: Tech[];
}
export const projects: ProjectDetail[] = [
  {
    title: "Stream Blender",
    description:
      "A virtual video switcher platform with a focus on real-time audio and video switching using WebRTC.",
    techs: [Tech.RUST, Tech.TYPESCRIPT, Tech.NODE_JS, Tech.REACT_JS],
  },
  {
    title: "TungLeua",
    description:
      "Developed a mobile application that allows users to find cheap leftover ingredients within their neighborhood using OpenStreetMap, Flutter, and GoFiber. " +
      "Developed CRUD and authentication APIs using GoFiber. " +
      "Designed PostgreSQL database tables to efficiently store and manage application data. " +
      "Managed a Docker container and a Dockerfile for backend deployment in VPS.",
    techs: [Tech.GO, Tech.FLUTTER, Tech.DOCKER],
  },
  {
    title: "TungTee",
    description:
      "Architected and developed a mobile application that allows users to create a group of people to join activities together using Flutter and Firebase. " +
      "Designed Firestore database tables for optimal data storage and retrieval.",
    techs: [Tech.FLUTTER, Tech.FIREBASE],
  },
  {
    title: "Gun Detection System",
    description:
      "A system to detect guns in a public building using YOLOv8 for object detection. " +
      "Used Roboflow to annotate image data.",
    techs: [Tech.PYTHON, Tech.YOLO_V8, Tech.OPEN_CV],
  },
  {
    title: "Extracting NLP from Sentence",
    description:
      "Developed a backend service using FastAPI to provide sentiment analysis of tweets from Twitter to the frontend. " +
      "Used Pandas to read CSV files and Spacy to handle text manipulation and Named Entity Recognition (NER). " +
      "Conducted a Proof of Concept of ChatGPT API service and Spacy library to ensure feasibility of the project.",
    techs: [Tech.PYTHON, Tech.FASTAPI],
  },
  {
    title: "Snake Detection System",
    description:
      "Developed a system using React.js for the frontend and Flask for backend to detect 50 species of venomous and non-venomous snakes. " +
      "Used YOLOv8 for detection and Roboflow for image annotation.",
    techs: [
      Tech.PYTHON,
      Tech.TYPESCRIPT,
      Tech.REACT_JS,
      Tech.FLASK,
      Tech.YOLO_V8,
    ],
  },
];
