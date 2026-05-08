"use client";

export function FloatingOrbs() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="animate-aurora absolute -left-[20%] top-[10%] h-[min(55vw,420px)] w-[min(55vw,420px)] rounded-full blur-3xl"
        style={{ background: "var(--orb-violet)" }}
      />
      <div
        className="animate-aurora absolute -right-[15%] top-[30%] h-[min(50vw,380px)] w-[min(50vw,380px)] rounded-full blur-3xl [animation-delay:-6s]"
        style={{ background: "var(--orb-cyan)" }}
      />
      <div
        className="animate-aurora absolute bottom-[5%] left-[25%] h-[280px] w-[280px] rounded-full blur-3xl [animation-delay:-12s]"
        style={{
          background:
            "linear-gradient(135deg, var(--orb-violet), var(--orb-cyan))",
          opacity: 0.35,
        }}
      />
    </div>
  );
}
