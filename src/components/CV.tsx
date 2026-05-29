import type { Language } from "../data/portfolioData";
import { profile } from "../data/portfolioData";

type Props = {
  language: Language;
};

export default function CV({ language }: Props) {
  const cvUrl = profile.cvPdf;
  const openLabel =
    language === "ko" ? "새 탭에서 CV 열기" : "Open CV in a new tab";

  return (
    <section id="cv" className="py-24">
      <div className="section-container">
        <div className="max-w-3xl">
          <h2 className="section-title">Curriculum Vitae</h2>
        </div>

        <div className="mt-8 flex lg:hidden">
          <a
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
            className="stable-pill inline-flex items-center rounded-full bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-700"
          >
            {openLabel}
          </a>
        </div>

        <div className="mt-8 hidden overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft lg:block">
          <iframe
            title="Curriculum Vitae PDF"
            src={cvUrl}
            className="h-[78vh] min-h-[44rem] w-full"
          />
        </div>
      </div>
    </section>
  );
}
