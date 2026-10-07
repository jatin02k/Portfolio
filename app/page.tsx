import { XIcon, GitHubIcon, LinkedInIcon, MailIcon } from './icons';

const projects = [
  {
    number: '01',
    name: 'RFQDeck',
    type: 'Procurement workflow · Product prototype',
    description: 'A buyer-side RFQ tool for SME procurement teams to send requests to multiple vendors and collect quotes into a single comparison view, replacing manual tracking across email.',
    problem: 'RFQs, vendor follow-ups and quote comparisons often live across scattered email threads and spreadsheets.',
    solution: 'Designed multi-vendor database schema and auth for independent quotes, plus a side-by-side comparison view with AI recommendations.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Gemini API'],
    visual: 'rfq',
    url: 'https://rfqdeck.com',
    linkType: 'live',
    linkText: 'Live: rfqdeck.com',
  },
  {
    number: '02',
    name: 'Appointor',
    type: 'Multi-tenant SaaS · Product prototype',
    description: 'Appointment management platform for service businesses, handling bookings, schedules, automated reminders, and payment processing.',
    problem: 'Bookings, customer records and reminders become disconnected across calendars and messaging apps as a business grows.',
    solution: 'A shared multi-tenant system for appointment scheduling, business dashboards, customer management, and integrated payments.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Razorpay', 'Resend'],
    visual: 'appointor',
    url: 'https://appointor.vercel.app/',
    linkType: 'live',
    linkText: 'Live: appointor.vercel.app',
  },
  {
    number: '03',
    name: 'Hotel FAQ RAG Assistant',
    type: 'Backend RAG Pipeline · Vector Search',
    description: 'A backend RAG pipeline that answers hotel guest questions such as check-in times, cancellation, and pet policy directly from verified hotel documents.',
    problem: 'Guest inquiries are buried across hotel documents, leading to repetitive questions and severe hallucination risks with generic AI.',
    solution: 'Chunked documents with Gemini embeddings in Redis hashes, custom cosine similarity retrieval in NumPy from scratch, similarity threshold fallback, and FastAPI /ask endpoint.',
    stack: ['Python', 'FastAPI', 'Redis', 'Gemini API', 'NumPy'],
    visual: 'hotel-rag',
    url: 'https://github.com/jatin02k/Hotel-FAQ-RAG-Assistant',
    linkType: 'github',
    linkText: 'GitHub: Hotel-FAQ-RAG-Assistant',
  },
];

const services = [
  ['01', 'AI workflow automation', 'Turn repetitive business processes into automated workflows.', 'Lead qualification · Document processing · Email workflows · Internal operations'],
  ['02', 'AI integration', 'Add practical AI capabilities to existing products and systems.', 'RAG · AI assistants · LLM APIs · Semantic search'],
  ['03', 'Custom software', 'Build internal tools and business applications around the way your team works.', 'Dashboards · Client portals · Admin systems · Business tools'],
  ['04', 'SaaS / MVP development', 'Take an idea from workflow to a working product.', 'Authentication · Payments · APIs · Databases · Deployment'],
];

function Preview({ kind }: { kind: string }) {
  if (kind === 'rfq') {
    return (
      <div className="preview rfq-preview" aria-label="RFQDeck interface preview">
        <div className="preview-image-frame">
          <img
            src="/images/rfqdeck-preview.png"
            alt="RFQDeck quotation comparison matrix interface"
            className="preview-img"
          />
        </div>
        <div className="preview-caption">
          <span>RFQDeck / procurement engine</span>
          <span>LIVE: rfqdeck.com&nbsp; ↗</span>
        </div>
      </div>
    );
  }

  if (kind === 'appointor') {
    return (
      <div className="preview small-preview appointor-preview" aria-label="Appointor interface preview">
        <div className="preview-image-frame">
          <img
            src="/images/appointor-preview.png"
            alt="Appointor booking platform interface preview"
            className="preview-img"
          />
        </div>
        <div className="preview-caption preview-caption-dark">
          <span>Appointor / studio booking OS</span>
          <span>LIVE: appointor.vercel.app&nbsp; ↗</span>
        </div>
      </div>
    );
  }

  return (
    <div className="preview small-preview knowledge-preview" aria-label="Hotel FAQ RAG Assistant interface preview">
      <div className="knowledge-window">
        <div className="knowledge-sidebar">
          <span className="knowledge-mark">hotel<span>/rag</span></span>
          <div className="kb-active">⌂ &nbsp; Policy Docs</div>
          <div>▤ &nbsp; Redis Hashes</div>
          <div>⌕ &nbsp; NumPy Cosine</div>
          <div className="kb-bottom">Indexed policies<br/><i/> check_in_rules.pdf<br/><i/> cancellation_policy.txt</div>
        </div>
        <div className="knowledge-chat">
          <span className="kb-label">FASTAPI /ASK · RETRIEVAL PIPELINE</span>
          <h3>Hotel FAQ RAG<br/>Assistant</h3>
          <div className="question">What is the check-in time and cancellation policy?</div>
          <div className="answer-label">FASTAPI RESPONSE · NUMPY COSINE (SIMILARITY 0.92)</div>
          <p>Check-in starts at 3:00 PM. Full refund for cancellations made 24h prior to arrival. Strict policy fallback enabled.</p>
          <div className="source">↳ Chunk #04 · hotel_policies.pdf · Redis hash</div>
          <div className="ask">FastAPI /ask endpoint query… <span>/ask ↑</span></div>
        </div>
      </div>
      <div className="preview-caption"><span>Hotel FAQ Assistant / NumPy & Redis RAG</span><span>VIEW ON GITHUB&nbsp; ↗</span></div>
    </div>
  );
}

export default function Home() {
  return <>
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <a className="wordmark" href="#home">JATIN KUMAR<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
        </div>
        <a className="nav-cta" href="#contact">Let’s talk <span>↗</span></a>
        <a className="mobile-cta" href="#contact" aria-label="Contact Jatin Kumar">↗</a>
      </nav>
    </header>

    <main>
      <section id="home" className="hero container">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> FULL-STACK <span>×</span> AI <span>×</span> AUTOMATION</div>
          <h1>Software that automates<br/><span>the manual work.</span></h1>
          <div className="hero-bottom">
            <p>I build AI-powered workflows, internal tools and custom software that help businesses automate repetitive processes and scale operations.</p>
            <div className="hero-actions">
              <a href="#contact" className="button button-light">Discuss a project <span>↗</span></a>
              <a href="mailto:jatin02kr@gmail.com" className="text-link hero-social-link">
                <MailIcon className="icon-xs" />
                <span>jatin02kr@gmail.com</span>
                <span className="arrow-accent">↗</span>
              </a>
              <a
                href="https://x.com/jatin02k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link hero-social-link"
              >
                <XIcon className="icon-xs" />
                <span>@jatin02k on X</span>
                <span className="arrow-accent">↗</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-aside">
          <div className="availability"><i/> Available for freelance projects</div>
          <div className="hero-profile">
            <div className="hero-profile-ring"/>
            <div className="hero-profile-frame">
              <img
                src="/images/jatin-profile.png"
                alt="Jatin Kumar - Full Stack Developer"
                className="hero-profile-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities">
        <div className="container capability-row">
          <span className="cap-label">WHAT I WORK ON</span>
          {['AI automation', 'Full-stack development', 'API integrations', 'SaaS', 'Internal tools'].map(x => (
            <span className="cap-item" key={x}><i/>{x}</span>
          ))}
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow muted">01 / SELECTED WORK</div>
              <h2>Systems built around<br/>real workflows.</h2>
            </div>
            <p>Products and systems I’ve designed and built. Made to solve specific operational problems with clean code and practical AI.</p>
          </div>
          <div className="projects">
            {projects.map((p, i) => (
              <article className={`project project-${i + 1}`} key={p.name}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-preview-link"
                  aria-label={`Open ${p.name} (${p.linkText})`}
                >
                  <Preview kind={p.visual}/>
                </a>
                <div className="project-info">
                  <div className="project-title-row">
                    <span className="project-number">{p.number} /</span>
                    <div>
                      <h3>{p.name}</h3>
                      <div className="project-type">{p.type}</div>
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`Open ${p.name}`}
                    >
                      ↗
                    </a>
                  </div>
                  <div className="project-link-row">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-pill-link"
                    >
                      <span className={p.linkType === 'live' ? 'live-dot' : 'code-icon'}>
                        {p.linkType === 'live' ? '●' : <GitHubIcon className="icon-2xs" />}
                      </span>
                      {p.linkText}
                      <span className="pill-arrow">↗</span>
                    </a>
                  </div>
                  <p className="project-description">{p.description}</p>
                  <div className="project-details">
                    <div>
                      <span className="detail-label">THE PROBLEM</span>
                      <p>{p.problem}</p>
                    </div>
                    <div>
                      <span className="detail-label">THE APPROACH</span>
                      <p>{p.solution}</p>
                    </div>
                  </div>
                  <div className="tags">
                    {p.stack.map(t => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow muted">02 / SERVICES</div>
              <h2>What I can build.</h2>
            </div>
            <p>Practical software for the work your team does every day.</p>
          </div>
          <div className="service-list">
            {services.map(([n, title, desc, examples]) => (
              <article className="service" key={n}>
                <span className="service-number">{n}</span>
                <div className="service-main">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <div className="service-examples">{examples}</div>
                <span className="service-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section process-section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow muted">03 / HOW I WORK</div>
              <h2>From problem to<br/>working software.</h2>
            </div>
            <p>A straightforward process, with clear decisions at each step.</p>
          </div>
          <div className="process-grid">
            {[
              ['01', 'Understand', 'I learn how the workflow currently works and where time is being wasted.'],
              ['02', 'Design', 'I turn the problem into a simple technical solution and define the smallest useful version.'],
              ['03', 'Build', 'I build, integrate and deploy the system.'],
              ['04', 'Improve', 'After launch, we refine the workflow based on actual usage.'],
            ].map(([n, t, d]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div>
            <div className="eyebrow muted">04 / A LITTLE ABOUT ME</div>
            <h2>Developer, builder,<br/><em>problem solver.</em></h2>
          </div>
          <div className="about-copy">
            <p>I’m Jatin Kumar, a full-stack developer focused on building practical software products and AI-powered workflows.</p>
            <p>I enjoy taking messy business processes and turning them into simple, robust software systems.</p>
            <p>My background is in engineering, and my focus is shipping reliable end-to-end applications from database to interface.</p>
            <div className="about-meta">
              <span><i/> Available for freelance & contracts</span>
              <span>Remote worldwide</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stack-section">
        <div className="container stack-grid">
          <div>
            <div className="eyebrow muted">05 / THE TOOLKIT</div>
            <h2>Tools for the<br/>job at hand.</h2>
          </div>
          <div className="stack-groups">
            {[
              ['Frontend', 'Next.js · React · TypeScript · Tailwind'],
              ['Backend', 'Node.js · Python · FastAPI · REST APIs'],
              ['Data', 'PostgreSQL · Supabase · MongoDB · Redis'],
              ['AI', 'Gemini API · LLM APIs · RAG · Embeddings · Vector Search'],
              ['Infrastructure', 'Git · Linux · Docker · Vercel'],
            ].map(([a, b]) => (
              <div key={a}>
                <span>{a}</span>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-inner">
          <div className="eyebrow"><span className="eyebrow-line"/> HAVE A PROCESS IN MIND?</div>
          <h2>Have a workflow<br/>worth <em>automating?</em></h2>
          <div className="contact-bottom">
            <p>Tell me what you’re trying to improve. I’ll tell you whether software or automation can actually help. Reach out directly via email or X.</p>
            <div className="contact-actions">
              <a className="button button-light button-with-icon" href="mailto:jatin02kr@gmail.com">
                <MailIcon className="icon-sm" />
                <span>Email Jatin</span>
                <span>↗</span>
              </a>
              <a
                className="button button-secondary button-with-icon"
                href="https://x.com/jatin02k"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon className="icon-sm" />
                <span>DM on X</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="contact-cards-grid">
            <a className="contact-card" href="mailto:jatin02kr@gmail.com">
              <div className="contact-card-header">
                <span className="contact-card-icon"><MailIcon className="icon-sm" /></span>
                <span className="contact-card-label">EMAIL DIRECTLY</span>
              </div>
              <span className="contact-card-val">jatin02kr@gmail.com</span>
              <span className="contact-card-arrow">↗</span>
            </a>
            <a
              className="contact-card"
              href="https://x.com/jatin02k"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-card-header">
                <span className="contact-card-icon"><XIcon className="icon-sm" /></span>
                <span className="contact-card-label">DIRECT MESSAGE ON X</span>
              </div>
              <span className="contact-card-val">x.com/jatin02k</span>
              <span className="contact-card-arrow">↗</span>
            </a>
            <a
              className="contact-card"
              href="https://linkedin.com/in/jatin-kumar221"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-card-header">
                <span className="contact-card-icon"><LinkedInIcon className="icon-sm" /></span>
                <span className="contact-card-label">LINKEDIN PROFILE</span>
              </div>
              <span className="contact-card-val">in/jatin-kumar221</span>
              <span className="contact-card-arrow">↗</span>
            </a>
            <a
              className="contact-card"
              href="https://github.com/jatin02k"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-card-header">
                <span className="contact-card-icon"><GitHubIcon className="icon-sm" /></span>
                <span className="contact-card-label">GITHUB REPOSITORIES</span>
              </div>
              <span className="contact-card-val">github.com/jatin02k</span>
              <span className="contact-card-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="container footer-top">
        <div>
          <a className="wordmark" href="#home">JATIN KUMAR<span>.</span></a>
          <p>AI automation · Full-stack · Custom Software</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/jatin02k" target="_blank" rel="noopener noreferrer" className="footer-link-item">
            <GitHubIcon className="icon-xs" />
            <span>GitHub</span>
            <span>↗</span>
          </a>
          <a href="https://linkedin.com/in/jatin-kumar221" target="_blank" rel="noopener noreferrer" className="footer-link-item">
            <LinkedInIcon className="icon-xs" />
            <span>LinkedIn</span>
            <span>↗</span>
          </a>
          <a href="https://x.com/jatin02k" target="_blank" rel="noopener noreferrer" className="footer-link-item">
            <XIcon className="icon-xs" />
            <span>X / Twitter</span>
            <span>↗</span>
          </a>
          <a href="mailto:jatin02kr@gmail.com" className="footer-link-item">
            <MailIcon className="icon-xs" />
            <span>jatin02kr@gmail.com</span>
            <span>↗</span>
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Jatin Kumar</span>
        <a href="#home">Back to top ↑</a>
        <span>INDEPENDENTLY BUILT</span>
      </div>
    </footer>
  </>;
}
