import { ExternalLink } from "lucide-react";
import type { Language } from "../data/portfolioData";
import type {
  LocalizedText,
  ResearchProjectGroup,
  ResearchProjectItem,
} from "../data/researchProjectsData";

const text = (language: Language, value: LocalizedText) => value[language];

export default function ProjectInfoCard({
  language,
  group,
  project,
}: {
  language: Language;
  group: ResearchProjectGroup;
  project: ResearchProjectItem;
}) {
  return (
    <header className="min-w-0">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-navy-700">
          {text(language, group.detailLabel)}
        </span>
        <span className="text-xs font-medium text-slate-500">
          / {project.number}
        </span>
        <span className="inline-flex rounded-full bg-navy-50 px-3 py-1.5 text-xs font-medium text-navy-700">
          {text(language, project.badge)}
        </span>
      </div>

      <h1 className="stable-heading mt-6 max-w-5xl text-[1.95rem] font-semibold leading-[1.18] tracking-tight text-navy-900 sm:text-[2.4rem] lg:text-[2.7rem]">
        {text(language, project.title)}
      </h1>

      <p className="stable-copy mt-4 text-sm font-medium leading-6 text-slate-500 sm:text-[0.95rem]">
        {text(language, project.category)}
      </p>

      <p className="stable-copy mt-6 max-w-4xl text-[0.96rem] leading-8 text-slate-700 sm:text-[1.04rem]">
        {text(language, project.summary)}
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-200 pt-5">
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-navy-900 transition hover:border-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
          >
            GitHub
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        ) : null}

        {project.tags.map((tag) => (
          <span
            key={tag.en}
            className="stable-copy border-l border-slate-300 pl-3 text-xs font-medium leading-6 text-slate-500 sm:text-sm"
          >
            {text(language, tag)}
          </span>
        ))}
      </div>
    </header>
  );
}
