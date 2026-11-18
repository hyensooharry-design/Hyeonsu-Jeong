import { ExternalLink } from "lucide-react";
import type { Language } from "../data/portfolioData";
import { publications, sectionLabels } from "../data/portfolioData";

type Props = {
  language: Language;
};

type PublicationGroup = {
  key: string;
  heading: {
    en: string;
    ko: string;
  };
  items: typeof publications;
};

const groupedCategories = [
  {
    key: "research",
    heading: {
      en: "Research Publications",
      ko: "Research Publications",
    },
    categories: ["SCI", "KCI"],
  },
  {
    key: "ip",
    heading: {
      en: "Intellectual Property",
      ko: "Intellectual Property",
    },
    categories: ["Patent", "Software Copyright"],
  },
  {
    key: "presentations",
    heading: {
      en: "Presentations",
      ko: "Presentations",
    },
    categories: ["Conference", "Poster"],
  },
];

export default function PublicationsIP({ language }: Props) {
  const label = sectionLabels.publications[language];

  const publicationGroups: PublicationGroup[] = groupedCategories
    .map((group) => ({
      key: group.key,
      heading: group.heading,
      items: publications.filter((item) =>
        group.categories.includes(item.category.en)
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section id="publications" className="py-24">
      <div className="section-container">
        <div className="max-w-3xl">
          <h2 className="section-title">{label.title}</h2>
        </div>

        <div className="mt-14 space-y-14">
          {publicationGroups.map((group) => (
            <section key={group.key}>
              <div className="border-t-[1.5px] border-slate-300 pt-5">
                <h3 className="text-lg font-bold tracking-tight text-navy-900">
                  {group.heading[language]}
                </h3>
              </div>

              <div className="mt-6">
                {group.items.map((item, index) => (
                  <article
                    key={item.title}
                    className={`grid gap-4 border-slate-300 py-5 md:grid-cols-[12rem_1fr] md:gap-8 ${
                      index === 0 ? "border-t-[1.5px]" : "border-t-[1.5px]"
                    }`}
                  >
                    <div className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
                      {item.category[language]}
                    </div>

                    <div>
                      <h4 className="text-lg font-bold leading-snug text-navy-900">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.meta[language]}
                      </p>

                      {"url" in item && item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 shadow-sm transition-colors duration-200 hover:border-navy-900 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900"
                          aria-label={`${item.title} — ${language === "ko" ? "원문 보기" : "View publication"}`}
                        >
                          {language === "ko" ? "원문 보기" : "View publication"}
                          <ExternalLink size={15} aria-hidden="true" />
                        </a>
                      ) : null}
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
