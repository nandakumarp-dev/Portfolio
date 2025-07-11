function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container" data-aos="fade-up">
        <h2 className="mb-4">Contact</h2>
        <form>
          <div className="mb-3">
            <label>Name</label>
            <input className="form-control" type="text" placeholder="Your name" />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input className="form-control" type="email" placeholder="Your email" />
          </div>
          <div className="mb-3">
            <label>Message</label>
            <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
          </div>
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
