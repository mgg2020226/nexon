"use client";

import { useRef, useState, useMemo } from "react";
import { LazyMotion, m, domAnimation, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  showLabels?: boolean;
  labelClassName?: string;
  animationDuration?: number;
  loop?: boolean;
  /** SVG viewBox to zoom into a region, e.g. "80 50 230 200" for the Americas */
  svgViewBox?: string;
  /** CSS object-position for the background dotted map image, e.g. "24% 38%" */
  imagePosition?: string;
  className?: string;
}

type Dot = NonNullable<MapProps["dots"]>[number];

const EMPTY_DOTS: Dot[] = [];

function projectPoint(lat: number, lng: number) {
  const x = (lng + 180) * (800 / 360);
  const y = (90 - lat) * (400 / 180);
  return { x, y };
}

function createCurvedPath(
  start: { x: number; y: number },
  end: { x: number; y: number }
) {
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - 50;
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
}

/* ── Sub-components ───────────────────────────────────────────────────── */

interface DotRouteProps {
  dot: Dot;
  i: number;
  staggerDelay: number;
  animationDuration: number;
  fullCycleDuration: number;
  totalAnimationTime: number;
  loop: boolean;
  lineColor: string;
}

function MapDotRoute({
  dot,
  i,
  staggerDelay,
  animationDuration,
  fullCycleDuration,
  totalAnimationTime,
  loop,
  lineColor,
}: DotRouteProps) {
  const startPoint = projectPoint(dot.start.lat, dot.start.lng);
  const endPoint = projectPoint(dot.end.lat, dot.end.lng);
  const path = createCurvedPath(startPoint, endPoint);

  const startTime = (i * staggerDelay) / fullCycleDuration;
  const endTime = (i * staggerDelay + animationDuration) / fullCycleDuration;
  const resetTime = totalAnimationTime / fullCycleDuration;

  return (
    <g>
      <m.path
        d={path}
        fill="none"
        stroke="url(#path-gradient)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={loop ? { pathLength: [0, 0, 1, 1, 0] } : { pathLength: 1 }}
        transition={
          loop
            ? {
                duration: fullCycleDuration,
                times: [0, startTime, endTime, resetTime, 1],
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
              }
            : {
                duration: animationDuration,
                delay: i * staggerDelay,
                ease: "easeInOut",
              }
        }
      />
      {loop && (
        <m.circle
          r="4"
          fill={lineColor}
          initial={{ offsetDistance: "0%", opacity: 0 }}
          animate={{
            offsetDistance: [null, "0%", "100%", "100%", "100%"],
            opacity: [0, 0, 1, 0, 0],
          }}
          transition={{
            duration: fullCycleDuration,
            times: [0, startTime, endTime, resetTime, 1],
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0,
          }}
          style={{ offsetPath: `path('${path}')` }}
        />
      )}
    </g>
  );
}

interface DotPointsProps {
  dot: Dot;
  i: number;
  showLabels: boolean;
  labelClassName: string;
  lineColor: string;
  onHoverStart: (label: string) => void;
  onHoverEnd: () => void;
}

function MapDotPoints({
  dot,
  i,
  showLabels,
  labelClassName,
  lineColor,
  onHoverStart,
  onHoverEnd,
}: DotPointsProps) {
  const startPoint = projectPoint(dot.start.lat, dot.start.lng);
  const endPoint = projectPoint(dot.end.lat, dot.end.lng);

  return (
    <g>
      {/* Start Point */}
      <g>
        <m.g
          onHoverStart={() => onHoverStart(dot.start.label || `Location ${i}`)}
          onHoverEnd={onHoverEnd}
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <circle cx={startPoint.x} cy={startPoint.y} r="3" fill={lineColor} filter="url(#glow)" />
          <circle cx={startPoint.x} cy={startPoint.y} r="3" fill={lineColor} opacity="0.5">
            <animate attributeName="r" from="3" to="12" dur="2s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.6" to="0" dur="2s" begin="0s" repeatCount="indefinite" />
          </circle>
        </m.g>
        {showLabels && dot.start.label && (
          <m.g
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 * i + 0.3, duration: 0.5 }}
            className="pointer-events-none"
          >
            <foreignObject x={startPoint.x - 50} y={startPoint.y - 35} width="100" height="30">
              <div className="flex items-center justify-center h-full">
                <span className={`${labelClassName} font-medium px-2 py-0.5 rounded-md bg-black/80 text-white border border-white/10 shadow-sm`}>
                  {dot.start.label}
                </span>
              </div>
            </foreignObject>
          </m.g>
        )}
      </g>

      {/* End Point */}
      <g>
        <m.g
          onHoverStart={() => onHoverStart(dot.end.label || `Destination ${i}`)}
          onHoverEnd={onHoverEnd}
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <circle cx={endPoint.x} cy={endPoint.y} r="3" fill={lineColor} filter="url(#glow)" />
          <circle cx={endPoint.x} cy={endPoint.y} r="3" fill={lineColor} opacity="0.5">
            <animate attributeName="r" from="3" to="12" dur="2s" begin="0.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.6" to="0" dur="2s" begin="0.5s" repeatCount="indefinite" />
          </circle>
        </m.g>
        {showLabels && dot.end.label && (
          <m.g
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 * i + 0.5, duration: 0.5 }}
            className="pointer-events-none"
          >
            <foreignObject x={endPoint.x - 50} y={endPoint.y - 35} width="100" height="30">
              <div className="flex items-center justify-center h-full">
                <span className={`${labelClassName} font-medium px-2 py-0.5 rounded-md bg-black/80 text-white border border-white/10 shadow-sm`}>
                  {dot.end.label}
                </span>
              </div>
            </foreignObject>
          </m.g>
        )}
      </g>
    </g>
  );
}

/* ── Main Component ───────────────────────────────────────────────────── */

export function WorldMap({
  dots = EMPTY_DOTS,
  lineColor = "#0ea5e9",
  showLabels = true,
  labelClassName = "text-sm",
  animationDuration = 2,
  loop = true,
  svgViewBox = "0 0 800 400",
  imagePosition = "center center",
  className,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const { theme } = useTheme();

  const map = useMemo(() => new DottedMap({ height: 100, grid: "diagonal" }), []);

  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.22,
        color: theme === "dark" ? "#FFFFFF20" : "#00000040",
        shape: "circle",
        backgroundColor: theme === "dark" ? "#0a0d1a" : "white",
      }),
    [map, theme]
  );

  const staggerDelay = 0.3;
  const totalAnimationTime = dots.length * staggerDelay + animationDuration;
  const pauseTime = 2;
  const fullCycleDuration = totalAnimationTime + pauseTime;

  return (
    <LazyMotion features={domAnimation}>
      <div className={`w-full dark:bg-[#0a0d1a] bg-white rounded-xl relative font-sans overflow-hidden ${className ?? "aspect-[2/1]"}`}>
        <Image
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none object-cover"
          style={{ objectPosition: imagePosition }}
          alt="world map"
          height="495"
          width="1056"
          draggable={false}
          priority
        />
        <svg
          ref={svgRef}
          viewBox={svgViewBox}
          className="w-full h-full absolute inset-0 pointer-events-auto select-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feMorphology operator="dilate" radius="0.5" />
              <feGaussianBlur stdDeviation="1" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {dots.map((dot, i) => (
            <MapDotRoute
              key={`${dot.start.lat}-${dot.start.lng}-${dot.end.lat}-${dot.end.lng}`}
              dot={dot}
              i={i}
              staggerDelay={staggerDelay}
              animationDuration={animationDuration}
              fullCycleDuration={fullCycleDuration}
              totalAnimationTime={totalAnimationTime}
              loop={loop}
              lineColor={lineColor}
            />
          ))}

          {dots.map((dot, i) => (
            <MapDotPoints
              key={`${dot.start.lat}-${dot.start.lng}-${dot.end.lat}-${dot.end.lng}`}
              dot={dot}
              i={i}
              showLabels={showLabels}
              labelClassName={labelClassName}
              lineColor={lineColor}
              onHoverStart={setHoveredLocation}
              onHoverEnd={() => setHoveredLocation(null)}
            />
          ))}
        </svg>

        <AnimatePresence>
          {hoveredLocation && (
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-4 left-4 bg-black/90 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm sm:hidden border border-white/10"
            >
              {hoveredLocation}
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
}
