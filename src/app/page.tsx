"use client";

import Link from "next/link";
import HeartScene from "@/components/HeartScene";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      <HeartScene />
      <div className="grain-overlay" />

      <div className="relative z-10 text-center px-6 max-w-lg mx-auto">
        <h1 className="text-7xl md:text-9xl font-black text-white mb-6 drop-shadow-lg" style={{ letterSpacing: "0.15em" }}>
          LBTI
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-3 font-bold drop-shadow leading-relaxed">恋爱行为类型测试</p>
        <p className="text-sm text-pink-200/60 mb-12 drop-shadow leading-relaxed">
          你是 WIFI 还是 GHOST？是 520 还是 ICE？<br />30 道题，测出你的恋爱人格
        </p>
        <Link href="/test"
          className="inline-flex items-center gap-2 bg-white text-pink-600 px-10 py-4 rounded-full text-lg font-black hover:bg-pink-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 pulse-glow">
          <span>开始测试</span>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M6 4l8 6-8 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-10 text-center space-y-1.5">
        <p className="text-pink-200/40 text-[11px]">
          <Link href="/types" className="underline underline-offset-2 hover:text-pink-200/60 transition">查看全部人格</Link>
        </p>
        <p className="text-pink-200/25 text-[10px]">
          LBTI · Love Behavior Type Indicator
        </p>
      </div>
    </main>
  );
}
