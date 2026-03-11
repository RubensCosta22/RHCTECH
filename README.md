# RHCTECH — Inspecto

> Inspeção 5S com IA. Tire uma foto. A IA faz o resto.

Landing page institucional do **Inspecto**, produto da [RHCTECH](https://rhctech.com.br).

---

## Estrutura do Projeto

```
rhctech/
│
├── index.html                  ← Página principal (landing page)
│
├── assets/
│   ├── css/
│   │   ├── variables.css       ← Design tokens (cores, espaçamento, tipografia)
│   │   ├── base.css            ← Reset, utilitários, animações
│   │   ├── layout.css          ← Componentes: nav, hero, sections, footer
│   │   └── main.css            ← Ponto de entrada (importa os 3 acima + responsive)
│   │
│   ├── js/
│   │   └── app.js              ← Todos os módulos JS organizados
│   │
│   └── images/
│       ├── og-image.jpg        ← (ADICIONAR) Open Graph 1200×630px
│       └── favicon.ico         ← (ADICIONAR) Favicon real
│
├── components/
│   ├── header.html             ← Fragmento: cabeçalho (referência para SSG/servidor)
│   └── footer.html             ← Fragmento: rodapé
│
├── pages/
│   ├── privacidade.html        ← Política de Privacidade (LGPD)
│   └── termos.html             ← Termos de Uso
│
├── sitemap.xml                 ← Sitemap para SEO (atualizar com novas páginas)
├── robots.txt                  ← Instruções para crawlers
├── netlify.toml                ← Configuração de deploy + headers de segurança
└── README.md                   ← Este arquivo
```

---

## CSS — Arquitetura em Camadas

O CSS segue uma arquitetura modular em 4 camadas, importadas em ordem pelo `main.css`:

| Arquivo | Responsabilidade |
|---|---|
| `variables.css` | Design tokens: cores, tipografia, espaçamento, shadows, z-index |
| `base.css` | Reset CSS, utilitários (`.visually-hidden`, `.skip-link`), animações |
| `layout.css` | Todos os componentes visuais: nav, hero, seções, footer, botões |
| `main.css` | Ponto de entrada: importa os demais + media queries responsive |

> Para alterar uma cor ou tamanho, **edite apenas `variables.css`**. A mudança reflete em todo o projeto.

---

## JavaScript — Módulos em `app.js`

| Módulo | Função |
|---|---|
| `initScrollReveal()` | Anima `.reveal` ao entrar na viewport via IntersectionObserver |
| `initNavScroll()` | Adiciona sombra na nav ao rolar a página |
| `initMobileMenu()` | Hamburger menu acessível (ARIA: expanded, hidden, Escape) |
| `initSmoothScroll()` | Scroll suave com compensação para nav fixa |
| `initActiveNav()` | Destaca link da seção visível |
| `initContactForm()` | Submissão do formulário (Formspree real ou fallback mailto) |

---

## Deploy no Netlify

### Via GitHub (recomendado)

1. Faça push do projeto para um repositório GitHub
2. Acesse [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**
3. Conecte o repositório
4. Configurações de build:
   - **Build command:** *(deixe em branco)*
   - **Publish directory:** `.` (ponto — raiz do projeto)
5. Clique em **Deploy site**

O arquivo `netlify.toml` já configura automaticamente:
- Redirecionamento www → sem www (301)
- Headers de segurança (CSP, HSTS, X-Frame-Options...)
- Cache otimizado para assets e HTML

### Via Drag & Drop

Arraste a pasta do projeto diretamente em [app.netlify.com/drop](https://app.netlify.com/drop).

---

## Configurar o Formulário de Contato

O formulário usa [Formspree](https://formspree.io) por padrão:

1. Crie uma conta gratuita em [formspree.io](https://formspree.io)
2. Crie um novo formulário e copie o ID (ex: `xpzgabcd`)
3. No `index.html`, localize:
   ```html
   action="https://formspree.io/f/SEU_ID_AQUI"
   ```
4. Substitua `SEU_ID_AQUI` pelo seu ID real

> **Alternativa:** O `app.js` detecta automaticamente que o ID não foi configurado e usa um fallback via `mailto:` — o formulário ainda funciona, mas abre o cliente de e-mail do usuário.

---

## Checklist de Produção

Antes do deploy final, verifique:

- [ ] Substituir `SEU_ID_AQUI` pelo ID real do Formspree
- [ ] Adicionar `assets/images/og-image.jpg` (1200×630px)
- [ ] Adicionar favicon real em `assets/images/favicon.ico` e atualizar o link no `<head>`
- [ ] Atualizar URL canônica nos `<link rel="canonical">` de todas as páginas
- [ ] Atualizar `sitemap.xml` com a data real de última modificação
- [ ] Testar formulário de contato em produção
- [ ] Validar acessibilidade em [wave.webaim.org](https://wave.webaim.org)
- [ ] Rodar Lighthouse (Score target: 90+ em todas as categorias)

---

## Tecnologias

- **HTML5** semântico (WCAG AA)
- **CSS** modular com Custom Properties (sem framework)
- **JavaScript** vanilla (ES2020+, sem dependências)
- **Deploy:** Netlify
- **Fontes:** Syne + Space Mono (Google Fonts)
- **Formulário:** Formspree

---

## Contato

**RHCTECH** · contato@rhctech.com.br · [rhctech.com.br](https://rhctech.com.br)
