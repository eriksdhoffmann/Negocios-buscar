# Negócios Buscar — Radar Satélite IA de Comércios sem Site

Acesse online (GitHub Pages): **https://eriksdhoffmann.github.io/Negocios-buscar/**

Aplicação web **100% gratuita** e estática (sem chaves de API pagas) que combina **Mapa de Satélite (Google Satélite + Ruas / Satélite HD)** com varredura automática de comércios locais para identificar negócios que **ainda não possuem site próprio**.

## O que ela faz

- **Mapa Satélite Interativo:** Navegue em visão **Satélite + Ruas**, **Satélite HD** ou **Mapa de Ruas**, clique em qualquer ponto do mapa (ou arraste o marcador central) e ajuste o raio do radar (`0.5 km` a `15 km`).
- **Varredura de Comércios em 11 Segmentos:** Usa motor duplo gratuito (Overpass API + Nominatim/OpenStreetMap) para mapear comércios reais dentro da área selecionada.
- **Diagnóstico IA & Score de Oportunidade (0–100):**
  - Identifica automaticamente comércios **sem site próprio** (diferenciando quem só tem Instagram/Facebook de quem tem site real).
  - Calcula prioridade comercial, lacunas digitais e faixa de **ticket sugerido (R$)** por segmento.
  - Plota pinos coloridos no satélite: 🟢 Sem Site (Alta Prioridade), 🟠 Sem Site (Oportunidade) e 🔵 Já tem Site (Redesign/SEO).
- **Inspeção Direta:** Zoom no telhado via Satélite, **Google Street View 360°** para ver a fachada real e link direto para o **Google Maps**.
- **Prévia de Site em 1 Clique + Prompt p/ IA:** Gera uma landing page demonstrativa personalizada (Desktop/Celular), permite baixar o HTML e copiar um prompt pronto para criar o site completo para vender ao cliente.
- **Abordagem WhatsApp & CRM Integrado:** 3 roteiros comerciais editáveis com link `wa.me` + CRM salvo no navegador (`localStorage`) com etapas, valores estimados e exportação em CSV.
