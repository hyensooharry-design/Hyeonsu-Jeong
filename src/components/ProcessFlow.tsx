import type { Language } from "../data/portfolioData";
import type { LocalizedText, ResearchProjectItem } from "../data/researchProjectsData";

const text = (language: Language, value: LocalizedText) => value[language];

export default function ProcessFlow({
  language,
  project,
}: {
  language: Language;
  project: ResearchProjectItem;
}) {
  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-navy-700">
        Process Flow
      </h3>
      <div className="mt-6 grid gap-4 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
        {project.flow.map((step, index) => (
          <div key={step.en} className="relative">
            {index < project.flow.length - 1 ? (
              <div className="absolute left-5 top-10 h-[calc(100%+1rem)] w-px bg-slate-200 lg:left-auto lg:right-[-0.5rem] lg:top-8 lg:h-px lg:w-4" />
            ) : null}
            <div className="relative rounded-[22px] border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-bold text-navy-700">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="stable-copy mt-2 text-sm font-bold leading-6 text-navy-900">
                {text(language, step)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
