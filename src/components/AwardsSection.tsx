import { ExternalLink } from "lucide-react";
import type { Language } from "../data/portfolioData";
import { awards, sectionLabels } from "../data/portfolioData";

type Props = {
  language: Language;
};

type AwardCategory = "ai" | "data" | "startup" | "other";

const categoryLabels: Record<AwardCategory, { en: string; ko: string }> = {
  ai: { en: "AI", ko: "AI" },
  data: { en: "Data", ko: "Data" },
  startup: { en: "Startup", ko: "Startup" },
  other: { en: "Other", ko: "기타" },
};

const categoryOrder: AwardCategory[] = ["ai", "data", "startup", "other"];

function classifyAward(title: string, date: string): AwardCategory {
  const normalized = title.toLowerCase();

  if (date === "2024.12.13" || date === "2024.09.20") {
    return "other";
  }

  if (normalized.includes("ai") || normalized.includes("genai")) {
    return "ai";
  }

  if (
    normalized.includes("data") ||
    normalized.includes("tableau") ||
    normalized.includes("ict")
  ) {
    return "data";
  }

  return "startup";
}

export default function AwardsSection({ language }: Props) {
  const label = sectionLabels.awards[language];

  const groupedAwards = categoryOrder
    .map((category) => ({
      category,
      items: awards.filter(
        (award) => classifyAward(award.title.en, award.date) === category
      ),
    }))
    .filter(({ items }) => items.length > 0);

  return (
    <section id="awards" className="py-24">
      <div className="section-container">
        <div className="max-w-3xl">
          <h2 className="section-title">{label.title}</h2>
        </div>

        <div className="mt-12 space-y-14">
          {groupedAwards.map(({ category, items }) => (
            <section key={category}>
              <div className="border-t-[1.5px] border-slate-300 pt-5">
                <h3 className="text-lg font-bold uppercase tracking-[0.12em] text-navy-900">
                  {categoryLabels[category][language]}
                </h3>
              </div>

              <div className="mt-6 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8">
                {items.map((award) => (
                  <article
                    key={`${award.date}-${award.title.en}-${award.prize.en}`}
                    className="group flex min-w-0 flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                  >
                    <a
                      href={award.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${award.title[language]} — ${language === "ko" ? "상장 이미지 크게 보기" : "Open award image"}`}
                      className="flex h-64 items-center justify-center overflow-hidden border-b border-slate-200 bg-slate-50 p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-navy-700 sm:h-72 lg:h-80"
                    >
                      <img
                        src={award.image}
                        alt={language === "ko" ? `${award.title.ko} 상장` : `Award certificate for ${award.title.en}`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                      />
                    </a>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                        <span className="text-xs font-bold tracking-[0.08em] text-slate-500">
                          {award.date}
                        </span>
                        <span className="inline-flex rounded-full bg-navy-50 px-3 py-1.5 text-xs font-semibold text-navy-700">
                          {award.prize[language]}
                        </span>
                      </div>

                      <h4 className="stable-heading mt-4 text-lg font-bold leading-snug text-navy-900">
                        {award.title[language]}
                      </h4>

                      <p className="stable-copy mt-3 text-sm leading-6 text-slate-600">
                        {award.issuer[language]}
                      </p>

                      <a
                        href={award.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-semibold text-navy-700 transition hover:text-navy-900"
                      >
                        {language === "ko" ? "상장 크게 보기" : "View certificate"}
                        <ExternalLink size={16} aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
