import { ExternalLink } from "lucide-react";
import EvidenceDisclosure from "./EvidenceDisclosure";
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
  categories: Array<{
    key: string;
    label: { en: string; ko: string };
    items: typeof publications;
  }>;
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
      categories: group.categories
        .map((category) => {
          const items = publications.filter((item) => item.category.en === category);
          return {
            key: category,
            label: items[0]?.category ?? { en: category, ko: category },
            items,
          };
        })
        .filter((category) => category.items.length > 0),
    }))
    .filter((group) => group.categories.length > 0);

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
                {group.categories.map((category) => (
                  <div
                    key={category.key}
                    className="grid border-t-[1.5px] border-slate-300 md:grid-cols-[12rem_1fr] md:gap-8"
                  >
                    <div className="py-5 text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
                      {category.label[language]}
                    </div>

                    <div className="min-w-0">
                      {category.items.map((item) => (
                        <article
                          key={item.title}
                          className="border-b border-slate-200 py-5 last:border-b-0"
                        >
                          <h4 className="text-lg font-bold leading-snug text-navy-900">
                            {language === "ko" && "titleKo" in item ? item.titleKo : item.title}
                          </h4>

                          <div className="mt-2 flex items-center justify-between gap-4">
                            <p className="min-w-0 text-sm leading-7 text-slate-600">
                              {item.meta[language]}
                            </p>
                            {"technologyTransferImage" in item && item.technologyTransferImage ? (
                              <span className="ml-auto inline-flex shrink-0 items-center rounded-full border border-slate-200 bg-sky-100 px-3 py-1 text-xs font-semibold text-navy-700">
                                {language === "ko" ? "기술이전 완료" : "Technology Transfer Completed"}
                              </span>
                            ) : null}
                          </div>

                          {"url" in item && item.url ? (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-[#f9fbfd] px-4 py-2.5 text-sm font-semibold text-navy-900 transition-colors duration-200 hover:border-slate-400 hover:bg-[#f9fbfd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900"
                              aria-label={(language === "ko" && "titleKo" in item ? item.titleKo : item.title) + " — " + (language === "ko" ? "원문 보기" : "View publication")}
                            >
                              {language === "ko" ? "원문 보기" : "View publication"}
                              <ExternalLink size={15} aria-hidden="true" />
                            </a>
                          ) : null}

                          {"evidenceImage" in item && item.evidenceImage ? (
                            <EvidenceDisclosure
                              src={item.evidenceImage}
                              alt={language === "ko" && "titleKo" in item && item.titleKo ? item.titleKo : item.title}
                              language={language}
                              secondaryImage={
                                "technologyTransferImage" in item && item.technologyTransferImage
                                  ? {
                                      src: item.technologyTransferImage,
                                      alt: language === "ko" ? "흰색 마스킹 처리된 CCTV 특허 기술이전 계약서" : "Masked CCTV patent technology transfer agreement",
                                    }
                                  : undefined
                              }
                            />
                          ) : null}
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
