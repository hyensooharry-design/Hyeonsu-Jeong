import { ArrowUpRight } from "lucide-react";
import type { Language } from "../data/portfolioData";
import type { ResearchProjectItem } from "../data/researchProjectsData";
import ProjectImageFrame from "./ProjectImageFrame";

type Props = {
  language: Language;
  project: ResearchProjectItem;
  onClick: () => void;
};

export default function ProjectCardImageOnly({
  language,
  project,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="block rounded-[32px] border border-slate-200 bg-white text-left shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <article className="relative grid items-stretch gap-0 lg:h-[17rem] lg:grid-cols-[0.41fr_0.59fr]">
        <div className="flex items-center p-6 sm:p-7 lg:p-8">
          <ProjectImageFrame
            src={project.mainImage}
            alt={project.title[language]}
            fit={project.mainImageFit}
            className="h-[11rem] w-full sm:h-[11.5rem] lg:h-[12rem]"
          />
        </div>

        <div className="flex h-full flex-col overflow-hidden border-t border-slate-200/70 p-6 sm:p-7 lg:border-t-0 lg:p-8 lg:pl-8 xl:pl-10">
          <div className="pointer-events-none absolute bottom-7 top-7 left-[41%] hidden w-px bg-slate-200/70 lg:block" />
          <div className="flex flex-wrap items-start justify-between gap-4">
            <span className="py-1 text-xs font-semibold text-navy-700">
              {project.number}
            </span>

            <div className="flex items-center gap-3">
              <span className="inline-flex min-h-5 rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
                {project.badge[language]}
              </span>
              <ArrowUpRight size={20} className="text-navy-700" />
            </div>
          </div>

          <div className="mt-4">
            <h4
              className="stable-heading line-clamp-2 text-[1.48rem] font-bold leading-[1.2] text-navy-900"
            >
              {project.title[language]}
            </h4>

            <p
              className="stable-copy mt-3 line-clamp-2 text-[0.86rem] font-medium leading-6 text-slate-600"
            >
              {project.category[language]}
            </p>
          </div>

          <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-5">
            {project.tags.map((item) => (
              <span
                key={item.en}
                className="stable-copy rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                {item[language]}
              </span>
            ))}
          </div>
        </div>
      </article>
    </button>
  );
}
