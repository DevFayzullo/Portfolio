import Lottie from "react-lottie-player";
import loadingJson from "../assets/loading.json";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Lottie
        loop
        animationData={loadingJson}
        play
        style={{ width: 150, height: 150 }}
      />
    </div>
  );
}
