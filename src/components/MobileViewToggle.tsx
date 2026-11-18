import { Monitor, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

const MOBILE_VIEWPORT = "width=device-width, initial-scale=1.0";
const DESKTOP_WIDTH = 1280;

/**
 * Phone-only view switcher. Changing the viewport width activates the exact
 * existing desktop breakpoints instead of making a second desktop layout.
 */
export default function MobileViewToggle() {
  const [isPhone] = useState(
    () =>
      window.matchMedia("(max-width: 767px)").matches &&
      window.matchMedia("(pointer: coarse)").matches
  );
  const [phoneWidth] = useState(() => Math.max(window.innerWidth, 320));
  const [desktopView, setDesktopView] = useState(false);

  useEffect(() => {
    if (!isPhone) return;

    const viewport = document.querySelector<HTMLMetaElement>(
      'meta[name="viewport"]'
    );
    if (!viewport) return;

    const previous = viewport.content;
    viewport.content = desktopView
      ? `width=${DESKTOP_WIDTH}`
      : MOBILE_VIEWPORT;

    return () => {
      viewport.content = previous;
    };
  }, [desktopView, isPhone]);

  if (!isPhone) return null;

  // A 1280px desktop canvas is zoomed out to fit a phone. Counter-scale the
  // floating control so it remains finger-sized and pinned to the same corner.
  const scale = desktopView ? DESKTOP_WIDTH / phoneWidth : 1;
  const iconSize = Math.round(20 * scale);
  const label = desktopView ? "모바일 버전으로 보기" : "컴퓨터 버전으로 보기";

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={desktopView}
      title={label}
      onClick={() => setDesktopView((current) => !current)}
      className="fixed z-[100] flex flex-col items-center justify-center rounded-full border border-white/20 bg-navy-900 text-white shadow-[0_6px_22px_rgba(15,23,42,0.24)] transition-colors hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
      style={{
        width: 56 * scale,
        height: 56 * scale,
        right: 20 * scale,
        bottom: `calc(${20 * scale}px + env(safe-area-inset-bottom, 0px))`,
        gap: 2 * scale,
        borderWidth: scale,
        WebkitTapHighlightColor: "transparent",
        touchAction: "manipulation",
      }}
    >
      {desktopView ? (
        <Smartphone size={iconSize} strokeWidth={2} aria-hidden="true" />
      ) : (
        <Monitor size={iconSize} strokeWidth={2} aria-hidden="true" />
      )}
      <span
        aria-hidden="true"
        className="font-semibold leading-none"
        style={{ fontSize: 9 * scale, letterSpacing: 0.25 * scale }}
      >
        {desktopView ? "MOBILE" : "PC"}
      </span>
    </button>
  );
}
