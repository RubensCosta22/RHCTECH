import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#111109]">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/[0.06]">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-[34px] h-[34px] rounded-[9px] bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">R</span>
              </div>
              <span className="font-display font-bold text-lg text-white">RHCTech</span>
            </div>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-[240px] font-light mb-5">
              Do problema ao produto. Desenvolvemos plataformas digitais para transformar operações empresariais.
            </p>
            <div className="flex gap-2">
              {[
                { label: "in", href: "#" },
                { label: "ig", href: "#" },
                { label: "@", href: "mailto:contato@rhctech.com.br" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-[34px] h-[34px] rounded-lg border border-white/10 flex items-center justify-center text-[13px] font-bold text-white/40 hover:border-primary hover:text-primary transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="text-[12px] font-display font-bold tracking-widest uppercase text-white/40 mb-4">
              Produtos
            </p>
            <ul className="flex flex-col gap-3">
              {["Inspecto", "Funcionalidades", "Solicitar Demo"].map((item, i) => (
                <li key={i}>
                  <Link
                    href={i === 2 ? "#contato" : i === 1 ? "#features" : "#compare"}
                    className="text-[13px] text-white/40 hover:text-white/80 transition-colors font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[12px] font-display font-bold tracking-widest uppercase text-white/40 mb-4">
              Empresa
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Sobre a RHCTech", href: "#why" },
                { label: "Contato", href: "#contato" },
                { label: "Política de Privacidade", href: "/pages/privacidade" },
                { label: "Termos de Uso", href: "/pages/termos" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-white/40 hover:text-white/80 transition-colors font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[12px] font-display font-bold tracking-widest uppercase text-white/40 mb-4">
              Contato
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:contato@rhctech.com.br"
                  className="flex items-center gap-2 text-[13px] text-white/40 hover:text-white/80 transition-colors font-light"
                >
                  <Mail size={13} />
                  contato@rhctech.com.br
                </a>
              </li>
              <li className="text-[13px] text-white/40 font-light">Brasil 🇧🇷</li>
              <li className="text-[12px] text-white/20 font-light pt-1">
                Inspecto · App #001 · 2026
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[12px] text-white/25">
            © {new Date().getFullYear()} RHCTech. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/pages/privacidade" className="text-[12px] text-white/25 hover:text-white/50 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/pages/termos" className="text-[12px] text-white/25 hover:text-white/50 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
