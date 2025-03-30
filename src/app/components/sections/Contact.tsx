const Contact = () => {
  return (
    <section>
      <h2 className="highlight text-lg">Contact</h2>
      <ul>
        <li>
          <a className="hover:text-blue-400" href="mailto:sorrawit.kwanja@gmail.com">sorrawit.kwanja@gmail.com</a>
        </li>
        <li>
          <a
            className="hover:text-blue-400"
            href="https://www.linkedin.com/in/sorrawit-kwanja/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-linkedin-plain colored me-1"></i>
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="hover:text-blue-400"
            href="https://github.com/sorasora46/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-github-original me-1"></i>
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
