# 📂 Sistema Família & Escola — Mídias e Provas Visuais

Coloque aqui as capturas de tela, fotos, GIFs e gravações de demonstração do aplicativo mobile **Sistema Família & Escola**:

### 🎯 Formatos Recomendados:
- **GIF / Vídeo:** `.gif`, `.mp4` ou `.webm` (formato vertical/retrato)
- **Screenshots:** `.png`, `.webp` ou `.jpg` (proporção 9:16 ou tela de celular Android / 1080x2400)

### 🚀 Exemplos de Nomes de Arquivo:
- `logo-familia-escola.png` (logotipo oficial em alta definição)
- `app-preview.png` (demonstração da interface mobile)
- `familia-escola-chamada.gif` (gravação do lançamento rápido de frequência)

### 🔗 Como ativar no site:
No arquivo `src/lib/data.ts`, configure:
```typescript
visualPreview: {
  type: "mobile",
  badge: "Identidade & App Mobile",
  caption: "Logotipo oficial e telas do aplicativo Sistema Família & Escola",
  mediaUrl: "/media/familia-escola/logo-familia-escola.png",
}
```
