import type { ReactNode } from "react";
import type { Language } from "../data/portfolioData";
import type { LocalizedText, ResearchProjectItem } from "../data/researchProjectsData";

const text = (language: Language, value: LocalizedText) => value[language];

function DetailBlock({
  title,
  children,
  divider = true,
}: {
  title: string;
  children: ReactNode;
  divider?: boolean;
}) {
  return (
    <section className={divider ? "border-b border-slate-200 pb-9" : ""}>
      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-navy-700">
        {title}
      </h3>
      <div className="stable-copy mt-4 text-[1rem] leading-8 text-slate-700 sm:text-[1.04rem]">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-navy-700" />
          <span className="stable-copy flex-1">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FeatureCards({
  language,
  project,
}: {
  language: Language;
  project: ResearchProjectItem;
}) {
  if (!project.featureCards?.length) return null;

  return (
    <DetailBlock title="Key Structure / Features">
      <div className="grid gap-4 md:grid-cols-3">
        {project.featureCards.map((card) => (
          <div
            key={card.title.en}
            className="rounded-[20px] border border-slate-200 bg-slate-50 p-5"
          >
            <h4 className="text-base font-bold text-navy-900">
              {text(language, card.title)}
            </h4>
            <p className="stable-copy mt-3 text-sm leading-7 text-slate-600">
              {text(language, card.description)}
            </p>
          </div>
        ))}
      </div>
    </DetailBlock>
  );
}

function InlineProcessFlow({
  language,
  project,
}: {
  language: Language;
  project: ResearchProjectItem;
}) {
  return (
    <DetailBlock title="Process" divider={false}>
      <div className="grid gap-3 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))] lg:items-stretch">
        {project.flow.map((step, index) => (
          <div
            key={step.en}
            className="grid items-center gap-3 lg:grid-cols-[1fr_auto]"
          >
            <div className="flex min-h-[6.5rem] flex-col items-center justify-center rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-5 text-center">
              <div className="text-xs font-bold leading-none text-navy-700">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="stable-copy mt-3 text-sm font-bold leading-6 text-navy-900">
                {text(language, step)}
              </div>
            </div>
            {index < project.flow.length - 1 ? (
              <div className="flex items-center justify-center text-lg font-bold text-slate-400 lg:px-1">
                <span className="hidden lg:inline">→</span>
                <span className="lg:hidden">↓</span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </DetailBlock>
  );
}

export default function DetailContentCard({
  language,
  project,
}: {
  language: Language;
  project: ResearchProjectItem;
}) {
  return (
    <article className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:p-12">
      <div className="grid gap-9">
        <DetailBlock title="Overview">
          <p>{text(language, project.overview)}</p>
        </DetailBlock>
        <DetailBlock title="Problem">
          <p>{text(language, project.problem)}</p>
        </DetailBlock>
        <DetailBlock title="Approach">
          <p>{text(language, project.approach)}</p>
        </DetailBlock>
        <div className="grid gap-10 lg:grid-cols-2">
          <DetailBlock title="My Contribution" divider={false}>
            <BulletList
              items={project.contributions.map((item) => text(language, item))}
            />
          </DetailBlock>
          <DetailBlock title="Outputs" divider={false}>
            <BulletList items={project.outputs.map((item) => text(language, item))} />
          </DetailBlock>
        </div>
        <FeatureCards language={language} project={project} />
        <InlineProcessFlow language={language} project={project} />
      </div>
    </article>
  );
}
