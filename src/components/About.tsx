import type { Language } from "../data/portfolioData";
import { about, sectionLabels } from "../data/portfolioData";

type Props = {
  language: Language;
};

const interests = [
  "Combinatorial Optimization",
  "Logistics",
  "Routing",
  "Resource Allocation",
  "Decision-Making",
];

export default function About({ language }: Props) {
  const label = sectionLabels.about[language];

  return (
    <section id="about" className="pb-16 lg:pb-20">
      <div className="section-container">
        <div className="grid gap-6 border-t border-slate-300 pt-8 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-10">
          <h2 className="section-title">{label.title}</h2>

          <div className="min-w-0">
            <div className="max-w-4xl space-y-5 text-[0.98rem] leading-8 text-slate-700">
              {about[language].map((paragraph) => (
                <p key={paragraph} className="stable-copy">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2 border-t border-slate-200 pt-5">
              {interests.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-slate-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium leading-5 text-navy-700"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
