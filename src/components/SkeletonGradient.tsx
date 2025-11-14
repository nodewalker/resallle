// TODO: update gradient
export const SkeletonGradient = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
      }}
      className="bg-[#9c9c9c] rounded-xl"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%)",
          animation: "shimmer 1.5s infinite linear",
          transform: "translateX(-100%)",
        }}
      ></div>
      <style>{`
@keyframes shimmer {
0% { transform: translateX(-100%); }
100% { transform: translateX(100%); }
}
`}</style>
    </div>
  );
};
