import { ArrowLeft } from "lucide-react";
import type { Language } from "../data/portfolioData";
import type {
  ResearchProjectGroup,
  ResearchProjectItem,
} from "../data/researchProjectsData";
import DetailContentCard from "./DetailContentCard";
import ProjectImageCarousel from "./ProjectImageCarousel";
import ProjectInfoCard from "./ProjectInfoCard";

type Props = {
  language: Language;
  group: ResearchProjectGroup;
  project: ResearchProjectItem;
  previousProject: ResearchProjectItem | null;
  nextProject: ResearchProjectItem | null;
  onBack: () => void;
  onNavigate: (projectId: string) => void;
};

export default function ProjectDetailPage({
  language,
  group,
  project,
  onBack,
}: Props) {
  const hasVisuals = Boolean(
    project.mainImage ||
      project.visualGroups?.some((visualGroup) => visualGroup.images.length > 0)
  );

  return (
    <section className="mobile-research-detail py-10 sm:py-14 lg:py-16">
      <div className="section-container">
        <div className="mx-auto max-w-6xl">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 border-b border-transparent pb-1 text-sm font-medium text-slate-600 transition hover:border-navy-700 hover:text-navy-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-700"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {language === "en" ? "Back to List" : "목록으로 돌아가기"}
          </button>

          <div className="mobile-detail-paper mt-8 rounded-[30px] border border-slate-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <ProjectInfoCard language={language} group={group} project={project} />

          <div
            className={
              hasVisuals
                ? "mobile-detail-leading mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-start lg:gap-14"
                : "mobile-detail-leading mt-12 max-w-3xl"
            }
          >
            <DetailContentCard language={language} project={project} part="introduction" />
            {hasVisuals ? (
              <ProjectImageCarousel language={language} project={project} />
            ) : null}
          </div>

          <div className="mt-12 border-t border-slate-300 pt-3 sm:mt-16">
            <DetailContentCard language={language} project={project} part="remaining" />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
