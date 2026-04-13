"use client";

export default function HeartScene() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a0a1e" />
            <stop offset="35%" stopColor="#3d1045" />
            <stop offset="65%" stopColor="#880E4F" />
            <stop offset="100%" stopColor="#E91E63" />
          </linearGradient>
          <linearGradient id="moonGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FCE4EC" />
            <stop offset="100%" stopColor="#F8BBD0" />
          </linearGradient>
          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F8BBD0" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#E91E63" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#E91E63" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hill1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4A1942" />
            <stop offset="100%" stopColor="#2D0A2E" />
          </linearGradient>
          <linearGradient id="hill2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6A1B5C" />
            <stop offset="100%" stopColor="#4A1942" />
          </linearGradient>
          <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#AD1457" />
            <stop offset="100%" stopColor="#880E4F" />
          </linearGradient>
        </defs>

        <rect width="1440" height="900" fill="url(#skyGrad)" />

        {/* stars */}
        {[
          [120, 80], [340, 50], [560, 120], [780, 40], [950, 90], [1100, 60], [1300, 100],
          [200, 160], [450, 140], [680, 170], [880, 130], [1050, 150], [1250, 180],
          [80, 200], [300, 220], [520, 190], [740, 240], [960, 210], [1180, 230],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.5 : 1} fill="white" opacity={0.3 + (i % 4) * 0.15} />
        ))}

        {/* moon glow */}
        <circle cx="720" cy="380" r="200" fill="url(#moonGlow)" />
        <circle cx="720" cy="380" r="60" fill="url(#moonGrad)" opacity="0.95" />
        <circle cx="720" cy="380" r="75" fill="#FCE4EC" opacity="0.12" />
        <circle cx="720" cy="380" r="100" fill="#F8BBD0" opacity="0.06" />

        {/* floating hearts */}
        {[
          [200, 300, 12], [400, 250, 8], [600, 320, 10], [1000, 280, 9], [1200, 310, 11],
          [150, 400, 6], [850, 350, 7], [1300, 270, 8],
        ].map(([x, y, s], i) => (
          <text key={`h${i}`} x={x} y={y} fontSize={s} opacity={0.15 + (i % 3) * 0.08} fill="#F8BBD0">♥</text>
        ))}

        {/* hills */}
        <path
          d="M0 620 Q180 500 360 560 Q540 480 720 530 Q900 450 1080 520 Q1260 480 1440 540 L1440 900 L0 900Z"
          fill="url(#hill1)"
          opacity="0.85"
        />
        <path
          d="M0 680 Q200 580 400 640 Q600 560 800 620 Q1000 540 1200 600 Q1350 570 1440 610 L1440 900 L0 900Z"
          fill="url(#hill2)"
          opacity="0.8"
        />

        {/* ground */}
        <path
          d="M0 760 Q360 740 720 750 Q1080 760 1440 745 L1440 900 L0 900Z"
          fill="url(#ground)"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}
