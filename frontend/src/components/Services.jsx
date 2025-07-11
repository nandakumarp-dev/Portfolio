function Services() {
  return (
    <section className="container" id="services">
      <h2 className="section-title">What I Offer</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col" data-aos="fade-up">
          <div className="card text-center">
            <h5>Web Development</h5>
            <p>Custom full stack solutions using Python, Django, and React.</p>
          </div>
        </div>
        <div className="col" data-aos="fade-up" data-aos-delay="100">
          <div className="card text-center">
            <h5>API Design</h5>
            <p>Robust REST API backends with authentication and security.</p>
          </div>
        </div>
        <div className="col" data-aos="fade-up" data-aos-delay="200">
          <div className="card text-center">
            <h5>UI/UX Integration</h5>
            <p>Beautiful frontends with responsive Bootstrap and clean UX.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;