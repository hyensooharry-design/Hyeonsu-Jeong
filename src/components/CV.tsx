import type { Language } from "../data/portfolioData";
import { profile } from "../data/portfolioData";

type Props = {
  language: Language;
};

export default function CV({ language }: Props) {
  const cvUrl = profile.cvPdf;

  return (
    <section id="cv" className="py-24">
      <div className="section-container">
        <div className="max-w-3xl">
          <h2 className="section-title">Curriculum Vitae</h2>
        </div>

        <div className="mt-8 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft">
          <iframe
            title={language === "ko" ? "Curriculum Vitae PDF" : "Curriculum Vitae PDF"}
            src={cvUrl}
            className="h-[78vh] min-h-[44rem] w-full"
          />
        </div>
      </div>
    </section>
  );
}
