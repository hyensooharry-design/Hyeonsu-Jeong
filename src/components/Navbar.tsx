import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { SectionId } from "../App";
import type { Language } from "../data/portfolioData";
import { navItems, profile } from "../data/portfolioData";

type Props = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  activeSection: SectionId;
  setActiveSection: Dispatch<SetStateAction<SectionId>>;
};

type SectionItem = {
  id: SectionId;
  en: string;
  ko: string;
};

export default function Navbar({
  language,
  setLanguage,
  activeSection,
  setActiveSection,
}: Props) {
  const [open, setOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ko" : "en");
  };

  const sectionItems: SectionItem[] = [
    {
      id: "home" as const,
      en: "Home",
      ko: "Home",
    },
    {
      id: "cv" as const,
      en: "CV",
      ko: "CV",
    },
    ...navItems
      .filter((item) => item.id !== "about" && item.id !== "contact")
      .map((item) => ({
        ...item,
        en:
          item.id === "research"
            ? "Research"
            : item.id === "publications"
              ? "Publications"
              : item.en,
        ko:
          item.id === "research"
            ? "연구"
            : item.id === "publications"
              ? "연구성과"
              : item.ko,
        id: item.id as SectionId,
      })),
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-300 bg-slate-100/95 backdrop-blur">
      <nav className="section-container flex min-h-14 items-center justify-between gap-3 py-2.5">
        <button
          type="button"
          onClick={() => setActiveSection("home")}
          className="text-left text-sm font-bold uppercase tracking-[0.16em] text-navy-900"
        >
          {profile.name}
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {sectionItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`stable-nav-item rounded-full px-2 py-1 text-[0.92rem] transition ${
                activeSection === item.id
                  ? "bg-navy-900 font-bold text-white"
                  : "font-medium text-slate-600 hover:bg-white hover:text-navy-800"
              }`}
            >
              {item[language]}
            </button>
          ))}

            <button
              type="button"
              onClick={toggleLanguage}
            className="stable-pill ml-1 w-[4rem] rounded-full border border-navy-700 px-2.5 py-1 text-xs font-bold text-navy-700 transition hover:bg-navy-700 hover:text-white"
            >
              {language === "en" ? "KR" : "EN"}
            </button>
        </div>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-300 bg-slate-100 lg:hidden">
          <div className="section-container flex flex-col gap-4 py-5">
            {sectionItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setOpen(false);
                }}
                className={`rounded-2xl px-4 py-3 text-left text-sm ${
                  activeSection === item.id
                    ? "bg-white font-bold text-navy-900"
                    : "font-medium text-slate-700"
                }`}
              >
                {item[language]}
              </button>
            ))}

            <button
              type="button"
              onClick={toggleLanguage}
              className="w-fit rounded-full border border-navy-700 px-4 py-2 text-xs font-bold text-navy-700"
            >
              {language === "en" ? "Switch to Korean" : "Switch to English"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
