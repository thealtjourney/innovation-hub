import Link from "next/link";
import type { ReactNode } from "react";
import { type Project, isExternalProject, projectAction } from "@/lib/projects";
import { Icon } from "./Icon";

export function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span className={`status-badge status-${status.toLowerCase()}`}>
      <span aria-hidden="true" />
      {status}
    </span>
  );
}

export function ProjectLink({
  project,
  children,
  className = "text-link",
}: {
  project: Project;
  children?: ReactNode;
  className?: string;
}) {
  const external = isExternalProject(project);
  const content = children ?? (
    <>
      {projectAction(project)}
      <Icon name={external ? "diagonal" : "arrow"} />
    </>
  );
  return external ? (
    <a
      href={project.href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
      <span className="sr-only"> — {project.name}, opens in a new tab</span>
    </a>
  ) : (
    <Link href={project.href} className={className}>
      {content}
      <span className="sr-only"> — {project.name}</span>
    </Link>
  );
}
