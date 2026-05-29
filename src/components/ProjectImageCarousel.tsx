import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import type { Language } from "../data/portfolioData";
import type {
  LocalizedText,
  ResearchProjectItem,
} from "../data/researchProjectsData";
import ProjectImageFrame from "./ProjectImageFrame";

type CarouselImage = {
  src: string;
  label: LocalizedText;
  caption: LocalizedText;
  fit?: "contain" | "cover";
};

const text = (language: Language, value: LocalizedText) => value[language];
const t = (en: string, ko: string): LocalizedText => ({ en, ko });

function fallbackCaption(projectId: string, src: string, label: LocalizedText) {
  const name = src.toLowerCase();

  if (projectId === "cctv-location-optimization") {
    if (name.includes("main")) {
      return t(
        "Camera placement concept considering coverage, blind spots, and obstacles.",
        "커버리지, 사각지대, 장애물을 고려한 카메라 배치 개념도입니다."
      );
    }
    if (name.includes("site 1")) {
      return t(
        "Site modeling image for construction monitoring environment.",
        "건설현장 모니터링 환경을 위한 site modeling 이미지입니다."
      );
    }
    if (name.includes("site 2")) {
      return t(
        "Spatial site model used to review monitoring zones.",
        "감시 대상 영역 검토에 사용한 공간 site model입니다."
      );
    }
    if (name.includes("site 3")) {
      return t(
        "Construction site model for camera placement analysis.",
        "카메라 배치 분석을 위한 건설현장 모델입니다."
      );
    }
  }

  if (projectId === "ai-cctv-worker-safety") {
    if (name.includes("main")) {
      return t(
        "Fixed-camera monitoring concept for worker safety in manufacturing sites.",
        "제조현장 작업자 안전관리를 위한 고정형 카메라 모니터링 개념도입니다."
      );
    }
    if (name.includes("site 1")) {
      return t(
        "Monitoring environment for manufacturing-site safety analysis.",
        "제조현장 안전 분석을 위한 모니터링 환경입니다."
      );
    }
    if (name.includes("site 4")) {
      return t(
        "Site model for reviewing fixed-camera monitoring conditions.",
        "고정형 카메라 모니터링 조건 검토를 위한 site model입니다."
      );
    }
    if (name.includes("site 5")) {
      return t(
        "Spatial monitoring setup for worker safety analysis.",
        "작업자 안전 분석을 위한 공간 모니터링 구성입니다."
      );
    }
  }

  if (projectId === "industrial-safety-graph-rag") {
    if (name.includes("checklist")) {
      return t(
        "Implemented checklist preview for legal decision support.",
        "법령 의사결정 지원을 위한 체크리스트 구현 화면입니다."
      );
    }
    return t(
      "Graph-based legal reasoning structure connecting laws, articles, annexes, and extracted rules.",
      "법령, 조문, 별표, 추출 규칙을 연결하는 Graph 기반 법령 추론 구조입니다."
    );
  }

  if (projectId === "work-fit") {
    if (name.includes("framework")) {
      return t(
        "Platform framework connecting legal decision support, wearable monitoring, and safety dashboard.",
        "법령 의사결정 지원, 웨어러블 모니터링, 안전 대시보드를 연결하는 플랫폼 구조입니다."
      );
    }
    if (name.includes("warning")) {
      return t(
        "Smartwatch warning screen for hazardous situations.",
        "위험 상황을 알리는 스마트워치 경고 화면입니다."
      );
    }
    if (name.includes("heart")) {
      return t(
        "Worker health and emergency call interface.",
        "작업자 건강 상태와 긴급 호출 인터페이스입니다."
      );
    }
    if (name.includes("kpi")) {
      return t(
        "KPI and equipment-status view for field operation monitoring.",
        "현장 운영 모니터링을 위한 KPI 및 장비 상태 화면입니다."
      );
    }
    if (name.includes("emergency")) {
      return t(
        "Emergency response interface for worker safety events.",
        "작업자 안전 이벤트 대응을 위한 긴급 화면입니다."
      );
    }
    return t(
      "Integrated safety management concept combining wearable monitoring, legal checklist generation, and dashboard reporting.",
      "웨어러블 모니터링, 법령 체크리스트 생성, 대시보드 리포팅을 결합한 통합 안전관리 개념입니다."
    );
  }

  if (projectId === "face-recognition-attendance") {
    if (name.includes("faceenroll")) {
      return t(
        "Face enrollment screen for registering users.",
        "사용자 등록을 위한 얼굴 등록 화면입니다."
      );
    }
    if (name.includes("entrance")) {
      return t(
        "Entrance and attendance log management screen.",
        "출입 및 출결 기록 관리 화면입니다."
      );
    }
    if (name.includes("camera")) {
      return t(
        "Camera management screen for monitoring devices.",
        "모니터링 장치를 관리하는 카메라 관리 화면입니다."
      );
    }
    if (name.includes("before")) {
      return t(
        "Scenario 01. Recognition scenario before detection.",
        "Scenario 01. 인식 전 상태입니다."
      );
    }
    if (name.includes("ing")) {
      return t(
        "Scenario 02. Recognition scenario during detection.",
        "Scenario 02. 인식 중 상태입니다."
      );
    }
    if (name.includes("after")) {
      return t(
        "Scenario 03. Recognition scenario after detection.",
        "Scenario 03. 인식 후 상태입니다."
      );
    }
    if (name.includes("testbed")) {
      return t(
        "Actual testbed environment for recognition workflow.",
        "인식 흐름 검증을 위한 실제 테스트 환경입니다."
      );
    }
    return t(
      "Real-time face recognition attendance dashboard.",
      "실시간 얼굴 인식 출결 대시보드입니다."
    );
  }

  return label;
}

function buildCarouselImages(project: ResearchProjectItem): CarouselImage[] {
  const images: CarouselImage[] = [];

  if (project.mainImage) {
    images.push({
      src: project.mainImage,
      label: project.title,
      caption: fallbackCaption(project.id, project.mainImage, project.title),
      fit: project.mainImageFit ?? "contain",
    });
  }

  project.visualGroups?.forEach((group) => {
    group.images.forEach((image) => {
      images.push({
        src: image.src,
        label: image.label,
        caption: fallbackCaption(project.id, image.src, image.label),
        fit: image.fit ?? "contain",
      });
    });
  });

  const unique = new Map<string, CarouselImage>();
  images.forEach((image) => {
    if (!unique.has(image.src)) unique.set(image.src, image);
  });

  return [...unique.values()];
}

export default function ProjectImageCarousel({
  language,
  project,
}: {
  language: Language;
  project: ResearchProjectItem;
}) {
  const images = useMemo(() => buildCarouselImages(project), [project]);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];
  const hasControls = images.length > 1;

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => {
      const next = current + direction;
      if (next < 0) return images.length - 1;
      if (next >= images.length) return 0;
      return next;
    });
  };

  if (!activeImage) return null;
  const displayFit =
    project.id === "work-fit" || project.id === "face-recognition-attendance"
      ? "contain"
      : activeImage.fit;

  return (
    <article className="rounded-[34px] border border-slate-200 bg-white p-5 shadow-soft sm:p-7 lg:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-navy-700">
          Project Visuals
        </h3>
        <div className="text-sm font-bold text-slate-500">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      <div className="relative mt-5">
        <ProjectImageFrame
          src={activeImage.src}
          alt={text(language, activeImage.label)}
          fit={displayFit}
          variant="carousel"
          className="h-[18rem] sm:h-[28rem] lg:h-[36rem]"
          imageClassName={displayFit === "cover" ? "" : "p-3"}
        />

        {hasControls ? (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => move(-1)}
              className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-navy-900 shadow-sm transition hover:border-navy-700"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => move(1)}
              className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-navy-900 shadow-sm transition hover:border-navy-700"
            >
              <ChevronRight size={20} />
            </button>
          </>
        ) : null}
      </div>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="stable-copy text-sm leading-7 text-slate-600">
          {text(language, activeImage.caption)}
        </p>
        {hasControls ? (
          <div className="flex shrink-0 gap-2">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Go to image ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition ${
                  index === activeIndex
                    ? "w-7 bg-navy-700"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
