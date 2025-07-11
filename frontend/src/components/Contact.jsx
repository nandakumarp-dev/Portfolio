function Contact() {
  return (
    <section className="container" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <form className="row g-3" data-aos="fade-up">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="col-md-6">
          <input type="email" className="form-control" placeholder="Your Email" />
        </div>
        <div className="col-12">
          <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">Send Message</button>
        </div>
      </form>
    </section>
  );
}
export default Contact;