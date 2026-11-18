import { ChevronDown, Image as ImageIcon } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import type { Language } from "../data/portfolioData";
import { awards, sectionLabels } from "../data/portfolioData";

type Props = {
  language: Language;
};

type AwardCategory = "ai" | "data" | "startup" | "other";
type AwardItem = (typeof awards)[number];

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

function AwardCard({
  award,
  language,
  summaryHeight,
}: {
  award: AwardItem;
  language: Language;
  summaryHeight: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="flex min-w-0 w-full flex-col self-start overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft transition duration-200 hover:border-slate-300 hover:shadow-lg">
      <div
        data-award-summary
        className="flex flex-col p-5 sm:p-6"
        style={summaryHeight > 0 ? { minHeight: summaryHeight } : undefined}
      >
        <div data-award-info>
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <span className="text-xs font-bold tracking-[0.08em] text-slate-500">
            {award.date}
          </span>
          <span className="inline-flex rounded-full bg-navy-50 px-3 py-1.5 text-xs font-semibold text-navy-700">
            {award.prize[language]}
          </span>
        </div>

        <h4 className="stable-heading mt-5 text-lg font-bold leading-snug text-navy-900">
          {award.title[language]}
        </h4>

        <p className="stable-copy mt-3 text-sm leading-6 text-slate-600">
          {award.issuer[language]}
        </p>

        </div>

        <div data-award-footer className="mt-auto pt-6">
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            aria-expanded={expanded}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-700 hover:bg-navy-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
          >
            <ImageIcon size={17} aria-hidden="true" />
            {expanded
              ? language === "ko"
                ? "상장 접기"
                : "Hide certificate"
              : language === "ko"
                ? "상장 펼치기"
                : "Show certificate"}
            <ChevronDown
              size={17}
              aria-hidden="true"
              className={expanded ? "rotate-180 transition-transform" : "transition-transform"}
            />
          </button>
        </div>
      </div>

      {expanded ? (
        <div className="border-t border-slate-200 bg-slate-50 p-5 sm:p-6">
          <img
            src={award.image}
            alt={
              language === "ko"
                ? award.title.ko + " 상장"
                : "Certificate for " + award.title.en
            }
            loading="lazy"
            decoding="async"
            className="mx-auto max-h-[32rem] w-full rounded-xl border border-slate-200 bg-white object-contain"
          />
        </div>
      ) : null}
    </article>
  );
}

export default function AwardsSection({ language }: Props) {
  const label = sectionLabels.awards[language];
  const sectionRef = useRef<HTMLElement>(null);
  const [summaryHeight, setSummaryHeight] = useState(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const summaries = Array.from(
      section.querySelectorAll<HTMLElement>("[data-award-summary]")
    );

    const measure = () => {
      const tallest = summaries.reduce((maxHeight, summary) => {
        const info = summary.querySelector<HTMLElement>("[data-award-info]");
        const footer = summary.querySelector<HTMLElement>("[data-award-footer]");
        if (!info || !footer) return maxHeight;

        const style = window.getComputedStyle(summary);
        const naturalHeight =
          info.getBoundingClientRect().height +
          footer.getBoundingClientRect().height +
          parseFloat(style.paddingTop) +
          parseFloat(style.paddingBottom);

        return Math.max(maxHeight, Math.ceil(naturalHeight));
      }, 0);

      setSummaryHeight((current) => (current === tallest ? current : tallest));
    };

    const observer = new ResizeObserver(measure);
    summaries.forEach((summary) => {
      const info = summary.querySelector<HTMLElement>("[data-award-info]");
      const footer = summary.querySelector<HTMLElement>("[data-award-footer]");
      if (info) observer.observe(info);
      if (footer) observer.observe(footer);
    });

    window.addEventListener("resize", measure);
    measure();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [language]);

  const groupedAwards = categoryOrder
    .map((category) => ({
      category,
      items: awards.filter(
        (award) => classifyAward(award.title.en, award.date) === category
      ),
    }))
    .filter(({ items }) => items.length > 0);

  return (
    <section id="awards" ref={sectionRef} className="py-24">
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

              <div className="mt-6 grid grid-cols-1 items-start gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
                {items.map((award) => (
                  <AwardCard
                    key={[award.date, award.title.en, award.prize.en].join("-")}
                    award={award}
                    language={language}
                    summaryHeight={summaryHeight}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
