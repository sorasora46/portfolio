import DoubleLines from "../DoubleLines";

const Hero = () => {
  return (
    <section>
      <DoubleLines />
      <h1 className="text-2xl my-1 font-bold leading-tight">
        <span className="whitespace-nowrap">Sorrawit Kwanja</span>
        <br />
        <span className="highlight whitespace-nowrap">Fullstack Engineer</span>
      </h1>
      <DoubleLines />
      <p className="mt-4">
        Passionate about technology and continuous learning.
      </p>
    </section>
  );
}

export default Hero;
