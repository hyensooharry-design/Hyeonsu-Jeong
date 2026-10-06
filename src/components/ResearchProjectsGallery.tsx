import { useMemo } from "react";
import type { Language } from "../data/portfolioData";
import {
  researchProjectGroups,
  type ResearchProjectGroup,
  type ResearchProjectItem,
} from "../data/researchProjectsData";
import ProjectDetailPage from "./ProjectDetailPage";
import ProjectCardImageOnly from "./ProjectCardImageOnly";

type Props = {
  language: Language;
  selectedProjectId: string | null;
  onSelectProject: (projectId: string) => void;
  onBack: () => void;
};

export default function ResearchProjectsGallery({
  language,
  selectedProjectId,
  onSelectProject,
  onBack,
}: Props) {
  const flatProjectMap = useMemo(() => {
    const map = new Map<
      string,
      { project: ResearchProjectItem; group: ResearchProjectGroup; index: number }
    >();

    researchProjectGroups.forEach((group) => {
      group.items.forEach((project, index) => {
        map.set(project.id, { project, group, index });
      });
    });

    return map;
  }, []);

  if (selectedProjectId) {
    const selection = flatProjectMap.get(selectedProjectId);

    if (selection) {
      const { group, project, index } = selection;
      const previousProject = index > 0 ? group.items[index - 1] : null;
      const nextProject =
        index < group.items.length - 1 ? group.items[index + 1] : null;

      return (
        <ProjectDetailPage
          language={language}
          group={group}
          project={project}
          previousProject={previousProject}
          nextProject={nextProject}
          onBack={onBack}
          onNavigate={onSelectProject}
        />
      );
    }
  }

  return (
    <section id="research" className="py-24">
      <div className="section-container">
        <div className="space-y-16">
          {researchProjectGroups.map((group) => (
            <section key={group.key}>
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold tracking-tight text-navy-900">
                  {group.title[language]}
                </h3>
              </div>

              <div className="mt-6 border-t-[1.5px] border-slate-300" />

              <div className="mt-8 grid gap-8">
                {group.items.map((project) => (
                  <ProjectCardImageOnly
                    key={project.id}
                    language={language}
                    project={project}
                    onClick={() => onSelectProject(project.id)}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
