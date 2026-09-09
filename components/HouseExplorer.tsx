"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";
import { projects, projectsInRoom, rooms, type RoomId } from "@/lib/projects";
import { Icon } from "./Icon";
import { ProjectLink, StatusBadge } from "./ProjectLink";

export function HouseExplorer() {
  const [selectedRoom, setSelectedRoom] = useState<RoomId>("welcome");
  const [evening, setEvening] = useState(false);
  const [motion, setMotion] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [imageFailed, setImageFailed] = useState(false);
  const scene = useRef<HTMLDivElement>(null);
  const animationFrame = useRef<number>(0);
  const room = rooms.find((item) => item.id === selectedRoom)!;
  const roomProjects = projectsInRoom(selectedRoom);
  const previewProject = roomProjects.find((project) => project.preview);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    function updatePreference() {
      setReducedMotion(preference.matches);
      let enabled = true;
      try {
        enabled = localStorage.getItem("innovation-hub-motion") !== "off";
      } catch {
        /* Device preferences are optional. */
      }
      setMotion(!preference.matches && enabled);
    }
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => {
      preference.removeEventListener("change", updatePreference);
      cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  useEffect(() => {
    if (!motion && scene.current) {
      cancelAnimationFrame(animationFrame.current);
      scene.current.style.setProperty("--rotate-x", "0deg");
      scene.current.style.setProperty("--rotate-y", "0deg");
    }
  }, [motion]);

  function toggleMotion() {
    const next = !motion;
    setMotion(next);
    try {
      localStorage.setItem("innovation-hub-motion", next ? "on" : "off");
    } catch {
      /* The control works without storage. */
    }
  }

  function moveHouse(event: PointerEvent<HTMLDivElement>) {
    if (!motion || event.pointerType !== "mouse" || !scene.current) return;
    const bounds = scene.current.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 4;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -3;
    cancelAnimationFrame(animationFrame.current);
    animationFrame.current = requestAnimationFrame(() => {
      scene.current?.style.setProperty("--rotate-x", `${y}deg`);
      scene.current?.style.setProperty("--rotate-y", `${x}deg`);
    });
  }

  function resetHouse() {
    cancelAnimationFrame(animationFrame.current);
    scene.current?.style.setProperty("--rotate-x", "0deg");
    scene.current?.style.setProperty("--rotate-y", "0deg");
  }

  return (
    <section
      className="house-explorer site-width"
      id="house"
      aria-labelledby="home-heading"
      data-motion={motion}
    >
      <div className="hero-intro">
        <p className="eyebrow">
          <span className="accent-dot" />
          Social housing. Open possibilities.
        </p>
        <h1 id="home-heading">
          A home for
          <br />
          <em>better ideas.</em>
        </h1>
        <p className="hero-description">
          Small experiments. Useful tools. New ways to make life better in the
          homes and communities we share.
        </p>
        <p className="hero-personal">
          My working collection of ideas for social housing.
          <br className="desktop-break" /> Come in and see what’s taking shape.
        </p>
        <a className="button button-primary hero-cta" href="#projects">
          Explore all {projects.length} ideas
          <Icon name="arrow" />
        </a>
        <div className="hero-footnote">
          <span className="mini-line" />
          Built around people. Shared with the sector.
        </div>
      </div>

      <div className="house-visual" data-evening={evening}>
        <div className="house-toolbar">
          <span className="eyebrow house-address">01 / The house of ideas</span>
          <div className="house-controls">
            <button
              className="scene-control"
              type="button"
              onClick={() => setEvening(!evening)}
              aria-pressed={evening}
              aria-label="Evening lighting"
            >
              <Icon name={evening ? "moon" : "sun"} />
              <span>{evening ? "Evening" : "Daylight"}</span>
            </button>
            <button
              className="scene-control motion-control"
              type="button"
              onClick={toggleMotion}
              aria-pressed={motion}
              disabled={reducedMotion}
              aria-label={
                reducedMotion
                  ? "Motion disabled by your device preference"
                  : "House movement"
              }
            >
              <Icon name={motion ? "pause" : "play"} />
              <span>{motion ? "Pause motion" : "Motion off"}</span>
            </button>
          </div>
        </div>
        <div
          className="house-perspective"
          onPointerMove={moveHouse}
          onPointerLeave={resetHouse}
        >
          <div
            className="house-scene"
            ref={scene}
            style={
              {
                "--spot-x": `${room.x}%`,
                "--spot-y": `${room.y}%`,
              } as CSSProperties
            }
          >
            {imageFailed ? (
              <div className="house-image-fallback">
                <Icon name="house" />
                <p>Every room holds an idea.</p>
                <p>Choose a room below to explore.</p>
              </div>
            ) : (
              <Image
                className="house-artwork"
                src="/house-of-ideas.png"
                alt="A miniature cutaway house with a cosy bedroom, reading room, living room, housing office, attic and shared garden"
                width={1254}
                height={1254}
                sizes="(max-width: 700px) 100vw, (max-width: 1050px) 65vw, 780px"
                priority
                quality={85}
                onError={() => setImageFailed(true)}
              />
            )}
            <div className="house-lighting" aria-hidden="true" />
            <div className="room-light" aria-hidden="true" />
            {!imageFailed &&
              rooms.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`house-hotspot hotspot-${item.id}`}
                  style={{ left: `${item.x}%`, top: `${item.y}%` }}
                  onClick={() => setSelectedRoom(item.id)}
                  aria-pressed={selectedRoom === item.id}
                  aria-controls="room-detail"
                  aria-label={`Explore ${item.name}, ${projectsInRoom(item.id).length} ${projectsInRoom(item.id).length === 1 ? "idea" : "ideas"}`}
                >
                  <span className="hotspot-number">{item.number}</span>
                  <span className="hotspot-label">{item.shortName}</span>
                  <Icon name="diagonal" />
                </button>
              ))}
          </div>
        </div>
        <div className="house-caption">
          <Icon name="pointer" />
          <span>
            Every room holds a possibility. Choose one to step inside.
          </span>
        </div>
        <div
          className="room-navigation"
          role="group"
          aria-label="Choose a room"
        >
          {rooms.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setSelectedRoom(item.id)}
              aria-pressed={selectedRoom === item.id}
              aria-controls="room-detail"
            >
              <span>{item.number}</span>
              {item.shortName}
            </button>
          ))}
        </div>
        <a className="mobile-room-link text-link" href="#room-detail">
          See{" "}
          {roomProjects.length === 1
            ? "the idea"
            : `${roomProjects.length} ideas`}{" "}
          in {room.shortName.toLowerCase()}
          <Icon name="arrow" />
        </a>
      </div>

      <div className="room-detail" id="room-detail">
        <div className="room-story" aria-live="polite" aria-atomic="true">
          <p className="eyebrow">Inside / {room.name}</p>
          <h2>{room.question}</h2>
          <p>{room.description}</p>
          {previewProject?.preview && (
            <ProjectLink project={previewProject} className="room-preview">
              <Image
                src={previewProject.preview.src}
                alt={previewProject.preview.alt}
                width={previewProject.preview.width}
                height={previewProject.preview.height}
                sizes="(max-width: 700px) 80vw, 300px"
              />
              <span>
                A look inside {previewProject.name}
                <Icon name="diagonal" />
              </span>
            </ProjectLink>
          )}
        </div>
        <div className="room-projects" aria-label={`Ideas in ${room.name}`}>
          {roomProjects.map((project) => (
            <article key={project.id} className="room-project">
              <div className="project-heading">
                <h3>{project.name}</h3>
                <StatusBadge status={project.status} />
              </div>
              <p>{project.description}</p>
              <ProjectLink project={project} />
            </article>
          ))}
        </div>
      </div>
      <noscript>
        <p className="no-script-note">
          The full collection below includes every idea in the house.
        </p>
      </noscript>
    </section>
  );
}
