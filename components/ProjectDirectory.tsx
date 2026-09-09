"use client";

import { useState } from "react";
import { projects, rooms, type RoomId } from "@/lib/projects";
import { Icon } from "./Icon";
import { ProjectLink, StatusBadge } from "./ProjectLink";

export function ProjectDirectory() {
  const [room, setRoom] = useState<RoomId | "all">("all");
  const filtered =
    room === "all"
      ? projects
      : projects.filter((project) => project.room === room);

  return (
    <section
      className="directory-section"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <span id="discovery" className="legacy-anchor" aria-hidden="true" />
      <div className="site-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The collection</p>
            <h2 id="projects-heading">Every idea has a place.</h2>
          </div>
          <p>
            From a first “what if” to a working tool.
            <br />
            Explore the collection at your own pace.
          </p>
        </div>
        <div className="directory-toolbar">
          <div
            className="directory-filters"
            role="group"
            aria-label="Filter ideas by room"
          >
            <button
              type="button"
              onClick={() => setRoom("all")}
              aria-pressed={room === "all"}
            >
              All ideas <span>{projects.length}</span>
            </button>
            {rooms.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setRoom(item.id)}
                aria-pressed={room === item.id}
              >
                {item.shortName}
              </button>
            ))}
          </div>
          <p className="directory-count" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "idea" : "ideas"}
          </p>
        </div>
        <div className="project-directory">
          {filtered.map((project) => (
            <article className="directory-project" key={project.id}>
              <div className="directory-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={project.iconPath} />
                </svg>
              </div>
              <div className="directory-copy">
                <div className="project-heading">
                  <h3>{project.name}</h3>
                  <StatusBadge status={project.status} />
                </div>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <ProjectLink project={project} className="directory-open">
                <span>
                  {project.kind === "brief" ? "Read the idea" : "Open app"}
                </span>
                <Icon name="diagonal" />
              </ProjectLink>
            </article>
          ))}
        </div>
        <div className="directory-invitation">
          <span>
            <Icon name="plus" />
            There’s room for another good idea.
          </span>
          <a href="#contact" className="text-link">
            Let’s explore it
            <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
