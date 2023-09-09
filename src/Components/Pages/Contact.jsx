import Heading from "../ui/Heading";

function Contact() {
  return (
    <main id="contact" className="container">
      <Heading color="#2c3e50" heading="CONATCT SECTION" />
      <form className="form-floating d-flex flex-column">
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="name" placeholder="Name" />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="number" className="form-control" id="age" placeholder="Age" />
          <label htmlFor="age">Age</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="email" placeholder="Email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control" id="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-floating mb-3">
          <textarea className="form-control" id="message" placeholder="Message"></textarea>
          <label htmlFor="message">Message</label>
        </div>
        <button className="btn btn-primary mx-auto px-4">Submit</button>
      </form>
    </main>
  );
}

export default Contact;
