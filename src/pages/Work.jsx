const projects = [
  "Restaurant Campaign",
  "Fitness Brand Growth",
  "Clothing Brand Reels",
  "Tutor Social Media Package",
  "Local Business Ads",
  "Personal Brand Content",
];

export default function Work() {
  return (
    <div className="page">
      <section className="page-hero">
        <span className="eyebrow">Portfolio</span>
        <h1>Professional campaign concepts for ambitious brands.</h1>
        <p>
          Six polished project directions showing the type of creative systems
          Nova Social Studio builds for clients.
        </p>
      </section>
      <section className="card-grid portfolio-grid">
        {projects.map((project, index) => (
          <article className="glass-card portfolio-card" key={project}>
            <div className={`portfolio-visual visual-${index + 1}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div>
              <h2>{project}</h2>
              <p>
                Creative strategy, edited content, visual direction, and
                reporting prepared for a high-trust client presentation.
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
