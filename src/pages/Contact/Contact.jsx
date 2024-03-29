

const Contact = () => {
  return (
    <section className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/place/Moya+Food+Complex+%7C+Gerji+%7C+%E1%88%9E%E1%8B%AB+%E1%8B%A8%E1%88%9D%E1%8C%8D%E1%89%A5+%E1%8A%AE%E1%88%9D%E1%8D%95%E1%88%8C%E1%8A%AD%E1%88%B5+%7C+%E1%8C%88%E1%88%AD%E1%8C%82/@8.9994539,38.7964758,498m/data=!3m1!1e3!4m9!1m2!2m1!1sbole!3m5!1s0x164b853ada110dcb:0xcb78900137162cd0!8m2!3d8.9997451!4d38.7986197!16s%2Fg%2F11fmmczz35?hl=en&entry=ttu"
            width="400" height="300" loading="lazy" title="Google Map"></iframe>
        </figure>
      </section>

      <section className="contact-form">

        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form>

          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />

            <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
          </div>

          <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>

        </form>

      </section>

    </section>
  );
};

export default Contact;
