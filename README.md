# Hyeonsu Jeong — Research Portfolio

Personal academic and research portfolio of **Hyeonsu Jeong**, focused on optimization, logistics, routing, resource allocation, and data-driven decision-making.

This repository contains the source code for my portfolio website and presents selected research publications, projects, intellectual property, awards, and research experience.

## Research Focus

My current research interests include:

- Combinatorial Optimization
- Transportation & Logistics Optimization
- Routing
- Resource Allocation
- Decision-Making
- Learning-Based Optimization

My previous work has applied optimization and data-driven methods to construction and industrial environments, including visual sensor deployment, digital-twin data acquisition, industrial safety decision support, and practical AI systems.

## Featured Research & Projects

### Automated Optimization of Visual Sensor Deployment for Construction Sites

Published in **Automation in Construction, 192 (2026), 107264**.

The study formulates CCTV placement and viewing-direction selection as a coverage optimization problem and develops both precision-oriented and runtime-oriented optimization models.

- Journal: *Automation in Construction*
- DOI: **10.1016/j.autcon.2026.107264**
- Repository: [Automated-optimization-of-visual-sensor-deployment-for-construction-sites](https://github.com/hyensooharry-design/Automated-optimization-of-visual-sensor-deployment-for-construction-sites)

### Knowledge Graph-Based Legal Chain Reasoning for Industrial Safety Decision Support

A Legal Graph-RAG framework for traceable industrial-safety decision support using:

- Document Graph
- Annex Graph
- Reasoning Graph
- Provenance Layer
- Evidence Pack
- Legal Chain

The manuscript has been accepted for publication.

- Repository: [industrial-safety-law-graph-rag-system](https://github.com/hyensooharry-design/industrial-safety-law-graph-rag-system)

### Face Recognition Attendance System

An implemented face-recognition attendance system using:

- FastAPI
- Supabase
- OpenCV
- ArcFace ONNX
- Streamlit
- GitHub Actions CI

- Repository: [face_attendance_api](https://github.com/hyensooharry-design/face_attendance_api)

## Portfolio Contents

The website includes:

- **Home** — research profile and current interests
- **Education** — academic background
- **CV** — embedded latest curriculum vitae
- **Research** — detailed research and project pages
- **Publications** — journal papers, intellectual property, and presentations
- **Awards** — selected competition and academic awards
- **Experience** — research, leadership, and development experience
- **Korean / English interface** — bilingual portfolio content

## Tech Stack

| Area | Technology |
|---|---|
| Frontend | React 19 |
| Language | TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| PDF Rendering | PDF.js |
| CI | GitHub Actions |

## Project Structure

```text
.
├── public/
│   ├── images/
│   └── resume/
├── src/
│   ├── components/
│   ├── data/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── .github/
│   └── workflows/
├── package.json
└── vite.config.ts
```

## Local Development

### 1. Clone the repository

```bash
git clone https://github.com/hyensooharry-design/Hyeonsu-Jeong.git
cd Hyeonsu-Jeong
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## Navigation Behavior

The portfolio uses browser history-aware in-site navigation.

- Re-selecting the active navigation item refreshes the visible section.
- Browser Back/Forward navigation works between portfolio sections and research detail pages.
- Clicking **Hyeonsu Jeong** in the top-left returns to the Home view.

## CI

Every push to `main` and every pull request runs a GitHub Actions workflow that:

1. installs dependencies with `npm ci`
2. runs the production build with `npm run build`

This ensures that TypeScript compilation and the Vite production build remain valid.

## Repository Status

- Visibility: **Public**
- Default branch: `main`
- Primary purpose: personal academic and research portfolio

## Author

**Hyeonsu Jeong**

- GitHub: [hyensooharry-design](https://github.com/hyensooharry-design)
- LinkedIn: [hyeonsujeong](https://www.linkedin.com/in/hyeonsujeong/)

---

This repository is maintained as a public portfolio of my research and development activities.
