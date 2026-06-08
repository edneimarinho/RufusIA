# Página de Captura — Carrossel com IA

Página de captura do ebook gratuito "Carrossel com IA: do zero ao post sem depender de agência ou guru".

## Antes de publicar

### 1. Conectar o formulário ao email marketing

O formulário usa `action="#"` como placeholder. Substitua pela URL do seu serviço:

- **Mailchimp:** acesse seu formulário embed → copie o `action` do `<form>`
- **RD Station:** Relacionamentos → Formulários → Copiar código → pegue o `action`
- **ActiveCampaign:** Forms → Integrations → pegue o endpoint do formulário

### 2. Substituir a capa placeholder

Quando a capa do ebook estiver pronta no Gamma, exporte como PNG e substitua:

```html
<!-- Antes -->
<div class="cover" ...>...</div>

<!-- Depois -->
<img src="capa.png" alt="Capa do ebook Carrossel com IA" style="width:100%;border-radius:6px;">
```

### 3. Substituir a foto do autor

```html
<!-- Antes -->
<div class="author-photo" ...>EM</div>

<!-- Depois -->
<img src="ednei.jpg" alt="Ednei Marinho" style="width:140px;height:140px;object-fit:cover;border-radius:6px;border:2px solid rgba(212,175,55,.25);">
```

---

## Como publicar

**Netlify (mais fácil):**
1. Acesse netlify.com/drop
2. Arraste a pasta `ebook-carrossel-com-ia-2026-06-07/` para a área indicada
3. O site fica online em segundos com URL temporária
4. Configure domínio customizado nas configurações

**GitHub Pages:**
1. Faça push desta pasta para um repositório
2. Settings → Pages → Deploy from branch → selecione `main` e `/root`
3. O site fica em `https://seu-usuario.github.io/nome-do-repo`

**Servidor próprio / cPanel:**
1. Upload dos arquivos via FTP ou gerenciador de arquivos
2. Coloque `index.html` na raiz do domínio ou subdomínio

---

## Arquivos do ebook

```
marketing/ebooks/carrossel-com-ia-2026-06-07/
  conteudo.md    ← importar no Gamma pra gerar o ebook visual
  roteiro.md     ← guia de design slide a slide no Gamma
  legenda.md     ← legenda pra divulgar nas redes sociais
```
