import { useEffect, useState } from "react";
import type { Language } from "./data/portfolioData";
import Navbar from "./components/Navbar";
import CV from "./components/CV";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import ResearchProjects from "./components/ResearchProjectsGallery";
import PublicationIP from "./components/PublicationIP";
import Awards from "./components/AwardsSection";
import Experience from "./components/Experience";

export type SectionId =
  | "home"
  | "cv"
  | "research"
  | "publications"
  | "awards"
  | "experience";

type PortfolioRoute = {
  section: SectionId;
  projectId: string | null;
};

const validSections = new Set<SectionId>([
  "home",
  "cv",
  "research",
  "publications",
  "awards",
  "experience",
]);

function parseRouteFromLocation(): PortfolioRoute {
  const rawHash = window.location.hash.replace(/^#/, "");
  if (!rawHash) {
    return { section: "home", projectId: null };
  }

  const [sectionRaw, projectRaw] = rawHash.split("/");
  const section = sectionRaw as SectionId;

  if (!validSections.has(section)) {
    return { section: "home", projectId: null };
  }

  if (section === "research" && projectRaw) {
    return {
      section,
      projectId: decodeURIComponent(projectRaw),
    };
  }

  return { section, projectId: null };
}

function buildRouteUrl(route: PortfolioRoute): string {
  const base = `${window.location.pathname}${window.location.search}`;

  if (route.section === "home" && !route.projectId) {
    return base;
  }

  if (route.section === "research" && route.projectId) {
    return `${base}#research/${encodeURIComponent(route.projectId)}`;
  }

  return `${base}#${route.section}`;
}

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [route, setRoute] = useState<PortfolioRoute>(() =>
    parseRouteFromLocation()
  );
  const [navigationVersion, setNavigationVersion] = useState(0);

  const refreshVisibleSection = () => {
    setNavigationVersion((value) => value + 1);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const applyRoute = (nextRoute: PortfolioRoute, mode: "push" | "replace") => {
    const state = {
      portfolio: true,
      section: nextRoute.section,
      projectId: nextRoute.projectId,
    };

    if (mode === "push") {
      window.history.pushState(state, "", buildRouteUrl(nextRoute));
    } else {
      window.history.replaceState(state, "", buildRouteUrl(nextRoute));
    }

    setRoute(nextRoute);
    refreshVisibleSection();
  };

  const navigateSection = (section: SectionId) => {
    const nextRoute: PortfolioRoute = { section, projectId: null };

    // Re-clicking the currently open top navigation item should reset/remount
    // that section instead of appearing unresponsive.
    if (route.section === section && route.projectId === null) {
      refreshVisibleSection();
      return;
    }

    applyRoute(nextRoute, "push");
  };

  const openResearchProject = (projectId: string) => {
    const nextRoute: PortfolioRoute = {
      section: "research",
      projectId,
    };

    window.history.pushState(
      {
        portfolio: true,
        section: "research",
        projectId,
        fromResearchList: route.section === "research" && route.projectId === null,
      },
      "",
      buildRouteUrl(nextRoute)
    );

    setRoute(nextRoute);
    refreshVisibleSection();
  };

  const closeResearchProject = () => {
    const currentState = window.history.state as
      | { portfolio?: boolean; fromResearchList?: boolean }
      | null;

    if (currentState?.portfolio && currentState.fromResearchList) {
      window.history.back();
      return;
    }

    applyRoute({ section: "research", projectId: null }, "replace");
  };

  useEffect(() => {
    const initialRoute = parseRouteFromLocation();

    window.history.replaceState(
      {
        portfolio: true,
        section: initialRoute.section,
        projectId: initialRoute.projectId,
        fromResearchList: false,
      },
      "",
      buildRouteUrl(initialRoute)
    );

    const handlePopState = () => {
      setRoute(parseRouteFromLocation());
      refreshVisibleSection();
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const renderSection = () => {
    switch (route.section) {
      case "home":
        return (
          <>
            <Hero language={language} />
            <About language={language} />
            <Education language={language} />
          </>
        );
      case "cv":
        return <CV language={language} />;
      case "research":
        return (
          <ResearchProjects
            language={language}
            selectedProjectId={route.projectId}
            onSelectProject={openResearchProject}
            onBack={closeResearchProject}
          />
        );
      case "publications":
        return <PublicationIP language={language} />;
      case "awards":
        return <Awards language={language} />;
      case "experience":
        return <Experience language={language} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar
        language={language}
        setLanguage={setLanguage}
        activeSection={route.section}
        onNavigateSection={navigateSection}
      />

      <main className="page-shell">
        <div
          key={`${language}-${route.section}-${route.projectId ?? "list"}-${navigationVersion}`}
          className="page-panel"
        >
          {renderSection()}
        </div>
      </main>
    </div>
  );
}

export default App;
