import type { Language } from "../data/portfolioData";
import type {
  LocalizedText,
  ResearchProjectItem,
  VisualGroup,
} from "../data/researchProjectsData";
import ProjectImageFrame from "./ProjectImageFrame";

const text = (language: Language, value: LocalizedText) => value[language];

function FeatureCards({
  language,
  project,
}: {
  language: Language;
  project: ResearchProjectItem;
}) {
  if (!project.featureCards?.length) return null;

  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-navy-700">
        Structure
      </h3>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {project.featureCards.map((card) => (
          <div
            key={card.title.en}
            className="rounded-[22px] border border-slate-200 bg-slate-50 p-5"
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
    </section>
  );
}

function VisualGroupSection({
  language,
  group,
}: {
  language: Language;
  group: VisualGroup;
}) {
  const isWide =
    group.type === "framework" || group.type === "system-preview";
  const isWatch = group.type === "watch-gallery";
  const isScenario = group.type === "scenario";

  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-navy-700">
        {text(language, group.title)}
      </h3>

      {isWide ? (
        <div className="mt-5">
          <ProjectImageFrame
            src={group.images[0]?.src}
            alt={group.images[0] ? text(language, group.images[0].label) : ""}
            fit={group.images[0]?.fit}
            className="min-h-[18rem] rounded-[24px] sm:min-h-[24rem]"
            imageClassName="max-h-[34rem]"
          />
        </div>
      ) : (
        <div
          className={
            isWatch
              ? "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              : isScenario
                ? "mt-5 grid gap-4 md:grid-cols-3"
                : "mt-5 grid gap-5 md:grid-cols-3"
          }
        >
          {group.images.map((image, index) => (
            <figure key={image.src}>
              <ProjectImageFrame
                src={image.src}
                alt={text(language, image.label)}
                fit={image.fit}
                className={
                  isWatch
                    ? "h-[15rem] rounded-[22px]"
                    : isScenario
                      ? "h-[13rem] rounded-[22px]"
                      : "h-[14rem] rounded-[22px]"
                }
                imageClassName={isWatch ? "p-2" : undefined}
              />
              <figcaption className="mt-3 flex items-center gap-2 text-sm font-semibold text-slate-600">
                {isScenario ? (
                  <span className="text-xs font-bold text-navy-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                ) : null}
                {text(language, image.label)}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {group.caption ? (
        <p className="stable-copy mt-4 text-sm leading-7 text-slate-500">
          {text(language, group.caption)}
        </p>
      ) : null}
    </section>
  );
}

export default function ProjectVisuals({
  language,
  project,
}: {
  language: Language;
  project: ResearchProjectItem;
}) {
  if (!project.visualGroups?.length && !project.featureCards?.length) return null;

  return (
    <div className="grid gap-6">
      <FeatureCards language={language} project={project} />
      {project.visualGroups?.map((group) => (
        <VisualGroupSection key={group.title.en} language={language} group={group} />
      ))}
    </div>
  );
}
