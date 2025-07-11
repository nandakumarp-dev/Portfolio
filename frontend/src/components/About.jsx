function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container" data-aos="fade-up">
        <h2 className="mb-4">About Me</h2>
        <div className="row">
          <div className="col-md-6">
            <p>
              I’m a passionate full stack developer with a strong background in building
              scalable web applications using Django and React.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li><strong>Languages:</strong> Python, JavaScript</li>
              <li><strong>Frameworks:</strong> Django, React</li>
              <li><strong>Tools:</strong> Git, Postman, Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
