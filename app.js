(() => {
  const STORAGE_KEY = 'negocios_buscar_crm_v2';

  const SEGMENTS = {
    todos: {
      label: 'Todos os Comércios',
      overpassFilters: [
        '["shop"]["name"]',
        '["amenity"~"^(restaurant|cafe|bakery|bar|fast_food|dentist|clinic|doctors|veterinary|pharmacy|car_wash)$"]["name"]',
        '["healthcare"]["name"]',
        '["office"]["name"]',
        '["craft"]["name"]'
      ],
      nominatimQueries: ['[restaurant]', '[hairdresser]', '[dentist]', '[car_repair]', '[clothes]', '[bakery]'],
      ticketMin: 1000,
      ticketMax: 2200,
      avgTicket: 1400,
      offer: 'Site Institucional + Botão WhatsApp + SEO Local',
      accent: '#0D6E4F',
      accentDark: '#094F38',
      heroTagline: 'Qualidade, confiança e atendimento próximo para servir você e toda a sua região.',
      services: [
        { title: 'Atendimento Dedicado', desc: 'Equipe preparada para entender sua necessidade e oferecer a melhor solução.' },
        { title: 'Produtos & Serviços', desc: 'Padrão reconhecido pelos clientes do bairro com transparência e agilidade.' },
        { title: 'Contato em 1 Clique', desc: 'Fale agora pelo WhatsApp para tirar dúvidas, agendar ou pedir orçamento.' }
      ]
    },
    dentistas: {
      label: 'Odontologia & Clínicas',
      overpassFilters: [
        '["amenity"~"^(dentist|clinic|doctors)$"]["name"]',
        '["healthcare"~"^(dentist|clinic|doctor|physiotherapist|optometrist|psychotherapist)$"]["name"]'
      ],
      nominatimQueries: ['[dentist]', '[clinic]', '[doctors]'],
      ticketMin: 1800,
      ticketMax: 3500,
      avgTicket: 2400,
      offer: 'Site Clínico + Agendamento WhatsApp + SEO Local',
      accent: '#0F766E',
      accentDark: '#115E59',
      heroTagline: 'Cuidado humanizado e tecnologia moderna para a sua saúde, bem-estar e confiança.',
      services: [
        { title: 'Avaliação Personalizada', desc: 'Diagnóstico detalhado com plano de tratamento transparente e objetivo.' },
        { title: 'Especialidades Modernas', desc: 'Estrutura preparada para oferecer conforto, precisão e resultados duradouros.' },
        { title: 'Agendamento pelo WhatsApp', desc: 'Marque sua consulta rapidamente sem filas e com confirmação imediata.' }
      ]
    },
    beleza: {
      label: 'Beleza, Salões & Barbearias',
      overpassFilters: [
        '["shop"~"^(hairdresser|beauty|cosmetics|massage|tattoo)$"]["name"]',
        '["amenity"="spa"]["name"]'
      ],
      nominatimQueries: ['[hairdresser]', '[beauty]', 'barbearia'],
      ticketMin: 900,
      ticketMax: 1800,
      avgTicket: 1300,
      offer: 'Site Vitrine + Tabela de Serviços + Agendamento WhatsApp',
      accent: '#9F1239',
      accentDark: '#881337',
      heroTagline: 'Realce sua melhor versão com atendimento exclusivo, técnica atual e ambiente acolhedor.',
      services: [
        { title: 'Cortes & Estilo', desc: 'Atendimento sob medida respeitando o seu perfil e as tendências atuais.' },
        { title: 'Estética & Cuidados', desc: 'Produtos de alta performance e protocolos pensados para resultados reais.' },
        { title: 'Horário Marcado', desc: 'Reserve seu atendimento pelo WhatsApp com praticidade e pontualidade.' }
      ]
    },
    restaurantes: {
      label: 'Restaurantes, Cafés & Padarias',
      overpassFilters: [
        '["amenity"~"^(restaurant|cafe|fast_food|bar|pub|ice_cream)$"]["name"]',
        '["shop"~"^(bakery|pastry|butcher|coffee)$"]["name"]'
      ],
      nominatimQueries: ['[restaurant]', '[cafe]', '[bakery]'],
      ticketMin: 1000,
      ticketMax: 2200,
      avgTicket: 1500,
      offer: 'Site + Cardápio Digital + Pedidos Direto no WhatsApp',
      accent: '#B45309',
      accentDark: '#92400E',
      heroTagline: 'Sabor artesanal, ingredientes selecionados e um ambiente acolhedor para toda a família.',
      services: [
        { title: 'Cardápio Especial', desc: 'Pratos preparados na hora com receitas exclusivas e ingredientes frescos.' },
        { title: 'Pedidos Diretos (Sem Taxa)', desc: 'Peça direto pelo WhatsApp de forma rápida, sem comissões de aplicativos.' },
        { title: 'Reservas & Eventos', desc: 'Garanta sua mesa para encontros, almoços e comemorações especiais.' }
      ]
    },
    automotivo: {
      label: 'Oficinas & Automotivo',
      overpassFilters: [
        '["shop"~"^(car_repair|car_parts|tyres|car|motorcycle)$"]["name"]',
        '["amenity"="car_wash"]["name"]'
      ],
      nominatimQueries: ['[car_repair]', '[car_wash]', '[tyres]'],
      ticketMin: 1200,
      ticketMax: 2500,
      avgTicket: 1700,
      offer: 'Site de Autoridade + Orçamento Rápido WhatsApp + Google Local',
      accent: '#1D4ED8',
      accentDark: '#1E40AF',
      heroTagline: 'Manutenção de confiança, diagnóstico preciso e transparência total no orçamento.',
      services: [
        { title: 'Revisão Preventiva', desc: 'Checklist completo para garantir segurança e economia no seu dia a dia.' },
        { title: 'Diagnóstico & Reparos', desc: 'Equipamentos modernos e equipe qualificada para resolver o problema na raiz.' },
        { title: 'Orçamento Rápido', desc: 'Chame no WhatsApp, descreva o serviço e agende sua avaliação.' }
      ]
    },
    pet: {
      label: 'Pet Shops & Veterinárias',
      overpassFilters: [
        '["amenity"="veterinary"]["name"]',
        '["shop"~"^(pet|pet_grooming)$"]["name"]'
      ],
      nominatimQueries: ['[veterinary]', '[pet]', 'pet shop'],
      ticketMin: 1100,
      ticketMax: 2200,
      avgTicket: 1500,
      offer: 'Site Pet + Agendamento Banho/Consulta + WhatsApp',
      accent: '#047857',
      accentDark: '#065F46',
      heroTagline: 'Carinho, saúde e cuidado completo para quem faz parte da sua família.',
      services: [
        { title: 'Banho & Tosa', desc: 'Ambiente seguro, higienizado e profissionais apaixonados por animais.' },
        { title: 'Consultas & Vacinas', desc: 'Acompanhamento veterinário preventivo para uma vida longa e saudável.' },
        { title: 'Rações & Produtos', desc: 'Linha selecionada de nutrição e acessórios com entrega na região.' }
      ]
    },
    academias: {
      label: 'Academias & Esportes',
      overpassFilters: [
        '["leisure"~"^(fitness_centre|sports_centre|fitness_station|swimming_pool)$"]["name"]',
        '["sport"]["name"]'
      ],
      nominatimQueries: ['[fitness_centre]', '[sports_centre]', 'academia'],
      ticketMin: 1200,
      ticketMax: 2400,
      avgTicket: 1600,
      offer: 'Landing Page de Matrículas + Aula Experimental WhatsApp',
      accent: '#C2410C',
      accentDark: '#9A3412',
      heroTagline: 'Estrutura completa e acompanhamento próximo para você evoluir com consistência.',
      services: [
        { title: 'Treino Personalizado', desc: 'Acompanhamento adaptado ao seu ritmo, objetivo e condicionamento.' },
        { title: 'Estrutura Moderna', desc: 'Espaço amplo, climatizado e equipamentos revisados constantemente.' },
        { title: 'Aula Experimental', desc: 'Agende sua visita gratuita pelo WhatsApp e conheça nossos planos.' }
      ]
    },
    escritorios: {
      label: 'Advocacia, Contabilidade & Imóveis',
      overpassFilters: [
        '["office"~"^(lawyer|accountant|estate_agent|insurance|architect|consulting|notary)$"]["name"]'
      ],
      nominatimQueries: ['[lawyer]', '[accountant]', '[estate_agent]'],
      ticketMin: 2000,
      ticketMax: 4200,
      avgTicket: 2800,
      offer: 'Site Institucional Premium + Captação de Clientes + SEO',
      accent: '#1E3A5F',
      accentDark: '#172554',
      heroTagline: 'Assessoria estratégica com ética, clareza e foco em resultados concretos.',
      services: [
        { title: 'Consultoria Especializada', desc: 'Análise técnica detalhada com orientação objetiva para sua decisão.' },
        { title: 'Atendimento Ágil', desc: 'Comunicação transparente em cada etapa do processo ou projeto.' },
        { title: 'Agende uma Reunião', desc: 'Converse com nossa equipe presencialmente ou online via WhatsApp.' }
      ]
    },
    varejo: {
      label: 'Lojas, Moda & Varejo',
      overpassFilters: [
        '["shop"~"^(clothes|shoes|electronics|furniture|optician|jewelry|hardware|mobile_phone|bicycle|florist|gift)$"]["name"]'
      ],
      nominatimQueries: ['[clothes]', '[electronics]', '[furniture]', '[optician]'],
      ticketMin: 1200,
      ticketMax: 2800,
      avgTicket: 1800,
      offer: 'Site Vitrine / Catálogo Online + Pedido no WhatsApp',
      accent: '#0F766E',
      accentDark: '#134E4A',
      heroTagline: 'Curadoria de produtos de qualidade com atendimento próximo e condições especiais.',
      services: [
        { title: 'Catálogo Atualizado', desc: 'Novidades selecionadas para o seu dia a dia com garantia de procedência.' },
        { title: 'Atendimento Consultivo', desc: 'Ajudamos você a escolher a opção ideal na loja ou pelo WhatsApp.' },
        { title: 'Retirada ou Entrega', desc: 'Compre com praticidade e receba rapidamente na sua região.' }
      ]
    },
    hotelaria: {
      label: 'Hotéis & Pousadas',
      overpassFilters: [
        '["tourism"~"^(hotel|guest_house|hostel|motel|chalet|apartment)$"]["name"]'
      ],
      nominatimQueries: ['[hotel]', '[guest_house]', '[hostel]'],
      ticketMin: 1800,
      ticketMax: 3800,
      avgTicket: 2600,
      offer: 'Site de Reservas Diretas (Sem Comissão Booking) + Galeria',
      accent: '#0369A1',
      accentDark: '#075985',
      heroTagline: 'Conforto, hospitalidade e localização privilegiada para uma estadia memorável.',
      services: [
        { title: 'Acomodações Confortáveis', desc: 'Quartos preparados com cuidado, Wi-Fi rápido e ambiente tranquilo.' },
        { title: 'Reserva Direta', desc: 'Garanta a melhor tarifa reservando diretamente pelo nosso WhatsApp.' },
        { title: 'Localização Estratégica', desc: 'Fácil acesso aos principais pontos turísticos e comerciais da região.' }
      ]
    },
    servicos: {
      label: 'Construção, Serviços & Indústria',
      overpassFilters: [
        '["craft"]["name"]',
        '["shop"~"^(doityourself|hardware|paint|electrical|trade|building_materials)$"]["name"]'
      ],
      nominatimQueries: ['[hardware]', 'marcenaria', 'serralheria', 'vidraçaria'],
      ticketMin: 1300,
      ticketMax: 2600,
      avgTicket: 1800,
      offer: 'Site de Portfólio + Solicitação de Orçamento no WhatsApp',
      accent: '#334155',
      accentDark: '#1E293B',
      heroTagline: 'Execução profissional, prazo cumprido e acabamento de alto padrão.',
      services: [
        { title: 'Orçamento Transparente', desc: 'Avaliação clara da sua demanda com especificações e prazo definidos.' },
        { title: 'Equipe Especializada', desc: 'Experiência prática e materiais confiáveis para entregas duráveis.' },
        { title: 'Atendimento Regional', desc: 'Chame pelo WhatsApp e solicite uma visita técnica na sua região.' }
      ]
    }
  };

  const state = {
    center: { lat: -27.6456, lon: -48.6697, name: 'Palhoça, SC' },
    radiusKm: 3,
    results: [],
    filteredResults: [],
    selectedId: null,
    resultsExpanded: false,
    leads: [],
    isScanning: false,
    activePitchBiz: null,
    activePitchTone: 'previa',
    activeSiteBiz: null,
    activeSiteHtml: '',
    cache: new Map()
  };

  // DOM refs
  const el = {
    tabs: document.querySelectorAll('.nav-tab'),
    views: {
      radar: document.getElementById('view-radar'),
      crm: document.getElementById('view-crm')
    },
    crmBadge: document.getElementById('crm-badge'),
    sidebar: document.getElementById('radar-sidebar'),
    summaryCity: document.getElementById('summary-city'),
    summaryMeta: document.getElementById('summary-meta'),
    btnExpandSearch: document.getElementById('btn-expand-search'),
    btnExpandSearchArea: document.getElementById('btn-expand-search-area'),
    btnCollapseSearch: document.getElementById('btn-collapse-search'),
    resultsHandle: document.getElementById('results-handle'),
    handleLabel: document.getElementById('handle-label'),
    searchForm: document.getElementById('search-form'),
    inputCity: document.getElementById('input-city'),
    btnGps: document.getElementById('btn-gps'),
    selectSegment: document.getElementById('select-segment'),
    inputKeyword: document.getElementById('input-keyword'),
    inputRadius: document.getElementById('input-radius'),
    radiusLabel: document.getElementById('radius-label'),
    btnScan: document.getElementById('btn-scan'),
    presets: document.querySelectorAll('.preset-chip'),
    aiBanner: document.getElementById('ai-banner'),
    aiStatusText: document.getElementById('ai-status-text'),
    miniStats: document.getElementById('mini-stats'),
    statBtnAll: document.getElementById('stat-btn-all'),
    statBtnNoSite: document.getElementById('stat-btn-no-site'),
    statBtnPhone: document.getElementById('stat-btn-phone'),
    statTotal: document.getElementById('stat-total'),
    statNoSite: document.getElementById('stat-no-site'),
    statPhone: document.getElementById('stat-phone'),
    statPotential: document.getElementById('stat-potential'),
    sidebarFilters: document.getElementById('sidebar-filters'),
    filterNoSite: document.getElementById('filter-no-site'),
    pillNoSite: document.getElementById('pill-no-site'),
    filterHasPhone: document.getElementById('filter-has-phone'),
    pillHasPhone: document.getElementById('pill-has-phone'),
    filterHighScore: document.getElementById('filter-high-score'),
    pillHighScore: document.getElementById('pill-high-score'),
    filterText: document.getElementById('filter-text'),
    sortBy: document.getElementById('sort-by'),
    btnExportCsv: document.getElementById('btn-export-csv'),
    resultsNavCount: document.getElementById('results-nav-count'),
    btnPrevLead: document.getElementById('btn-prev-lead'),
    btnNextLead: document.getElementById('btn-next-lead'),
    resultsContainer: document.getElementById('results-container'),
    btnScanViewport: document.getElementById('btn-scan-viewport'),
    layerBtns: document.querySelectorAll('.layer-btn'),

    // CRM
    crmStatTotal: document.getElementById('crm-stat-total'),
    crmStatActive: document.getElementById('crm-stat-active'),
    crmStatWon: document.getElementById('crm-stat-won'),
    crmStatValue: document.getElementById('crm-stat-value'),
    crmFilterStage: document.getElementById('crm-filter-stage'),
    btnExportCrm: document.getElementById('btn-export-crm'),
    crmContainer: document.getElementById('crm-container'),

    // Pitch Modal
    modalPitch: document.getElementById('modal-pitch'),
    pitchTitle: document.getElementById('pitch-title'),
    pitchSubtitle: document.getElementById('pitch-subtitle'),
    pitchTones: document.querySelectorAll('#pitch-tones .tone-pill'),
    pitchTextarea: document.getElementById('pitch-textarea'),
    btnCopyPitch: document.getElementById('btn-copy-pitch'),
    btnOpenWa: document.getElementById('btn-open-wa'),

    // Site Modal
    modalSite: document.getElementById('modal-site'),
    siteTitle: document.getElementById('site-title'),
    siteSubtitle: document.getElementById('site-subtitle'),
    siteFrame: document.getElementById('site-preview-frame'),
    btnViewDesktop: document.getElementById('btn-view-desktop'),
    btnViewMobile: document.getElementById('btn-view-mobile'),
    btnCopyAiPrompt: document.getElementById('btn-copy-ai-prompt'),
    btnDownloadHtml: document.getElementById('btn-download-html'),
    btnSiteToPitch: document.getElementById('btn-site-to-pitch'),

    toast: document.getElementById('toast')
  };

  // Leaflet Map Instances
  let map;
  let currentTileLayer;
  let tileLayers = {};
  let radarCircle;
  let radarCenterMarker;
  let markersLayer;
  const markerMap = new Map();

  let toastTimer = null;
  function showToast(msg) {
    el.toast.textContent = msg;
    el.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.toast.classList.remove('show'), 2800);
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatBRL(value) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(Number(value) || 0);
  }

  function formatCompactBRL(value) {
    const v = Number(value) || 0;
    if (v >= 1000000) return `R$ ${(v / 1000000).toFixed(1)}M`;
    if (v >= 1000) return `R$ ${Math.round(v / 1000)}k`;
    return formatBRL(v);
  }

  function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  function haversineKm(lat1, lon1, lat2, lon2) {
    const toRad = (deg) => (deg * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function buildViewbox(lat, lon, radiusKm) {
    const latDelta = radiusKm / 111.32;
    const lonDelta = radiusKm / (111.32 * Math.max(0.2, Math.cos((lat * Math.PI) / 180)));
    return `${(lon - lonDelta).toFixed(6)},${(lat + latDelta).toFixed(6)},${(lon + lonDelta).toFixed(6)},${(lat - latDelta).toFixed(6)}`;
  }

  function normalizePhone(raw) {
    if (!raw) return { display: '', whatsappDigits: '' };
    const first = String(raw).split(';')[0].trim();
    let digits = first.replace(/\D/g, '');
    if (!digits) return { display: first, whatsappDigits: '' };
    if (digits.startsWith('0')) digits = digits.slice(1);
    if (digits.length === 10 || digits.length === 11) digits = '55' + digits;
    return {
      display: first,
      whatsappDigits: digits.length >= 12 ? digits : ''
    };
  }

  function normalizeWebsite(raw) {
    if (!raw) return '';
    const s = String(raw).trim();
    if (!s) return '';
    // Social links alone are NOT a dedicated website!
    if (/instagram\.com|facebook\.com|fb\.com|wa\.me|whatsapp\.com|linktr\.ee/i.test(s)) {
      return '';
    }
    return /^https?:\/\//i.test(s) ? s : `https://${s}`;
  }

  function extractSocialIfWebsiteWasSocial(raw, tags) {
    const ig = tags['contact:instagram'] || tags.instagram || (/instagram\.com/i.test(raw || '') ? raw : '');
    const fb = tags['contact:facebook'] || tags.facebook || (/facebook\.com|fb\.com/i.test(raw || '') ? raw : '');
    return { instagram: ig, facebook: fb };
  }

  // AI Opportunity & Digital Gap Analyzer
  function analyzeBusinessWithAI(biz, segmentKey) {
    const seg = SEGMENTS[segmentKey] || SEGMENTS.todos;
    let score = 20;
    const gaps = [];

    if (!biz.hasWebsite) {
      score += 48;
      gaps.push('Sem site próprio no Google');
    } else {
      gaps.push('Já possui site (avaliar redesign, velocidade e SEO local)');
    }

    if (biz.phone) {
      score += 20;
    } else {
      gaps.push('Telefone ausente no mapa (checar no Google Maps)');
    }

    if (!biz.hasWebsite && (biz.instagram || biz.facebook)) {
      score += 10;
      gaps.push('Depende só de redes sociais — fácil converter para site');
    }

    if (!biz.openingHours && !biz.hasWebsite) {
      gaps.push('Sem horários estruturados online');
    } else if (biz.openingHours) {
      score += 4;
    }

    if (biz.address) {
      score += 3;
    }

    score = Math.min(99, Math.max(18, score));
    const level = !biz.hasWebsite ? (score >= 75 ? 'alta' : 'media') : 'baixa';

    let aiSummary;
    if (!biz.hasWebsite && biz.phone) {
      aiSummary = `Alta chance de venda: negócio ativo na região sem site próprio e com telefone disponível para abordagem imediata.`;
    } else if (!biz.hasWebsite && (biz.instagram || biz.facebook)) {
      aiSummary = `Oportunidade quente: divulga apenas em rede social e perde clientes que pesquisam no Google.`;
    } else if (!biz.hasWebsite) {
      aiSummary = `Sem site próprio detectado no mapa. Abra no Google Maps/Street View para confirmar contato e enviar prévia.`;
    } else {
      aiSummary = `Já possui site cadastrado (${biz.website.replace(/^https?:\/\//, '').slice(0, 32)}). Vale auditar se abre bem no celular.`;
    }

    return {
      score,
      level,
      gaps,
      aiSummary,
      suggestedOffer: seg.offer,
      ticketRange: `${formatBRL(seg.ticketMin)} – ${formatBRL(seg.ticketMax)}`,
      avgTicket: seg.avgTicket
    };
  }

  // Map Initialization
  function initMap() {
    map = L.map('satellite-map', {
      center: [state.center.lat, state.center.lon],
      zoom: 14,
      zoomControl: true
    });

    tileLayers = {
      'google-hybrid': L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        attribution: 'Google Satélite & Ruas · Dados Comerciais: OpenStreetMap'
      }),
      'esri-sat': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 19,
        attribution: 'Esri World Imagery · OpenStreetMap'
      }),
      'google-streets': L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        attribution: 'Google Maps · OpenStreetMap'
      })
    };

    currentTileLayer = tileLayers['google-hybrid'];
    currentTileLayer.addTo(map);

    markersLayer = L.layerGroup().addTo(map);

    drawRadarArea(state.center.lat, state.center.lon, state.radiusKm);

    // Click anywhere on satellite map to move radar center
    map.on('click', (e) => {
      const { lat, lng } = e.latlng;
      state.center = { lat, lon: lng, name: `${lat.toFixed(4)}, ${lng.toFixed(4)}` };
      drawRadarArea(lat, lng, state.radiusKm);
      el.inputCity.value = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
      setBanner(`Radar reposicionado no satélite (${lat.toFixed(4)}, ${lng.toFixed(4)}). Clique em "Escanear Região no Satélite".`, false);
    });
  }

  function drawRadarArea(lat, lon, radiusKm) {
    if (radarCircle) map.removeLayer(radarCircle);
    if (radarCenterMarker) map.removeLayer(radarCenterMarker);

    radarCircle = L.circle([lat, lon], {
      radius: radiusKm * 1000,
      color: '#10B981',
      weight: 2,
      dashArray: '8 6',
      fillColor: '#10B981',
      fillOpacity: 0.1
    }).addTo(map);

    const centerIcon = L.divIcon({
      className: '',
      html: '<div class="radar-center-pin" title="Centro do Radar (arraste para mover)"></div>',
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    });

    radarCenterMarker = L.marker([lat, lon], {
      icon: centerIcon,
      draggable: true,
      zIndexOffset: 500
    }).addTo(map);

    radarCenterMarker.on('dragend', (ev) => {
      const pos = ev.target.getLatLng();
      state.center = { lat: pos.lat, lon: pos.lng, name: `${pos.lat.toFixed(4)}, ${pos.lng.toFixed(4)}` };
      radarCircle.setLatLng(pos);
      el.inputCity.value = `${pos.lat.toFixed(4)}, ${pos.lng.toFixed(4)}`;
      setBanner('Centro do radar movido. Clique em "Escanear Região no Satélite" para analisar a nova área.', false);
    });
  }

  function setBanner(text, scanning = false) {
    el.aiBanner.classList.toggle('scanning', scanning);
    el.aiBanner.innerHTML = scanning
      ? `<div class="spinner"></div><span>${escapeHtml(text)}</span>`
      : `<span>${escapeHtml(text)}</span>`;
  }

  // Geocoding (City/Neighborhood -> Lat/Lon)
  async function geocodeInput(rawQuery) {
    const trimmed = rawQuery.trim();
    const coordMatch = trimmed.match(/^(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)$/);
    if (coordMatch) {
      return {
        lat: parseFloat(coordMatch[1]),
        lon: parseFloat(coordMatch[2]),
        name: trimmed
      };
    }

    const q = /brasil|brazil/i.test(trimmed) ? trimmed : `${trimmed}, Brasil`;
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&addressdetails=1&accept-language=pt-BR&q=${encodeURIComponent(q)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Falha ao geocodificar cidade');
    const data = await res.json();
    if (!data || !data.length) return null;
    const hit = data[0];
    return {
      lat: parseFloat(hit.lat),
      lon: parseFloat(hit.lon),
      name: hit.name || trimmed,
      displayName: hit.display_name
    };
  }

  // Engine 1: Overpass API (Exact circle inside Satellite Radar)
  async function fetchFromOverpass(lat, lon, radiusKm, segmentKey, keyword) {
    const seg = SEGMENTS[segmentKey] || SEGMENTS.todos;
    const radiusMeters = Math.min(15000, Math.max(400, Math.round(radiusKm * 1000)));

    let clauses;
    if (keyword) {
      const safeKw = keyword.replace(/["\\]/g, '');
      clauses = [
        `node["name"~"${safeKw}",i](around:${radiusMeters},${lat},${lon});`,
        `way["name"~"${safeKw}",i](around:${radiusMeters},${lat},${lon});`
      ];
    } else {
      clauses = seg.overpassFilters.flatMap((f) => [
        `node${f}(around:${radiusMeters},${lat},${lon});`,
        `way${f}(around:${radiusMeters},${lat},${lon});`
      ]);
    }

    const query = `[out:json][timeout:8];(${clauses.join('')});out center 180;`;

    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 5500);
      const res = await fetch('https://overpass-api.de/api/interpreter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'data=' + encodeURIComponent(query),
        signal: ctrl.signal
      });
      clearTimeout(timer);
      if (!res.ok) return [];
      const json = await res.json();
      if (!Array.isArray(json.elements)) return [];

      return json.elements
        .map((item) => {
          const tags = item.tags || {};
          const name = (tags.name || '').trim();
          const bLat = item.lat ?? item.center?.lat;
          const bLon = item.lon ?? item.center?.lon;
          if (!name || bLat === undefined || bLon === undefined) return null;

          const rawSite = tags.website || tags['contact:website'] || tags.url || '';
          const website = normalizeWebsite(rawSite);
          const social = extractSocialIfWebsiteWasSocial(rawSite, tags);
          const rawPhone =
            tags['contact:whatsapp'] ||
            tags.whatsapp ||
            tags['contact:phone'] ||
            tags.phone ||
            tags['contact:mobile'] ||
            tags.mobile ||
            '';
          const phoneObj = normalizePhone(rawPhone);
          const street = tags['addr:street'] || '';
          const num = tags['addr:housenumber'] ? `, ${tags['addr:housenumber']}` : '';
          const suburb = tags['addr:suburb'] || tags['addr:neighbourhood'] || '';
          const city = tags['addr:city'] || state.center.name;
          const addrParts = [street ? `${street}${num}` : '', suburb, city].filter(Boolean);

          return {
            id: `${item.type}_${item.id}`,
            name,
            segment: segmentKey,
            segmentLabel: seg.label,
            category: tags.shop || tags.amenity || tags.healthcare || tags.office || tags.craft || tags.tourism || tags.leisure || 'comercio',
            address: addrParts.join(' — ') || city,
            neighborhood: suburb,
            city,
            lat: Number(bLat),
            lon: Number(bLon),
            distanceKm: Number(haversineKm(lat, lon, Number(bLat), Number(bLon)).toFixed(2)),
            phone: phoneObj.display,
            whatsappDigits: phoneObj.whatsappDigits,
            website,
            hasWebsite: Boolean(website),
            instagram: social.instagram,
            facebook: social.facebook,
            openingHours: tags.opening_hours || '',
            source: 'Satélite + Overpass'
          };
        })
        .filter(Boolean);
    } catch {
      return [];
    }
  }

  // Engine 2: Nominatim Bounded POI Harvester (Always-available CORS engine)
  async function fetchFromNominatim(lat, lon, radiusKm, segmentKey, keyword) {
    const seg = SEGMENTS[segmentKey] || SEGMENTS.todos;
    const viewbox = buildViewbox(lat, lon, radiusKm);
    const queries = keyword ? [keyword] : seg.nominatimQueries.slice(0, 3);
    const found = [];

    for (let i = 0; i < queries.length; i++) {
      if (i > 0) await sleep(350);
      const q = queries[i];
      const url =
        `https://nominatim.openstreetmap.org/search?format=json&limit=40&bounded=1&addressdetails=1&extratags=1&accept-language=pt-BR` +
        `&viewbox=${encodeURIComponent(viewbox)}&q=${encodeURIComponent(q)}`;
      try {
        const res = await fetch(url);
        if (!res.ok) continue;
        const items = await res.json();
        for (const item of items) {
          const name = (item.name || '').trim();
          if (!name) continue;
          if (['boundary', 'highway', 'place', 'waterway', 'railway'].includes(item.class)) continue;

          const bLat = parseFloat(item.lat);
          const bLon = parseFloat(item.lon);
          const dist = haversineKm(lat, lon, bLat, bLon);
          if (dist > radiusKm * 1.15) continue;

          const tags = item.extratags || {};
          const rawSite = tags.website || tags['contact:website'] || tags.url || '';
          const website = normalizeWebsite(rawSite);
          const social = extractSocialIfWebsiteWasSocial(rawSite, tags);
          const rawPhone =
            tags['contact:whatsapp'] ||
            tags.whatsapp ||
            tags['contact:phone'] ||
            tags.phone ||
            tags['contact:mobile'] ||
            tags.mobile ||
            '';
          const phoneObj = normalizePhone(rawPhone);
          const a = item.address || {};
          const street = a.road || a.pedestrian || '';
          const num = a.house_number ? `, ${a.house_number}` : '';
          const suburb = a.suburb || a.neighbourhood || a.quarter || '';
          const city = a.city || a.town || a.municipality || state.center.name;
          const addrParts = [street ? `${street}${num}` : '', suburb, city].filter(Boolean);

          found.push({
            id: `${item.osm_type || 'n'}_${item.osm_id || item.place_id}`,
            name,
            segment: segmentKey,
            segmentLabel: seg.label,
            category: item.type || item.class || 'comercio',
            address: addrParts.join(' — ') || city,
            neighborhood: suburb,
            city,
            lat: bLat,
            lon: bLon,
            distanceKm: Number(dist.toFixed(2)),
            phone: phoneObj.display,
            whatsappDigits: phoneObj.whatsappDigits,
            website,
            hasWebsite: Boolean(website),
            instagram: social.instagram,
            facebook: social.facebook,
            openingHours: tags.opening_hours || '',
            source: 'Satélite + Nominatim'
          });
        }
      } catch {
        // continue
      }
    }
    return found;
  }

  // Main Radar Scan Flow
  async function scanRegion({ useCurrentMapCenter = false } = {}) {
    if (state.isScanning) return;
    state.isScanning = true;
    el.btnScan.disabled = true;
    el.btnScan.textContent = 'Escaneando Satélite...';

    const segmentKey = el.selectSegment.value;
    const keyword = el.inputKeyword.value.trim();
    const radiusKm = parseFloat(el.inputRadius.value) || 3;
    state.radiusKm = radiusKm;

    try {
      if (!useCurrentMapCenter) {
        const cityInput = el.inputCity.value.trim();
        if (!cityInput) {
          showToast('Informe uma cidade ou clique no mapa.');
          return;
        }
        setBanner(`1/3 · Localizando "${cityInput}" nas imagens de satélite...`, true);
        const geo = await geocodeInput(cityInput);
        if (!geo) {
          setBanner('Região não encontrada. Tente informar cidade e estado (ex: Palhoça, SC).', false);
          return;
        }
        state.center = geo;
        drawRadarArea(geo.lat, geo.lon, radiusKm);
        map.fitBounds(radarCircle.getBounds(), { padding: [36, 36], maxZoom: 15 });
      } else {
        const c = map.getCenter();
        state.center = { lat: c.lat, lon: c.lng, name: `${c.lat.toFixed(4)}, ${c.lng.toFixed(4)}` };
        el.inputCity.value = state.center.name;
        drawRadarArea(c.lat, c.lng, radiusKm);
      }

      const { lat, lon } = state.center;
      const cacheKey = `${lat.toFixed(3)}|${lon.toFixed(3)}|${radiusKm}|${segmentKey}|${keyword.toLowerCase()}`;
      let mergedList = state.cache.get(cacheKey);

      if (!mergedList) {
        setBanner(`2/3 · Varrendo comércios num raio de ${radiusKm.toFixed(1)} km no mapa satélite...`, true);

        const [overpassItems, nominatimItems] = await Promise.all([
          fetchFromOverpass(lat, lon, radiusKm, segmentKey, keyword),
          fetchFromNominatim(lat, lon, radiusKm, segmentKey, keyword)
        ]);

        setBanner('3/3 · Auditando presença digital, sites ausentes e calculando oportunidade IA...', true);

        const dedup = new Map();
        for (const raw of [...overpassItems, ...nominatimItems]) {
          const normKey = `${raw.name.toLowerCase().trim()}_${raw.lat.toFixed(4)}_${raw.lon.toFixed(4)}`;
          if (dedup.has(raw.id) || dedup.has(normKey)) continue;

          const ai = analyzeBusinessWithAI(raw, segmentKey);
          const enriched = {
            ...raw,
            mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${raw.name} ${raw.address || raw.city}`)}`,
            streetViewUrl: `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${raw.lat},${raw.lon}`,
            opportunityScore: ai.score,
            opportunityLevel: ai.level,
            gaps: ai.gaps,
            aiSummary: ai.aiSummary,
            suggestedOffer: ai.suggestedOffer,
            ticketRange: ai.ticketRange,
            avgTicket: ai.avgTicket
          };
          dedup.set(raw.id, enriched);
          dedup.set(normKey, true);
        }

        mergedList = Array.from(dedup.values()).filter((v) => typeof v === 'object');
        state.cache.set(cacheKey, mergedList);
      }

      state.results = mergedList;
      state.selectedId = null;

      const noSiteList = mergedList.filter((b) => !b.hasWebsite);
      const withPhoneCount = mergedList.filter((b) => Boolean(b.phone)).length;
      const totalPotential = noSiteList.reduce((acc, b) => acc + (b.avgTicket || 1400), 0);

      el.statTotal.textContent = mergedList.length;
      el.statNoSite.textContent = noSiteList.length;
      el.statPhone.textContent = withPhoneCount;
      el.statPotential.textContent = formatCompactBRL(totalPotential);
      el.miniStats.style.display = 'grid';
      el.sidebarFilters.style.display = 'flex';
      updateCollapsedSummary();

      if (mergedList.length === 0) {
        setBanner('Nenhum comércio encontrado nesse raio. Aumente o raio ou escolha "Todos os Comércios".', false);
        setResultsExpanded(false);
      } else {
        setBanner(
          `Diagnóstico IA concluído: ${noSiteList.length} de ${mergedList.length} comércios nesta área NÃO têm site próprio.`,
          false
        );
        // Sobe a lista automaticamente para dar espaço completo aos comércios encontrados
        setResultsExpanded(true);
      }

      renderFilteredResults();
    } catch (err) {
      console.error(err);
      setBanner('Erro temporário na consulta ao mapa. Tente novamente em alguns segundos.', false);
    } finally {
      state.isScanning = false;
      el.btnScan.disabled = false;
      el.btnScan.textContent = 'Escanear Região no Satélite';
    }
  }

  function updateCollapsedSummary() {
    const cityText = el.inputCity.value.trim() || state.center.name || 'Região atual';
    const segObj = SEGMENTS[el.selectSegment.value] || SEGMENTS.todos;
    const kw = el.inputKeyword.value.trim();
    const radiusVal = (parseFloat(el.inputRadius.value) || state.radiusKm).toFixed(1);
    el.summaryCity.textContent = `📍 ${cityText}`;
    el.summaryMeta.textContent = `${kw ? `"${kw}" · ` : ''}${segObj.label} · Raio ${radiusVal} km`;
  }

  function setResultsExpanded(expanded) {
    state.resultsExpanded = Boolean(expanded);
    el.sidebar.classList.toggle('results-expanded', state.resultsExpanded);
    updateCollapsedSummary();
    el.handleLabel.textContent = state.resultsExpanded
      ? '▼ Arraste ou clique para editar a busca'
      : '▲ Arraste ou clique para subir a lista';
  }

  function syncStatButtons() {
    const onlyNoSite = el.filterNoSite.checked;
    const onlyPhone = el.filterHasPhone.checked;
    el.statBtnAll.classList.toggle('active-stat', !onlyNoSite && !onlyPhone);
    el.statBtnNoSite.classList.toggle('active-stat', onlyNoSite && !onlyPhone);
    el.statBtnPhone.classList.toggle('active-stat', onlyPhone);
  }

  function updateResultsNavCount() {
    const total = state.filteredResults.length;
    if (total === 0) {
      el.resultsNavCount.textContent = '0 comércios exibidos';
      el.btnPrevLead.disabled = true;
      el.btnNextLead.disabled = true;
      return;
    }
    el.btnPrevLead.disabled = false;
    el.btnNextLead.disabled = false;
    const idx = state.filteredResults.findIndex((b) => b.id === state.selectedId);
    if (idx >= 0) {
      el.resultsNavCount.textContent = `Selecionado ${idx + 1} de ${total}`;
    } else {
      el.resultsNavCount.textContent = `${total} ${total === 1 ? 'comércio exibido' : 'comércios exibidos'}`;
    }
  }

  function stepLead(delta) {
    const list = state.filteredResults;
    if (!list.length) return;
    let idx = list.findIndex((b) => b.id === state.selectedId);
    if (idx < 0) {
      idx = delta > 0 ? 0 : list.length - 1;
    } else {
      idx = (idx + delta + list.length) % list.length;
    }
    focusBusinessOnSatellite(list[idx].id, true);
  }

  function setHoveredPin(id, hovered) {
    const marker = markerMap.get(id);
    if (!marker) return;
    const pinEl = marker.getElement()?.querySelector('.radar-pin');
    if (pinEl) {
      pinEl.classList.toggle('hovered', hovered);
    }
  }

  function getFilteredResults() {
    const onlyNoSite = el.filterNoSite.checked;
    const onlyPhone = el.filterHasPhone.checked;
    const onlyHigh = el.filterHighScore.checked;
    const text = el.filterText.value.trim().toLowerCase();
    const sort = el.sortBy.value;

    const filtered = state.results.filter((b) => {
      if (onlyNoSite && b.hasWebsite) return false;
      if (onlyPhone && !b.phone) return false;
      if (onlyHigh && b.opportunityScore < 75) return false;
      if (text) {
        const hay = `${b.name} ${b.address} ${b.neighborhood} ${b.category}`.toLowerCase();
        if (!hay.includes(text)) return false;
      }
      return true;
    });

    if (sort === 'score') {
      filtered.sort((a, b) => b.opportunityScore - a.opportunityScore || a.distanceKm - b.distanceKm);
    } else if (sort === 'distance') {
      filtered.sort((a, b) => a.distanceKm - b.distanceKm);
    } else {
      filtered.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    }

    return filtered;
  }

  function renderMapPins(list) {
    markersLayer.clearLayers();
    markerMap.clear();

    for (const b of list) {
      const pinClass = b.hasWebsite ? 'site' : b.opportunityLevel === 'alta' ? 'alta' : 'media';
      const icon = L.divIcon({
        className: '',
        html: `<div class="radar-pin ${pinClass}" title="${escapeHtml(b.name)}">${b.hasWebsite ? 'W' : '!'}</div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      const marker = L.marker([b.lat, b.lon], { icon });
      const popupHtml = `
        <div>
          <div class="popup-title">${escapeHtml(b.name)}</div>
          <div class="badges-row" style="margin-bottom:4px;">
            ${b.hasWebsite ? '<span class="badge badge-has-site">Tem Site</span>' : '<span class="badge badge-no-site">SEM SITE · Precisa de Site</span>'}
            <span class="score-pill ${b.opportunityLevel}">Score ${b.opportunityScore}</span>
          </div>
          <div class="popup-diag">${escapeHtml(b.aiSummary)}</div>
          <div style="font-size:0.75rem;color:#52504A;">
            <div>📍 ${escapeHtml(b.address)}</div>
            ${b.phone ? `<div>📞 ${escapeHtml(b.phone)}</div>` : ''}
            <div style="color:#065F46;font-weight:700;margin-top:3px;">Ticket sugerido: ${escapeHtml(b.ticketRange)}</div>
          </div>
          <div class="popup-actions">
            <button type="button" class="btn btn-primary btn-sm" data-popup-action="site" data-id="${escapeHtml(b.id)}">Prévia Site</button>
            <button type="button" class="btn btn-soft btn-sm" data-popup-action="pitch" data-id="${escapeHtml(b.id)}">WhatsApp</button>
            <a href="${escapeHtml(b.streetViewUrl)}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">Street View</a>
            <a href="${escapeHtml(b.mapsUrl)}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">Maps ↗</a>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { maxWidth: 310 });
      marker.on('click', () => {
        setResultsExpanded(true);
        highlightCard(b.id, true);
      });
      marker.addTo(markersLayer);
      markerMap.set(b.id, marker);
    }
  }

  function highlightCard(id, scrollIntoView = false) {
    state.selectedId = id;
    document.querySelectorAll('.lead-card').forEach((card) => {
      const match = card.dataset.bizId === id;
      card.classList.toggle('selected', match);
      if (match && scrollIntoView) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    markerMap.forEach((marker, mId) => {
      const pinEl = marker.getElement()?.querySelector('.radar-pin');
      if (pinEl) pinEl.classList.toggle('active-pin', mId === id);
    });
    updateResultsNavCount();
  }

  function focusBusinessOnSatellite(id, scrollCard = false) {
    const biz = findBizById(id);
    if (!biz) return;
    switchView('radar');
    highlightCard(id, scrollCard);
    map.flyTo([biz.lat, biz.lon], 18, { duration: 0.65 });
    const marker = markerMap.get(id);
    if (marker) {
      setTimeout(() => marker.openPopup(), 420);
    }
  }

  function renderFilteredResults() {
    const list = getFilteredResults();
    state.filteredResults = list;
    syncStatButtons();
    renderMapPins(list);
    updateResultsNavCount();

    if (list.length === 0) {
      el.resultsContainer.innerHTML = `
        <div class="state-box">
          <h3>Nenhum comércio visível com os filtros atuais</h3>
          <p>Desmarque um dos filtros acima (como "Com telefone" ou "Score 75+") ou aumente o raio do radar no satélite.</p>
        </div>
      `;
      return;
    }

    el.resultsContainer.innerHTML = list
      .map((b) => {
        const saved = isLeadSaved(b.id);
        return `
          <article class="lead-card ${state.selectedId === b.id ? 'selected' : ''}" data-biz-id="${escapeHtml(b.id)}">
            <div class="lead-head">
              <h2 class="lead-name">${escapeHtml(b.name)}</h2>
              <span class="score-pill ${b.opportunityLevel}" title="Score IA de oportunidade">${b.opportunityScore}/100</span>
            </div>

            <div class="badges-row">
              ${
                b.hasWebsite
                  ? `<a href="${escapeHtml(b.website)}" target="_blank" rel="noopener" class="badge badge-has-site" onclick="event.stopPropagation()">Já tem site ↗</a>`
                  : `<span class="badge badge-no-site">SEM SITE · Precisa de Site</span>`
              }
              <span class="badge badge-cat">${escapeHtml(b.category)}</span>
              ${saved ? `<span class="badge badge-saved">Salvo no CRM</span>` : ''}
            </div>

            <div class="ai-diagnosis-box">
              <strong>Diagnóstico IA:</strong> ${escapeHtml(b.aiSummary)}
              <div class="ticket-line">💡 ${escapeHtml(b.suggestedOffer)} · ${escapeHtml(b.ticketRange)}</div>
            </div>

            <div class="lead-meta">
              <span>📍 ${escapeHtml(b.address)} (${b.distanceKm} km)</span>
              <span>${b.phone ? `📞 ${escapeHtml(b.phone)}` : '📞 Telefone não listado no OSM (use Google Maps)'}</span>
            </div>

            <div class="lead-actions">
              <button type="button" class="btn btn-primary btn-sm" data-action="site" data-id="${escapeHtml(b.id)}">Prévia Site</button>
              <button type="button" class="btn btn-soft btn-sm" data-action="pitch" data-id="${escapeHtml(b.id)}">WhatsApp</button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="save" data-id="${escapeHtml(b.id)}" ${saved ? 'disabled' : ''}>${saved ? 'No CRM ✓' : 'Salvar CRM'}</button>
              <a href="${escapeHtml(b.streetViewUrl)}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm" onclick="event.stopPropagation()">Street View</a>
              <a href="${escapeHtml(b.mapsUrl)}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm" onclick="event.stopPropagation()">Maps ↗</a>
            </div>
          </article>
        `;
      })
      .join('');
  }

  // CRM (Persisted in localStorage — 100% static GitHub Pages compatible!)
  function loadLeads() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      state.leads = Array.isArray(parsed) ? parsed : [];
    } catch {
      state.leads = [];
    }
    el.crmBadge.textContent = state.leads.length;
  }

  function persistLeads() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.leads));
    } catch {
      // ignore storage quota errors
    }
    el.crmBadge.textContent = state.leads.length;
  }

  function isLeadSaved(id) {
    return state.leads.some((l) => l.id === id);
  }

  function saveLead(biz) {
    if (isLeadSaved(biz.id)) return;
    const now = new Date().toISOString();
    state.leads.unshift({
      ...biz,
      stage: 'novo',
      valorEstimado: biz.avgTicket || 1500,
      notes: '',
      savedAt: now,
      updatedAt: now
    });
    persistLeads();
    renderFilteredResults();
    renderCrm();
    showToast(`"${biz.name}" salvo no seu CRM!`);
  }

  function updateLead(id, patch) {
    const idx = state.leads.findIndex((l) => l.id === id);
    if (idx < 0) return;
    state.leads[idx] = {
      ...state.leads[idx],
      ...patch,
      valorEstimado: patch.valorEstimado !== undefined ? Number(patch.valorEstimado) || 0 : state.leads[idx].valorEstimado,
      updatedAt: new Date().toISOString()
    };
    persistLeads();
    updateCrmStats();
    showToast('Lead atualizado no CRM.');
  }

  function deleteLead(id) {
    state.leads = state.leads.filter((l) => l.id !== id);
    persistLeads();
    renderCrm();
    renderFilteredResults();
    showToast('Lead removido do CRM.');
  }

  function updateCrmStats() {
    const total = state.leads.length;
    const active = state.leads.filter((l) => ['novo', 'contatado', 'proposta'].includes(l.stage)).length;
    const won = state.leads.filter((l) => l.stage === 'fechado').length;
    const potential = state.leads
      .filter((l) => l.stage !== 'descartado')
      .reduce((acc, l) => acc + (Number(l.valorEstimado) || 0), 0);

    el.crmStatTotal.textContent = total;
    el.crmStatActive.textContent = active;
    el.crmStatWon.textContent = won;
    el.crmStatValue.textContent = formatBRL(potential);
    el.crmBadge.textContent = total;
  }

  function renderCrm() {
    updateCrmStats();
    const stageFilter = el.crmFilterStage.value;
    const list = state.leads.filter((l) => stageFilter === 'all' || l.stage === stageFilter);

    if (list.length === 0) {
      el.crmContainer.innerHTML = `
        <div class="state-box">
          <h3>Nenhum lead salvo nesta etapa</h3>
          <p>Use o <strong>Radar no Mapa</strong> para encontrar comércios sem site e clique em <strong>Salvar CRM</strong>.</p>
        </div>
      `;
      return;
    }

    el.crmContainer.innerHTML = list
      .map(
        (l) => `
        <article class="crm-card">
          <div class="crm-card-top">
            <div>
              <div class="badges-row" style="margin-bottom:5px;">
                <strong style="font-size:1rem;">${escapeHtml(l.name)}</strong>
                ${l.hasWebsite ? '<span class="badge badge-has-site">Tem site</span>' : '<span class="badge badge-no-site">Sem site</span>'}
                <span class="badge badge-cat">${escapeHtml(l.segmentLabel || 'Comércio')}</span>
              </div>
              <div style="font-size:0.82rem;color:#52504A;">
                📍 ${escapeHtml(l.address || l.city || '')} ${l.phone ? `· 📞 ${escapeHtml(l.phone)}` : ''}
              </div>
            </div>
            <div class="lead-actions">
              <button type="button" class="btn btn-secondary btn-sm" data-crm-action="focus" data-id="${escapeHtml(l.id)}">Ver no Satélite</button>
              <button type="button" class="btn btn-primary btn-sm" data-crm-action="site" data-id="${escapeHtml(l.id)}">Prévia Site</button>
              <button type="button" class="btn btn-soft btn-sm" data-crm-action="pitch" data-id="${escapeHtml(l.id)}">WhatsApp</button>
              <button type="button" class="btn btn-danger-ghost btn-sm" data-crm-action="delete" data-id="${escapeHtml(l.id)}">Remover</button>
            </div>
          </div>

          <div class="crm-controls">
            <select class="select" data-crm-field="stage" data-id="${escapeHtml(l.id)}">
              <option value="novo" ${l.stage === 'novo' ? 'selected' : ''}>Novo</option>
              <option value="contatado" ${l.stage === 'contatado' ? 'selected' : ''}>Contatado</option>
              <option value="proposta" ${l.stage === 'proposta' ? 'selected' : ''}>Proposta Enviada</option>
              <option value="fechado" ${l.stage === 'fechado' ? 'selected' : ''}>Fechado (Vendido)</option>
              <option value="descartado" ${l.stage === 'descartado' ? 'selected' : ''}>Descartado</option>
            </select>
            <input type="number" class="input" data-crm-field="valorEstimado" data-id="${escapeHtml(l.id)}" value="${Number(l.valorEstimado) || 1500}" min="0" step="100" placeholder="Valor (R$)" />
            <input type="text" class="input" data-crm-field="notes" data-id="${escapeHtml(l.id)}" value="${escapeHtml(l.notes || '')}" placeholder="Anotações da negociação..." />
          </div>
        </article>
      `
      )
      .join('');
  }

  // Client-Side Demo Site Generator
  function generateDemoSiteHtml(biz) {
    const seg = SEGMENTS[biz.segment] || SEGMENTS.todos;
    const name = escapeHtml(biz.name || 'Seu Comércio');
    const city = escapeHtml(biz.city || 'Sua Cidade');
    const address = escapeHtml(biz.address || city);
    const phone = escapeHtml(biz.phone || '(00) 99999-9999');
    const hours = escapeHtml(biz.openingHours || 'Segunda a Sábado — Atendimento com hora marcada');
    const waHref = biz.whatsappDigits
      ? `https://wa.me/${biz.whatsappDigits}?text=${encodeURIComponent(`Olá! Vi o site da ${biz.name} e gostaria de mais informações.`)}`
      : '#contato';
    const mapsUrl = escapeHtml(biz.mapsUrl || '#');

    const cardsHtml = seg.services
      .map(
        (s, i) => `
        <div class="card">
          <span class="num">0${i + 1}</span>
          <h3>${escapeHtml(s.title)}</h3>
          <p>${escapeHtml(s.desc)}</p>
        </div>`
      )
      .join('');

    return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${name} — ${escapeHtml(seg.label)} em ${city}</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    :root { --accent: ${seg.accent}; --accent-dark: ${seg.accentDark}; --bg: #FAF9F6; --ink: #18181B; --muted: #52525B; --border: #E4E4E7; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Plus Jakarta Sans', sans-serif; background: var(--bg); color: var(--ink); line-height: 1.6; }
    .container { max-width: 1060px; margin: 0 auto; padding: 0 24px; }
    header { background: rgba(255,255,255,0.92); backdrop-filter: blur(8px); border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 20; }
    .nav { display: flex; align-items: center; justify-content: space-between; height: 70px; gap: 16px; }
    .brand { font-weight: 800; font-size: 1.1rem; color: var(--ink); text-decoration: none; letter-spacing: -0.02em; }
    .btn { display: inline-flex; align-items: center; justify-content: center; padding: 11px 20px; border-radius: 10px; font-weight: 700; font-size: 0.9rem; text-decoration: none; border: none; cursor: pointer; }
    .btn-primary { background: var(--accent); color: #fff; }
    .btn-primary:hover { background: var(--accent-dark); }
    .btn-outline { background: transparent; color: var(--ink); border: 1px solid var(--border); }
    .hero { padding: 72px 0 56px; border-bottom: 1px solid var(--border); }
    .eyebrow { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); margin-bottom: 12px; }
    .hero h1 { font-size: clamp(2rem, 4.5vw, 3.2rem); line-height: 1.12; letter-spacing: -0.03em; margin-bottom: 18px; max-width: 760px; }
    .hero p { font-size: 1.08rem; color: var(--muted); max-width: 600px; margin-bottom: 28px; }
    .actions { display: flex; flex-wrap: wrap; gap: 12px; }
    .section { padding: 60px 0; }
    .section h2 { font-size: 1.65rem; letter-spacing: -0.02em; margin-bottom: 8px; }
    .section .sub { color: var(--muted); margin-bottom: 30px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 18px; }
    .card { background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 26px; }
    .num { display: inline-block; font-size: 0.78rem; font-weight: 800; color: var(--accent); margin-bottom: 10px; }
    .card h3 { font-size: 1.06rem; margin-bottom: 6px; }
    .card p { font-size: 0.92rem; color: var(--muted); }
    .info { background: #fff; border: 1px solid var(--border); border-radius: 16px; padding: 32px; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; }
    .label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); margin-bottom: 4px; }
    .val { font-weight: 600; font-size: 0.98rem; }
    footer { border-top: 1px solid var(--border); padding: 28px 0; text-align: center; font-size: 0.85rem; color: var(--muted); }
  </style>
</head>
<body>
  <header>
    <div class="container nav">
      <a href="#" class="brand">${name}</a>
      <a href="${waHref}" target="_blank" rel="noopener" class="btn btn-primary">Falar no WhatsApp</a>
    </div>
  </header>
  <main>
    <section class="hero">
      <div class="container">
        <div class="eyebrow">${escapeHtml(seg.label)} · ${city}</div>
        <h1>${name}</h1>
        <p>${escapeHtml(seg.heroTagline)}</p>
        <div class="actions">
          <a href="${waHref}" target="_blank" rel="noopener" class="btn btn-primary">Solicitar Atendimento no WhatsApp</a>
          <a href="${mapsUrl}" target="_blank" rel="noopener" class="btn btn-outline">Abrir no Google Maps</a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2>Como podemos atender você</h2>
        <p class="sub">Conheça nossos diferenciais e entre em contato diretamente com nossa equipe.</p>
        <div class="grid">${cardsHtml}</div>
      </div>
    </section>
    <section class="section" id="contato" style="padding-top: 0;">
      <div class="container">
        <div class="info">
          <div><div class="label">Endereço</div><div class="val">${address}</div></div>
          <div><div class="label">Telefone / WhatsApp</div><div class="val">${phone}</div></div>
          <div><div class="label">Horário</div><div class="val">${hours}</div></div>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div class="container">© ${new Date().getFullYear()} ${name} — ${city}. Prévia demonstrativa para apresentação comercial.</div>
  </footer>
</body>
</html>`;
  }

  function openSiteModal(biz) {
    state.activeSiteBiz = biz;
    state.activeSiteHtml = generateDemoSiteHtml(biz);
    el.siteTitle.textContent = `Prévia de Site — ${biz.name}`;
    el.siteSubtitle.textContent = `${biz.segmentLabel} · ${biz.address} · Oferta sugerida: ${biz.ticketRange}`;
    el.siteFrame.classList.remove('mobile');
    el.btnViewDesktop.classList.add('active');
    el.btnViewMobile.classList.remove('active');
    el.siteFrame.srcdoc = state.activeSiteHtml;
    el.modalSite.classList.add('open');
  }

  function buildAiWebsitePrompt(biz) {
    return [
      `Crie um site profissional, moderno, responsivo e pronto para venda para o seguinte comércio local:`,
      `- Nome: ${biz.name}`,
      `- Segmento: ${biz.segmentLabel} (${biz.category})`,
      `- Endereço: ${biz.address}`,
      `- Telefone / WhatsApp: ${biz.phone || 'Placeholder editável'}`,
      `- Horário: ${biz.openingHours || 'Segunda a Sábado, horário comercial'}`,
      `- Google Maps: ${biz.mapsUrl}`,
      `- Diagnóstico identificado: ${biz.aiSummary}`,
      `- Oferta sugerida: ${biz.suggestedOffer} (${biz.ticketRange})`,
      ``,
      `Requisitos:`,
      `1. Design autoral e sob medida para o segmento de ${biz.segmentLabel}, sem aparência genérica.`,
      `2. Hero de alta conversão com botão direto para WhatsApp e prova social.`,
      `3. Seção de Serviços/Diferenciais reais do segmento, FAQ e mapa/localização.`,
      `4. SEO local otimizado para buscas na região de ${biz.city}.`
    ].join('\n');
  }

  // WhatsApp Pitch Modal
  function buildPitchMessage(biz, tone) {
    const place = biz.neighborhood ? `${biz.neighborhood} (${biz.city})` : biz.city;
    if (tone === 'diagnostico') {
      return `Olá, equipe da ${biz.name}! Tudo bem?\n\nFiz um mapeamento dos negócios de ${biz.segmentLabel.toLowerCase()} em ${place} e notei que vocês aparecem no mapa, mas ainda não possuem um site próprio no Google com botão direto de WhatsApp e apresentação dos serviços.\n\nHoje muitos clientes pesquisam no Google antes de escolher onde ir. Eu crio sites rápidos e profissionais para negócios locais e posso mostrar uma prévia feita com o nome da ${biz.name} sem compromisso. Posso te enviar?`;
    }
    if (tone === 'direta') {
      return `Olá, pessoal da ${biz.name}! Tudo bem?\n\nVi o contato de vocês no mapa em ${place} e notei que ainda não têm site oficial.\n\nEu monto sites profissionais com botão direto pro WhatsApp para atrair mais clientes do Google. Posso te mandar uma prévia pronta de como ficaria o site da ${biz.name}?`;
    }
    return `Olá, equipe da ${biz.name}! Tudo bem?\n\nEncontrei vocês no mapa em ${place} e reparei que ainda não possuem um site próprio.\n\nPara agilizar, já montei uma prévia gratuita de como ficaria o site profissional da ${biz.name} (com apresentação dos serviços, mapa e botão direto pro WhatsApp).\n\nPosso mandar aqui para vocês verem sem compromisso?`;
  }

  function openPitchModal(biz) {
    state.activePitchBiz = biz;
    state.activePitchTone = 'previa';
    el.pitchTitle.textContent = `Abordagem — ${biz.name}`;
    el.pitchSubtitle.textContent = biz.phone
      ? `Telefone encontrado: ${biz.phone} · Ticket sugerido: ${biz.ticketRange}`
      : 'Sem telefone listado no OSM — copie a mensagem ou pegue o WhatsApp pelo botão Maps ↗';
    el.pitchTones.forEach((p) => p.classList.toggle('active', p.dataset.tone === 'previa'));
    el.pitchTextarea.value = buildPitchMessage(biz, 'previa');
    updateWhatsAppHref();
    el.modalPitch.classList.add('open');
  }

  function updateWhatsAppHref() {
    const biz = state.activePitchBiz;
    if (!biz) return;
    const msg = encodeURIComponent(el.pitchTextarea.value);
    el.btnOpenWa.href = biz.whatsappDigits ? `https://wa.me/${biz.whatsappDigits}?text=${msg}` : `https://wa.me/?text=${msg}`;
  }

  // CSV Export
  function exportCsv(rows, filename) {
    if (!rows.length) {
      showToast('Nenhum comércio para exportar.');
      return;
    }
    const headers = ['Nome', 'Segmento', 'Categoria', 'Tem Site', 'Site', 'Telefone', 'Endereco', 'Score IA', 'Ticket Sugerido', 'Google Maps', 'Street View'];
    const lines = [headers.join(';')];
    for (const r of rows) {
      const vals = [
        r.name,
        r.segmentLabel || '',
        r.category || '',
        r.hasWebsite ? 'Sim' : 'Nao',
        r.website || '',
        r.phone || '',
        r.address || '',
        r.opportunityScore ?? '',
        r.ticketRange || '',
        r.mapsUrl || '',
        r.streetViewUrl || ''
      ].map((v) => `"${String(v).replace(/"/g, '""')}"`);
      lines.push(vals.join(';'));
    }
    const blob = new Blob(['\uFEFF' + lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
    showToast(`Exportado: ${filename}`);
  }

  function findBizById(id) {
    return state.results.find((b) => b.id === id) || state.leads.find((l) => l.id === id);
  }

  function switchView(viewName) {
    el.tabs.forEach((t) => t.classList.toggle('active', t.dataset.view === viewName));
    Object.entries(el.views).forEach(([k, sec]) => sec.classList.toggle('active', k === viewName));
    if (viewName === 'crm') renderCrm();
    if (viewName === 'radar' && map) setTimeout(() => map.invalidateSize(), 60);
  }

  // Event Listeners
  el.tabs.forEach((tab) => tab.addEventListener('click', () => switchView(tab.dataset.view)));
  document.getElementById('brand-home').addEventListener('click', (e) => {
    e.preventDefault();
    switchView('radar');
  });

  el.inputRadius.addEventListener('input', () => {
    const val = parseFloat(el.inputRadius.value);
    state.radiusKm = val;
    el.radiusLabel.textContent = `${val.toFixed(1)} km`;
    if (radarCircle) radarCircle.setRadius(val * 1000);
  });

  el.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    scanRegion({ useCurrentMapCenter: false });
  });

  el.btnScanViewport.addEventListener('click', () => {
    scanRegion({ useCurrentMapCenter: true });
  });

  el.btnGps.addEventListener('click', () => {
    if (!navigator.geolocation) {
      showToast('Seu navegador não suporta GPS.');
      return;
    }
    el.btnGps.disabled = true;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        el.btnGps.disabled = false;
        const { latitude, longitude } = pos.coords;
        state.center = { lat: latitude, lon: longitude, name: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}` };
        el.inputCity.value = state.center.name;
        drawRadarArea(latitude, longitude, state.radiusKm);
        map.flyTo([latitude, longitude], 15, { duration: 0.8 });
        scanRegion({ useCurrentMapCenter: false });
      },
      () => {
        el.btnGps.disabled = false;
        showToast('Permissão de GPS negada. Digite a cidade ou clique no mapa.');
      },
      { timeout: 8000 }
    );
  });

  el.presets.forEach((chip) => {
    chip.addEventListener('click', () => {
      el.inputCity.value = chip.dataset.city;
      el.selectSegment.value = chip.dataset.segment;
      el.inputKeyword.value = '';
      el.inputRadius.value = chip.dataset.radius || '4';
      el.radiusLabel.textContent = `${parseFloat(el.inputRadius.value).toFixed(1)} km`;
      scanRegion({ useCurrentMapCenter: false });
    });
  });

  // Map Layer Switcher
  el.layerBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.layer;
      if (!tileLayers[key]) return;
      el.layerBtns.forEach((b) => b.classList.toggle('active', b === btn));
      if (currentTileLayer) map.removeLayer(currentTileLayer);
      currentTileLayer = tileLayers[key];
      currentTileLayer.addTo(map);
    });
  });

  // Collapsible & Draggable Results Handle ("pontinho" para subir/descer a lista)
  let dragStartY = null;
  let dragMoved = false;

  el.resultsHandle.addEventListener('pointerdown', (e) => {
    dragStartY = e.clientY;
    dragMoved = false;
    el.resultsHandle.setPointerCapture?.(e.pointerId);
  });

  el.resultsHandle.addEventListener('pointermove', (e) => {
    if (dragStartY === null) return;
    const dy = e.clientY - dragStartY;
    if (dy <= -20 && !state.resultsExpanded) {
      setResultsExpanded(true);
      dragMoved = true;
      dragStartY = e.clientY;
    } else if (dy >= 20 && state.resultsExpanded) {
      setResultsExpanded(false);
      dragMoved = true;
      dragStartY = e.clientY;
    }
  });

  const endHandleDrag = () => {
    dragStartY = null;
  };
  el.resultsHandle.addEventListener('pointerup', endHandleDrag);
  el.resultsHandle.addEventListener('pointercancel', endHandleDrag);

  el.resultsHandle.addEventListener('click', () => {
    if (dragMoved) {
      dragMoved = false;
      return;
    }
    setResultsExpanded(!state.resultsExpanded);
  });

  el.resultsHandle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setResultsExpanded(!state.resultsExpanded);
    }
  });

  el.btnCollapseSearch.addEventListener('click', () => setResultsExpanded(true));
  el.btnExpandSearch.addEventListener('click', () => {
    setResultsExpanded(false);
    el.inputCity.focus();
  });
  el.btnExpandSearchArea.addEventListener('click', () => {
    setResultsExpanded(false);
    el.inputCity.focus();
  });

  // Clickable Mini-Stats (interact directly with filters)
  el.statBtnAll.addEventListener('click', () => {
    el.filterNoSite.checked = false;
    el.filterHasPhone.checked = false;
    el.pillNoSite.classList.remove('checked');
    el.pillHasPhone.classList.remove('checked');
    renderFilteredResults();
  });

  el.statBtnNoSite.addEventListener('click', () => {
    el.filterNoSite.checked = true;
    el.filterHasPhone.checked = false;
    el.pillNoSite.classList.add('checked');
    el.pillHasPhone.classList.remove('checked');
    renderFilteredResults();
  });

  el.statBtnPhone.addEventListener('click', () => {
    el.filterHasPhone.checked = !el.filterHasPhone.checked;
    el.pillHasPhone.classList.toggle('checked', el.filterHasPhone.checked);
    renderFilteredResults();
  });

  // Prospect Stepper (Anterior / Próximo) & Arrow Keys
  el.btnPrevLead.addEventListener('click', () => stepLead(-1));
  el.btnNextLead.addEventListener('click', () => stepLead(1));

  document.addEventListener('keydown', (e) => {
    if (!el.views.radar.classList.contains('active')) return;
    const tag = document.activeElement?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (el.modalPitch.classList.contains('open') || el.modalSite.classList.contains('open')) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      stepLead(1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      stepLead(-1);
    }
  });

  // Filters
  [
    [el.filterNoSite, el.pillNoSite],
    [el.filterHasPhone, el.pillHasPhone],
    [el.filterHighScore, el.pillHighScore]
  ].forEach(([chk, pill]) => {
    chk.addEventListener('change', () => {
      pill.classList.toggle('checked', chk.checked);
      renderFilteredResults();
    });
  });

  el.filterText.addEventListener('input', renderFilteredResults);
  el.sortBy.addEventListener('change', renderFilteredResults);
  el.btnExportCsv.addEventListener('click', () => exportCsv(getFilteredResults(), `radar-comercios-${Date.now()}.csv`));
  el.btnExportCrm.addEventListener('click', () => exportCsv(state.leads, `crm-leads-${Date.now()}.csv`));
  el.crmFilterStage.addEventListener('change', renderCrm);

  // Sidebar Lead Card Clicks, Actions & Hover-to-Pin Highlight
  let lastHoveredCardId = null;
  el.resultsContainer.addEventListener('mouseover', (e) => {
    const card = e.target.closest('.lead-card');
    const id = card?.dataset.bizId || null;
    if (id === lastHoveredCardId) return;
    if (lastHoveredCardId) setHoveredPin(lastHoveredCardId, false);
    if (id) setHoveredPin(id, true);
    lastHoveredCardId = id;
  });

  el.resultsContainer.addEventListener('mouseleave', () => {
    if (lastHoveredCardId) {
      setHoveredPin(lastHoveredCardId, false);
      lastHoveredCardId = null;
    }
  });

  el.resultsContainer.addEventListener('click', (e) => {
    const actionBtn = e.target.closest('button[data-action]');
    if (actionBtn) {
      e.stopPropagation();
      const biz = findBizById(actionBtn.dataset.id);
      if (!biz) return;
      if (actionBtn.dataset.action === 'save') saveLead(biz);
      if (actionBtn.dataset.action === 'pitch') openPitchModal(biz);
      if (actionBtn.dataset.action === 'site') openSiteModal(biz);
      return;
    }
    const card = e.target.closest('.lead-card');
    if (card) focusBusinessOnSatellite(card.dataset.bizId);
  });

  // Map Popup Button Delegation
  document.addEventListener('click', (e) => {
    const pBtn = e.target.closest('button[data-popup-action]');
    if (!pBtn) return;
    const biz = findBizById(pBtn.dataset.id);
    if (!biz) return;
    if (pBtn.dataset.popupAction === 'site') openSiteModal(biz);
    if (pBtn.dataset.popupAction === 'pitch') openPitchModal(biz);
  });

  // CRM Actions
  el.crmContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-crm-action]');
    if (!btn) return;
    const biz = findBizById(btn.dataset.id);
    if (!biz) return;
    if (btn.dataset.crmAction === 'focus') focusBusinessOnSatellite(biz.id);
    if (btn.dataset.crmAction === 'site') openSiteModal(biz);
    if (btn.dataset.crmAction === 'pitch') openPitchModal(biz);
    if (btn.dataset.crmAction === 'delete') deleteLead(biz.id);
  });

  el.crmContainer.addEventListener('change', (e) => {
    const field = e.target.dataset.crmField;
    const id = e.target.dataset.id;
    if (!field || !id) return;
    updateLead(id, { [field]: e.target.value });
  });

  // Pitch Modal
  el.pitchTones.forEach((pill) => {
    pill.addEventListener('click', () => {
      if (!state.activePitchBiz) return;
      state.activePitchTone = pill.dataset.tone;
      el.pitchTones.forEach((p) => p.classList.toggle('active', p === pill));
      el.pitchTextarea.value = buildPitchMessage(state.activePitchBiz, state.activePitchTone);
      updateWhatsAppHref();
    });
  });

  el.pitchTextarea.addEventListener('input', updateWhatsAppHref);

  el.btnCopyPitch.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(el.pitchTextarea.value);
      showToast('Mensagem copiada!');
    } catch {
      el.pitchTextarea.select();
      document.execCommand('copy');
      showToast('Mensagem copiada!');
    }
  });

  // Site Modal
  el.btnViewDesktop.addEventListener('click', () => {
    el.siteFrame.classList.remove('mobile');
    el.btnViewDesktop.classList.add('active');
    el.btnViewMobile.classList.remove('active');
  });

  el.btnViewMobile.addEventListener('click', () => {
    el.siteFrame.classList.add('mobile');
    el.btnViewMobile.classList.add('active');
    el.btnViewDesktop.classList.remove('active');
  });

  el.btnCopyAiPrompt.addEventListener('click', async () => {
    if (!state.activeSiteBiz) return;
    try {
      await navigator.clipboard.writeText(buildAiWebsitePrompt(state.activeSiteBiz));
      showToast('Prompt copiado! Cole no chat para gerar o site completo.');
    } catch {
      showToast('Não foi possível copiar automaticamente.');
    }
  });

  el.btnDownloadHtml.addEventListener('click', () => {
    if (!state.activeSiteHtml || !state.activeSiteBiz) return;
    const slug = state.activeSiteBiz.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    const blob = new Blob([state.activeSiteHtml], { type: 'text/html;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `site-${slug || 'previa'}.html`;
    a.click();
    URL.revokeObjectURL(a.href);
    showToast('Arquivo HTML baixado!');
  });

  el.btnSiteToPitch.addEventListener('click', () => {
    el.modalSite.classList.remove('open');
    if (state.activeSiteBiz) openPitchModal(state.activeSiteBiz);
  });

  document.querySelectorAll('[data-close-modal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.getElementById(btn.dataset.closeModal)?.classList.remove('open');
    });
  });

  [el.modalPitch, el.modalSite].forEach((backdrop) => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.classList.remove('open');
    });
  });

  // Boot
  loadLeads();
  initMap();
  scanRegion({ useCurrentMapCenter: false });
})();
