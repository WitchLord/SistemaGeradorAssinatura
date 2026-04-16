# Gerador de Assinaturas - Barrela

Aplicação local para gerar assinatura de e-mail da Barrella Eventos em HTML compatível com clientes de e-mail.

## Stack

- Vite
- React
- TypeScript

## Funcionalidades

- Formulário completo com todos os campos da assinatura.
- Preview em tempo real (fiel ao HTML exportado via `iframe` com `srcDoc`).
- Geração do HTML por template string em `buildSignatureHtml`.
- Botão para copiar HTML.
- Botão para baixar arquivo `.html`.
- Botão para resetar os valores.
- Botão para visualizar o HTML gerado.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```txt
barrella-signature-builder/
├─ public/assets/
│  ├─ logo-barrella.png
│  ├─ icon-email.png
│  ├─ icon-instagram.png
│  ├─ icon-phone.png
│  ├─ icon-location.png
│  └─ bg-texture.png
├─ src/components/
│  ├─ FormField.tsx
│  ├─ SignatureForm.tsx
│  ├─ SignaturePreview.tsx
│  └─ ExportButtons.tsx
├─ src/lib/
│  ├─ buildSignatureHtml.ts
│  ├─ sanitize.ts
│  ├─ copyHtml.ts
│  ├─ downloadHtml.ts
│  ├─ defaults.ts
│  └─ slugify.ts
├─ src/types/
│  └─ signature.ts
├─ src/App.tsx
├─ src/main.tsx
└─ src/index.css
```

## Notas de uso

- O HTML exportado usa layout baseado em `<table>` com CSS inline.
- O e-mail é sempre exportado como `mailto:{email}`.
- Os assets em `public/assets` são placeholders locais e podem ser trocados pelos finais sem alterar código.
- Nome do arquivo exportado: `assinatura-barrella-{slug-do-nome}.html`.

## Exemplo inicial

A aplicação inicia com os dados da Nayara Zimenez configurados no arquivo:

- `src/lib/defaults.ts`

