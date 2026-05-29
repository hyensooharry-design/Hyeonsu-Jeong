import type { Language } from "./portfolioData";

export type LocalizedText = Record<Language, string>;

export type DetailFeatureCard = {
  title: LocalizedText;
  description: LocalizedText;
};

export type VisualGroupImage = {
  src: string;
  label: LocalizedText;
  fit?: "contain" | "cover";
};

export type VisualGroup = {
  title: LocalizedText;
  caption?: LocalizedText;
  type: "gallery" | "system-preview" | "scenario" | "framework" | "watch-gallery";
  images: VisualGroupImage[];
};

export type ResearchProjectItem = {
  id: string;
  group: "research" | "projects";
  number: string;
  badge: LocalizedText;
  title: LocalizedText;
  category: LocalizedText;
  summary: LocalizedText;
  overview: LocalizedText;
  problem: LocalizedText;
  approach: LocalizedText;
  contributions: LocalizedText[];
  outputs: LocalizedText[];
  tags: LocalizedText[];
  mainImage?: string;
  mainImageFit?: "contain" | "cover";
  visualGroups?: VisualGroup[];
  featureCards?: DetailFeatureCard[];
  flow: LocalizedText[];
};

export type ResearchProjectGroup = {
  key: "research" | "projects";
  title: LocalizedText;
  subtitle: LocalizedText;
  detailLabel: LocalizedText;
  items: ResearchProjectItem[];
};

const t = (en: string, ko: string): LocalizedText => ({ en, ko });

const researchItems: ResearchProjectItem[] = [
  {
    id: "cctv-location-optimization",
    group: "research",
    number: "01",
    badge: t("Research Project", "연구 프로젝트"),
    title: t(
      "CCTV Location Optimization for Construction Site Monitoring",
      "건설현장 모니터링을 위한 CCTV 설치 위치 최적화"
    ),
    category: t(
      "Research · Optimization · Construction Site Monitoring",
      "연구 · 최적화 · 건설현장 모니터링"
    ),
    summary: t(
      "A study that formulates CCTV placement and orientation as an optimization problem to reduce blind spots in construction site monitoring.",
      "건설현장의 감시 사각지대를 줄이기 위해 CCTV의 위치와 방향을 최적화 문제로 정의한 연구입니다."
    ),
    overview: t(
      "This research optimizes CCTV placement and orientation to improve visual monitoring efficiency in construction sites.",
      "건설현장의 시각 모니터링 효율을 높이기 위해 CCTV 설치 위치와 방향을 최적화하는 연구입니다."
    ),
    problem: t(
      "Construction sites change continuously as equipment, materials, and structures move. This makes blind spots and redundant monitoring likely, requiring efficient camera placement under limited resources.",
      "건설현장은 장비·자재·구조물이 계속 변해 CCTV 사각지대와 중복 감시가 발생하기 쉽습니다. 제한된 카메라로 위험 구역을 효율적으로 감시할 수 있는 배치 방법이 필요합니다."
    ),
    approach: t(
      "The site was modeled as a grid-based space, and visible monitoring regions were calculated using field of view, sensing distance, and occlusion conditions. An optimization approach was then applied to search for camera positions and directions that improve coverage.",
      "현장을 격자 기반 공간으로 모델링하고, 카메라의 시야각, 탐지 거리, 장애물로 인한 가림 조건을 고려하여 감시 가능 영역을 계산했습니다. 이후 커버리지 향상을 목표로 CCTV 위치와 방향을 탐색하는 최적화 방법을 적용했습니다."
    ),
    contributions: [
      t("Modeled construction site space as a grid-based monitoring environment", "건설현장 공간을 격자 기반 감시 영역으로 모델링"),
      t("Defined camera field-of-view, detection distance, and blind-spot constraints", "카메라 시야각, 탐지 거리, 사각지대 조건 정의"),
      t("Structured the CCTV placement problem as an optimization task", "CCTV 배치 최적화 문제 구조화"),
      t("Reviewed greedy and metaheuristic search strategies", "Greedy 및 메타휴리스틱 기반 탐색 방법 검토"),
    ],
    outputs: [
      t("Oral presentation at the Korean Institute of Industrial Engineers 2025 Fall Conference", "대한산업공학회 2025 추계 학술대회 구두 발표"),
      t("Patent filing related to CCTV placement optimization", "CCTV 설치 위치 최적화 관련 특허 출원"),
      t("Camera placement methodology for construction site visual monitoring", "건설현장 시각 모니터링을 위한 카메라 배치 방법론 정리"),
    ],
    tags: [
      t("Coverage Optimization", "Coverage Optimization"),
      t("Camera Placement", "Camera Placement"),
      t("Construction Site Monitoring", "Construction Site Monitoring"),
    ],
    featureCards: [
      {
        title: t("Monitoring Area Definition", "감시 영역 정의"),
        description: t(
          "Defines target monitoring zones in construction sites where visual coverage is required.",
          "건설현장에서 시각적 모니터링이 필요한 주요 감시 대상 영역을 정의합니다."
        ),
      },
      {
        title: t("Camera Placement Candidates", "카메라 후보 위치 설정"),
        description: t(
          "Identifies feasible camera locations and directions based on site constraints and visibility conditions.",
          "현장 제약조건과 가시성을 고려하여 설치 가능한 카메라 위치와 방향 후보를 설정합니다."
        ),
      },
      {
        title: t("Coverage Evaluation", "커버리지 평가"),
        description: t(
          "Evaluates how effectively each camera placement covers target areas while reducing blind spots and redundant monitoring.",
          "사각지대와 중복 감시를 줄이면서 감시 대상 영역을 얼마나 효과적으로 커버하는지 평가합니다."
        ),
      },
    ],
    mainImage: "/images/RESEARCH/CONSTRUCTION CCTV/MAIN/CCTV MAIN.png",
    mainImageFit: "contain",
    visualGroups: [
      {
        title: t("Site Modeling Gallery", "Site Modeling Gallery"),
        caption: t(
          "Site images show how the construction environment is converted into analyzable spatial data for monitoring-zone and camera-placement review.",
          "SITE 이미지는 건설현장을 분석 가능한 공간 데이터로 변환하고, 감시 대상 영역과 설치 가능 위치를 검토하는 과정을 보여줍니다."
        ),
        type: "gallery",
        images: [
          { src: "/images/RESEARCH/CONSTRUCTION CCTV/정밀.png", label: t("Site Model 01", "Site Model 01"), fit: "contain" },
          { src: "/images/RESEARCH/CONSTRUCTION CCTV/정밀_.png", label: t("Site Model 02", "Site Model 02"), fit: "contain" },
          { src: "/images/RESEARCH/CONSTRUCTION CCTV/정밀__.png", label: t("Site Model 03", "Site Model 03"), fit: "contain" },
        ],
      },
    ],
    flow: [
      t("Site Data Preparation", "현장 데이터 준비"),
      t("Monitoring Area Definition", "감시 대상 영역 정의"),
      t("Camera Candidate Setup", "카메라 후보 위치 설정"),
      t("Coverage Evaluation", "감시 커버리지 평가"),
      t("Placement Optimization", "설치 위치 최적화"),
    ],
  },
  {
    id: "ai-cctv-worker-safety",
    group: "research",
    number: "02",
    badge: t("Industry-Academia Research Project", "산학연구 프로젝트"),
    title: t(
      "Foundational Technology Development for AI-Based CCTV Video Analysis for Worker Safety Management",
      "작업자 안전관리를 위한 AI 기반 CCTV 영상분석의 기반기술 개발"
    ),
    category: t(
      "AI · Computer Vision · Manufacturing Site Safety",
      "AI · 컴퓨터 비전 · 제조현장 안전관리"
    ),
    summary: t(
      "An industry-academia project for developing AI-based video analysis technology using existing CCTV infrastructure for worker safety monitoring.",
      "제조현장의 기존 CCTV 인프라를 활용해 작업자 안전을 자동으로 모니터링하는 기반기술 개발 프로젝트입니다."
    ),
    overview: t(
      "This industry-academia research project explores worker safety monitoring using existing CCTV infrastructure in manufacturing sites.",
      "제조현장의 기존 CCTV 인프라를 활용하여 작업자 안전관리와 시각 모니터링 환경을 구축하는 산학연구 프로젝트입니다."
    ),
    problem: t(
      "In manufacturing sites, it is difficult for managers to continuously monitor all CCTV streams. A method is needed to automatically detect worker safety risks using existing CCTV infrastructure.",
      "제조현장에서는 관리자가 모든 CCTV 영상을 지속적으로 확인하기 어렵습니다. 기존 CCTV 인프라를 활용해 작업자 위험 상황을 자동으로 감지하는 방법이 필요합니다."
    ),
    approach: t(
      "The project considered video analysis methods for recognizing workers and hazardous zones under fixed-camera environments, while also reviewing camera placement and monitoring conditions on site.",
      "고정형 CCTV 환경에서 작업자와 위험 구역을 인식할 수 있는 영상분석 기반기술을 검토하고, 현장 내 카메라 배치와 모니터링 조건을 함께 고려했습니다."
    ),
    contributions: [
      t("Organized CCTV-based safety management scenarios for manufacturing sites", "제조현장 CCTV 기반 안전관리 시나리오 정리"),
      t("Reviewed fixed-camera placement and monitoring environment design", "고정형 센서 배치 및 모니터링 환경 구성 검토"),
      t("Planned data flow and system structure for worker safety monitoring", "작업자 안전 모니터링을 위한 데이터 흐름 및 시스템 구조 기획"),
      t("Participated in foundational technology development within the industry-academia project", "산학연구 프로젝트 내 기반기술 개발 과정 참여"),
    ],
    outputs: [
      t("Participated in an industry-academia R&D project with Sejong Chemical", "㈜세종화학 산학공동기술개발 프로젝트 참여"),
      t("Developed foundational AI-based CCTV video analysis technology for worker safety management", "제조현장 작업자 안전관리를 위한 AI 기반 CCTV 영상분석 기반기술 개발"),
      t("Reviewed fixed-camera monitoring environments for manufacturing sites", "고정형 카메라 기반 모니터링 환경 검토"),
    ],
    tags: [
      t("Computer Vision", "Computer Vision"),
      t("Worker Safety Monitoring", "Worker Safety Monitoring"),
      t("Manufacturing Site", "Manufacturing Site"),
    ],
    featureCards: [
      {
        title: t("Fixed-Camera Monitoring Setup", "고정형 CCTV 모니터링 환경"),
        description: t(
          "Reviews how existing CCTV infrastructure can be used for worker safety monitoring in manufacturing sites.",
          "제조현장의 기존 CCTV 인프라를 활용하여 작업자 안전을 모니터링할 수 있는 환경을 검토합니다."
        ),
      },
      {
        title: t("Safety Scenario Design", "안전관리 시나리오 설계"),
        description: t(
          "Defines worker safety scenarios such as hazardous zones, unsafe behaviors, and monitoring targets.",
          "위험 구역, 작업자 위험 행동, 모니터링 대상 등 CCTV 기반 안전관리 시나리오를 정의합니다."
        ),
      },
      {
        title: t("Video Analysis Framework", "영상분석 프레임워크"),
        description: t(
          "Structures the basic flow from CCTV video input to AI-based safety event detection and manager-side monitoring.",
          "CCTV 영상 입력부터 AI 기반 위험 상황 감지, 관리자 모니터링까지 이어지는 기본 구조를 설계합니다."
        ),
      },
    ],
    mainImage: "/images/RESEARCH/SAFETY CCTV/MAIN/CCTV MAIN2.png",
    mainImageFit: "contain",
    visualGroups: [
      {
        title: t("Monitoring Environment Gallery", "Monitoring Environment Gallery"),
        caption: t(
          "Site images explain the fixed-camera monitoring environment for worker safety in manufacturing sites.",
          "SITE 이미지는 제조현장의 시각 모니터링 환경과 고정형 카메라 기반 안전관리 환경을 설명합니다."
        ),
        type: "gallery",
        images: [
          { src: "/images/RESEARCH/SAFETY CCTV/camera.png", label: t("Monitoring Camera", "Monitoring Camera"), fit: "contain" },
        ],
      },
    ],
    flow: [
      t("Site Data Preparation", "현장 데이터 준비"),
      t("Monitoring Area Definition", "감시 대상 영역 정의"),
      t("Camera Candidate Setup", "카메라 후보 위치 설정"),
      t("Coverage Evaluation", "감시 커버리지 평가"),
      t("Placement Optimization", "설치 위치 최적화"),
    ],
  },
  {
    id: "industrial-safety-graph-rag",
    group: "research",
    number: "03",
    badge: t("Capstone Design", "캡스톤 디자인"),
    title: t("Industrial Safety Law Graph-RAG System", "산업안전보건 법령 Graph-RAG 시스템"),
    category: t("Graph-RAG · Legal AI · Decision Support", "Graph-RAG · 법률 AI · 의사결정 지원"),
    summary: t(
      "A Graph-RAG system that structures industrial safety laws as graphs to connect obligations, exceptions, penalties, and evidence based on site conditions.",
      "산업안전보건 법령을 그래프 구조로 변환하여 현장 조건에 따른 의무·예외·처벌 조항을 근거 기반으로 연결하는 시스템입니다."
    ),
    overview: t(
      "This Graph-RAG system transforms industrial safety laws into graph structures and connects obligations, exceptions, penalties, and evidence according to site conditions.",
      "산업안전보건 법령을 그래프 구조로 변환하여, 현장 조건에 따른 의무·예외·처벌 조항을 근거 기반으로 연결하는 Graph-RAG 시스템입니다."
    ),
    problem: t(
      "Industrial safety laws involve complex connections among articles, annexes, exceptions, and penalties. A system is needed to present both legal evidence and reasoning chains for practical site-level decisions.",
      "산업안전보건 법령은 조문·별표·예외·처벌 조항이 복잡하게 연결되어 현장 조건에 맞게 적용하기 어렵습니다. 관련 근거와 법적 판단 흐름을 함께 제시하는 시스템이 필요합니다."
    ),
    approach: t(
      "Legal documents were structured into Document Graph, Annex Graph, and Reasoning Graph. The system retrieves related articles, annexes, obligations, exceptions, and penalties together based on user queries.",
      "법령 문서를 Document Graph, Annex Graph, Reasoning Graph로 구조화하고, 질의에 따라 관련 조문과 별표, 의무, 예외, 처벌 조항을 함께 검색하는 Graph-RAG 구조를 설계했습니다."
    ),
    contributions: [
      t("Collected and structured industrial safety law data", "산업안전보건 법령 데이터 수집 및 구조화"),
      t("Designed Document Graph, Annex Graph, and Reasoning Graph structures", "Document Graph, Annex Graph, Reasoning Graph 설계"),
      t("Implemented a FastAPI-based question-answering backend", "FastAPI 기반 질의응답 백엔드 구현"),
      t("Developed a React-based legal QA interface", "React 기반 법령 질의응답 UI 개발"),
      t("Designed an Evidence Pack structure for source text, related provisions, and claim status", "근거 문장, 관련 조항, 판단 상태를 함께 보여주는 Evidence Pack 구조 설계"),
    ],
    outputs: [
      t("Developed an industrial safety law Graph-RAG system", "산업안전보건 법령 Graph-RAG 시스템 개발"),
      t("Completed a capstone design project for legal decision support", "법령 의사결정 지원용 캡스톤 디자인 프로젝트 수행"),
      t("Implemented graph-based legal retrieval and evidence presentation", "Graph 기반 법령 검색 및 근거 제시 구조 구현"),
    ],
    tags: [
      t("Legal Knowledge Graph", "Legal Knowledge Graph"),
      t("Graph-based Retrieval", "Graph-based Retrieval"),
      t("Legal Chain Reasoning", "Legal Chain Reasoning"),
    ],
    mainImage: "/images/RESEARCH/GRAPH-RAG/MAIN/visualisation.png",
    mainImageFit: "contain",
    featureCards: [
      {
        title: t("Document Graph", "Document Graph"),
        description: t("Represents the hierarchy of laws, articles, paragraphs, items, and subitems.", "법령, 조문, 항, 호, 목의 계층 구조를 표현합니다."),
      },
      {
        title: t("Annex Graph", "Annex Graph"),
        description: t("Represents annex tables, rows, cells, notes, and their links to legal articles.", "별표, 행, 셀, 비고와 조문 연결 관계를 표현합니다."),
      },
      {
        title: t("Reasoning Graph", "Reasoning Graph"),
        description: t("Structures obligations, exceptions, penalties, criteria, and target entities as reasoning units.", "의무, 예외, 처벌, 기준, 대상 엔티티를 추론 단위로 구조화합니다."),
      },
    ],
    visualGroups: [
      {
        title: t("System Preview", "System Preview"),
        caption: t(
          "Checklist preview showing the implemented legal decision-support screen.",
          "CHECKLIST 이미지는 실제 구현 결과와 사용자 화면을 보여주는 시스템 프리뷰입니다."
        ),
        type: "system-preview",
        images: [
          { src: "/images/RESEARCH/GRAPH-RAG/CHECKLIST.png", label: t("Checklist Preview", "Checklist Preview"), fit: "contain" },
        ],
      },
    ],
    flow: [
      t("Legal Document Parsing", "Legal Document Parsing"),
      t("Graph Construction", "Graph Construction"),
      t("Graph-based Retrieval", "Graph-based Retrieval"),
      t("Evidence Pack", "Evidence Pack"),
      t("Answer Generation", "Answer Generation"),
    ],
  },
];

const projectItems: ResearchProjectItem[] = [
  {
    id: "work-fit",
    group: "projects",
    number: "01",
    badge: t("Startup · Service Development Project", "창업 · 서비스 개발 프로젝트"),
    title: t("WORK-FIT: Worker-centered Industrial Safety Management Platform", "WORK-FIT: 작업자 중심 산업안전관리 플랫폼"),
    category: t("Graph-RAG · Smartwatch · Industrial Safety DX", "Graph-RAG · 스마트워치 · 산업안전 DX"),
    summary: t(
      "An industrial safety management platform that combines Graph-RAG-based legal decision support with smartwatch-based worker monitoring.",
      "Graph-RAG 기반 법령 의사결정 지원과 스마트워치 기반 작업자 모니터링을 결합한 산업안전관리 플랫폼입니다."
    ),
    overview: t(
      "WORK-FIT is a worker-centered industrial safety management platform that combines legal decision support and wearable-based monitoring.",
      "WORK-FIT은 Graph-RAG 기반 법령 의사결정 지원과 스마트워치 기반 작업자 모니터링을 결합한 작업자 중심 산업안전관리 플랫폼입니다."
    ),
    problem: t(
      "Legal review, field inspection, and worker status monitoring are often managed separately in industrial sites. An integrated platform is needed to connect these processes for real-time safety management.",
      "산업현장의 법령 검토, 현장 점검, 작업자 상태 관리는 분리되어 운영되어 실시간 안전관리에 한계가 있습니다. 이를 하나의 흐름으로 연결하는 통합 플랫폼이 필요합니다."
    ),
    approach: t(
      "The platform integrates legal checklist generation, worker status monitoring, risk alerts, and field reporting. A smartwatch app and manager dashboard are connected to support site-centered safety management.",
      "법령 기반 체크리스트 생성, 작업자 상태 모니터링, 위험 알림, 현장 리포트 생성을 하나의 플랫폼으로 통합했습니다. 스마트워치 앱과 관리자 대시보드를 연동하여 현장 중심의 안전관리 흐름을 설계했습니다."
    ),
    contributions: [
      t("Planned the WORK-FIT service concept and business direction", "WORK-FIT 서비스 기획 및 사업화 방향 수립"),
      t("Designed Graph-RAG-based legal checklist functionality", "Graph-RAG 기반 법령 체크리스트 기능 설계"),
      t("Defined smartwatch-based worker alert and status monitoring scenarios", "스마트워치 기반 작업자 알림 및 상태관리 시나리오 구성"),
      t("Planned manager dashboard and report features", "관리자 대시보드 및 리포트 기능 기획"),
      t("Prepared startup and government support project presentation materials", "창업 프로젝트 및 정부지원사업 발표 자료 구성"),
    ],
    outputs: [
      t("Planned a worker-centered industrial safety management platform", "작업자 중심 산업안전관리 플랫폼 기획"),
      t("Designed an MVP concept for smartwatch-based safety management", "스마트워치 기반 안전관리 서비스 MVP 구상"),
      t("Connected the project with startup and government support programs", "창업 프로젝트 및 정부지원사업 연계"),
    ],
    tags: [
      t("Wearable Safety Monitoring", "Wearable Safety Monitoring"),
      t("Legal Checklist Generation", "Legal Checklist Generation"),
      t("Field Safety Dashboard", "Field Safety Dashboard"),
    ],
    mainImage: "/images/RESEARCH/WORKFIT/MAIN/WORKRITHM MAIN.png",
    mainImageFit: "contain",
    featureCards: [
      {
        title: t("Legal Decision Support", "Legal Decision Support"),
        description: t("Suggests applicable regulations and inspection items according to field conditions.", "현장 조건에 따라 적용 가능한 법령과 점검 항목을 제시합니다."),
      },
      {
        title: t("Wearable Monitoring", "Wearable Monitoring"),
        description: t("Delivers worker status and hazard alerts through a smartwatch interface.", "스마트워치를 통해 작업자 상태와 위험 알림을 전달합니다."),
      },
      {
        title: t("Safety Dashboard", "Safety Dashboard"),
        description: t("Helps managers review site status, alert history, and reports.", "관리자가 현장 상태, 알림 이력, 리포트를 확인할 수 있도록 지원합니다."),
      },
    ],
    visualGroups: [
      {
        title: t("Platform Framework", "Platform Framework"),
        caption: t("Framework image explaining the service structure and connected modules.", "FRAMEWORK 이미지는 서비스 구조와 연결 관계를 설명합니다."),
        type: "framework",
        images: [
          { src: "/images/RESEARCH/WORKFIT/FRAMEWORK.png", label: t("WORK-FIT Framework", "WORK-FIT Framework"), fit: "contain" },
        ],
      },
      {
        title: t("Wearable UI Gallery", "Wearable UI Gallery"),
        caption: t("Smartwatch screens showing worker-facing safety states and alerts.", "WATCH 이미지는 스마트워치 기반 작업자 인터페이스를 보여줍니다."),
        type: "watch-gallery",
        images: [
          { src: "/images/RESEARCH/WORKFIT/WATCH BEFORE.jpg", label: t("Before Work", "Before Work"), fit: "cover" },
          { src: "/images/RESEARCH/WORKFIT/WATCH AFTER.jpg", label: t("After Work", "After Work"), fit: "cover" },
          { src: "/images/RESEARCH/WORKFIT/WATCH HEART.jpg", label: t("Health Status", "Health Status"), fit: "cover" },
          { src: "/images/RESEARCH/WORKFIT/WATCH EMERGENCY.jpg", label: t("Emergency Alert", "Emergency Alert"), fit: "cover" },
          { src: "/images/RESEARCH/WORKFIT/WATCH KPI.jpg", label: t("KPI View", "KPI View"), fit: "cover" },
          { src: "/images/RESEARCH/WORKFIT/WATCH WARNING.jpg", label: t("Warning State", "Warning State"), fit: "cover" },
        ],
      },
    ],
    flow: [
      t("Legal Graph-RAG", "Legal Graph-RAG"),
      t("Safety Checklist", "Safety Checklist"),
      t("Worker Alert", "Worker Alert"),
      t("Field Dashboard", "Field Dashboard"),
      t("Safety Report", "Safety Report"),
    ],
  },
  {
    id: "face-recognition-attendance",
    group: "projects",
    number: "02",
    badge: t("Practical Development Project", "실무 개발 프로젝트"),
    title: t("Vector-based Face Recognition Attendance System", "벡터 기반 얼굴 인식 출결 시스템"),
    category: t("Computer Vision · Web Application · System Development", "컴퓨터 비전 · 웹 애플리케이션 · 시스템 개발"),
    summary: t(
      "A practical development project that automates attendance using face recognition with OpenCV and Streamlit.",
      "OpenCV와 Streamlit을 활용하여 얼굴 인식 기반 출결 자동화 시스템을 개발한 실무형 프로젝트입니다."
    ),
    overview: t(
      "This project developed a face-recognition-based attendance automation system using OpenCV and Streamlit.",
      "OpenCV와 Streamlit을 활용하여 얼굴 인식 기반 출결 자동화 시스템을 개발한 실무형 프로젝트입니다."
    ),
    problem: t(
      "Manual attendance checking in education or training settings is time-consuming and can lead to missing records or proxy attendance. A face recognition system can automate this process.",
      "교육·실습 환경의 수동 출결 관리는 시간이 오래 걸리고 기록 누락이나 대리 출석 문제가 발생할 수 있습니다. 얼굴 인식을 통해 출결을 자동화하는 시스템이 필요합니다."
    ),
    approach: t(
      "Face images were converted into vector embeddings, and real-time camera input was compared with registered user data to automatically record attendance events.",
      "얼굴 이미지를 벡터 임베딩으로 변환하고, 실시간 카메라 입력과 등록된 사용자 데이터를 비교하여 출결 이벤트를 자동으로 기록하는 구조를 구현했습니다."
    ),
    contributions: [
      t("Implemented OpenCV-based face recognition", "OpenCV 기반 얼굴 인식 기능 구현"),
      t("Developed a Streamlit-based real-time monitoring UI", "Streamlit 기반 실시간 모니터링 UI 개발"),
      t("Built user enrollment and attendance log management features", "사용자 등록 및 출결 로그 관리 기능 구현"),
      t("Designed database structure and API server integration", "DB 설계 및 API 서버 연동"),
      t("Configured real-time recognition result display and event logging", "실시간 인식 결과 표시 및 기록 기능 구성"),
    ],
    outputs: [
      t("Developed a prototype face recognition attendance system", "얼굴 인식 출결 시스템 프로토타입 개발"),
      t("Implemented real-time video-based attendance event recording", "실시간 영상 기반 출결 이벤트 기록 기능 구현"),
      t("Built user enrollment, camera selection, and log management features", "사용자 등록, 카메라 선택, 로그 관리 기능 구현"),
    ],
    tags: [
      t("Face Recognition", "Face Recognition"),
      t("Vector Embedding", "Vector Embedding"),
      t("Attendance Automation", "Attendance Automation"),
    ],
    mainImage: "/images/RESEARCH/ATTENDANCE/MAIN/FACERECOGNIZE.png",
    mainImageFit: "contain",
    featureCards: [
      {
        title: t("Face Enrollment", "얼굴 등록"),
        description: t(
          "Registers user face data and stores information required for recognition.",
          "사용자 얼굴 데이터를 등록하고 인식에 필요한 정보를 저장합니다."
        ),
      },
      {
        title: t("Real-time Recognition", "실시간 얼굴 인식"),
        description: t(
          "Compares live camera input with registered face embeddings to identify users in real time.",
          "실시간 카메라 입력과 등록된 얼굴 임베딩을 비교하여 사용자를 식별합니다."
        ),
      },
      {
        title: t("Attendance Logging", "출결 기록 관리"),
        description: t(
          "Automatically records recognition results as attendance events and provides log management for administrators.",
          "인식 결과를 출결 이벤트로 자동 저장하고, 관리자가 출결 로그를 확인할 수 있도록 지원합니다."
        ),
      },
    ],
    visualGroups: [
      {
        title: t("UI Feature Gallery", "UI Feature Gallery"),
        caption: t("Key screens for user enrollment, recognition, log management, and camera management.", "사용자 등록, 실시간 인식, 출결 기록, 카메라 관리 기능 화면입니다."),
        type: "gallery",
        images: [
          { src: "/images/RESEARCH/ATTENDANCE/FACEENROLL.png", label: t("Face Enrollment", "Face Enrollment"), fit: "cover" },
          { src: "/images/RESEARCH/ATTENDANCE/FACERECOGNIZE.png", label: t("Face Recognition", "Face Recognition"), fit: "cover" },
          { src: "/images/RESEARCH/ATTENDANCE/ENTRANCE LOG.png", label: t("Entrance Log", "Entrance Log"), fit: "cover" },
          { src: "/images/RESEARCH/ATTENDANCE/CAMERA MANAGEMENT.png", label: t("Camera Management", "Camera Management"), fit: "cover" },
        ],
      },
      {
        title: t("Recognition Scenario", "Recognition Scenario"),
        caption: t("Recognition sequence showing before, during, and after states.", "BEFORE / ING / AFTER 이미지는 실제 인식 시나리오 흐름을 보여줍니다."),
        type: "scenario",
        images: [
        ],
      },
      {
        title: t("Testbed", "Testbed"),
        caption: t("Actual test environment used to verify the recognition workflow.", "TESTBED 이미지는 실제 테스트 환경을 보여줍니다."),
        type: "system-preview",
        images: [
        ],
      },
    ],
    flow: [
      t("Camera Input", "Camera Input"),
      t("Face Detection", "Face Detection"),
      t("Vector Embedding", "Vector Embedding"),
      t("Similarity Matching", "Similarity Matching"),
      t("Attendance Log", "Attendance Log"),
    ],
  },
];

export const researchProjectGroups: ResearchProjectGroup[] = [
  {
    key: "research",
    title: t("Research", "연구"),
    subtitle: t(
      "Ongoing and completed research focused on industrial safety, optimization, visual monitoring, and legal intelligence.",
      "산업안전, 최적화, 시각 모니터링, 법령 지능화를 중심으로 진행한 연구를 정리했습니다."
    ),
    detailLabel: t("Research Detail", "연구 상세"),
    items: researchItems,
  },
  {
    key: "projects",
    title: t("Projects", "프로젝트"),
    subtitle: t(
      "Projects translated into practical services, systems, and implementation outcomes.",
      "실제 구현으로 이어진 서비스, 제품, 시스템 개발 프로젝트입니다."
    ),
    detailLabel: t("Project Detail", "프로젝트 상세"),
    items: projectItems,
  },
];
