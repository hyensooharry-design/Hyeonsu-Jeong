import type { Language } from "../data/portfolioData";

type Props = {
  language: Language;
};

export default function Education({ language }: Props) {
  const t =
    language === "ko"
      ? {
          title: "학력",
          university: "경상국립대학교",
          degree: "산업시스템공학 공학사",
          doubleMajor: "빅데이터 융합 복수전공",
          period: "2021.03 – 2027.02",
          program: "추가 학업 과정",
          microDegree: "스마트제조 빅데이터 마이크로디그리",
          microPeriod: "2024.09 – 2025.07",
        }
      : {
          title: "Education",
          university: "Gyeongsang National University",
          degree: "B.E. in Industrial and Systems Engineering",
          doubleMajor: "Double Major in Big Data Convergence",
          period: "Mar. 2021 – Feb. 2027",
          program: "Additional Academic Program",
          microDegree: "Smart Manufacturing Big Data Micro-Degree",
          microPeriod: "Sep. 2024 – Jul. 2025",
        };

  return (
    <section id="education" className="pb-16 lg:pb-20">
      <div className="section-container">
        <div>
          <h2 className="section-title">{t.title}</h2>

          <div className="mt-7 border-t border-slate-300">
            <article className="grid gap-3 border-b border-slate-200 py-6 sm:py-7 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10">
              <div className="text-sm font-medium text-slate-500">{t.period}</div>
              <div>
                <h3 className="stable-heading text-lg font-semibold text-navy-900 sm:text-xl">{t.university}</h3>
                <p className="mt-2 text-sm font-medium text-slate-700">{t.degree}</p>
                <p className="mt-1 text-sm leading-7 text-slate-600">{t.doubleMajor}</p>
              </div>
            </article>

            <article className="grid gap-3 border-b border-slate-200 py-6 sm:py-7 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10">
              <div className="text-sm font-medium text-slate-500">{t.microPeriod}</div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-slate-500">{t.program}</p>
                <h3 className="stable-heading mt-2 text-lg font-semibold text-navy-900">{t.microDegree}</h3>
                <p className="mt-1 text-sm leading-7 text-slate-600">{t.university}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
