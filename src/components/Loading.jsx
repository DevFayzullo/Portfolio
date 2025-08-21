import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";

export default function Loading({
  size = "h-40 w-40",
  fullScreen = true,
  label = "Loading…",
  invertOnDark = true,
  className = "",
}) {
  const containerBase =
    "flex items-center justify-center bg-white dark:bg-gray-950 transition-colors";
  const minH = fullScreen ? "min-h-screen" : "min-h-[12rem]";
  const lottieBase = `${size} mx-auto`;

  const lottieDarkFix = invertOnDark ? "dark:invert" : "";

  return (
    <div
      className={`${containerBase} ${minH} ${className}`}
      role="status"
      aria-live="polite"
      aria-label={label}>
      <div className="flex flex-col items-center">
        <Lottie
          animationData={loadingAnimation}
          loop
          className={`${lottieBase} ${lottieDarkFix}`}
        />
        {/* Accessible caption (screen readers + subtle visual) */}
        <span className="mt-3 text-sm text-gray-500 dark:text-gray-400 select-none">
          {label}
        </span>
      </div>
    </div>
  );
}
