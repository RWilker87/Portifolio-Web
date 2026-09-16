# 📂 SIMREC — Mídias e Provas Visuais

Coloque aqui as capturas de tela, fotos, GIFs e gravações de demonstração do **SIMREC**:

### 🎯 Formatos Recomendados:
- **GIF / Vídeo:** `.gif`, `.mp4` ou `.webm` (tamanho otimizado, até 15MB)
- **Screenshots:** `.png`, `.webp` ou `.jpg` (proporção 16:9 / 1920x1080)

### 🚀 Exemplos de Nomes de Arquivo:
- `simrec-dashboard.png` (captura do painel de metas municipais IDEB/IDEP)
- `simrec-analytics.gif` (gravação de filtros e gráficos comparativos)
- `simrec-table.png` (captura da listagem de escolas e relatórios)

### 🔗 Como ativar no site:
No arquivo `src/lib/data.ts`, configure:
```typescript
visualPreview: {
  type: "desktop",
  badge: "Painel Analítico GovTech",
  caption: "Dashboard de monitoramento e metas educacionais municipais",
  mediaUrl: "/media/simrec/simrec-dashboard.png",
}
```
