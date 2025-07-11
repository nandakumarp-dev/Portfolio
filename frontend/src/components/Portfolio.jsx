function Portfolio() {
  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container" data-aos="fade-up">
        <h2 className="mb-4">Portfolio</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img src="/assets/images/project1.jpg" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Portfolio Website</h5>
                <p className="card-text">Built with React and Django REST API.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
