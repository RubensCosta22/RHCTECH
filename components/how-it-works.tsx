export function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: "📸",
      title: "Tire a foto",
      desc: "No app mobile ou web, fotografe cada ponto da inspeção 5S. Sem formulário, sem digitação.",
    },
    {
      num: "02",
      icon: "🤖",
      title: "IA analisa",
      desc: "A inteligência artificial processa as imagens, identifica conformidades e não conformidades automaticamente.",
    },
    {
      num: "03",
      icon: "📄",
      title: "Relatório gerado",
      desc: "Relatório completo e profissional gerado em segundos. Pronto para compartilhar ou arquivar.",
    },
  ]

  return (
    <section id="como-funciona" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-display font-bold tracking-widest uppercase text-green-400 mb-3">
          Como funciona
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-3">
          3 passos. Relatório pronto.
        </h2>
        <p className="text-lg text-secondary-foreground/50 font-light">
          Simples por fora. Poderoso por dentro. Essa é a promessa da RHCTech.
        </p>

        <div className="grid md:grid-cols-3 gap-0.5 mt-14">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-secondary-foreground/[0.04] hover:bg-secondary-foreground/[0.07] transition-colors border border-secondary-foreground/[0.06] p-10
                first:rounded-t-2xl md:first:rounded-l-2xl md:first:rounded-tr-none
                last:rounded-b-2xl md:last:rounded-r-2xl md:last:rounded-bl-none"
            >
              {/* Big background number */}
              <span className="absolute top-4 right-5 text-7xl font-display font-bold text-secondary-foreground/[0.06] leading-none select-none">
                {step.num}
              </span>

              <div className="w-[52px] h-[52px] rounded-[14px] bg-primary/10 border border-primary/30 flex items-center justify-center text-2xl mb-5">
                {step.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-secondary-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-secondary-foreground/50 leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
