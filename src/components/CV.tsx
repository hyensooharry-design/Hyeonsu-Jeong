import { useEffect, useRef, useState } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
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
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    const container = viewerRef.current;

    if (!container) return;

    container.innerHTML = "";
    setStatus("loading");

    const loadingTask = getDocument(cvUrl);

    const renderPdf = async () => {
      const pdf = await loadingTask.promise;

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
        if (cancelled) return;

        const page = await pdf.getPage(pageNumber);
        const baseViewport = page.getViewport({ scale: 1 });
        const availableWidth = Math.min(container.clientWidth, 960);
        const scale = availableWidth / baseViewport.width;
        const viewport = page.getViewport({ scale });
        const pixelRatio = window.devicePixelRatio || 1;

        const pageFrame = document.createElement("div");
        pageFrame.className =
          "overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft";

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

        pageFrame.appendChild(canvas);
        container.appendChild(pageFrame);
      }

      if (!cancelled) {
        setStatus("ready");
      }
    };

    renderPdf().catch(() => {
      if (!cancelled) {
        setStatus("error");
      }
    });

    return () => {
      cancelled = true;
      loadingTask.destroy();
    };
  }, [cvUrl]);

  const statusLabel =
    language === "ko"
      ? {
          loading: "CV를 불러오는 중입니다.",
          error: "PDF를 불러오지 못했습니다. 아래 버튼으로 열어주세요.",
          fallback: "CV 열기",
        }
      : {
          loading: "Loading CV.",
          error: "Unable to load the PDF. Please open it with the button below.",
          fallback: "Open CV",
        };

  return (
    <section id="cv" className="py-24">
      <div className="section-container">
        <div className="max-w-3xl">
          <h2 className="section-title">Curriculum Vitae</h2>
        </div>

        <div className="mt-8 space-y-6">
          {status === "loading" ? (
            <div className="rounded-[28px] border border-slate-200 bg-white px-6 py-8 text-sm font-medium text-slate-600 shadow-soft">
              {statusLabel.loading}
            </div>
          ) : null}

          {status === "error" ? (
            <div className="rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-soft">
              <p className="text-sm font-medium text-slate-600">{statusLabel.error}</p>
              <a
                href={cvUrl}
                target="_blank"
                rel="noreferrer"
                className="stable-pill mt-5 inline-flex items-center rounded-full bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-700"
              >
                {statusLabel.fallback}
              </a>
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
