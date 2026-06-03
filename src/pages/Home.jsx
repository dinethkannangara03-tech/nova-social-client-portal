import { Link } from "react-router-dom";

const servicePreview = [
  "Social media systems",
  "Scroll-stopping content",
  "Growth-focused paid ads",
];

const projectPreview = [
  "Restaurant Campaign",
  "Fitness Brand Growth",
  "Clothing Brand Reels",
];

export default function Home() {
  return (
    <div className="page">
      <section className="hero section-grid">
        <div className="hero-copy">
          <span className="eyebrow">Nova Social Studio</span>
          <h1>Turn attention into growth.</h1>
          <p>
            A premium social-media agency crafting content systems, campaign
            strategy, and client-ready creative for brands that want measurable
            momentum.
          </p>
          <div className="button-row">
            <Link className="btn btn-secondary" to="/work">
              View Work
            </Link>
            <Link className="btn btn-primary" to="/contact">
              Start a Project
            </Link>
          </div>
        </div>
        <div className="hero-panel glass-card">
          <div className="metric-orbit">
            <span>+184%</span>
            <small>campaign reach</small>
          </div>
          <div className="signal-card">
            <strong>Weekly creative pulse</strong>
            <span>Reels, carousels, ads, captions, reporting</span>
          </div>
          <div className="growth-line" />
          <div className="hero-stats">
            <span>48 content drops</span>
            <span>12 brand refreshes</span>
            <span>6 ad launches</span>
          </div>
        </div>
      </section>

      <section className="preview-grid">
        <div>
          <span className="eyebrow">Services</span>
          <h2>Built for modern social growth</h2>
        </div>
        <div className="card-grid three">
          {servicePreview.map((service) => (
            <article className="glass-card compact-card" key={service}>
              <span className="card-index">0{servicePreview.indexOf(service) + 1}</span>
              <h3>{service}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="preview-grid">
        <div>
          <span className="eyebrow">Selected Work</span>
          <h2>Campaigns with a clear creative edge</h2>
        </div>
        <div className="card-grid three">
          {projectPreview.map((project) => (
            <article className="glass-card project-mini" key={project}>
              <div className="project-art" />
              <h3>{project}</h3>
              <p>Strategy, production, publishing, and performance review.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <span className="eyebrow">Ready when you are</span>
          <h2>Launch your next social chapter with Nova.</h2>
        </div>
        <Link className="btn btn-primary" to="/contact">
          Start a Project
        </Link>
      </section>
    </div>
  );
}
