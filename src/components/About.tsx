import type { Language } from "../data/portfolioData";
import { about, sectionLabels } from "../data/portfolioData";

type Props = {
  language: Language;
};

export default function About({ language }: Props) {
  const label = sectionLabels.about[language];

  return (
    <section id="about" className="pt-6 pb-24 lg:-mt-2 lg:pt-8">
      <div className="section-container">
        <div className="mx-auto max-w-[90rem] card p-7 sm:p-9">
          <div className="mb-8">
            <h2 className="section-title">{label.title}</h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-700">
            {about[language].map((paragraph) => (
              <p key={paragraph} className="stable-copy max-w-none">
                {paragraph
                  .split(/(?<=\.)\s+/)
                  .filter(Boolean)
                  .map((sentence) => (
                    <span key={sentence} className="block">
                      {sentence}
                    </span>
                  ))}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Combinatorial Optimization",
              "Logistics",
              "Routing",
              "Resource Allocation",
              "Decision-Making",
            ].map((keyword) => (
              <span
                key={keyword}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-navy-700 transition duration-200 hover:-translate-y-1 hover:border-navy-300 hover:shadow-soft"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
