import PageBanner from "../components/PageBanner";
import "./Career.css";

export default function Careers() {
  return (
    <div className="careers-page">
      <PageBanner
        tag="JOIN THE TEAM"
        title="Build What Matters."
        subtitle="We value people who bring curiosity, ownership, integrity and a long-term mindset."
      />

      <section className="section-padding">
        <div className="section-header">
          <span className="section-tag">OPPORTUNITIES</span>
          <h2>Current Openings</h2>
        </div>
        <div className="openings-grid">
          {[
            { pos: "Real Estate Investment Analyst", dept: "Investment", loc: "Lucknow, UP", exp: "2-4 Years" },
            { pos: "Project Strategy Manager", dept: "Development", loc: "Noida, UP", exp: "4-6 Years" },
            { pos: "Land Acquisition Specialist", dept: "Advisory", loc: "Varanasi, UP", exp: "3-5 Years" }
          ].map((j, i) => (
            <div key={i} className="job-card">
              <div>
                <h3>{j.pos}</h3>
                <p>{j.dept} • {j.loc} • {j.exp}</p>
              </div>
              <button className="btn-gold">Apply Now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}