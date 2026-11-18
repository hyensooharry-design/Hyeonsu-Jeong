import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import type { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import type { Language } from "../data/portfolioData";
import { profile } from "../data/portfolioData";

GlobalWorkerOptions.workerSrc = pdfWorker;

type Props = {
  language: Language;
};

export default function CV({ language }: Props) {
  const cvUrl = profile.cvPdf;
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(() =>
    window.matchMedia("(min-width: 1024px)").matches
  );
  const [previewRequested, setPreviewRequested] = useState(false);
  const [pdf, setPdf] = useState<PDFDocumentProxy | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const updateDesktop = () => setIsDesktop(query.matches);
    query.addEventListener("change", updateDesktop);
    return () => query.removeEventListener("change", updateDesktop);
  }, []);

  useEffect(() => {
    // On phones, neither PDF.js nor the iframe should request the PDF on entry.
    if (!isDesktop && !previewRequested) {
      setStatus("idle");
      return;
    }

    let cancelled = false;
    setStatus("loading");

    const loadingTask = getDocument(cvUrl);

    loadingTask.promise
      .then((nextPdf) => {
        if (cancelled) return;
        setPdf(nextPdf);
        setTotalPages(nextPdf.numPages);
        setCurrentPage(1);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) {
          setStatus("error");
        }
      });

    return () => {
      cancelled = true;
      setPdf(null);
      setTotalPages(0);
      loadingTask.destroy();
    };
  }, [cvUrl, isDesktop, previewRequested]);

  useEffect(() => {
    let cancelled = false;
    const container = viewerRef.current;

    if (!container || !pdf || status !== "ready") return;

    container.innerHTML = "";

    const renderPage = async () => {
      const page = await pdf.getPage(currentPage);
      const baseViewport = page.getViewport({ scale: 1 });
      const availableWidth = Math.min(container.clientWidth || 960, 960);
      const scale = availableWidth / baseViewport.width;
      const viewport = page.getViewport({ scale });
      const pixelRatio = window.devicePixelRatio || 1;

      const pageFrame = document.createElement("div");
      pageFrame.className =
        "overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm";

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (!context) {
        throw new Error("Canvas context unavailable");
      }

      canvas.width = Math.floor(viewport.width * pixelRatio);
      canvas.height = Math.floor(viewport.height * pixelRatio);
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;
      canvas.className = "block h-auto w-full";

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      await page.render({
        canvas,
        canvasContext: context,
        viewport,
      }).promise;

      if (cancelled) return;

      pageFrame.appendChild(canvas);
      container.appendChild(pageFrame);
    };

    renderPage().catch(() => {
      if (!cancelled) {
        setStatus("error");
      }
    });

    return () => {
      cancelled = true;
    };
  }, [currentPage, pdf, status]);

  const labels =
    language === "ko"
      ? {
          loading: "CV를 불러오는 중입니다.",
          error: "PDF를 불러오지 못했습니다. 아래 버튼으로 열어주세요.",
          fallback: "CV 열기",
          previous: "이전",
          next: "다음",
          preview: "CV 미리보기",
          previewHint: "원할 때 미리보기를 눌러 CV를 화면에서 확인할 수 있습니다.",
        }
      : {
          loading: "Loading CV.",
          error: "Unable to load the PDF. Please open it with the button below.",
          fallback: "Open CV",
          previous: "Previous",
          next: "Next",
          preview: "Preview CV",
          previewHint: "Open the preview when you're ready to view the CV here.",
        };

  return (
    <section id="cv" className="py-16 sm:py-20">
      <div className="section-container">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-300 pb-6">
          <h2 className="section-title">Curriculum Vitae</h2>
          <a
            href={cvUrl}
            download
            className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-slate-300 bg-[#f9fbfd] px-4 py-2 text-sm font-medium text-navy-900 transition-colors hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
          >
            <Download size={16} aria-hidden="true" />
            {language === "ko" ? "CV 다운로드" : "Download CV"}
          </a>
        </div>

        <div className="mt-7 hidden overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm lg:block">
          <iframe
            title="Curriculum Vitae PDF"
            src={isDesktop ? cvUrl : undefined}
            className="h-[78vh] min-h-[44rem] w-full"
          />
        </div>

        <div className="mt-7 space-y-6 lg:hidden">
          {status === "idle" ? (
            <div className="rounded-[24px] border border-slate-200 bg-white px-5 py-6 shadow-sm">
              <p className="text-sm leading-7 text-slate-600">
                {labels.previewHint}
              </p>
              <button
                type="button"
                onClick={() => setPreviewRequested(true)}
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl bg-navy-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
              >
                {labels.preview}
              </button>
            </div>
          ) : null}

          {status === "loading" ? (
            <div className="rounded-[24px] border border-slate-200 bg-white px-6 py-8 text-sm font-medium text-slate-600 shadow-sm">
              {labels.loading}
            </div>
          ) : null}

          {status === "error" ? (
            <div className="rounded-[24px] border border-slate-200 bg-white px-6 py-8 shadow-sm">
              <p className="text-sm font-medium text-slate-600">{labels.error}</p>
              <a
                href={cvUrl}
                target="_blank"
                rel="noreferrer"
                className="stable-pill mt-5 inline-flex items-center rounded-full bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-700"
              >
                {labels.fallback}
              </a>
            </div>
          ) : null}

          {status === "ready" && totalPages > 0 ? (
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="stable-pill inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-navy-900 transition hover:border-navy-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={16} />
                {labels.previous}
              </button>

              <div className="text-sm font-bold text-slate-600">
                {currentPage} / {totalPages}
              </div>

              <button
                type="button"
                onClick={() =>
                  setCurrentPage((page) => Math.min(totalPages, page + 1))
                }
                disabled={currentPage === totalPages}
                className="stable-pill inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-navy-900 transition hover:border-navy-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {labels.next}
                <ChevronRight size={16} />
              </button>
            </div>
          ) : null}

          <div
            ref={viewerRef}
            className={status === "error" ? "hidden" : "grid gap-6"}
          />
        </div>
      </div>
    </section>
  );
}
