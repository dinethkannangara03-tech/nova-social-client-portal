export default function Contact() {
  return (
    <div className="page">
      <section className="page-hero">
        <span className="eyebrow">Contact</span>
        <h1>Start a sharper social presence.</h1>
        <p>
          Tell Nova Social Studio what you are building, and we will help shape
          the next creative move.
        </p>
      </section>
      <section className="contact-layout">
        <article className="glass-card contact-card">
          <h2>Business details</h2>
          <p>Nova Social Studio</p>
          <p>Colombo, Sri Lanka</p>
          <p>Monday to Friday, 9:00 AM - 6:00 PM</p>
          <a className="btn btn-primary" href="https://wa.me/94700000000">
            WhatsApp
          </a>
        </article>
        <article className="glass-card contact-card">
          <h2>Reach us online</h2>
          <a href="mailto:hello@novasocial.studio">hello@novasocial.studio</a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <p>Project requests, retainers, collaborations, and client support.</p>
        </article>
      </section>
    </div>
  );
}
