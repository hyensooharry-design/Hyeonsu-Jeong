export type Language = "en" | "ko";

export const profile = {
  name: "Hyeonsu Jeong",
  email: "hyensoo2002@naver.com",
  linkedin: "https://www.linkedin.com/in/hyeonsujeong/",
  blog: "https://blog.naver.com/hyensoo_",
  github: "https://github.com/hyensooharry-design",
  cvPdf: "/resume/JeongHS_CV.pdf",
  koreanResume: "/resume/hyeonsu-jeong-resume-ko.pdf",
  englishResume: "/resume/hyeonsu-jeong-resume-en.pdf",
};

export const navItems = [
  { id: "about", en: "About", ko: "소개" },
  { id: "research", en: "Research & Projects", ko: "연구 및 프로젝트" },
  { id: "publications", en: "Publications & IP", ko: "연구성과 및 지식재산" },
  { id: "awards", en: "Awards", ko: "수상" },
  { id: "experience", en: "Experience", ko: "경험" },
];

export const heroText = {
  en: {
    eyebrow: "Research Intern · Transportation & Logistics Optimization",
    title: "Solving complex decision-making problems through optimization and data-driven methods.",
    description:
      "My research focuses on combinatorial optimization, routing, resource allocation, and logistics systems, with experience applying optimization to real-world industrial and construction environments.",
    primaryButton: "View Research",
    secondaryButton: "Download Resume",
  },
  ko: {
    eyebrow: "연구 인턴 · 교통·물류 최적화",
    title: "최적화와 데이터 기반 방법론으로 복잡한 의사결정 문제를 해결합니다.",
    description:
      "조합최적화, 경로계획, 자원배분, 물류 시스템을 중심으로 연구하고 있으며, 산업 및 건설 현장의 실제 문제에 최적화 방법론을 적용해왔습니다.",
    primaryButton: "연구 보기",
    secondaryButton: "이력서 다운로드",
  },
};

export const metrics = [
  {
    value: "2",
    en: "First-Author Journal Articles",
    ko: "제1저자 학술지 논문",
  },
  {
    value: "2",
    en: "Patent Applications",
    ko: "특허 출원",
  },
  {
    value: "1",
    en: "Software Copyright",
    ko: "소프트웨어 등록",
  },
  {
    value: "15",
    en: "Awards",
    ko: "수상",
  },
];

export const about = {
  en: [
    "I am an Industrial and Systems Engineering student and research intern interested in optimization and decision-making for complex systems. My research focuses on combinatorial optimization, routing, resource allocation, and logistics, with an emphasis on translating real-world operational problems into tractable optimization models.",
    "My previous work has applied these methods to construction and industrial environments, including visual sensor deployment, digital-twin data acquisition, and industrial safety decision support. I am currently expanding this experience toward transportation and logistics optimization, while exploring learning-based approaches for solving large-scale and complex optimization problems.",
  ],
  ko: [
    "저는 복잡한 시스템의 최적화와 의사결정 문제를 연구하는 산업시스템공학 전공자이자 연구 인턴입니다. 조합최적화, 경로계획, 자원배분, 물류 시스템을 주요 연구 관심 분야로 두고 있으며, 실제 운영 문제를 수리적·계산적 최적화 문제로 정의하고 해결하는 데 관심이 있습니다.",
    "지금까지 건설·산업 현장을 대상으로 시각 센서 배치, 디지털트윈 데이터 수집, 산업안전 의사결정 지원 등의 문제에 최적화 방법론을 적용해왔습니다. 현재는 이러한 경험을 교통·물류 최적화로 확장하고 있으며, 대규모·복잡 최적화 문제를 해결하기 위한 학습 기반 최적화 방법에도 관심을 두고 있습니다.",
  ],
};
export const projects = [
  {
    title: {
      en: "Automated Optimization of Visual Sensor Deployment for Construction Sites",
      ko: "건설현장 모니터링을 위한 CCTV 설치 위치 최적화",
    },
    type: {
      en: "Research · Optimization · Construction Monitoring",
      ko: "연구 · 최적화 · 건설현장 모니터링",
    },
    status: {
      en: "Research Project",
      ko: "연구 프로젝트",
    },
    problem: {
      en: "Construction sites require effective visual monitoring, but improper camera placement can cause blind spots, redundant coverage, and inefficient visual data acquisition.",
      ko: "건설현장에서는 효과적인 시각 모니터링이 필요하지만, 부적절한 카메라 배치는 사각지대, 중복 감시, 비효율적인 시각 데이터 수집 문제를 발생시킬 수 있습니다.",
    },
    approach: {
      en: "Developed an optimization-based method for determining CCTV installation locations by considering monitoring coverage, visibility, and site-specific spatial constraints.",
      ko: "감시 커버리지, 가시성, 현장 공간 제약조건을 고려하여 CCTV 설치 위치를 탐색하는 최적화 기반 방법을 개발했습니다.",
    },
    highlights: {
      en: [
        "Published in Automation in Construction (SCIE Q1)",
        "Oral presentation at Korean Institute of Industrial Engineers",
        "Patent filed",
        "Software copyright registered",
      ],
      ko: [
        "Automation in Construction 게재 (SCIE Q1)",
        "대한산업공학회 구두 발표",
        "특허 출원",
        "소프트웨어 등록",
      ],
    },
  },
  {
    title: {
      en: "AI-Based CCTV Video Analysis for Worker Safety Management",
      ko: "작업자 안전관리를 위한 AI 기반 CCTV 영상분석",
    },
    type: {
      en: "AI · Computer Vision · Manufacturing Safety",
      ko: "AI · 컴퓨터 비전 · 제조현장 안전관리",
    },
    status: {
      en: "Industry-linked Research",
      ko: "산학연구 프로젝트",
    },
    problem: {
      en: "Manufacturing sites need scalable methods to monitor worker safety using existing visual infrastructure.",
      ko: "제조현장에서는 기존 CCTV 인프라를 활용하여 작업자 안전을 확장성 있게 모니터링할 수 있는 방법이 필요합니다.",
    },
    approach: {
      en: "Contributed to foundational technologies for AI-based CCTV video analysis, with a focus on fixed sensor placement and visual monitoring environments.",
      ko: "AI 기반 CCTV 영상분석 기반기술 개발 과정에서 고정형 센서 배치와 시각 모니터링 환경 구축을 중심으로 기여했습니다.",
    },
    highlights: {
      en: [
        "Poster presentation at Gyeongnam 2025 The Next AI",
        "GNU RISE industry-linked research project",
      ],
      ko: [
        "경남 2025 The Next AI 포스터 발표",
        "GNU RISE 산학연구 프로젝트",
      ],
    },
  },
  {
    title: {
      en: "Vector-Based Face Recognition Attendance System",
      ko: "벡터 기반 얼굴 인식 출결 시스템",
    },
    type: {
      en: "Computer Vision · Web Application · System Development",
      ko: "컴퓨터 비전 · 웹 애플리케이션 · 시스템 개발",
    },
    status: {
      en: "Practical Development",
      ko: "실무 개발 프로젝트",
    },
    problem: {
      en: "Manual attendance management can be inefficient in practical education or training environments.",
      ko: "교육 및 실습 환경에서 수동 출결 관리는 비효율적이며, 자동화된 인식 시스템이 필요할 수 있습니다.",
    },
    approach: {
      en: "Built a face recognition attendance system using OpenCV and Streamlit, including database design, API server implementation, and model integration.",
      ko: "OpenCV와 Streamlit을 활용하여 얼굴 인식 출결 시스템을 제작했으며, DB 설계, API 서버 구축, 모델 연동을 담당했습니다.",
    },
    highlights: {
      en: ["OpenCV", "Streamlit", "Database Design", "API Server", "Model Integration"],
      ko: ["OpenCV", "Streamlit", "DB 설계", "API 서버", "모델 연동"],
    },
  },
  {
    title: {
      en: "Knowledge Graph-Based Legal Chain Reasoning for Industrial Safety Decision Support",
      ko: "산업안전보건 법령 Graph-RAG 시스템",
    },
    type: {
      en: "Graph-RAG · Legal AI · Decision Support",
      ko: "Graph-RAG · 법률 AI · 의사결정 지원",
    },
    status: {
      en: "Accepted Journal Article",
      ko: "학술지 게재 승인",
    },
    problem: {
      en: "Industrial safety regulations are complex and difficult to apply directly to workplace situations. Simple RAG systems may retrieve related text but often fail to judge obligations, exceptions, penalties, and evidence chains reliably.",
      ko: "산업안전보건 법령은 조문, 별표, 예외, 처벌 조항이 복잡하게 연결되어 있어 실제 현장 상황에 직접 적용하기 어렵습니다. 단순 RAG는 관련 문장을 찾을 수는 있지만 의무, 예외, 처벌, 근거 체인을 안정적으로 판단하기 어렵습니다.",
    },
    approach: {
      en: "Developed a Legal Graph-RAG framework that integrates document, annex, reasoning, and provenance graphs with Evidence Pack and Legal Chain construction for traceable industrial-safety legal decision support.",
      ko: "산업안전보건 법령을 Document Graph, Annex Graph, Reasoning Graph와 Provenance Layer로 구조화하고, Evidence Pack과 Legal Chain을 통해 근거 추적이 가능한 법령 의사결정을 지원하는 Graph-RAG 프레임워크를 개발했습니다.",
    },
    highlights: {
      en: ["Document Graph", "Annex Graph", "Reasoning Graph", "Evidence-backed QA"],
      ko: ["Document Graph", "Annex Graph", "Reasoning Graph", "근거 기반 질의응답"],
    },
  },
];

export const publications = [
  {
    category: { en: "SCI", ko: "SCI" },
    title: "Automated optimization of visual sensor deployment for construction sites",
    meta: {
      en: "First Author · Automation in Construction, 192, 107264 · DOI: 10.1016/j.autcon.2026.107264 · Q1, SCIE, 2025 IF 12.6",
      ko: "제1저자 · Automation in Construction, 192, 107264 · DOI: 10.1016/j.autcon.2026.107264 · Q1, SCIE, 2025 IF 12.6",
    },
  },
  {
    category: { en: "KCI", ko: "KCI" },
    title: "Knowledge Graph-Based Legal Chain Reasoning for Industrial Safety Decision Support",
    meta: {
      en: "First Author · Accepted · Journal of the Korean Institute of Industrial Engineers · Q1, KCI, Excellent Accredited",
      ko: "제1저자 · Accepted · Journal of the Korean Institute of Industrial Engineers · Q1, KCI, 우수등재",
    },
  },
  {
    category: { en: "Patent", ko: "특허" },
    title: "Digital Map Resolution Optimization Technology Based on Spatial Importance in Construction Sites",
    meta: {
      en: "Patent Under Review · Korea · Co-inventor",
      ko: "특허 심사 중 · 대한민국 · 공동발명자",
    },
  },
  {
    category: { en: "Patent", ko: "특허" },
    title: "Method for Searching Optimal CCTV Camera Installation Locations for Construction Site Monitoring",
    meta: {
      en: "Patent Filed · Application No. 10-2026-0073586 · First Inventor / Primary Contributor",
      ko: "특허 출원 · 출원번호 10-2026-0073586 · 제1발명자",
    },
  },
  {
    category: { en: "Software Copyright", ko: "소프트웨어 등록" },
    title: "Color Matching Program for Realistic Representation of Industrial 3D Point Clouds",
    meta: {
      en: "Software Copyright Registered · Registration No. C-2025-035569 · Co-author",
      ko: "소프트웨어 등록 · 등록번호 C-2025-035569 · 공동저작자",
    },
  },
  {
    category: { en: "Conference", ko: "학술 발표" },
    title: "CCTV Camera Placement Optimization for Construction Site Monitoring",
    meta: {
      en: "Oral Presentation · Korean Institute of Industrial Engineers · First Author",
      ko: "구두 발표 · 대한산업공학회 · 제1저자",
    },
  },
  {
    category: { en: "Poster", ko: "포스터 발표" },
    title: "Optimization of Resolution of 3D Digital Maps in Industrial Sites Based on Work Area Importance Derived from Terrain Information",
    meta: {
      en: "Poster Presentation · Korea Institute of Industrial Engineers (KIIE) Conference 2026 · Co-author",
      ko: "포스터 발표 · 대한산업공학회 2026 학술대회 · 공동저자",
    },
  },
  {
    category: { en: "Poster", ko: "포스터 발표" },
    title: "Foundational Technology Development for AI-Based CCTV Video Analysis for Worker Safety Management",
    meta: {
      en: "Poster Presentation · Gyeongnam 2025 The Next AI · First Author",
      ko: "포스터 발표 · 경남 2025 The Next AI · 제1저자",
    },
  },
];

export const awards = [
  {
    date: "2026.04.30",
    title: {
      en: "2026 GSAT Young Startup Camp Competition",
      ko: "2026 GSAT 영스타트업 캠프 경진대회",
    },
    prize: { en: "Grand Prize", ko: "최우수상" },
    issuer: {
      en: "Gyeongnam Center for Creative Economy & Innovation",
      ko: "경남창조경제혁신센터 대표이사상",
    },
  },
  {
    date: "2026.02.05",
    title: {
      en: "GNU RISE Shared Growth Performance Showcase, Excellent Startup Club Division",
      ko: "GNU RISE 상생 성과공유회 우수 창업동아리 부문",
    },
    prize: { en: "Excellent Case Award", ko: "우수 사례 표창" },
    issuer: {
      en: "GNU RISE Project Group Director Award",
      ko: "경상국립대학교 RISE 사업단장상",
    },
  },
  {
    date: "2025.12.12",
    title: {
      en: "2025 Southeast Region University Student Startup Competition",
      ko: "2025 동남권 대학생 창업경진대회",
    },
    prize: { en: "Grand Prize", ko: "최우수상" },
    issuer: {
      en: "GNU Startup Support Foundation Director Award",
      ko: "경상국립대학교 창업지원단장상",
    },
  },
  {
    date: "2025.11.28",
    title: {
      en: "DATA VENTURE Problem-Solving Challenge",
      ko: "DATA VENTURE 문제해결 Challenge",
    },
    prize: { en: "Excellence Award", ko: "우수상" },
    issuer: {
      en: "Big Data Innovation Convergence University Project Group Director Award",
      ko: "빅데이터 혁신 융합대학 사업단장상",
    },
  },
  {
    date: "2025.11.22",
    title: {
      en: "2025 GNU Gaecheok Leaders Startup Idea Hackathon Competition",
      ko: "2025 GNU 개척리더스 창업아이디어 해커톤 경진대회",
    },
    prize: { en: "Grand Prize", ko: "최우수상" },
    issuer: {
      en: "GNU Startup Support Foundation Director Award",
      ko: "경상국립대학교 창업지원단장상",
    },
  },
  {
    date: "2025.09.27",
    title: {
      en: "2025 Gyeongnam Region University Student Startup Club Competition",
      ko: "2025 경남권 대학생 창업동아리 경진대회",
    },
    prize: { en: "Grand Prize", ko: "대상" },
    issuer: {
      en: "GNU Startup Support Foundation Director Award",
      ko: "경상국립대학교 창업지원단장상",
    },
  },
  {
    date: "2025.07.11",
    title: {
      en: "GNU-Startup Pioneer",
      ko: "GNU-Startup Pioneer",
    },
    prize: { en: "Excellence Award", ko: "우수상" },
    issuer: {
      en: "GNU Startup Education Innovation Center Director Award",
      ko: "경상국립대학교 창업교육혁신센터장상",
    },
  },
  {
    date: "2025.06.25",
    title: {
      en: "2025 Convergence Data Utilization Startup Competition",
      ko: "2025 융복합 데이터 활용 창업 경진대회 공모전",
    },
    prize: { en: "Ministerial Award", ko: "장관상" },
    issuer: {
      en: "KOSME Chairperson Award",
      ko: "중소벤처기업진흥공단 이사장상",
    },
  },
  {
    date: "2025.06.25",
    title: {
      en: "2025 Convergence Data Utilization Startup Competition",
      ko: "2025 융복합 데이터 활용 창업 경진대회 공모전",
    },
    prize: { en: "Encouragement Award", ko: "장려상" },
    issuer: {
      en: "GNU Big Data Project Group Director Award",
      ko: "경상국립대학교 빅데이터 사업단장상",
    },
  },
  {
    date: "2025.05.28",
    title: {
      en: "2025 GNU Gaecheok Leaders Startup Ideathon Competition",
      ko: "2025 GNU 개척리더스 창업 아이디어톤 경진대회",
    },
    prize: { en: "Grand Prize", ko: "최우수상" },
    issuer: {
      en: "GNU Startup Support Foundation Director Award",
      ko: "경상국립대학교 창업지원단장상",
    },
  },
  {
    date: "2025.01.24",
    title: {
      en: "Convergence ICT Utilization Competition (Generative AI Division)",
      ko: "융복합 ICT 활용 공모전(생성형 AI 분야)",
    },
    prize: { en: "Grand Prize", ko: "최우수상" },
    issuer: {
      en: "GNU President Award",
      ko: "경상국립대학교 총장상",
    },
  },
  {
    date: "2025.01.22",
    title: {
      en: "Winter Big Data Tableau Competition",
      ko: "동계방학 빅데이터 Tableau 경진대회",
    },
    prize: { en: "Encouragement Award", ko: "장려상" },
    issuer: {
      en: "Planit Partners CEO Award",
      ko: "㈜플랜잇 파트너스 대표이사상",
    },
  },
  {
    date: "2024.12.21",
    title: {
      en: "AWS GenAI Schumpeter Rocket Pitch",
      ko: "AWS GenAI Schumpeter 로켓피치",
    },
    prize: { en: "Excellence Award", ko: "우수상" },
    issuer: {
      en: "AWS CEO Award",
      ko: "㈜AWS 대표이사상",
    },
  },
  {
    date: "2024.12.21",
    title: {
      en: "AWS GenAI Schumpeter Hackathon",
      ko: "AWS GenAI Schumpeter 해커톤",
    },
    prize: { en: "Grand Prize", ko: "최우수상" },
    issuer: {
      en: "GNU President Award",
      ko: "경상국립대학교 총장상",
    },
  },
  {
    date: "2024.12.13",
    title: {
      en: "2024 Creative Convergence 3D Printing Idea Competition",
      ko: "2024 창의융합 3D 프린팅 아이디어 경진대회",
    },
    prize: { en: "Encouragement Award", ko: "장려상" },
    issuer: {
      en: "GNU College of Engineering Dean Award",
      ko: "경상국립대학교 공과대학장상",
    },
  },
  {
    date: "2024.09.20",
    title: {
      en: "National University Fostering Project Student Project Competition",
      ko: "국립대학육성사업 대학생 프로젝트 경진대회",
    },
    prize: { en: "Excellence Award", ko: "우수상" },
    issuer: {
      en: "GNU Department of Industrial and Systems Engineering Head Award",
      ko: "경상국립대학교 산업시스템공학부장상",
    },
  },
];

export const legacyExperiences = [
  {
    organization: "Digital Transformation Lab",
    role: {
      en: "Undergraduate Researcher",
      ko: "학부 연구생",
    },
    period: "2025.06 – 2026.02",
    description: {
      en: "Developed sensor placement optimization models for visual monitoring and digital twin-related research projects.",
      ko: "시각 모니터링 및 디지털트윈 관련 연구과제에서 센서 배치 최적화 모델 개발을 수행했습니다.",
    },
  },
  {
    organization: "APLUSES",
    role: {
      en: "President / Former Planning Director",
      ko: "회장 / 전 기획부장",
    },
    period: "2025.03 – 2027.02",
    description: {
      en: "Led university entrepreneurship club operations, student startup activities, and project planning.",
      ko: "대학 창업동아리 운영, 학생 창업 활동, 프로젝트 기획을 주도했습니다.",
    },
  },
  {
    organization: "FPT Big Data Practical Training",
    role: {
      en: "Student Researcher / Developer",
      ko: "학생 연구원 / 개발자",
    },
    period: "2025.12 – 2026.01",
    description: {
      en: "Built a vector-based face recognition attendance system using OpenCV, Streamlit, database design, and API server integration.",
      ko: "OpenCV, Streamlit, DB 설계, API 서버 연동을 활용하여 벡터 기반 얼굴 인식 출결 시스템을 제작했습니다.",
    },
  },
];

export const experiences = [
  {
    organization: "Transportation & Logistics Optimization Lab",
    role: {
      en: "Research Intern",
      ko: "연구 인턴",
    },
    period: "2026.08 - Present",
    description: {
      en: "Participating in transportation and logistics optimization research at Yonsei University.",
      ko: "연세대학교 Transportation & Logistics Optimization Lab에서 교통 및 물류 최적화 연구에 참여하고 있습니다.",
    },
  },
  {
    organization: "Purdue Academy of Global Engineering: Research Program",
    role: {
      en: "Research Program Participant",
      ko: "글로벌 엔지니어링 연구 프로그램 참가",
    },
    period: "2026.06 - 2026.07",
    description: {
      en: "Participated in a research program at the Edwardson School of Industrial Engineering, Purdue University, Indiana, USA.",
      ko: "미국 인디애나 Purdue University Edwardson School of Industrial Engineering에서 글로벌 엔지니어링 연구 프로그램에 참여했습니다.",
    },
  },
  {
    organization: "Workrithm",
    role: {
      en: "Founder / CEO",
      ko: "창업자 / 대표",
    },
    period: "2025.05 - Present",
    description: {
      en: "Founded and led Workrithm, developing WORK-FIT, an industrial safety management platform that combines Graph-RAG-based legal decision support, smartwatch-based worker monitoring, automated safety checklists, and field safety dashboards.",
      ko: "Workrithm을 창업하고 WORK-FIT을 개발하며, Graph-RAG 기반 법령 의사결정 지원, 스마트워치 기반 작업자 모니터링, 자동 안전 체크리스트, 현장 안전 대시보드를 결합한 산업안전관리 플랫폼을 이끌고 있습니다.",
    },
  },
  {
    organization: "APLUSES",
    role: {
      en: "President / Former Planning Director",
      ko: "회장 / 전 기획부장",
    },
    period: "2025.03 - 2027.02",
    description: {
      en: "Led university entrepreneurship club operations, student startup activities, and project planning.",
      ko: "대학 창업동아리 운영, 학생 창업 활동, 프로젝트 기획을 주도했습니다.",
    },
  },
  {
    organization: "Digital Transformation Lab",
    role: {
      en: "Undergraduate Researcher",
      ko: "학부 연구생",
    },
    period: "2025.06 - 2026.02",
    description: {
      en: "Developed sensor placement optimization models for visual monitoring and digital twin-related research projects.",
      ko: "시각 모니터링과 디지털트윈 관련 연구과제에서 센서 배치 최적화 모델을 개발했습니다.",
    },
  },
  {
    organization: "FPT Big Data Practical Training",
    role: {
      en: "Student Researcher / Developer",
      ko: "학생 연구원 / 개발자",
    },
    period: "2025.12 - 2026.01",
    description: {
      en: "Built a vector-based face recognition attendance system using OpenCV, Streamlit, database design, and API server integration.",
      ko: "OpenCV, Streamlit, 데이터베이스 설계, API 서버 연동을 활용해 벡터 기반 얼굴 인식 출결 시스템을 구축했습니다.",
    },
  },
];

export const sectionLabels = {
  about: {
    en: {
      title: "About",
      subtitle:
        "A research-driven profile combining industrial engineering, optimization, computer vision, and practical system development.",
    },
    ko: {
      title: "소개",
      subtitle:
        "산업시스템공학, 최적화, 컴퓨터 비전, 실무형 시스템 개발을 연결하는 연구 중심 프로필입니다.",
    },
  },
  research: {
    en: {
      title: "Research & Projects",
      subtitle:
        "Selected research and technical projects focused on safer and smarter industrial environments.",
    },
    ko: {
      title: "연구 및 프로젝트",
      subtitle:
        "더 안전하고 스마트한 산업 현장을 목표로 수행한 주요 연구 및 기술 프로젝트입니다.",
    },
  },
  publications: {
    en: {
      title: "Publications & IP",
      subtitle:
        "Research outputs, intellectual property, and academic presentations.",
    },
    ko: {
      title: "연구성과 및 지식재산",
      subtitle: "논문, 특허, 소프트웨어 등록, 학술 발표 성과입니다.",
    },
  },
  awards: {
    en: {
      title: "Awards",
      subtitle:
        "Awards across entrepreneurship, AI, data, research, and engineering competitions.",
    },
    ko: {
      title: "수상",
      subtitle: "창업, AI, 데이터, 연구 및 공학 분야에서의 주요 수상 실적입니다.",
    },
  },
  experience: {
    en: {
      title: "Experience",
      subtitle:
        "Research, leadership, and practical development experiences.",
    },
    ko: {
      title: "경험",
      subtitle: "연구, 리더십, 실무 개발 경험을 정리했습니다.",
    },
  },
  contact: {
    en: {
      title: "Contact",
      subtitle:
        "Open to research conversations, graduate opportunities, and professional collaboration.",
    },
    ko: {
      title: "연락",
      subtitle:
        "연구 협업, 대학원 진학, 산업 AI 및 최적화 관련 대화를 환영합니다.",
    },
  },
};
