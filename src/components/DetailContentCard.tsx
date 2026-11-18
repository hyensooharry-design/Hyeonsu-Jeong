import type { ReactNode } from "react";
import type { Language } from "../data/portfolioData";
import type { LocalizedText, ResearchProjectItem } from "../data/researchProjectsData";

const text = (language: Language, value: LocalizedText) => value[language];

function IntroBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-b border-slate-200 py-5 first:pt-0 last:border-b-0">
      <h2 className="text-sm font-semibold tracking-tight text-navy-900">
        {title}
      </h2>
      <div className="stable-copy mt-3 text-[0.94rem] leading-7 text-slate-700 sm:text-[0.98rem]">
        {children}
      </div>
    </section>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-sm font-semibold tracking-tight text-navy-900">
      {children}
    </h2>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-[0.69rem] h-1.5 w-1.5 shrink-0 rounded-full bg-navy-700" />
          <span className="stable-copy min-w-0 flex-1 text-[0.94rem] leading-7 text-slate-700">
            {item}
          </span>
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
    <section className="mobile-detail-features border-b border-slate-200 py-9">
      <SectionHeading>Key Structure / Features</SectionHeading>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.featureCards.map((card) => (
          <div key={card.title.en} className="border-t border-slate-300 pt-4">
            <h3 className="text-[0.96rem] font-semibold leading-6 text-navy-900">
              {text(language, card.title)}
            </h3>
            <p className="stable-copy mt-3 text-sm leading-7 text-slate-600">
              {text(language, card.description)}
            </p>
          </div>
        ))}
      </div>
    </section>
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
    <section className="py-9">
      <SectionHeading>Process</SectionHeading>
      <ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(9rem,1fr))]">
        {project.flow.map((step, index) => (
          <li key={step.en} className="min-w-0 border-t border-slate-300 pt-4">
            <span className="text-xs font-medium tracking-[0.1em] text-slate-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="stable-copy mt-2 text-sm font-medium leading-6 text-navy-900">
              {text(language, step)}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function DetailContentCard({
  language,
  project,
  part,
}: {
  language: Language;
  project: ResearchProjectItem;
  part: "introduction" | "remaining";
}) {
  if (part === "introduction") {
    return (
      <div className="min-w-0">
        <IntroBlock title="Overview">
          <p>{text(language, project.overview)}</p>
        </IntroBlock>
        <IntroBlock title="Problem">
          <p>{text(language, project.problem)}</p>
        </IntroBlock>
        <IntroBlock title="Approach">
          <p>{text(language, project.approach)}</p>
        </IntroBlock>
      </div>
    );
  }

  return (
    <article className="min-w-0">
      <div className="grid gap-10 border-b border-slate-200 py-9 lg:grid-cols-2 lg:gap-16">
        <section className="mobile-detail-contribution min-w-0">
          <SectionHeading>My Contribution</SectionHeading>
          <BulletList items={project.contributions.map((item) => text(language, item))} />
        </section>
        <section className="min-w-0">
          <SectionHeading>Outputs</SectionHeading>
          <BulletList items={project.outputs.map((item) => text(language, item))} />
        </section>
      </div>
      <FeatureCards language={language} project={project} />
      <InlineProcessFlow language={language} project={project} />
    </article>
  );
}
