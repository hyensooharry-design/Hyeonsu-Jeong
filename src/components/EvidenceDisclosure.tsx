import { ChevronDown } from "lucide-react";
import type { Language } from "../data/portfolioData";

type Props = {
  src: string;
  alt: string;
  language: Language;
  kind?: "evidence" | "certificate";
  label?: string;
};

export default function EvidenceDisclosure({
  src,
  alt,
  language,
  kind = "evidence",
  label,
}: Props) {
  const isCertificate = kind === "certificate";
  const labelOpen =
    language === "ko"
      ? isCertificate ? "증명서 보기" : "증빙 이미지 보기"
      : isCertificate ? "View certificate" : "View supporting document";
  const labelClose =
    language === "ko"
      ? isCertificate ? "증명서 접기" : "증빙 이미지 접기"
      : isCertificate ? "Hide certificate" : "Hide supporting document";
  const openText = label ? (language === "ko" ? `${label} 보기` : `View ${label}`) : labelOpen;
  const closeText = label ? (language === "ko" ? `${label} 접기` : `Hide ${label}`) : labelClose;

  return (
    <details className="group mt-4">
      <summary className="inline-flex min-h-10 cursor-pointer list-none items-center justify-center gap-2 rounded-xl border border-slate-300 bg-[#f9fbfd] px-4 py-2.5 text-sm font-semibold text-navy-900 transition-colors duration-200 hover:border-slate-400 hover:bg-[#f9fbfd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900 [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">{openText}</span>
        <span className="hidden group-open:inline">{closeText}</span>
        <ChevronDown
          size={16}
          aria-hidden="true"
          className="transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <div className="mt-4 w-full max-w-[34rem] overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        <img src={src} alt={alt} loading="lazy" className="block h-auto w-full object-contain" />
      </div>
    </details>
  );
}
