function Projects() {
  return (
    <section className="container" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col" data-aos="zoom-in">
          <div className="card text-center">
            <h5>Resume Builder</h5>
            <p>Web app to create ATS-friendly resumes with Django + React.</p>
          </div>
        </div>
        <div className="col" data-aos="zoom-in" data-aos-delay="100">
          <div className="card text-center">
            <h5>Astrology Engine</h5>
            <p>AI-based Jyotish prediction platform with RESTful API backend.</p>
          </div>
        </div>
        <div className="col" data-aos="zoom-in" data-aos-delay="200">
          <div className="card text-center">
            <h5>Ecommerce Platform</h5>
            <p>Fully featured ecommerce site with user auth, cart, and Stripe checkout.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;