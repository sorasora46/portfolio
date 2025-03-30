import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import ProjectList from "./components/sections/ProjectList";
import TechStack from "./components/sections/TechStack";

export default function Home() {
  return (
    <main className="p-6 md:flex gap-5">
      <div className="sm:w-full md:w-1/3 md:sticky top-6 h-max">
        <div>
          <Hero />
          <br />
          <TechStack />
          <br />
          <Contact />
        </div>
      </div>
      <br />
      <div className="sm:w-full md:w-2/3">
        <ProjectList />
      </div>
    </main>
  );
}
