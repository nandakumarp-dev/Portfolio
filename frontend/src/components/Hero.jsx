function Hero() {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center text-white text-center vh-100 bg-dark">
      <div className="container" data-aos="fade-up">
        <h1>Nanda Kumar</h1>
        <p>I'm a <span className="text-info">Full Stack Developer</span></p>
        <a href="#contact" className="btn btn-outline-light mt-3">Hire Me</a>
      </div>
    </section>
  );
}
export default Hero;
