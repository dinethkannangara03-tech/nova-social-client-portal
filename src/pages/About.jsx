export default function About() {
  return (
    <div className="page">
      <section className="page-hero">
        <span className="eyebrow">About Nova</span>
        <h1>We help brands become impossible to ignore.</h1>
        <p>
          Nova Social Studio blends content strategy, brand taste, and
          performance thinking so every post has a purpose beyond looking good.
        </p>
      </section>
      <section className="about-layout">
        <article className="glass-card story-card">
          <h2>Our mission</h2>
          <p>
            We turn scattered ideas into consistent social presence. Our work is
            designed for founders, creators, and growing businesses that need
            premium creative without losing commercial focus.
          </p>
        </article>
        <div className="process-list">
          {["Discover", "Design", "Deploy", "Optimize"].map((step, index) => (
            <article className="glass-card process-card" key={step}>
              <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
              <p>
                {step === "Discover" &&
                  "Clarify goals, audience, voice, competitors, and content opportunities."}
                {step === "Design" &&
                  "Build content concepts, templates, ad angles, and publishing structure."}
                {step === "Deploy" &&
                  "Launch assets across platforms with clean scheduling and client communication."}
                {step === "Optimize" &&
                  "Review performance, refine creative, and improve the next content cycle."}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
