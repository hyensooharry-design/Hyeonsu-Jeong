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
    <section className="section-container pt-8 pb-16 sm:pt-10 lg:pt-14 lg:pb-20">
      <div className="grid overflow-hidden rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:grid-cols-[0.95fr_1.15fr] lg:items-stretch lg:gap-12 lg:p-9 xl:gap-14 xl:p-11">
        <div className="order-2 mt-8 min-w-0 lg:order-1 lg:mt-0">
          <img
            src="/images/KakaoTalk_20260526_225140761.jpg"
            alt="Hyeonsu Jeong profile"
            className="h-[24rem] w-full rounded-[22px] object-cover object-[center_36%] sm:h-[29rem] lg:h-full lg:min-h-[31rem]"
          />
        </div>

        <div className="order-1 flex min-w-0 flex-col justify-center lg:order-2 lg:py-4">
          <p className="stable-copy text-xs font-semibold uppercase leading-6 tracking-[0.1em] text-navy-700 sm:text-sm">
            {t.eyebrow}
          </p>

          <h1 className="stable-heading mt-5 text-[2.7rem] font-semibold leading-[1.08] tracking-tight text-navy-900 sm:text-[3.2rem] xl:text-[3.55rem]">
            {profile.name}
          </h1>

          <p className="stable-heading mt-6 max-w-[36rem] text-xl font-medium leading-[1.45] text-slate-800 sm:text-[1.45rem]">
            {t.title}
          </p>

          <p className="stable-copy mt-5 max-w-[36rem] text-[0.96rem] leading-7 text-slate-600 sm:text-base">
            {t.description}
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-200 pt-5 text-sm text-slate-600">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <span className="inline-flex min-w-16 items-center gap-2 font-medium text-navy-900">
                <Phone size={15} aria-hidden="true" />
                Phone
              </span>
              <span>010-2525-5524</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="inline-flex min-w-16 items-center gap-2 font-medium text-navy-900">
                <Mail size={15} aria-hidden="true" />
                Email
              </span>
              <span className="break-all">{profile.email}</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label={language === "ko" ? "이메일 주소 복사" : "Copy email address"}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-navy-900 transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
              >
                <Copy size={13} aria-hidden="true" />
                {emailCopied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-navy-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
            >
              GitHub
              <ExternalLink size={15} aria-hidden="true" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-[#f9fbfd] px-5 py-2.5 text-sm font-medium text-navy-900 transition-colors hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
            >
              LinkedIn
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
