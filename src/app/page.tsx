export default function Home() {
  return (
    <main className="p-3">
      <div className="sm:w-full md:w-1/3">
        <div className="flex flex-col gap-1">
          <span aria-hidden="true" className="w-full border-t-2 border-gray-500"></span>
          <span aria-hidden="true" className="w-full border-t-2 border-gray-500"></span>
        </div>

        <h1 className="text-2xl font-bold">
          <span className="whitespace-nowrap">Sorrawit Kwanja</span>
          <br />
          <span className="highlight whitespace-nowrap">Fullstack Engineer</span>
        </h1>

        <div className="flex flex-col gap-1">
          <span aria-hidden="true" className="w-full border-t-2 border-gray-500"></span>
          <span aria-hidden="true" className="w-full border-t-2 border-gray-500"></span>
        </div>

        <p>Passionate about technology and continuous learning.</p>

        <br />

        <h2 className="highlight">Tech Stack</h2>
        <div className="flex gap-y-2 gap-x-3 flex-wrap">
          <div className="chip">
            <span>Java</span>
          </div>
          <div className="chip">
            <span>Javascript</span>
          </div>
          <div className="chip">
            <span>Typescript</span>
          </div>
          <div className="chip">
            <span>Go</span>
          </div>
          <div className="chip">
            <span>Python</span>
          </div>
          <div className="chip">
            <span>Spring Boot</span>
          </div>
          <div className="chip">
            <span>React.js</span>
          </div>
          <div className="chip">
            <span>Next.js</span>
          </div>
          <div className="chip">
            <span>Express.js</span>
          </div>
          <div className="chip">
            <span>Node.js</span>
          </div>
          <div className="chip">
            <span>Git</span>
          </div>
          <div className="chip">
            <span>Docker</span>
          </div>
        </div>

        <br />

        <h2 className="highlight">Contact</h2>
        <ul>
          <li>sorrawit.kwanja@gmail.com</li>
          <li>
            <a
              href="https://www.linkedin.com/in/sorrawit-kwanja/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sorasora46/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
