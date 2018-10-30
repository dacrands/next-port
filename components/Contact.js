const Contact = () => (
  <div className="contact" id="contact">
    <div className="container">
      <h1 className="primary">Contact</h1>
      <form className="form" action="">
        <label htmlFor="email">


            Email

          <input type="email" id="email" required />
        </label>
        <label htmlFor="message">


          Message me!

          <textarea name="message" id="message" cols="30" rows="10" />
        </label>

        <div className="form__button">
          <button className="button" type="submit">Send &rsaquo;</button>
        </div>
      </form>
    </div>
  </div>


);

export default Contact;
