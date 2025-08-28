// src/components/LoadingScreen.tsx
export default function LoadingScreen() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#fff] z-50 fixed top-0 left-0">
      <div className="text-center">
          <video
        src="/loading.mp4"
        autoPlay
        muted
        playsInline
        className="h-full object-cover w-[200px]"
      />
      </div>
    </div>
  );
}
