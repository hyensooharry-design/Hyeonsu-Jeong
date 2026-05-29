import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Language } from "../data/portfolioData";
import type { LocalizedText, ResearchProjectItem } from "../data/researchProjectsData";

const text = (language: Language, value: LocalizedText) => value[language];

export default function BottomProjectNavigation({
  language,
  previousProject,
  nextProject,
  onBack,
  onNavigate,
}: {
  language: Language;
  previousProject: ResearchProjectItem | null;
  nextProject: ResearchProjectItem | null;
  onBack: () => void;
  onNavigate: (projectId: string) => void;
}) {
  return (
    <nav className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => previousProject && onNavigate(previousProject.id)}
          disabled={!previousProject}
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-navy-900 transition hover:border-navy-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft size={16} />
          {previousProject
            ? text(language, previousProject.title)
            : language === "en"
              ? "No previous project"
              : "이전 프로젝트 없음"}
        </button>

        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-50 px-5 py-2 text-sm font-bold text-navy-900 transition hover:border-navy-700"
        >
          {language === "en" ? "Back to List" : "목록으로 돌아가기"}
        </button>

        <button
          type="button"
          onClick={() => nextProject && onNavigate(nextProject.id)}
          disabled={!nextProject}
          className="inline-flex items-center justify-end gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-navy-900 transition hover:border-navy-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {nextProject
            ? text(language, nextProject.title)
            : language === "en"
              ? "No next project"
              : "다음 프로젝트 없음"}
          <ArrowRight size={16} />
        </button>
      </div>
    </nav>
  );
}
