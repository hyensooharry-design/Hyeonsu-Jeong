import type { Language } from "../data/portfolioData";
import { awards, sectionLabels } from "../data/portfolioData";

type Props = {
  language: Language;
};

type AwardCategory = "ai" | "data" | "startup" | "other";

const categoryLabels: Record<AwardCategory, { en: string; ko: string }> = {
  ai: {
    en: "AI",
    ko: "AI",
  },
  data: {
    en: "Data",
    ko: "Data",
  },
  startup: {
    en: "Startup",
    ko: "Startup",
  },
  other: {
    en: "Other",
    ko: "기타",
  },
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

export default function Awards({ language }: Props) {
  const label = sectionLabels.awards[language];

  const groupedAwards = categoryOrder.map((category) => ({
    category,
    items: awards.filter(
      (award) => classifyAward(award.title.en, award.date) === category
    ),
  }));

  return (
    <section id="awards" className="py-24">
      <div className="section-container">
        <div className="max-w-3xl">
          <h2 className="section-title">{label.title}</h2>
          <p className="section-subtitle">{label.subtitle}</p>
        </div>

        <div className="mt-10 space-y-10">
          {groupedAwards.map(({ category, items }) => (
            <section key={category}>
              <div className="border-t-[1.5px] border-slate-300 pt-4">
                <h3 className="text-base font-bold tracking-[0.12em] text-navy-900 uppercase">
                  {categoryLabels[category][language]}
                </h3>
              </div>

              <div className="mt-3 border-t-[1.5px] border-slate-300">
                {items.map((award) => (
                  <article
                    key={`${award.date}-${award.title.en}-${award.prize.en}`}
                    className="grid gap-2 border-b-[1.5px] border-slate-300 py-4 md:grid-cols-[7rem_1.7fr_1fr] md:gap-6"
                  >
                    <div className="text-sm font-bold text-navy-700">{award.date}</div>

                    <div>
                      <h4 className="text-sm font-bold leading-6 text-slate-900 sm:text-base">
                        {award.title[language]}
                      </h4>
                    </div>

                    <div className="md:text-right">
                      <p className="text-sm font-semibold text-navy-700">
                        {award.prize[language]}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {award.issuer[language]}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-6 text-sm leading-7 text-slate-500">
          {language === "en"
            ? "Awards are grouped in the order AI, Data, and Startup using the priority rule AI > Data > Startup."
            : "수상 내역은 AI, Data, Startup 순서로 배치했고, 중복 가능 항목은 AI > Data > Startup 우선순위로 분류했습니다."}
        </p>
      </div>
    </section>
  );
}
