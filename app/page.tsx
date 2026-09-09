import Image from "next/image";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { HouseExplorer } from "@/components/HouseExplorer";
import { ProjectDirectory } from "@/components/ProjectDirectory";
import { ProjectLink, StatusBadge } from "@/components/ProjectLink";
import { Icon } from "@/components/Icon";
import { featuredProjectIds, projects } from "@/lib/projects";

const principles = [
  {
    number: "01",
    title: "Start with a real problem.",
    body: "A frustrating repair, a missed conversation, a process that gets in the way. I start with the experience of residents and frontline colleagues.",
  },
  {
    number: "02",
    title: "Make something to learn from.",
    body: "An idea becomes more useful when people can try it. I build small, share early and use what I learn to decide what comes next.",
  },
  {
    number: "03",
    title: "Keep the good ideas moving.",
    body: "Useful lessons deserve to travel. This collection is a place to share the thinking, invite a different perspective and find opportunities to work together.",
  },
];

export default function Page() {
  const featured = featuredProjectIds.map(
    (id) => projects.find((project) => project.id === id)!,
  );
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="home-page">
        <HouseExplorer />
        <section
          className="featured-section site-width"
          aria-labelledby="featured-heading"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">A few places to start</p>
              <h2 id="featured-heading">Small ideas. Real possibilities.</h2>
            </div>
            <a href="#projects" className="text-link">
              Meet the whole collection
              <Icon name="arrow" />
            </a>
          </div>
          <div className="featured-grid">
            {featured.map((project, index) => (
              <article
                className={`featured-project featured-${project.id}`}
                key={project.id}
              >
                <ProjectLink project={project} className="featured-art">
                  {project.preview ? (
                    <Image
                      src={project.preview.src}
                      alt={project.preview.alt}
                      width={project.preview.width}
                      height={project.preview.height}
                      sizes="(max-width: 700px) 90vw, (max-width: 1050px) 50vw, 420px"
                    />
                  ) : (
                    <div className="reading-feature">
                      <Icon name="book" />
                      <span>
                        A good book.
                        <br />A shared conversation.
                        <br />
                        <em>A little closer.</em>
                      </span>
                      <small>The Reading Room</small>
                    </div>
                  )}
                  <span className="feature-image-caption">
                    {project.preview
                      ? "Inside the prototype"
                      : "A space to connect"}
                    <Icon name="diagonal" />
                  </span>
                </ProjectLink>
                <div className="featured-copy">
                  <div className="featured-meta">
                    <span>
                      0{index + 1} / {project.tags[0]}
                    </span>
                    <StatusBadge status={project.status} />
                  </div>
                  <h3>{project.name}</h3>
                  <p className="feature-tagline">{project.tagline}</p>
                  <p>{project.description}</p>
                  <ProjectLink project={project} />
                </div>
              </article>
            ))}
          </div>
        </section>
        <ProjectDirectory />
        <section
          className="approach-section site-width"
          id="approach"
          aria-labelledby="approach-heading"
        >
          <div className="approach-intro">
            <p className="eyebrow">The thinking behind the building</p>
            <h2 id="approach-heading">
              Better housing starts
              <br />
              with a better <em>“what if?”</em>
            </h2>
            <p>
              I’m exploring how thoughtful digital tools can make social housing
              work better for the people who live in it and the people who look
              after it.
            </p>
            <p>
              This is a working collection. Some ideas are live, some are
              prototypes, and some are questions I think are worth asking.
            </p>
          </div>
          <div className="principles">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          className="contact-section site-width"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="contact-panel">
            <div>
              <p className="eyebrow">The door is open</p>
              <h2 id="contact-heading">
                Have a problem
                <br />
                worth exploring?
              </h2>
              <p>
                If you work in social housing and have an idea, a different
                perspective or a challenge that needs fresh thinking, there’s
                room for a conversation.
              </p>
            </div>
            <div className="contact-action">
              <span className="contact-symbol" aria-hidden="true">
                <Icon name="house" />
              </span>
              <span className="contact-placeholder">
                Contact details coming soon
              </span>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
