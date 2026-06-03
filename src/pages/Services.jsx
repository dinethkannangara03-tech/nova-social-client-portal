const services = [
  {
    title: "Social Media Management",
    text: "Content calendars, publishing rhythm, community care, and monthly performance clarity.",
  },
  {
    title: "Content Creation",
    text: "Campaign concepts, short-form scripts, branded visuals, captions, and creative direction.",
  },
  {
    title: "Reels Editing",
    text: "Punchy edits with pacing, hooks, subtitles, motion, and platform-ready exports.",
  },
  {
    title: "Paid Ads Management",
    text: "Audience setup, creative testing, budget pacing, and conversion-focused reporting.",
  },
  {
    title: "Brand Design",
    text: "Social identity systems, templates, color direction, and polished brand assets.",
  },
  {
    title: "Monthly Content Packages",
    text: "Retainer-ready packages that combine strategy, production, posting, and reporting.",
  },
];

export default function Services() {
  return (
    <div className="page">
      <section className="page-hero">
        <span className="eyebrow">Services</span>
        <h1>Social growth, designed as a system.</h1>
        <p>
          Choose focused creative support or a complete monthly content engine
          built around your brand goals.
        </p>
      </section>
      <section className="card-grid services-grid">
        {services.map((service, index) => (
          <article className="glass-card service-card" key={service.title}>
            <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
