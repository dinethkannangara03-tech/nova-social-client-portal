const team = [
  { name: "Avery Stone", role: "Creative Director" },
  { name: "Maya Quinn", role: "Content Strategist" },
  { name: "Jordan Vale", role: "Paid Media Lead" },
];

export default function Team() {
  return (
    <div className="page">
      <section className="page-hero">
        <span className="eyebrow">Team</span>
        <h1>Senior creative energy, lean agency focus.</h1>
        <p>
          A compact team built around strategy, visual polish, and clean client
          delivery.
        </p>
      </section>
      <section className="card-grid three">
        {team.map((member, index) => (
          <article className="glass-card team-card" key={member.name}>
            <div className={`avatar-placeholder avatar-${index + 1}`}>
              <span>{member.name.charAt(0)}</span>
            </div>
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
