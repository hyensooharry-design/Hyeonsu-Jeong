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
  return (
    <section className="py-20">
      <div className="section-container">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-navy-900 transition hover:border-navy-700"
        >
          <ArrowLeft size={16} />
          {language === "en" ? "Back to List" : "목록으로 돌아가기"}
        </button>

        <div className="mt-8 grid gap-8">
          <ProjectInfoCard language={language} group={group} project={project} />
          <ProjectImageCarousel language={language} project={project} />
          <DetailContentCard language={language} project={project} />
        </div>
      </div>
    </section>
  );
}
