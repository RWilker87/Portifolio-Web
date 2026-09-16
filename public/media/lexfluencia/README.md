# 📂 Lexfluência (fluenciaCAP) — Mídias e Provas Visuais

Coloque aqui as capturas de tela, fotos, GIFs e gravações de demonstração do **Lexfluência**:

### 🎯 Formatos Recomendados:
- **GIF / Vídeo:** `.gif`, `.mp4` ou `.webm` (tamanho otimizado, até 15MB)
- **Screenshots:** `.png`, `.webp` ou `.jpg` (proporção 16:9 / 1920x1080)

### 🚀 Exemplos de Nomes de Arquivo:
- `lexfluencia-demo.gif` (gravação da leitura e transcrição com IA)
- `lexfluencia-dashboard.png` (captura do painel de diagnósticos)
- `lexfluencia-waveform.png` (captura do visualizador de áudio)

### 🔗 Como ativar no site:
No arquivo `src/lib/data.ts`, configure:
```typescript
visualPreview: {
  type: "desktop",
  badge: "Demonstração com IA & Voz",
  caption: "Demonstração da avaliação automatizada de fluência leitora",
  mediaUrl: "/media/lexfluencia/lexfluencia-demo.gif",
}
```
