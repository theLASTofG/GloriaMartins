# Gloria Martins — Site Institucional

> Site estático hospedado no GitHub Pages com domínio personalizado `gloria-martins.com`.
> Cliente: Gloria Martins — Holistic Therapist, North Brisbane, QLD, Austrália.

---

## Stack & Arquitetura

- **Puro HTML/CSS/JS** — sem framework, sem build step, sem bundler.
- **4 páginas** independentes: `index.html`, `about.html`, `services.html`, `contact.html`.
- **`style.css`** — folha de estilos única compartilhada por todas as páginas.
- **`shared.js`** — injeta navbar e footer dinamicamente, gerencia highlight de rota ativa e configurações globais.
- **`images/`** — 27 imagens; todas referenciadas no HTML/JS (sem thumbnails ou arquivos orfãos).
- **`robots.txt` / `sitemap.xml`** — arquivos de SEO presentes e corretos.
- **`CNAME`** — domínio `gloria-martins.com` configurado para GitHub Pages.

---

## Constantes globais (shared.js)

| Constante | Valor |
|---|---|
| `BOOK_URL` | Square Appointments widget link |
| `WA_PHONE` | `61407266282` |
| `LOGO_URL` | `images/gloria_martins_logo_superior_sem_fundo.png` |
| `LANG_STORAGE_KEY` | `gm_lang` |

WhatsApp link padrão: `https://wa.me/61407266282?text=…`

---

## Analytics

- **Google Analytics GA4** — ID `G-CHLKE9DNLF`
- Snippet `gtag` inserido manualmente no `<head>` de **todas** as 4 páginas.
- Não usa GTM. Ao adicionar novas páginas, copiar o bloco `<script>` do `<head>` do `index.html`.

---

## Design System

**Paleta principal** — variáveis CSS definidas em `style.css`:
- `--purple-dk`, `--purple`, `--pink`, `--pink-lt`
- `--cream` (fundos alternados)
- `--muted` (textos secundários)

**Tipografia:**
- Serif (títulos) — Google Fonts, carregada via `<link>` no `<head>`
- Sans-serif (corpo)

**Botão especial:** `.btn-rainbow-wrap > .btn-rainbow` — borda animada arco-íris (gradiente animado). Definido em `style.css` e usado no CTA "Leave a Review". Usa `@keyframes rainbow-slide` (inline em `index.html`). **Não confundir com `.badge--new` — removido.**

**Tags de destaque nos cards** (home):
- `.home-service-card__tag` — tag genérica branca (ex: "Most Requested", "Package")
- Modificador `--new` **foi removido** a pedido da cliente.

---

## Serviços (estrutura)

### Home (`index.html`) — cards resumidos

| Serviço | Tag | CTA |
|---|---|---|
| Counselling Sessions | Most Requested | Modal overlay |
| Vibroacoustic Therapy | — | Modal overlay |
| Sound Healing Therapy | — | Modal overlay |
| Clinical Hypnotherapy | _(sem tag)_ | WhatsApp direto |
| Workshop Sessions | — | Modal overlay |
| Individual Package | Package | Modal overlay |
| Couples Package | Package | Modal overlay |

### Services (`services.html`) — cards detalhados

Cards com imagem, badge de categoria, lista de benefícios, preço e botão. Ordem atual:
1. Counselling
2. Vibroacoustic Therapy
3. Sound Healing
4. Clinical Hypnotherapy
5. Group Events / Workshops

---

## Tradução

- **Google Translate** widget embutido — EN → PT / ES
- `googleTranslateElementInit()` definido em `shared.js`
- Inicialização via callback do script do Google Translate no `<head>`
- Seleção de idioma persistida em `localStorage` com chave `gm_lang`

---

## Imagens (`images/`)

Apenas 27 arquivos — **todos referenciados**. Não adicionar thumbnails ou versões redimensionadas; o browser já faz lazy-load. Lista completa:

```
0439f4_df268d306f1d49c396fcfc031119a36cmv2.webp
Hypnosis_img.jpeg
WhatsApp Image 2026-04-27 at 21.49.49.jpeg
WhatsApp Image 2026-04-27 at 21.52.26 (1).jpeg
WhatsApp Image 2026-04-27 at 21.52.26.jpeg
WhatsApp Image 2026-05-02 at 01.49.42 (1).jpeg
WhatsApp Image 2026-05-02 at 01.49.42.jpeg
WhatsApp Image 2026-05-05 at 16.14.31 (1).jpeg
WhatsApp Image 2026-05-20 at 18.30.37.jpeg
WhatsApp-Image-2023-06-13-at-11.05.47.jpg
WhatsApp-Image-2023-06-28-at-12.53.40.jpg
WhatsApp-Image-2023-07-04-at-14.22.28.jpg
WhatsApp-Image-2023-07-04-at-14.22.37.jpg
WhatsApp-Image-2025-07-08-at-09.04.55_4d93344c.jpg
baeb722158117e25deac9d2f631de9c4.jpg
gloria-1.jpeg  gloria-2.jpeg  gloria-3.jpeg
gloria-4.jpeg  gloria-5.jpeg  gloria-6.jpeg
gloria-v2imagesperinatal-support-heart.jpeg
gloria_individual_package.jpeg
gloria_martins_logo_superior_sem_fundo.png
gloriafttroca313.jpeg
hero-beach-sunset.png
sing-222-01.png
```

> Imagens com espaços no nome são referenciadas com `%20` no HTML (ex: `images/WhatsApp%20Image%202026-05-20%20at%2018.30.37.jpeg`).

---

## Últimas Atualizações (jun/2026)

| # | O que mudou | Arquivo(s) |
|---|---|---|
| 1 | Adicionado Google Analytics GA4 (`G-CHLKE9DNLF`) | Todas as 4 páginas |
| 2 | Adicionado card "Clinical Hypnotherapy" em services.html | `services.html` |
| 3 | Adicionado card "Clinical Hypnotherapy" na home (grid de serviços) | `index.html` |
| 4 | **Removida tag "New"** (badge arco-íris) da home e de services — pedido da cliente | `index.html`, `services.html`, `style.css` |
| 5 | Removido `ENTREGAVEL-CLIENTE.pdf` do repositório (era acessível via URL pública) | git rm |
| 6 | Removidas 412 imagens não utilizadas (thumbnails WordPress, placeholders, duplicatas) | `images/` |
| 7 | Removidas pastas de backup (`_backup_ga_/`, `_backup_ga_before_analytics/`) | raiz do projeto |
| 8 | Corrigido scroll horizontal em mobile | `style.css` |

---

## O que NÃO fazer

- **Não adicionar thumbnails** de imagens — o projeto não usa srcset nem WordPress.
- **Não recriar a tag "New"** no card de Hipnoterapia — foi removida a pedido da cliente.
- **Não commitar PDFs, documentos de entrega ou pastas de backup** na raiz do projeto.
- **Não usar framework** (React, Vue, etc.) — o projeto é intencionalmente estático.
- **Não esquecer de copiar o snippet do GA4** ao criar uma nova página HTML.
- **Não usar aspas tipográficas** (`"` `"` `'` `'`) — usar sempre aspas retas ASCII.

---

## Deployment

- Push para branch `main` → deploy automático via GitHub Pages.
- Domínio configurado no `CNAME` e nas configurações do repositório.
- Não há CI/CD adicional — o GitHub Pages serve os arquivos estáticos diretamente.
