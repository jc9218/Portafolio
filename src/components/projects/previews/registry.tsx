import React from "react";
import { ProjectPreviewProps } from "../types";
import { KomTrainerPreview } from "./KomTrainerPreview";
import { PolyvaPreview } from "./PolyvaPreview";
import { MultimodalRagPreview } from "./MultimodalRagPreview";

/**
 * Open/Closed Principle (OCP) & Dependency Inversion Principle (DIP):
 *
 * This registry maps project identifiers to their respective telemetry/architecture
 * preview widgets conforming to the unified ProjectPreviewProps contract.
 *
 * - OPEN FOR EXTENSION: To add a new preview widget, create a component implementing
 *   ProjectPreviewProps and register it in PROJECT_PREVIEW_REGISTRY below.
 * - CLOSED FOR MODIFICATION: Neither ProjectCard nor FeaturedProjects need to be modified
 *   to support additional or redesigned project previews.
 */
export const PROJECT_PREVIEW_REGISTRY: Record<
  string,
  React.ComponentType<ProjectPreviewProps>
> = {
  "kom-trainer": KomTrainerPreview,
  "polyva": PolyvaPreview,
  "multimodal-rag": MultimodalRagPreview,
};

export interface ProjectPreviewHostProps extends ProjectPreviewProps {
  projectId: string;
}

/**
 * Host component resolving the appropriate preview widget from the registry.
 * Returns null gracefully if no preview widget is registered for a project ID.
 */
export function ProjectPreview({ projectId, language }: ProjectPreviewHostProps) {
  const PreviewComponent = PROJECT_PREVIEW_REGISTRY[projectId];
  if (!PreviewComponent) return null;
  return <PreviewComponent language={language} />;
}
