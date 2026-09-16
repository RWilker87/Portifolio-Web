# 📂 Sistema Família & Escola — Mídias e Provas Visuais

Coloque aqui as capturas de tela, fotos, GIFs e gravações de demonstração do aplicativo mobile **Sistema Família & Escola**:

### 🎯 Formatos Recomendados:
- **GIF / Vídeo:** `.gif`, `.mp4` ou `.webm` (formato vertical/retrato)
- **Screenshots:** `.png`, `.webp` ou `.jpg` (proporção 9:16 ou tela de celular Android / 1080x2400)

### 🚀 Exemplos de Nomes de Arquivo:
- `familia-escola-chamada.gif` (gravação do lançamento rápido de frequência)
- `familia-escola-push.png` (captura da notificação recebida pelos pais)
- `familia-escola-screen.png` (captura da tela inicial do aplicativo Flutter)

### 🔗 Como ativar no site:
No arquivo `src/lib/data.ts`, configure:
```typescript
visualPreview: {
  type: "mobile",
  badge: "App Android (Flutter)",
  caption: "Demonstração do fluxo de chamada em lote e notificações em tempo real",
  mediaUrl: "/media/familia-escola/familia-escola-chamada.gif",
}
```
