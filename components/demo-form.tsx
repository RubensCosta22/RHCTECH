"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const benefits = [
  "Demonstração personalizada para seu negócio",
  "Consultoria gratuita com especialistas",
  "Sem compromisso ou obrigação",
  "Resposta em até 24 horas úteis",
]

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    setSubmitted(true)
  }

  return (
    <section id="contato" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-display font-bold tracking-widest uppercase text-green-400 mb-3">
            Demonstração
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-4">
            Veja o Inspecto em ação.
          </h2>
          <p className="text-lg text-secondary-foreground/50 font-light">
            Sem spam. Apenas o contato da equipe RHCTech em até 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-[17px] text-secondary-foreground/60 font-light leading-relaxed mb-8">
              Solicite uma demonstração personalizada e descubra como o Inspecto
              transforma processos operacionais na sua empresa.
            </p>

            <div className="flex flex-col gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-[15px] text-secondary-foreground/70 font-light">
                  <div className="w-[22px] h-[22px] rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={12} className="text-primary-foreground" />
                  </div>
                  {b}
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-secondary-foreground/10">
              <p className="text-xs text-secondary-foreground/30 mb-2">Prefere falar direto?</p>
              <a
                href="mailto:contato@rhctech.com.br"
                className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
              >
                contato@rhctech.com.br
              </a>
            </div>
          </div>

          {/* Form card */}
          <div className="bg-card rounded-2xl p-8 shadow-2xl border-0">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-display font-semibold text-foreground">Nome</label>
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="h-11 rounded-lg border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-display font-semibold text-foreground">Empresa</label>
                    <input
                      type="text"
                      placeholder="Nome da empresa"
                      required
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      className="h-11 rounded-lg border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-display font-semibold text-foreground">E-mail profissional</label>
                  <input
                    type="email"
                    placeholder="seu@empresa.com.br"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="h-11 rounded-lg border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-display font-semibold text-foreground">WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="h-11 rounded-lg border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-full text-[15px] font-display font-bold hover:bg-primary/90 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_hsl(var(--primary)/0.28)] mt-2"
                >
                  Quero minha demo gratuita
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Sem spam. Apenas o contato da equipe RHCTech.
                </p>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-[var(--accent-light)] flex items-center justify-center mx-auto mb-5 text-3xl">
                  ✅
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Solicitação Enviada!
                </h3>
                <p className="text-muted-foreground font-light">
                  Entraremos em contato em breve para agendar sua demonstração personalizada.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
