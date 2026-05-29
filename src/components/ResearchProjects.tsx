import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { Language } from "../data/portfolioData";
import { projects } from "../data/portfolioData";

type Props = {
  language: Language;
};

type ProjectEntry = (typeof projects)[number];

type ProjectGroup = {
  key: "research" | "projects";
  title: {
    en: string;
    ko: string;
  };
  subtitle: {
    en: string;
    ko: string;
  };
  items: ProjectEntry[];
};

type LocalizedText = {
  en: string;
  ko: string;
};

const workFitProject: ProjectEntry = {
  title: {
    en: "WORK-FIT: Worker-Centered Industrial Safety Management Platform",
    ko: "WORK-FIT: 작업자 중심 산업안전관리 플랫폼",
  },
  type: {
    en: "Graph-RAG · Smartwatch · Industrial Safety DX",
    ko: "Graph-RAG · 스마트워치 · 산업안전 DX",
  },
  status: {
    en: "Startup · Service Development Project",
    ko: "창업 · 서비스 개발 프로젝트",
  },
  problem: {
    en: "Industrial safety management is often fragmented across regulation lookup, field inspection, and worker condition monitoring, limiting real-time decision making and integrated response.",
    ko: "산업현장의 안전관리는 법령 확인, 현장 점검, 작업자 상태 관리가 분리되어 있어 실시간 의사결정과 통합 관리에 한계가 있습니다.",
  },
  approach: {
    en: "We are planning and developing an industrial safety management platform that combines a Graph-RAG regulation decision support system with smartwatch-based worker monitoring to generate compliance checklists, risk alerts, and field reports.",
    ko: "Graph-RAG 기반 법령 의사결정 지원 시스템과 스마트워치 기반 작업자 모니터링 기능을 결합하여, 법령 체크리스트 생성, 위험 알림, 현장 리포트 제공이 가능한 산업안전관리 플랫폼을 기획·개발하고 있습니다.",
  },
  highlights: {
    en: [
      "Selected for the Startup-Centered University government support program",
      "Smartwatch-based worker safety management",
      "Industrial safety law Graph-RAG integration",
    ],
    ko: [
      "창업중심대학 정부지원사업 선정",
      "스마트워치 기반 작업자 안전관리",
      "산업안전 법령 Graph-RAG 연계",
    ],
  },
};

const projectTags: Record<string, LocalizedText[]> = {
  "CCTV Location Optimization for Construction Site Monitoring": [
    {
      en: "Coverage Optimization",
      ko: "Coverage Optimization",
    },
    {
      en: "Camera Placement",
      ko: "Camera Placement",
    },
    {
      en: "Construction Site Monitoring",
      ko: "Construction Site Monitoring",
    },
  ],
  "AI-Based CCTV Video Analysis for Worker Safety Management": [
    {
      en: "Computer Vision",
      ko: "Computer Vision",
    },
    {
      en: "Worker Safety Monitoring",
      ko: "Worker Safety Monitoring",
    },
    {
      en: "Manufacturing Site",
      ko: "Manufacturing Site",
    },
  ],
  "Industrial Safety Law Graph-RAG System": [
    {
      en: "Legal Knowledge Graph",
      ko: "Legal Knowledge Graph",
    },
    {
      en: "Graph-based Retrieval",
      ko: "Graph-based Retrieval",
    },
    {
      en: "Legal Chain Reasoning",
      ko: "Legal Chain Reasoning",
    },
  ],
  "WORK-FIT: Worker-Centered Industrial Safety Management Platform": [
    {
      en: "Wearable Safety Monitoring",
      ko: "Wearable Safety Monitoring",
    },
    {
      en: "Legal Checklist Generation",
      ko: "Legal Checklist Generation",
    },
    {
      en: "Field Safety Dashboard",
      ko: "Field Safety Dashboard",
    },
  ],
  "Vector-Based Face Recognition Attendance System": [
    {
      en: "Face Recognition",
      ko: "Face Recognition",
    },
    {
      en: "Vector Embedding",
      ko: "Vector Embedding",
    },
    {
      en: "Attendance Automation",
      ko: "Attendance Automation",
    },
  ],
};

function getProjectTags(project: ProjectEntry): LocalizedText[] {
  return projectTags[project.title.en] ?? [];
}

function getProjectStatus(project: ProjectEntry, language: Language): string {
  if (project.title.en === "Industrial Safety Law Graph-RAG System") {
    return language === "en" ? "Capstone Design" : "캡스톤 디자인";
  }

  return project.status[language];
}

function buildGroups(): ProjectGroup[] {
  const faceRecognitionProject = projects.find((project) =>
    project.title.en.includes("Vector-Based Face Recognition Attendance System")
  );

  const researchItems = projects.filter(
    (project) => project !== faceRecognitionProject
  );

  const projectItems = faceRecognitionProject
    ? [workFitProject, faceRecognitionProject]
    : [workFitProject];

  return [
    {
      key: "research",
      title: {
        en: "Research",
        ko: "Research",
      },
      subtitle: {
        en: "Ongoing and completed research centered on industrial safety, optimization, monitoring, and legal intelligence.",
        ko: "산업안전, 최적화, 모니터링, 법령 지능화를 중심으로 진행한 연구를 정리했습니다.",
      },
      items: researchItems,
    },
    {
      key: "projects",
      title: {
        en: "Projects",
        ko: "Projects",
      },
      subtitle: {
        en: "Service, product, and system development projects translated into practical implementation.",
        ko: "실제 구현과 서비스화로 이어진 제품, 서비스, 시스템 개발 프로젝트입니다.",
      },
      items: projectItems,
    },
  ];
}

export default function ResearchProjects({ language }: Props) {
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<ProjectGroup["key"] | null>(null);
  const projectGroups = buildGroups();

  if (selectedProject && selectedGroup) {
    return (
      <section id="research" className="py-24">
        <div className="section-container">
          <button
            type="button"
            onClick={() => {
              setSelectedProject(null);
              setSelectedGroup(null);
            }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-navy-900 transition hover:border-navy-700"
          >
            <ArrowLeft size={16} />
            {language === "en" ? "Back to List" : "목록으로 돌아가기"}
          </button>

          <article className="mt-8 rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft lg:p-10">
            <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-navy-700">
                  {selectedGroup === "research"
                    ? language === "en"
                      ? "Research Detail"
                      : "연구 상세"
                    : language === "en"
                      ? "Project Detail"
                      : "프로젝트 상세"}
                </div>

                <h2 className="stable-heading mt-4 max-w-[18ch] text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
                  {selectedProject.title[language]}
                </h2>

                <p className="stable-copy mt-4 max-w-[40ch] text-base font-medium leading-7 text-slate-600">
                  {selectedProject.type[language]}
                </p>

                <p className="mt-5 inline-flex rounded-full bg-navy-50 px-4 py-2 text-sm font-bold text-navy-700">
                  {getProjectStatus(selectedProject, language)}
                </p>
              </div>

              <ArrowUpRight size={24} className="hidden text-navy-700 sm:block" />
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <section>
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-navy-700">
                  {language === "en" ? "Problem" : "문제 정의"}
                </h3>
                <p className="stable-copy mt-4 text-base leading-8 text-slate-700">
                  {selectedProject.problem[language]}
                </p>
              </section>

              <section>
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-navy-700">
                  {language === "en" ? "Approach" : "접근 방식"}
                </h3>
                <p className="stable-copy mt-4 text-base leading-8 text-slate-700">
                  {selectedProject.approach[language]}
                </p>
              </section>
            </div>

            <section className="mt-10 border-t border-slate-200 pt-8">
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-navy-700">
                {language === "en" ? "Highlights" : "주요 포인트"}
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {getProjectTags(selectedProject).map((item) => (
                  <div
                    key={item.en}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold leading-6 text-slate-700 transition duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    {item[language]}
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section id="research" className="py-24">
      <div className="section-container">
        <div className="space-y-16">
          {projectGroups.map((group) => (
            <section key={group.key}>
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold tracking-tight text-navy-900">
                  {group.title[language]}
                </h3>
                <p className="stable-copy mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  {group.subtitle[language]}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-300" />

              <div className="mt-8 grid gap-8">
                {group.items.map((project, index) => (
                  <button
                    type="button"
                    key={`${group.key}-${project.title.en}`}
                    onClick={() => {
                      setSelectedProject(project);
                      setSelectedGroup(group.key);
                    }}
                    className="block rounded-[32px] border border-slate-200 bg-white text-left shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <article className="grid gap-0 lg:grid-cols-[0.78fr_1.22fr]">
                      <div className="border-b border-slate-200 p-7 text-navy-900 lg:border-b-0 lg:border-r">
                        <div className="mb-6 flex items-center justify-between">
                          <span className="py-1 text-xs font-semibold text-navy-700">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <ArrowUpRight size={20} />
                        </div>

                        <h4 className="stable-heading max-w-[15ch] text-2xl font-bold leading-snug">
                          {project.title[language]}
                        </h4>

                        <p className="stable-copy mt-4 max-w-[28ch] text-sm font-medium leading-6 text-slate-600">
                          {project.type[language]}
                        </p>

                        <p className="mt-4 inline-flex min-h-5 rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
                          {getProjectStatus(project, language)}
                        </p>
                      </div>

                      <div className="p-7">
                        <div className="grid gap-8 md:grid-cols-2">
                          <div>
                            <h5 className="min-h-5 text-sm font-bold uppercase tracking-widest text-navy-700">
                              {language === "en" ? "Problem" : "문제 정의"}
                            </h5>
                            <p className="stable-copy mt-3 max-w-[34ch] text-sm leading-7 text-slate-600">
                              {project.problem[language]}
                            </p>
                          </div>

                          <div>
                            <h5 className="min-h-5 text-sm font-bold uppercase tracking-widest text-navy-700">
                              {language === "en" ? "Approach" : "접근 방식"}
                            </h5>
                            <p className="stable-copy mt-3 max-w-[34ch] text-sm leading-7 text-slate-600">
                              {project.approach[language]}
                            </p>
                          </div>
                        </div>

                        <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
                          {getProjectTags(project).map((item) => (
                            <span
                              key={item.en}
                              className="stable-copy rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition duration-200 hover:-translate-y-1 hover:shadow-md"
                            >
                              {item[language]}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
