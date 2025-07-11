function Resume() {
  return (
    <section className="container" id="resume">
      <h2 className="section-title">Resume</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col" data-aos="fade-right">
          <div className="card text-center">
            <h4>🎓 Education</h4>
            <p>B.Sc. Computer Science<br />XYZ University (2019–2022)</p>
          </div>
        </div>
        <div className="col" data-aos="fade-left">
          <div className="card text-center">
            <h4>💼 Experience</h4>
            <p>Freelance Full Stack Developer<br />Built several client projects using Django and React.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Resume;
