import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";

export default function Loading({ size = "h-40 w-40" }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
      <Lottie animationData={loadingAnimation} loop={true} className={size} />
    </div>
  );
}
