"use client";

interface Props {
  type?: string;
  className?: string;
  size?: number;
}

// 用 emoji 代替图片作为人物形象
const emojiMap: Record<string, string> = {
  WIFI: "📶", LOCK: "🔒", FREE: "🕊️", GPS: "📍", ICE: "🧊",
  "520": "💕", CHILL: "🧘", DRAMA: "🎭", PLAN: "📋", YOLO: "🎉",
  MOM: "🧸", GHOST: "👻", BEAR: "🐻", SPARK: "⚡", WALL: "🏰",
  ECHO: "🪞", RAIN: "🌧️", ROCK: "🪨", CANDY: "🍬", SLOW: "🐢",
  HEAL: "🌿", FIRE: "🔥", BOOK: "📖", PUSH: "🎯", HOME: "🏠",
  ANGEL: "😇", FLEX: "🦎", LOOP: "🔄",
};

export default function CharacterEmoji({ type = "default", className = "", size = 200 }: Props) {
  const emoji = emojiMap[type] ?? "💖";
  const fontSize = size * 0.6;

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size, fontSize }}
    >
      <span role="img" aria-label={type}>{emoji}</span>
    </div>
  );
}
