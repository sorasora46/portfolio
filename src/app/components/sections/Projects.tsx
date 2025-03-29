import ChipList from "../ChipList";
import { Tech } from "../../constants/tech";

const Projects = () => {
  return (
    <section>
      <h2 className="highlight text-lg">Projects</h2>
      <div className="mt-4 flex flex-col gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold text-xl">You-Note</h3>
          <p className="text-gray-700 mt-2">
            A web application for taking notes from YouTube videos, summarizing them manually or with AI, and linking related notes using a similarity model.
          </p>
          <ChipList items={[Tech.REACT_JS, Tech.NODE_JS, Tech.TENSORFLOW]} />
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold text-xl">Stream Blender</h3>
          <p className="text-gray-700 mt-2">
            A virtual video switcher platform with a focus on real-time audio and video switching using WebRTC.
          </p>
          <ChipList items={[Tech.REACT_JS, Tech.NODE_JS, Tech.WEB_RTC]} />
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold text-xl">Portfolio Website</h3>
          <p className="text-gray-700 mt-2">
            A personal portfolio website built with React.js and styled with Tailwind CSS to showcase my skills and projects.
          </p>
          <ChipList items={[Tech.REACT_JS, Tech.TAIL_WIND_CSS]} />
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold text-xl">AI Chatbot</h3>
          <p className="text-gray-700 mt-2">
            A chatbot integrated with an AI model to provide answers to frequently asked questions for a website.
          </p>
          <ChipList items={[Tech.PYTHON, Tech.FLASK, Tech.TENSORFLOW]} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
