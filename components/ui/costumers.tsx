import Image from "next/image";
import { cn } from "@/lib/utils";

export type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = {
  logos: Logo[];
  className?: string;
};

export function Costumers({ logos, className }: LogoCloudProps) {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl py-20">
      <h2 className="mb-6 text-center font-medium text-lg text-muted-foreground  md:text-2xl text-sm leading-4 uppercase">
        Empresas que{" "}
        <span className="font-semibold text-primary">confían</span> en nosotros.
      </h2>
      <div
        className={cn("rounded-2xl overflow-hidden", className)}
        style={{ background: "#0d0f1a", border: "1px solid rgba(19,62,216,0.25)" }}
      >
        <div className="flex flex-wrap justify-center">
          {logos.map((logo, index) => (
            <LogoCard key={logo.alt} logo={logo} index={index} total={logos.length} />
          ))}
        </div>
      </div>
    </div>

  );
}

type LogoCardProps = {
  logo: Logo;
  index: number;
  total: number;
};

function LogoCard({ logo, index }: LogoCardProps) {
  return (
    <div
      className="relative flex items-center justify-center px-10 py-10 md:px-16 md:py-12 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
      style={{ borderRight: "1px solid rgba(19,62,216,0.15)", borderBottom: "1px solid rgba(19,62,216,0.15)" }}
    >
      <Image
        alt={logo.alt}
        fill
        className="pointer-events-none select-none object-contain brightness-0 invert opacity-70 transition-opacity duration-300 hover:opacity-100 scale-75"
        src={logo.src}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
      />
    </div>
  );
}
