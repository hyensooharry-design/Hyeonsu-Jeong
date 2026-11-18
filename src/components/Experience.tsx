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
      period: "2026.05 - Present",
      title: "Startup-Centered University Program: Worker-Centric Industrial Safety Monitoring and Legal Decision Support Platform",
      organization: "Korean Government-Funded Startup Program",
    },
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
      period: "2026.05 - Present",
      title: "창업중심대학: 작업자 중심 산업안전 모니터링 및 법령 의사결정 지원 플랫폼",
      organization: "정부지원 창업 프로그램",
    },
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
    <section id="experience" className="py-16 sm:py-20">
      <div className="section-container">
        <div className="max-w-3xl">
          <h2 className="section-title">{label.title}</h2>
        </div>

        <div className="mt-8 border-t border-slate-300">
          {experiences.map((experience) => (
            <article
              key={experience.organization}
              className="grid gap-4 border-b border-slate-200 py-7 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10"
            >
              <div className="flex items-center gap-3 md:flex-col md:items-start">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/80 text-navy-700 ring-1 ring-slate-200">
                  {getExperienceIcon(experience.organization)}
                </span>
                <span className="text-xs font-medium leading-6 text-slate-500 sm:text-sm">
                  {experience.period}
                </span>
              </div>

              <div className="min-w-0">
                <h3 className="stable-heading text-lg font-semibold leading-snug text-navy-900 sm:text-xl">
                  {experience.organization}
                </h3>
                <p className="stable-copy mt-2 text-sm font-medium text-navy-700">
                  {experience.role[language]}
                </p>
                <p className="stable-copy mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-[0.96rem]">
                  {experience.description[language]}
                </p>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-14 sm:mt-16">
          <h3 className="text-lg font-semibold tracking-tight text-navy-900">
            {language === "en" ? "Activities" : "활동"}
          </h3>
          <div className="mt-5 border-t border-slate-300">
            {activities[language].map((activity) => (
              <article
                key={`${activity.period}-${activity.title}`}
                className="grid gap-2 border-b border-slate-200 py-5 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10"
              >
                <span className="text-sm font-medium leading-6 text-slate-500">
                  {activity.period}
                </span>
                <div className="min-w-0">
                  <h4 className="stable-heading text-[0.96rem] font-semibold leading-6 text-navy-900">
                    {activity.title}
                  </h4>
                  <p className="stable-copy mt-1.5 text-sm leading-6 text-slate-600">
                    {activity.organization}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 sm:mt-16">
          <h3 className="text-lg font-semibold tracking-tight text-navy-900">
            {language === "en" ? "Certifications" : "자격증"}
          </h3>
          <div className="mt-5 border-t border-slate-300">
            {certifications[language].map((certificate) => (
              <article
                key={`${certificate.name}-${certificate.grade}`}
                className="grid gap-2 border-b border-slate-200 py-5 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10"
              >
                <span className="text-sm font-medium leading-6 text-slate-500">
                  {certificate.grade}
                </span>
                <div className="min-w-0">
                  <h4 className="stable-heading text-[0.96rem] font-semibold leading-6 text-navy-900">
                    {certificate.name}
                  </h4>
                  <p className="stable-copy mt-1.5 text-sm leading-6 text-slate-600">
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
