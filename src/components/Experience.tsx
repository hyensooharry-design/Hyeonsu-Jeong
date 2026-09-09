import {
  Briefcase,
  Database,
  Globe,
  Lightbulb,
  Shield,
  Users,
} from "lucide-react";
import type { Language } from "../data/portfolioData";
import { experiences, sectionLabels } from "../data/portfolioData";

type Props = {
  language: Language;
};

const activities = {
  en: [
    {
      period: "2025.12",
      title: "2025 G-NEX - Startup Booth Operation",
      organization: "Gyeongnam Global Innovation Festa",
    },
    {
      period: "2025.05 - 2025.10",
      title: "Student Startup Team U-300+ - Advanced to National Finals",
      organization: "Ministry of Education",
    },
    {
      period: "2025.01.22",
      title: "Next-Generation Startup School Lecture",
      organization: "Main Contents Co., Ltd.",
    },
    {
      period: "2024.11 - 2025.02",
      title: "GNU Gaecheok Leaders Startup Supporters 1st Cohort",
      organization: "GNU Startup Support Foundation",
    },
  ],
  ko: [
    {
      period: "2025.12",
      title: "2025 G-NEX - 창업 부스 운영",
      organization: "경남 글로벌 이노베이션 페스타",
    },
    {
      period: "2025.05 - 2025.10",
      title: "학생 창업팀 U-300+ - 전국 본선 진출",
      organization: "교육부",
    },
    {
      period: "2025.01.22",
      title: "다음세대 스타트업 스쿨 강의",
      organization: "㈜메인콘텐츠",
    },
    {
      period: "2024.11 - 2025.02",
      title: "GNU 개척리더스 창업 서포터즈 1기",
      organization: "경상국립대학교 창업지원단",
    },
  ],
};

const certifications = {
  en: [
    {
      name: "Unmanned Powered Aircraft Device",
      grade: "Class 4",
      issuer: "Korea Transportation Safety Authority",
    },
    {
      name: "SQLD",
      grade: "-",
      issuer: "KDATA",
    },
    {
      name: "Computer Skills",
      grade: "Level 2",
      issuer: "Korea Chamber of Commerce and Industry",
    },
  ],
  ko: [
    {
      name: "무인동력 비행장치",
      grade: "4종",
      issuer: "한국교통안전공단",
    },
    {
      name: "SQLD",
      grade: "-",
      issuer: "KDATA",
    },
    {
      name: "컴퓨터 활용능력",
      grade: "2급",
      issuer: "대한 상공회의소",
    },
  ],
};

export default function Experience({ language }: Props) {
  const label = sectionLabels.experience[language];

  const getExperienceIcon = (organization: string) => {
    switch (organization) {
      case "Workrithm":
        return <Shield size={20} />;
      case "Digital Transformation Lab":
        return <Lightbulb size={20} />;
      case "FPT Big Data Practical Training":
        return <Database size={20} />;
      case "APLUSES":
        return <Users size={20} />;
      case "Purdue Academy of Global Engineering: Research Program":
        return <Globe size={20} />;
      default:
        return <Briefcase size={20} />;
    }
  };

  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <div className="max-w-3xl">
          <h2 className="section-title">{label.title}</h2>
        </div>

        <div className="mt-12 border-t-[1.5px] border-slate-300">
          {experiences.map((experience, index) => (
            <article
              key={experience.organization}
              className={`grid gap-6 py-6 md:grid-cols-[0.42fr_1fr] ${
                index !== experiences.length - 1
                  ? "border-b-[1.5px] border-slate-300"
                  : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                  {getExperienceIcon(experience.organization)}
                </div>
                <div className="text-sm font-bold text-navy-700">
                  {experience.period}
                </div>
              </div>

              <div>
                <h3 className="stable-heading text-xl font-bold text-navy-900">
                  {experience.organization}
                </h3>

                <p className="stable-copy mt-1 text-sm font-semibold text-navy-700">
                  {experience.role[language]}
                </p>

                <p className="stable-copy mt-4 text-sm leading-7 text-slate-600">
                  {experience.description[language]}
                </p>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16">
          <div className="border-t-[1.5px] border-slate-300 pt-4">
            <h3 className="text-base font-bold uppercase tracking-[0.12em] text-navy-900">
              {language === "en" ? "Activities" : "활동"}
            </h3>
          </div>

          <div className="mt-3 border-t-[1.5px] border-slate-300">
            {activities[language].map((activity) => (
              <article
                key={`${activity.period}-${activity.title}`}
                className="grid gap-2 border-b-[1.5px] border-slate-300 py-4 md:grid-cols-[12.5rem_minmax(0,1fr)_15rem] md:gap-6"
              >
                <div className="text-sm font-bold text-navy-700">
                  {activity.period}
                </div>

                <div>
                  <h4 className="stable-copy text-sm font-bold leading-6 text-slate-900 sm:text-base">
                    {activity.title}
                  </h4>
                </div>

                <div className="md:text-right">
                  <p className="stable-copy text-sm leading-6 text-slate-600">
                    {activity.organization}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="border-t-[1.5px] border-slate-300 pt-4">
            <h3 className="text-base font-bold uppercase tracking-[0.12em] text-navy-900">
              {language === "en" ? "Certifications" : "자격증"}
            </h3>
          </div>

          <div className="mt-3 border-t-[1.5px] border-slate-300">
            {certifications[language].map((certificate) => (
              <article
                key={`${certificate.name}-${certificate.grade}`}
                className="grid gap-2 border-b-[1.5px] border-slate-300 py-4 md:grid-cols-[12.5rem_minmax(0,1fr)_15rem] md:gap-6"
              >
                <div>
                  <h4 className="stable-copy text-sm font-bold leading-6 text-slate-900 sm:text-base">
                    {certificate.name}
                  </h4>
                </div>

                <div className="text-sm font-semibold text-navy-700 md:text-left">
                  {certificate.grade}
                </div>

                <div className="md:text-right">
                  <p className="stable-copy text-sm leading-6 text-slate-600">
                    {certificate.issuer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
