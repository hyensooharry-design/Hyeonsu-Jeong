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
    <article className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:p-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-navy-700 sm:text-sm">
            {text(language, group.detailLabel)}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold text-navy-700">
              {project.number}
            </span>
            <span className="inline-flex rounded-full bg-navy-50 px-4 py-2 text-sm font-bold text-navy-700">
              {text(language, project.badge)}
            </span>
          </div>
        </div>

        <div>
          <h2 className="stable-heading text-[2.15rem] font-bold leading-[1.12] text-navy-900 sm:text-[2.75rem] lg:text-[3.15rem]">
            {text(language, project.title)}
          </h2>
          <p className="stable-copy mt-5 text-base font-semibold leading-7 text-slate-600">
            {text(language, project.category)}
          </p>
          <p className="stable-copy mt-5 max-w-5xl text-[1.05rem] leading-8 text-slate-700 sm:text-[1.12rem]">
            {text(language, project.summary)}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag.en}
              className="stable-copy rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[0.82rem] font-semibold text-slate-700"
            >
              {text(language, tag)}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
