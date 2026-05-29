import { Briefcase } from "lucide-react";
import type { Language } from "../data/portfolioData";
import { experiences, sectionLabels } from "../data/portfolioData";

type Props = {
  language: Language;
};

export default function Experience({ language }: Props) {
  const label = sectionLabels.experience[language];

  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <div className="max-w-3xl">
          <h2 className="section-title">{label.title}</h2>
          <p className="section-subtitle">{label.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-5">
          {experiences.map((experience) => (
            <article
              key={experience.organization}
              className="card grid gap-6 p-6 md:grid-cols-[0.4fr_1fr]"
            >
              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                  <Briefcase size={20} />
                </div>
                <div className="text-sm font-bold text-navy-700">
                  {experience.period}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900">
                  {experience.organization}
                </h3>

                <p className="mt-1 text-sm font-semibold text-navy-700">
                  {experience.role[language]}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {experience.description[language]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
