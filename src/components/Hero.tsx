import { Copy, ExternalLink, Mail, Phone } from "lucide-react";
import { useState } from "react";
import type { Language } from "../data/portfolioData";
import { heroText, profile } from "../data/portfolioData";

type Props = {
  language: Language;
};

export default function Hero({ language }: Props) {
  const t = heroText[language];
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1600);
    } catch {
      setEmailCopied(false);
    }
  };

  return (
    <section className="mx-auto max-w-[90rem] px-5 py-12 sm:px-8 lg:px-10 lg:py-16 xl:px-12">
      <div className="grid items-stretch gap-10 rounded-[36px] border border-slate-200 bg-white px-5 py-6 shadow-soft sm:px-7 sm:py-8 lg:grid-cols-[1.08fr_1.22fr] lg:px-12 lg:py-8 xl:grid-cols-[1.12fr_1.2fr] xl:px-14 2xl:px-16">
        <div className="order-2 lg:order-1 lg:-ml-2 xl:-ml-3">
          <img
            src="/images/KakaoTalk_20260526_225140761.jpg"
            alt="Hyeonsu Jeong profile"
            className="h-[26rem] w-full rounded-[28px] object-cover object-[center_36%] sm:h-[30rem] lg:h-full lg:min-h-[38rem] xl:min-h-[40rem]"
          />
        </div>

        <div className="order-1 flex flex-col justify-between lg:order-2 lg:pl-6 lg:pr-1 xl:pl-10 xl:pr-2">
          <div>
          <p className="stable-copy mb-5 min-h-6 text-sm font-bold uppercase tracking-[0.22em] text-navy-700">
            {language === "en" ? (
              <>
                Research Intern ·
                <br />
                Transportation & Logistics Optimization
              </>
            ) : (
              t.eyebrow
            )}
          </p>

          <h1 className="stable-heading min-h-[4.5rem] text-4xl font-bold tracking-tight text-navy-900 sm:min-h-[5.5rem] sm:text-5xl lg:min-h-[6.5rem] lg:text-6xl">
            {profile.name}
          </h1>

          <p
            className={`stable-heading mt-6 min-h-[7rem] max-w-[18ch] font-medium leading-snug text-slate-800 sm:min-h-[8.5rem] ${
              language === "en"
                ? "text-[1.4rem] sm:text-[1.7rem]"
                : "text-2xl sm:text-3xl"
            }`}
          >
            {t.title}
          </p>

          <p className="stable-copy mt-6 min-h-[6rem] max-w-3xl text-base leading-8 text-slate-600 sm:min-h-[7rem] sm:text-lg">
            {t.description}
          </p>

          <div className="mt-6 space-y-3 text-sm text-slate-700 sm:text-base">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="inline-flex items-center gap-2 font-semibold text-navy-900">
                <Phone size={16} />
                Phone
              </span>
              <span className="tracking-[0.01em]">010-2525-5524</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="inline-flex items-center gap-2 font-semibold text-navy-900">
                <Mail size={16} />
                Email
              </span>
              <span className="tracking-[0.01em]">{profile.email}</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-navy-900 transition duration-200 hover:-translate-y-0.5 hover:border-navy-300 hover:shadow-soft"
              >
                <Copy size={14} />
                {emailCopied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
          </div>

          <div className="mt-9 space-y-3">
            <div className="flex flex-wrap gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="stable-pill inline-flex min-w-[8rem] items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-navy-900 transition hover:border-navy-700"
              >
                GitHub
                <ExternalLink size={15} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="stable-pill inline-flex min-w-[8rem] items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-navy-900 transition hover:border-navy-700"
              >
                LinkedIn
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
