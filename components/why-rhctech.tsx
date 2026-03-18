const points = [
  {
    icon: "🇧🇷",
    title: "Feito no Brasil",
    desc: "Produto 100% nacional, desenvolvido por quem entende a realidade das empresas brasileiras.",
  },
  {
    icon: "🤝",
    title: "Suporte próximo",
    desc: "Atendimento direto com os desenvolvedores. Sem call center, sem burocracia.",
  },
  {
    icon: "⚡",
    title: "Entrega rápida",
    desc: "Qualidade sem abrir mão do prazo. Implementação ágil desde o primeiro dia.",
  },
]

export function WhyRHCTech() {
  return (
    <section id="why" className="py-24 bg-muted/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <p className="text-xs font-display font-bold tracking-widest uppercase text-primary mb-3">
              Por que a RHCTech
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Construído para o mundo real.
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
              A RHCTech nasceu da insatisfação de um usuário que cansou de ferramentas
              complicadas e prazos não cumpridos. O Inspecto é a primeira prova disso.
            </p>

            <div className="flex flex-col gap-4">
              {points.map((p, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start bg-card rounded-2xl border border-border p-5 hover:border-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-lg flex-shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <p className="font-display font-bold text-[15px] text-foreground mb-1">{p.title}</p>
                    <p className="text-sm text-muted-foreground font-light">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary rounded-2xl p-7 text-primary-foreground text-center">
                <p className="text-5xl font-display font-bold leading-none mb-2">3x</p>
                <p className="text-sm text-primary-foreground/70 font-light">mais rápido que inspeção manual</p>
              </div>
              <div className="bg-card rounded-2xl border border-border p-7 text-center">
                <p className="text-5xl font-display font-bold leading-none mb-2 text-primary">98%</p>
                <p className="text-sm text-muted-foreground font-light">de taxa média de conformidade</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-7 text-center">
              <p className="text-6xl font-display font-bold leading-none mb-2 text-foreground">0</p>
              <p className="text-base text-muted-foreground font-light">treinamento necessário para começar a usar</p>
            </div>

            <div className="bg-secondary rounded-2xl p-7">
              <p className="text-xs font-display font-bold tracking-widest uppercase text-secondary-foreground/40 mb-3">
                Nosso compromisso
              </p>
              <p className="text-[15px] text-secondary-foreground/80 font-light leading-relaxed">
                "Qualidade sem concessão. Entrega no prazo. Simples de usar. Suporte próximo."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
