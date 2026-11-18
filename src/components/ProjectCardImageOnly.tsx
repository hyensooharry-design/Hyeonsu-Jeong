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
      className="group flex h-full w-full min-w-0 flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white text-left shadow-soft transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
    >
      <div className="w-full p-5 pb-0 sm:p-6 sm:pb-0">
        <ProjectImageFrame
          src={project.mainImage}
          alt={project.title[language]}
          fit={project.mainImageFit}
          className="aspect-[16/9] w-full"
        />
      </div>

      <div className="flex w-full min-w-0 flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold tracking-[0.12em] text-navy-700">
            {project.number}
          </span>
          <ArrowUpRight
            size={19}
            className="shrink-0 text-navy-700 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </div>

        <h4 className="stable-heading mt-4 line-clamp-3 text-[1.3rem] font-bold leading-snug text-navy-900 sm:text-[1.4rem]">
          {project.title[language]}
        </h4>

        <p className="stable-copy mt-3 line-clamp-2 text-sm font-medium leading-6 text-slate-600">
          {project.category[language]}
        </p>

        <div className="mt-auto pt-5">
          <span className="inline-flex max-w-full rounded-full bg-navy-50 px-3 py-1.5 text-xs font-semibold leading-5 text-navy-700">
            {project.badge[language]}
          </span>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((item) => (
              <span
                key={item.en}
                className="stable-copy rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold leading-5 text-slate-700"
              >
                {item[language]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}
