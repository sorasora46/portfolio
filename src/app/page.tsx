export default function Home() {
  return (
    <main className="p-6">
      <div className="md:flex gap-5">
        <section className="sm:w-full md:w-1/3">
          <div className="flex flex-col gap-1">
            <hr />
            <hr />
          </div>

          <h1 className="text-2xl my-1 font-bold leading-tight">
            <span className="whitespace-nowrap">Sorrawit Kwanja</span>
            <br />
            <span className="highlight whitespace-nowrap">Fullstack Engineer</span>
          </h1>

          <div className="flex flex-col gap-1">
            <hr />
            <hr />
          </div>

          <p className="mt-4">
            Passionate about technology and continuous learning.
          </p>
        </section>

        <br />

        <section>
          <h2 className="highlight text-lg">Projects</h2>
        </section>
      </div>

      <br />

      <section className="sm:w-full md:w-1/3">
        <h2 className="highlight text-lg">Tech Stack</h2>
        <div className="flex gap-2 flex-wrap">
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
      </section>

      <br />

      <section className="sm:w-full md:w-1/3">
        <h2 className="highlight text-lg">Contact</h2>
        <ul>
          <li>
            <a href="mailto:sorrawit.kwanja@gmail.com">sorrawit.kwanja@gmail.com</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sorrawit-kwanja/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sorasora46/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
