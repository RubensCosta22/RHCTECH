export function Compare() {
  const before = [
    { icon: "📋", text: "Preenchimento manual item por item, propenso a erros" },
    { icon: "⏰", text: "Horas gastas para concluir uma inspeção completa" },
    { icon: "📁", text: "Relatórios perdidos em pastas, e-mails ou gavetas" },
    { icon: "😤", text: "Inspetor frustrado com burocracia desnecessária" },
    { icon: "📉", text: "Dados inconsistentes, difíceis de comparar" },
  ]
  const after = [
    { icon: "📸", text: "Tire a foto. A IA analisa e preenche automaticamente" },
    { icon: "⚡", text: "Inspeção completa em minutos, não horas" },
    { icon: "☁️", text: "Relatórios na nuvem, acessíveis de qualquer lugar" },
    { icon: "😌", text: "Inspetor focado no que importa: a inspeção em si" },
    { icon: "📊", text: "Histórico comparável, tendências visíveis" },
  ]

  return (
    <section id="compare" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-display font-bold tracking-widest uppercase text-primary mb-3">
          O problema que a gente resolve
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-14">
          Antes era assim.<br />Agora não precisa ser.
        </h2>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-0 items-start">
          {/* Before */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="px-6 py-4 bg-red-50 border-b border-border flex items-center gap-2">
              <span className="text-red-500 font-bold text-lg">✕</span>
              <span className="font-display font-bold text-red-700 text-[15px]">
                Antes — Forms / papel
              </span>
            </div>
            <div>
              {before.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 px-6 py-4 text-sm text-muted-foreground border-b border-border last:border-none leading-snug font-light"
                >
                  <span className="text-base mt-0.5 flex-shrink-0">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center px-5 pt-[52px]">
            <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center text-lg font-bold">
              →
            </div>
          </div>

          {/* After */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden mt-4 md:mt-0">
            <div className="px-6 py-4 bg-[var(--accent-light)] border-b border-border flex items-center gap-2">
              <span className="text-primary font-bold text-lg">✓</span>
              <span className="font-display font-bold text-primary text-[15px]">
                Com Inspecto
              </span>
            </div>
            <div>
              {after.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 px-6 py-4 text-sm text-muted-foreground border-b border-border last:border-none leading-snug font-light"
                >
                  <span className="text-base mt-0.5 flex-shrink-0">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
