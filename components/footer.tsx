import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="border-t border-white/10"
      style={{ background: "#0A0D1A" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center">

          <Link href="/">
            <Image src="/logotipo_white.svg" alt="Nexon Group" width={120} height={40} className="h-10 w-auto" />
          </Link>

          <p className="max-w-md text-sm text-slate-400">
            Impulsamos crecimiento, expansión y nuevas oportunidades mediante
            estrategia, tecnología y desarrollo de negocios.
          </p>

          <nav>
            <ul className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <li><a href="#inicio" className="transition hover:text-white">Inicio</a></li>
              <li><a href="#servicios" className="transition hover:text-white">Servicios</a></li>
              <li><a href="#metodologia" className="transition hover:text-white">Metodología</a></li>
              <li><a href="#contacto" className="transition hover:text-white">Contacto</a></li>
            </ul>
          </nav>

          <div className="h-px w-24 bg-white/10" />

          <p className="text-xs text-slate-500">
            © 2026 Nexon Group. Todos los derechos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
}
