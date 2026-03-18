"use client"

import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

const mockBars = [45, 65, 50, 82, 58, 90, 72]

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-background"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 50%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[var(--accent-light)] text-primary px-4 py-2 rounded-full text-sm font-display font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
              Plataforma de Inspeção com IA
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-5 leading-[1.1]">
              Tire uma foto.<br />
              <em className="not-italic text-primary">A IA faz o resto.</em>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-md mb-8 font-light">
              Chega de formulários manuais. O Inspecto analisa suas inspeções 5S
              por fotos e gera o relatório automaticamente — em segundos.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-[15px] font-display font-semibold hover:bg-primary/90 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_hsl(var(--primary)/0.28)]"
              >
                Quero uma demo
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground px-6 py-3.5 rounded-full text-[15px] font-medium border border-border hover:border-muted-foreground transition-all hover:-translate-y-0.5"
              >
                <Play size={15} />
                Ver como funciona
              </Link>
            </div>

            <p className="text-sm text-muted-foreground font-light">
              Sem treinamento necessário · Relatório em segundos · Mobile &amp; Web
            </p>
          </div>

          {/* Right — dashboard mockup */}
          <div className="relative hidden lg:block">
            {/* Floating notification */}
            <div className="absolute -top-4 -right-4 z-10 bg-card border border-border rounded-xl px-4 py-3 shadow-lg flex items-center gap-3 animate-float-delayed">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-light)] flex items-center justify-center text-base">✅</div>
              <div>
                <p className="text-xs font-display font-semibold text-foreground">Inspeção concluída</p>
                <p className="text-xs text-muted-foreground">Conformidade: 98.5%</p>
              </div>
            </div>

            {/* Browser window */}
            <div className="bg-card rounded-2xl border border-border shadow-2xl overflow-hidden animate-float">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-background text-xs text-muted-foreground">
                    app.inspecto.com.br
                  </div>
                </div>
              </div>

              {/* Dashboard */}
              <div className="p-5 bg-muted/30">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Inspeções Hoje", value: "24", change: "↑ +12%" },
                    { label: "Conformidade", value: "98%", change: "↑ +2.3%" },
                    { label: "Relatórios", value: "156", change: "↑ +8%" },
                  ].map((stat, i) => (
                    <div key={i} className="p-3 rounded-xl bg-card border border-border">
                      <p className="text-[10px] text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-xl font-display font-bold text-foreground">{stat.value}</p>
                      <p className="text-[10px] text-green-600 font-medium">{stat.change}</p>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="rounded-xl bg-card border border-border p-4">
                  <p className="text-xs font-display font-semibold text-foreground mb-3">Atividade Semanal</p>
                  <div className="flex items-end gap-1.5 h-16">
                    {mockBars.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t transition-all bg-primary"
                        style={{
                          height: `${h}%`,
                          opacity: i === 5 ? 1 : 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
