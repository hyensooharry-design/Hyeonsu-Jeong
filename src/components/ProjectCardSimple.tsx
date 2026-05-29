import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import type { Language } from "../data/portfolioData";

export type PortfolioProjectSimple = {
  number: string;
  group: "research" | "projects";
  title: {
    en: string;
    ko: string;
  };
  category: {
    en: string;
    ko: string;
  };
  type: {
    en: string;
    ko: string;
  };
  problem: {
    en: string;
    ko: string;
  };
  tags: Array<{
    en: string;
    ko: string;
  }>;
  image?: string;
};

type Props = {
  language: Language;
  project: PortfolioProjectSimple;
  onClick: () => void;
};

export default function ProjectCardSimple({
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
      <article className="grid items-stretch gap-0 lg:grid-cols-[0.38fr_0.62fr]">
        <div className="p-6 sm:p-7 lg:p-8">
          <div className="relative h-full min-h-[16rem] overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-sm">
            <div className="aspect-[4/3] h-full lg:aspect-auto">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title[language]}
                  className="h-full w-full object-contain bg-white"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(145deg,#e2e8f0_0%,#f8fafc_50%,#dbeafe_100%)] p-5 text-navy-900">
                  <div className="rounded-2xl border border-white/70 bg-white/75 p-3 text-navy-700 backdrop-blur">
                    <ImageIcon size={20} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-7 lg:p-8 lg:pl-4 xl:pl-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <span className="py-1 text-xs font-semibold text-navy-700">
              {project.number}
            </span>

            <div className="flex items-center gap-3">
              <span className="inline-flex min-h-5 rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
                {project.type[language]}
              </span>
              <ArrowUpRight size={20} className="text-navy-700" />
            </div>
          </div>

          <div className="mt-5">
            <h4 className="stable-heading text-2xl font-bold leading-snug text-navy-900">
              {project.title[language]}
            </h4>

            <p className="stable-copy mt-3 text-sm font-medium leading-6 text-slate-600">
              {project.category[language]}
            </p>
          </div>

          <div className="mt-7">
            <h5 className="text-sm font-bold uppercase tracking-widest text-navy-700">
              {language === "en" ? "Problem" : "문제 정의"}
            </h5>
            <p className="stable-copy mt-3 text-sm leading-7 text-slate-600">
              {project.problem[language]}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
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
