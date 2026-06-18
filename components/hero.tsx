import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { getHeroContent } from "@/lib/queries/hero";
import { HeroEffects } from "@/components/hero-effects";

export async function Hero() {
  const data = await getHeroContent();

  return (
    <section id="inicio" className="flex w-full overflow-x-hidden flex-col items-center justify-center">
      <div className="w-full p-2 md:h-screen">
        <Card
          data-hero-card
          className="relative w-full min-h-[60vh] md:h-full border-[#133ED8]/30 rounded-[32px] overflow-hidden shadow-2xl p-0 gap-0"
          style={{
            background: "#111111",
            "--mouse-x": "50%",
            "--mouse-y": "50%",
            boxShadow: "0 25px 60px rgba(2,3,103,0.5), 0 0 0 1px rgba(19,62,216,0.2)",
          } as React.CSSProperties}
        >
          {/* ── Visual layers ─────────────────────────────────────────── */}

          <div
            aria-hidden
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              backgroundSize: "40px 40px",
              backgroundImage:
                "linear-gradient(to right, rgba(80,206,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(80,206,255,0.04) 1px, transparent 1px)",
              maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            }}
          />

          <div
            aria-hidden
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(2,3,103,0.55) 0%, rgba(19,62,216,0.18) 50%, rgba(80,206,255,0.10) 100%)",
            }}
          />

          <div
            aria-hidden
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 100% 100%, rgba(80,206,255,0.18) 0%, rgba(19,62,216,0.08) 45%, transparent 70%)",
            }}
          />

          <div
            aria-hidden
            className="absolute bottom-[-220px] left-1/2 -translate-x-1/2 z-10 pointer-events-none"
            style={{
              width: "900px",
              height: "450px",
              background:
                "radial-gradient(ellipse at center top, rgba(80,206,255,0.25) 0%, rgba(19,62,216,0.18) 30%, rgba(2,3,103,0.08) 55%, transparent 70%)",
              filter: "blur(8px)",
              animation: "bgHeroPulse 800ms ease-in-out infinite",
            }}
          />

          {/* Watermark */}
          <div
            aria-hidden
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none font-black leading-none whitespace-nowrap tracking-widest text-[100px] md:text-[160px] lg:text-[300px]"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(80,206,255,0.06)",
            }}
          >
            {data.watermark}
          </div>

          <HeroEffects particleCount={data.particleCount} />

          {/* ── Hero body ─────────────────────────────────────────────── */}
          <div className="relative z-30 flex flex-col h-full pt-20 justify-center">
            <div className="flex flex-col lg:flex-row lg:items-center px-6 md:px-10 pb-12 pt-8 gap-8 lg:gap-12">

              {/* Left column — Badge + Headline */}
              <div className="flex flex-col gap-6 lg:w-[65%]">

                <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
                  {data.heading.lines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                  <span
                    style={{
                      background: "linear-gradient(90deg, #133ED8 0%, #50CEFF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {data.heading.accent}
                  </span>
                </h1>
              </div>

              {/* Right column — Description + CTA */}
              <div className="flex flex-col gap-6 lg:w-[35%] lg:justify-center">
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "rgba(255, 255, 255, 0.81)" }}
                >
                  {data.description}
                </p>

                <a href={data.cta.href} rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="font-semibold px-6 h-11 gap-2 rounded-lg border-0 w-fit"
                    style={{
                      background: "linear-gradient(135deg, #020367 0%, #133ED8 55%, #50CEFF 100%)",
                      color: "#ffffff",
                      boxShadow: "0 6px 28px rgba(80,206,255,0.28)",
                    }}
                  >
                    <MessageSquare className="w-4 h-4" />
                    {data.cta.text}
                  </Button>
                </a>
              </div>

            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
