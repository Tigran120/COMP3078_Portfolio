import { useState } from "react";
import {
  about,
  capstoneDetails,
  capstoneMockups,
  careerPhilosophy,
  coverLetterTemplate,
  education,
  experience,
  personalInfo,
  professionalWorkSamples,
  projects,
  skills
} from "./data/portfolioData";

const navItems = [
  ["about", "About"],
  ["philosophy", "Career Philosophy"],
  ["resume", "Resume"],
  ["cover-letter", "Cover Letter"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["capstone", "Capstone"],
  ["credentials", "Academic Credentials"],
  ["professional-summary", "Professional Summary"],
  ["contact", "Contact"]
];

function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <header className="section-head">
          {kicker ? <p className="section-kicker">{kicker}</p> : null}
          <h2 className="section-title">{title}</h2>
        </header>
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}

function TechPills({ items }) {
  return (
    <div className="tech-row" role="list">
      {items.map((tech) => (
        <span key={tech} className="tech-pill" role="listitem">
          {tech}
        </span>
      ))}
    </div>
  );
}

function MockupGallery({ items }) {
  return (
    <div className="mockup-gallery">
      {items.map((item) => (
        <figure key={item.src} className="mockup-card">
          <a
            href={item.src}
            target="_blank"
            rel="noreferrer"
            className="mockup-image-link"
            aria-label={`Open full size: ${item.title}`}
          >
            <img
              src={item.src}
              alt={`Schedulo — ${item.title}: ${item.caption}`}
              loading="lazy"
            />
          </a>
          <figcaption>
            <strong>{item.title}</strong>
            <span>{item.caption}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);
  const resumeFileUrl = "/Resume.pdf";

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-root">
      <header className="topbar">
        <div className="container topbar-wrap">
          <div className="topbar-inner">
            <a href="#home" className="brand" onClick={closeMenu}>
              {personalInfo.name}
            </a>
            <nav className="nav nav-desktop" aria-label="Primary">
              {navItems.map(([href, label]) => (
                <a key={href} href={`#${href}`}>
                  {label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="menu-toggle-icon" aria-hidden>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
          <nav
            id="mobile-nav"
            className={`nav-mobile${menuOpen ? " is-open" : ""}`}
            aria-label="Mobile"
          >
            {navItems.map(([href, label]) => (
              <a
                key={href}
                href={`#${href}`}
                onClick={() => {
                  closeMenu();
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <h1>{personalInfo.name}</h1>
              <p className="subtitle">
                Computer Programming &amp; Analysis · Software engineering &amp;
                cybersecurity focus
              </p>
              <p className="hero-lead">{personalInfo.objective}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  View projects
                </a>
                <a className="btn btn-outline" href={resumeFileUrl} target="_blank" rel="noreferrer">
                  Download resume
                </a>
                <a className="btn btn-outline" href="#contact">
                  Get in touch
                </a>
              </div>
            </div>
            <aside className="info-card">
              <h3>Contact snapshot</h3>
              <ul>
                <li>
                  <strong>Location</strong>
                  {personalInfo.location}
                </li>
                <li>
                  <strong>Email</strong>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </li>
                <li>
                  <strong>Phone</strong>
                  <a href={`tel:${personalInfo.phone.replaceAll(" ", "")}`}>
                    {personalInfo.phone}
                  </a>
                </li>
                <li>
                  <strong>LinkedIn</strong>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                    View profile
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <Section id="about" kicker="Introduction" title="About">
          <p>{about}</p>
        </Section>

        <Section id="philosophy" kicker="Values" title="Career philosophy">
          {careerPhilosophy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Section>

        <Section id="resume" kicker="Documents" title="Resume">
          <div className="grid-2">
            <article className="card">
              <h3>Career objective</h3>
              <p>{personalInfo.objective}</p>
            </article>
            <article className="card">
              <h3>PDF resume</h3>
              <p>Open or save the latest version of my resume.</p>
              <a
                className="btn btn-primary"
                href={resumeFileUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open resume PDF
              </a>
            </article>
          </div>
        </Section>

        <Section id="cover-letter" kicker="Templates" title="Cover letter">
          <div className="card">
            <pre className="letter">{coverLetterTemplate}</pre>
          </div>
        </Section>

        <Section id="skills" kicker="Toolkit" title="Technical skills">
          <div className="skills-grid">
            {Object.entries(skills).map(([category, list]) => (
              <article key={category} className="card">
                <h3>{category}</h3>
                <TechPills items={list} />
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" kicker="Academic work" title="Projects">
          <article className="project-featured">
            <p className="tag">Featured capstone</p>
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.description}</p>
            <p className="meta-label">Technologies</p>
            <TechPills items={featuredProject.technologies} />
            <p className="meta-label">Highlights</p>
            <ul>
              {featuredProject.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <p className="meta-label">What I learned</p>
            <p>{featuredProject.learning}</p>
            <p className="meta-label">Interface mockups</p>
            <p className="mockup-intro">
              High-fidelity screens from <strong>Schedulo</strong> (intelligent workforce
              management).{" "}
              <a href="#capstone">View the full mockup set in Capstone</a>.
            </p>
            <div className="project-mockup-preview">
              <a
                href={capstoneMockups[0].src}
                target="_blank"
                rel="noreferrer"
                className="mockup-image-link"
                aria-label={`Open full size: ${capstoneMockups[0].title}`}
              >
                <img
                  src={capstoneMockups[0].src}
                  alt={`Schedulo — ${capstoneMockups[0].title}`}
                  loading="lazy"
                />
              </a>
            </div>
          </article>

          <div className="projects-grid">
            {otherProjects.map((project) => (
              <article key={project.title} className="project-card">
                <p className="tag">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="meta-label">Technologies</p>
                <TechPills items={project.technologies} />
                <p className="meta-label">Features</p>
                <ul>
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <p className="meta-label">What I learned</p>
                <p>{project.learning}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="capstone" kicker="Deep dive" title="Capstone (detailed)">
          <div className="card capstone-card">
            <div className="capstone-block">
              <h3>Project summary</h3>
              <p>{capstoneDetails.summary}</p>
            </div>
            <div className="capstone-block">
              <h3>Project vision</h3>
              <p>{capstoneDetails.vision}</p>
            </div>
            <div className="capstone-block">
              <h3>Business requirements</h3>
              <ul>
                {capstoneDetails.businessRequirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="capstone-block">
              <h3>Project plan</h3>
              <ul>
                {capstoneDetails.projectPlan.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="capstone-block">
              <h3>Requirements analysis &amp; design</h3>
              <ul>
                {capstoneDetails.analysisAndDesign.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="capstone-block capstone-block--mockups">
              <h3>Wireframes / mockups</h3>
              <p className="capstone-mockups-lead">
                Product screenshots for <strong>Schedulo</strong> — manager dashboard,
                scheduling, employees, requests, and analytics. Click any image to open
                the full-size PNG in a new tab.
              </p>
              <MockupGallery items={capstoneMockups} />
            </div>
            <div className="capstone-block">
              <h3>Status reports</h3>
              <ul>
                {capstoneDetails.statusReports.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="capstone-block">
              <h3>System implementation</h3>
              <ul>
                {capstoneDetails.implementation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="capstone-block">
              <h3>Team collaboration</h3>
              <p>{capstoneDetails.collaboration}</p>
            </div>
          </div>
        </Section>

        <Section id="credentials" kicker="Education" title="Academic credentials">
          <div className="grid-2">
            <article className="card">
              <h3>{education.institution}</h3>
              <p className="capstone-subtitle">{education.program}</p>
              <p className="edu-grad">
                <span className="edu-grad-label">Graduation</span>
                {education.graduation}
              </p>
              <p className="meta-label">Program highlights</p>
              <ul>
                {education.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="card">
              <h3>Awards &amp; distinctions</h3>
              <p>
                None listed at this time. This area is reserved for future academic
                recognition.
              </p>
            </article>
          </div>
        </Section>

        <Section id="professional-summary" kicker="Experience" title="Professional summary">
          <div className="stack-cards">
          {experience.map((job) => (
            <article key={job.role} className="card">
              <h3>{job.role}</h3>
              <p className="job-meta">
                {job.company} · {job.location}
              </p>
              <p className="job-period">{job.period}</p>
              <ul>
                {job.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
          </div>
          <article className="card work-samples-card">
            <h3>Work samples (GitHub)</h3>
            <p className="work-samples-intro">
              Public repositories that showcase coursework, a group mobile project, and
              capstone collaboration. These support the portfolio alongside paid experience
              above.
            </p>
            <ul className="work-sample-list">
              {professionalWorkSamples.map((sample) => (
                <li key={sample.url}>
                  <a href={sample.url} target="_blank" rel="noreferrer">
                    {sample.title}
                  </a>
                  <span className="work-sample-desc">{sample.description}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="card stack-cards-extra">
            <h3>Volunteer &amp; additional recognition</h3>
            <p>
              Space reserved for volunteer work, clubs, or other contributions as they
              are added to my profile.
            </p>
          </article>
        </Section>

        <Section id="contact" kicker="Let&apos;s talk" title="Contact">
          <div className="grid-2">
            <article className="card">
              <h3>Reach out</h3>
              <p>
                I am interested in internship and junior roles in software engineering
                and cybersecurity. I typically respond within one business day.
              </p>
              <p className="meta-label">Email</p>
              <p>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </p>
              <p className="meta-label">Phone</p>
              <p>
                <a href={`tel:${personalInfo.phone.replaceAll(" ", "")}`}>
                  {personalInfo.phone}
                </a>
              </p>
              <p className="meta-label">LinkedIn</p>
              <p>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                  {personalInfo.linkedin}
                </a>
              </p>
            </article>
            <article className="card">
              <h3>Resume</h3>
              <p>
                For recruiters and hiring managers, my resume is available as a PDF.
              </p>
              <a
                className="btn btn-outline"
                href={resumeFileUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open resume PDF
              </a>
            </article>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} {personalInfo.name} · COMP3078 Portfolio ·
            Toronto, ON
          </p>
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
