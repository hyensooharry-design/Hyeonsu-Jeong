import { Image as ImageIcon } from "lucide-react";
import { useState } from "react";

type Props = {
  src?: string;
  alt: string;
  fit?: "contain" | "cover";
  variant?: "default" | "hero" | "carousel" | "plain";
  className?: string;
  imageClassName?: string;
};

export default function ProjectImageFrame({
  src,
  alt,
  fit = "contain",
  variant = "default",
  className = "",
  imageClassName = "",
}: Props) {
  const [hasError, setHasError] = useState(false);
  const shouldShowImage = Boolean(src) && !hasError;
  const frameStyle =
    variant === "plain"
      ? "flex items-center justify-center overflow-hidden bg-white"
      : variant === "carousel"
        ? "flex items-center justify-center overflow-hidden rounded-[24px] bg-white"
        : variant === "hero"
          ? "flex items-center justify-center overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-sm"
          : "flex items-center justify-center overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-sm";

  return (
    <div className={`${frameStyle} ${className}`}>
      {shouldShowImage ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          className={
            fit === "cover"
              ? `h-full w-full bg-white object-cover ${imageClassName}`
              : `max-h-full max-w-full bg-white object-contain ${imageClassName}`
          }
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(145deg,#e2e8f0_0%,#f8fafc_50%,#dbeafe_100%)] p-6 text-navy-900">
          <div className="rounded-2xl border border-white/70 bg-white/75 p-3 text-navy-700 backdrop-blur">
            <ImageIcon size={22} />
          </div>
        </div>
      )}
    </div>
  );
}
