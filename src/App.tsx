import { useState } from "react";
import type { Language } from "./data/portfolioData";
import Navbar from "./components/Navbar";
import CV from "./components/CV";
import Hero from "./components/Hero";
import About from "./components/About";
import ResearchProjects from "./components/ResearchProjectsGallery";
import PublicationIP from "./components/PublicationIP";
import Awards from "./components/AwardsSection";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export type SectionId =
  | "home"
  | "cv"
  | "research"
  | "publications"
  | "awards"
  | "experience"
  | "contact";

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <>
            <Hero language={language} />
            <About language={language} />
          </>
        );
      case "cv":
        return <CV language={language} />;
      case "research":
        return <ResearchProjects language={language} />;
      case "publications":
        return <PublicationIP language={language} />;
      case "awards":
        return <Awards language={language} />;
      case "experience":
        return <Experience language={language} />;
      case "contact":
        return <Contact language={language} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar
        language={language}
        setLanguage={setLanguage}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="page-shell">
        <div key={`${language}-${activeSection}`} className="page-panel">
          {renderSection()}
        </div>
      </main>
    </div>
  );
}

export default App;
