const features = [
  {
    icon: "🤖",
    title: "IA Embarcada",
    desc: "Análise automática de fotos com inteligência artificial. Identifica conformidades sem intervenção manual.",
  },
  {
    icon: "📱",
    title: "Mobile + Web",
    desc: "Acesse pelo celular na linha de produção ou pelo computador na gestão. Tudo sincronizado em tempo real.",
  },
  {
    icon: "📊",
    title: "Relatórios Automáticos",
    desc: "Relatórios profissionais gerados em segundos, com fotos, pontuação e não conformidades destacadas.",
  },
  {
    icon: "📈",
    title: "Histórico e Tendências",
    desc: "Compare inspeções ao longo do tempo. Veja evolução por setor, equipe ou período.",
  },
  {
    icon: "🏭",
    title: "Qualquer Segmento",
    desc: "Indústria, comércio, saúde, logística. Se a empresa usa 5S, o Inspecto funciona.",
  },
  {
    icon: "🔒",
    title: "Dados Seguros",
    desc: "Transmissão criptografada (HTTPS). Infraestrutura em nuvem com backups automáticos. Seus dados protegidos.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-display font-bold tracking-widest uppercase text-primary mb-3">
            Funcionalidades
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Tudo que sua equipe precisa.
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Ferramentas poderosas para transformar a maneira como você gerencia inspeções e operações.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-card border border-border rounded-2xl p-7 hover:border-primary hover:shadow-[0_0_0_4px_hsl(var(--primary)/0.10)] hover:-translate-y-1 transition-all duration-200 cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-xl mb-5">
                {f.icon}
              </div>
              <h3 className="text-[17px] font-display font-bold text-foreground mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
