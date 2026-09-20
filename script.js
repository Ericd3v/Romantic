/* =========================================================
   MEU BEM.EXE — script.js
   Tudo o que costuma ser editado está no objeto CONFIG,
   logo abaixo. O restante do arquivo é a lógica do site.
   ========================================================= */

/* ---------------------------------------------------------
   1) CONFIGURAÇÕES EDITÁVEIS
   --------------------------------------------------------- */
const CONFIG = {
  person: {
    name: "Luciana Fiaux",
    nickname: "Meu bem",
    firstMeetingPlace: "Shopping" // só informativo; o nome do shopping não foi informado
  },

  /* CONTADOR DO PRIMEIRO ENCONTRO
     - date: a data real informada (1º de agosto de 2026).
     - time: horário PROVISÓRIO (12:00:00). NÃO é o horário real do encontro.
     - timeIsKnown:
         false -> o contador conta a partir da MEIA-NOITE (00:00:00) do dia 01/08/2026,
                  ignorando o "time" provisório. É a opção mais honesta quando a hora é desconhecida.
         true  -> o contador usa exatamente o "time" abaixo. Troque para o horário real antes!
     - showNote: mostra, sob o contador, um aviso sobre a hora (deixe false para o site da Luciana). */
  firstMeeting: {
    date: "2026-08-01",
    time: "12:00:00",
    timeIsKnown: false,
    showNote: false
  },

  /* Oculta a seção "Distância, mas com carinho" se quiser */
  showDistanceSection: true,

  /* MÚSICA (opcional). Coloque seu arquivo em assets/music/musica.mp3 */
  music: {
    src: "assets/music/music.mp3", // caminho do arquivo de música; deixe em branco para não tocar nada
    title: "Nossa trilha" // nome exibido no botão; troque pelo nome real da música
  },

  /* GALERIA. Adicione até 6 itens. Se o arquivo não existir, aparece um placeholder. */
  photos: [
    { src: "assets/images/foto-01.jpeg", alt: "Foto 1 — descreva aqui a foto", caption: "Nosso primeiro piquenique, onde descobrimos nossos momentos de paz" },
    { src: "assets/images/foto-02.jpeg", alt: "Foto 2 — descreva aqui a foto", caption: "Nosso primeiro treino de Jiu Jitsu, o esporte que amamos" },
    { src: "assets/images/foto-03.jpeg", alt: "Foto 3 — descreva aqui a foto", caption: "Nosso momentos de paz, onde criamos nossa tradição" }
  ],
  photoPlaceholder: {
    title: "Aqui entraria uma foto sua.",
    text: "Mas como o departamento de arquivos ainda está em manutenção, vou deixar esse espaço reservado. 📸"
  },

  /* CARTA. Cada item do array é um parágrafo. Edite à vontade. */
  letter: {
    greeting: "Meu bem,",
    paragraphs: [
      "eu sei que esse site é um pouco bobo.",
      "Na verdade, talvez ele seja mais bobo do que eu gostaria de admitir. 😂",
      "Mas eu quis fazer algo diferente para você.",
      "Gosto do seu sorriso, do seu olhar cativante, da sua voz, da sua risada, do seu cheiro, do seu amor pelos livros e animais, do jeito que exala sua feminilidade e, principalmente, daquele jeito que você se anima contando alguma coisa. É bonito ver você vivendo a própria história enquanto fala.",
      "Eu amo ler o livro que é você, cada capitulo, cada parágrafo, cada frase e cada palavra.",
      "E, no meio de tudo isso, você foi ganhando um espaço especial nos meus dias.",
      "Não sei explicar tudo com perfeição, mas sei que gosto de estar perto de você, de te conhecer e de criar momentos que façam a gente sorrir.",
      "A distância às vezes aparece, mas não precisa ser o assunto principal da nossa história.",
      "Eu prefiro pensar nos momentos que ainda podemos viver."
    ],
    closing: "Com carinho,",
    signature: "do cara que te chama de Meu bem e provavelmente vai continuar te perturbando por bastante tempo. ❤️"
  },

  /* QUIZ. Cada opção tem "text" e, opcionalmente, kind: "all" (opção do tipo "todas as anteriores").
     O resultado é escolhido pela quantidade de opções "all" marcadas (só por diversão,
     não mede sentimento nenhum). Todos os resultados são acolhedores. */
  quiz: {
    questions: [
      {
        q: "Onde começou essa história?",
        options: [
          { text: "Em um shopping. ❤️" },
          { text: "Em uma reunião secreta do governo." },
          { text: "Em uma missão para investigar o sorriso da Luciana." },
          { text: "Essa informação é confidencial." }
        ]
      },
      {
        q: "Qual dessas coisas consegue bagunçar a concentração dele?",
        options: [
          { text: "Seu sorriso." },
          { text: "Seu olhar." },
          { text: "Você se animando para contar alguma coisa." },
          { text: "Todas as anteriores. 😂", kind: "all" }
        ]
      },
      {
        q: "Qual cenário combina com o próximo encontro dos sonhos?",
        options: [
          { text: "Um chalé no meio do mato." },
          { text: "Vinho e leitura na rede." },
          { text: "Um lugar tranquilo para aproveitar a companhia." },
          { text: "Tudo isso junto. ❤️", kind: "all" }
        ]
      },
      {
        q: "Se ele disser que está prestando atenção na história, o que pode estar acontecendo?",
        options: [
          { text: "Está prestando atenção na história." },
          { text: "Está prestando atenção em você contando a história." },
          { text: "Está tentando disfarçar que está sorrindo." },
          { text: "As três alternativas podem ser verdadeiras. 😂", kind: "all" }
        ]
      },
      {
        q: "Qual seria uma boa ideia para o próximo capítulo?",
        options: [
          { text: "Marcar outro encontro." },
          { text: "Continuar se conhecendo." },
          { text: "Planejar um chalé, vinho e uma rede." },
          { text: "Deixar a história acontecer naturalmente." }
        ]
      }
    ],
    /* minAll: usa o primeiro resultado (de cima para baixo) cujo minAll seja <= quantidade de "all" marcadas */
    results: [
      {
        minAll: 3,
        title: "RESULTADO OFICIAL ❤️",
        lines: [
          "Você foi aprovada no teste de compatibilidade, com louvor.",
          "O departamento responsável informa que existe interesse em continuar essa história.",
          "Próximo procedimento recomendado: ir para o nosso chalé e viver um dia de paz e sossego."
        ]
      },
      {
        minAll: 1,
        title: "RESULTADO OFICIAL: aprovada com distinção 😂",
        lines: [
          "Suas respostas revelam uma pessoa observadora e com ótimo senso de humor.",
          "O departamento de pensamentos registrou que você continua aparecendo por lá.",
          "Próximo procedimento recomendado: rir de alguma bobagem juntos e ser feliz."
        ]
      },
      {
        minAll: 0,
        title: "RESULTADO OFICIAL: perfil misterioso 🔍",
        lines: [
          "Você escolheu o caminho de quem gosta de descobrir as coisas com calma.",
          "O departamento não tem pressa nenhuma. Só curiosidade e boa vontade.",
          "Próximo procedimento recomendado: continuar a aceitar se feliz comigo pelo resto das nossas vidas."
        ]
      }
    ]
  },

  /* MENSAGENS SURPRESA */
  surpriseMessages: [
    "Seu sorriso devia vir com aviso de risco. ❤️",
    "O departamento de pensamentos confirmou: você apareceu de novo.",
    "Eu ia escrever algo muito inteligente, mas lembrei do seu olhar.",
    "Você é uma distração muito bonita.",
    "Meu bem, você está oficialmente autorizada a sorrir agora."
  ],
  carinhoMessages: [
    "Carinho digital entregue. Sem taxa de envio. ❤️",
    "Um abraço em formato de pixel, por enquanto. 🤗",
    "Entrega concluída: um pouco de carinho, direto do meu sistema para o seu dia.",
    "Mensagem do departamento de afetos: espero que seu dia esteja leve. ❤️"
  ],
  saudadeMessages: [
    "Nível de saudade: acima do recomendado pelo departamento.\nRecomendação: conversar com a Luciana e planejar um encontro. 😂",
    "Nível de saudade: medidor com defeito, mas com muito bom humor.\nRecomendação: mais conversa e um dia bem bonito pela frente. ❤️",
    "Nível de saudade: transbordando (o gráfico não é científico).\nRecomendação: um chalé, uma rede e nenhuma pressa. ❤️"
  ],

  /* CONVITE FINAL: textos das mensagens prontas para copiar */
  invite: {
    talkMessage: "Oi! Vi o site que você fez e gostei muito. Quero conversar sobre isso do jeito que ficar bom pra nós dois. ❤️",
    planIntro: "Oi! Vi o site e gostei da ideia do chalé, do vinho e da rede. Bora combinar? ❤️",
    planOutro: "O resto a gente combina juntos. 😊"
  },

  footerText: "Feito com carinho, com uns bugs propositais e nenhuma pressa. ❤️"
};

/* ---------------------------------------------------------
   2) UTILITÁRIOS
   --------------------------------------------------------- */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const pad2 = (n) => String(n).padStart(2, "0");
const randomItem = (list) => list[Math.floor(Math.random() * list.length)];

/* Cria um elemento com segurança (usa textContent, nunca innerHTML com texto editável) */
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

/* Escolhe uma mensagem aleatória evitando repetir a última */
function makePicker(list) {
  let last = -1;
  return () => {
    if (list.length === 0) return "";
    if (list.length === 1) return list[0];
    let i;
    do { i = Math.floor(Math.random() * list.length); } while (i === last);
    last = i;
    return list[i];
  };
}

/* Corações/brilhos saindo de um ponto (ou do centro de um elemento) */
function burst(origin, { count = 8, symbols = ["❤", "✦", "❤"] } = {}) {
  const layer = $("#fx");
  if (!layer || prefersReducedMotion()) return;

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  if (origin && typeof origin.getBoundingClientRect === "function") {
    const r = origin.getBoundingClientRect();
    x = r.left + r.width / 2;
    y = r.top + r.height / 2;
  }

  for (let i = 0; i < count; i++) {
    const p = el("span", "fx-particle", randomItem(symbols));
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.6;
    const dist = 50 + Math.random() * 60;
    p.style.setProperty("--x", `${x}px`);
    p.style.setProperty("--y", `${y}px`);
    p.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
    p.style.setProperty("--dy", `${Math.sin(angle) * dist - 40}px`);
    p.style.setProperty("--rot", `${(Math.random() - 0.5) * 60}deg`);
    p.style.color = Math.random() > 0.5 ? "#e58a99" : "#ffc27d";
    p.addEventListener("animationend", () => p.remove());
    layer.appendChild(p);
  }
}

/* Copia texto para a área de transferência (com plano B para navegadores antigos) */
async function copyText(text, textareaFallback) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (err) { /* segue para o plano B */ }

  try {
    const area = textareaFallback || el("textarea");
    if (!textareaFallback) {
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
    }
    area.focus();
    area.select();
    const ok = document.execCommand("copy");
    if (!textareaFallback) area.remove();
    return ok;
  } catch (err) {
    return false;
  }
}

/* ---------------------------------------------------------
   3) MODAIS ACESSÍVEIS (ESC, foco preso, clique fora)
   --------------------------------------------------------- */
const modalState = { current: null, trigger: null };

const FOCUSABLE = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function openModal(modal, trigger) {
  if (!modal) return;
  if (modalState.current) closeModal();
  modalState.current = modal;
  modalState.trigger = trigger || document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  const target = $(".modal__panel, .lightbox__stage", modal);
  if (target) target.focus({ preventScroll: true });
}

function closeModal() {
  const modal = modalState.current;
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = "";
  modalState.current = null;
  const back = modalState.trigger;
  modalState.trigger = null;
  if (back && typeof back.focus === "function") back.focus({ preventScroll: true });
}

function initModals() {
  $$(".modal").forEach((modal) => {
    $$("[data-close]", modal).forEach((btn) => btn.addEventListener("click", closeModal));
  });

  // Clique na área vazia do visualizador (fora da foto e dos botões) também fecha
  $$(".lightbox__stage").forEach((stage) => {
    stage.addEventListener("click", (e) => { if (e.target === stage) closeModal(); });
  });

  document.addEventListener("keydown", (e) => {
    const modal = modalState.current;
    if (!modal) return;

    if (e.key === "Escape") {
      e.preventDefault();
      closeModal();
      return;
    }

    if (e.key === "Tab") {
      const items = $$(FOCUSABLE, modal).filter((n) => n.offsetParent !== null || n === document.activeElement);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === $(".modal__panel, .lightbox__stage", modal))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

/* ---------------------------------------------------------
   4) ATMOSFERA (fica mais quente conforme a rolagem) + NAV
   --------------------------------------------------------- */
function initAtmosphere() {
  const bar = $("#scrollBar");
  const root = document.documentElement;
  let ticking = false;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? clamp(window.scrollY / max, 0, 1) : 0;
    if (bar) bar.style.width = `${(progress * 100).toFixed(1)}%`;
    root.style.setProperty("--warmth", clamp((progress - 0.35) / 0.55, 0, 1).toFixed(3));
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function initNavHighlight() {
  const links = $$(".topnav a");
  if (!("IntersectionObserver" in window) || links.length === 0) return;

  const map = new Map();
  links.forEach((a) => {
    const id = (a.getAttribute("href") || "").replace("#", "");
    const section = document.getElementById(id);
    if (section) map.set(section, a);
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.removeAttribute("aria-current"));
      const link = map.get(entry.target);
      if (link) {
        link.setAttribute("aria-current", "true");
        const nav = link.parentElement;
        if (nav && nav.scrollWidth > nav.clientWidth) {
          // Só rola o menu se o link ativo estiver cortado
          const n = nav.getBoundingClientRect();
          const l = link.getBoundingClientRect();
          if (l.left < n.left) nav.scrollLeft -= n.left - l.left + 8;
          else if (l.right > n.right) nav.scrollLeft += l.right - n.right + 8;
        }
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  map.forEach((_, section) => io.observe(section));
}

/* ---------------------------------------------------------
   5) SEÇÃO 1 — ABERTURA
   --------------------------------------------------------- */
function initHero() {
  const btn = $("#investigateBtn");
  const dossier = $("#dossier");
  const status = $("#scanStatus");
  const diagnosis = $("#diagnosis");
  const cont = $("#continueBtn");
  if (!btn || !dossier) return;

  let running = false;

  btn.addEventListener("click", async () => {
    if (running) return;
    running = true;
    btn.disabled = true;

    const fast = prefersReducedMotion();
    const step = fast ? 250 : 800;

    let bar = null;
    if (!fast) {
      bar = el("span", "scan-bar");
      bar.appendChild(el("span"));
      $(".dossier__actions", dossier).appendChild(bar);
      requestAnimationFrame(() => bar.classList.add("is-running"));
    }

    const steps = [
      "Abrindo o arquivo...",
      "Cruzando dados: sorriso, olhar, animação...",
      "Descriptografando pensamentos..."
    ];
    for (const s of steps) {
      if (status) status.textContent = s;
      await wait(step);
    }

    dossier.classList.add("is-open");
    if (status) status.textContent = "Arquivo desbloqueado. ✓";
    burst(btn, { count: 12 });
    if (bar) bar.remove();

    if (diagnosis) {
      diagnosis.hidden = false;
      if (cont) cont.focus({ preventScroll: true });
      diagnosis.scrollIntoView({ behavior: fast ? "auto" : "smooth", block: "center" });
    }
    btn.textContent = "Caso investigado ✓";
  });

  if (cont) {
    cont.addEventListener("click", () => {
      const next = $("#encontro");
      if (next) next.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
    });
  }
}

/* ---------------------------------------------------------
   6) SEÇÃO 2 — CONTADOR
   --------------------------------------------------------- */
function resolveMeetingDate(cfg) {
  const dateOk = typeof cfg.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(cfg.date);
  if (!dateOk) return null;

  // Sem hora conhecida: usa meia-noite local do dia (o horário provisório é ignorado).
  const time = cfg.timeIsKnown && /^\d{2}:\d{2}(:\d{2})?$/.test(cfg.time || "") ? cfg.time : "00:00:00";
  const iso = `${cfg.date}T${time.length === 5 ? time + ":00" : time}`; // sem "Z": interpreta no fuso local
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? null : d;
}

function initCounter() {
  const nodes = {
    days: $("#cd-days"), hours: $("#cd-hours"),
    minutes: $("#cd-minutes"), seconds: $("#cd-seconds")
  };
  if (!nodes.days || !nodes.hours || !nodes.minutes || !nodes.seconds) return;

  const note = $("#cd-note");
  const start = resolveMeetingDate(CONFIG.firstMeeting);

  if (!start) {
    console.warn("[Meu bem.exe] Data do primeiro encontro inválida em CONFIG.firstMeeting.date (use AAAA-MM-DD).");
    if (note) {
      note.hidden = false;
      note.textContent = "Não consegui ler a data do primeiro encontro. Confira CONFIG.firstMeeting no script.js.";
    }
    return;
  }

  if (note && CONFIG.firstMeeting.showNote) {
    note.hidden = false;
    note.textContent = CONFIG.firstMeeting.timeIsKnown
      ? `Contando desde ${CONFIG.firstMeeting.time} do dia ${CONFIG.firstMeeting.date}.`
      : "Contando desde a meia-noite do dia 01/08/2026 (o horário exato não foi informado).";
  }

  const tick = () => {
    let diff = Math.floor((Date.now() - start.getTime()) / 1000);
    if (diff < 0) diff = 0; // se a data ainda não chegou, mostra zeros
    const days = Math.floor(diff / 86400);
    const hours = Math.floor((diff % 86400) / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = diff % 60;
    nodes.days.textContent = String(days);
    nodes.hours.textContent = pad2(hours);
    nodes.minutes.textContent = pad2(minutes);
    nodes.seconds.textContent = pad2(seconds);
  };

  tick();
  setInterval(tick, 1000);
}

/* ---------------------------------------------------------
   7) SEÇÃO 3 — CARDS
   --------------------------------------------------------- */
function initTraits() {
  $$(".trait").forEach((card) => {
    const btn = $(".trait__btn", card);
    if (!btn) return;
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      card.classList.toggle("is-open", !open);
      if (!open) burst(btn, { count: 5, symbols: ["✦", "❤"] });
    });
  });
}

/* ---------------------------------------------------------
   8) SEÇÃO 4 — GALERIA + LIGHTBOX
   --------------------------------------------------------- */
const galleryState = { items: [], index: 0 };

function initGallery() {
  const list = $("#gallery");
  if (!list) return;
  const photos = Array.isArray(CONFIG.photos) ? CONFIG.photos.slice(0, 6) : [];

  photos.forEach((photo, i) => {
    const li = el("li");
    const btn = el("button", "photo");
    btn.type = "button";
    btn.setAttribute("aria-label", `Abrir foto ${i + 1}: ${photo.caption || photo.alt || ""}`);

    const img = new Image();
    img.alt = photo.alt || "";
    img.loading = "lazy";
    img.decoding = "async";

    const empty = el("span", "photo__empty");
    empty.appendChild(el("span", null, "📸"));
    empty.appendChild(el("strong", null, CONFIG.photoPlaceholder.title));
    empty.appendChild(el("span", null, CONFIG.photoPlaceholder.text));

    const cap = el("span", "photo__cap", photo.caption || "");

    const markEmpty = () => {
      btn.classList.add("is-empty");
      btn.setAttribute("aria-disabled", "true");
      btn.setAttribute("aria-label", `Foto ${i + 1} ainda não adicionada`);
      img.removeAttribute("alt");
    };
    img.addEventListener("error", markEmpty);
    img.addEventListener("load", () => {
      btn.classList.remove("is-empty");
      btn.removeAttribute("aria-disabled");
    });
    img.src = photo.src;

    btn.append(img, empty, cap);
    btn.addEventListener("click", () => {
      if (btn.classList.contains("is-empty")) return;
      openLightbox(i, btn);
    });

    li.appendChild(btn);
    list.appendChild(li);
    galleryState.items.push({ photo, btn });
  });

  const lb = $("#lightbox");
  if (!lb) return;
  $("#lbPrev")?.addEventListener("click", () => stepLightbox(-1));
  $("#lbNext")?.addEventListener("click", () => stepLightbox(1));
  document.addEventListener("keydown", (e) => {
    if (modalState.current !== lb) return;
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });
}

function availablePhotoIndexes() {
  return galleryState.items
    .map((item, i) => (item.btn.classList.contains("is-empty") ? -1 : i))
    .filter((i) => i >= 0);
}

function showLightboxPhoto(i) {
  const item = galleryState.items[i];
  const img = $("#lbImg");
  const cap = $("#lbCaption");
  if (!item || !img) return;
  galleryState.index = i;
  img.src = item.photo.src;
  img.alt = item.photo.alt || "";
  if (cap) cap.textContent = item.photo.caption || "";
  const many = availablePhotoIndexes().length > 1;
  const prev = $("#lbPrev");
  const next = $("#lbNext");
  if (prev) prev.hidden = !many;
  if (next) next.hidden = !many;
}

function openLightbox(i, trigger) {
  showLightboxPhoto(i);
  openModal($("#lightbox"), trigger);
}

function stepLightbox(dir) {
  const ok = availablePhotoIndexes();
  if (ok.length < 2) return;
  const pos = ok.indexOf(galleryState.index);
  const next = ok[(pos + dir + ok.length) % ok.length];
  showLightboxPhoto(next);
}

/* ---------------------------------------------------------
   9) SEÇÃO 5 — CARTA
   --------------------------------------------------------- */
function renderLetter() {
  const body = $("#letterBody");
  if (!body) return;
  const L = CONFIG.letter;
  body.textContent = "";

  const lines = [];
  lines.push(el("p", "letter__greeting", L.greeting));
  L.paragraphs.forEach((t) => lines.push(el("p", null, t)));
  if (L.closing) lines.push(el("p", "letter__sign", L.closing));
  if (L.signature) {
    const p = el("p");
    p.appendChild(el("strong", null, L.signature));
    lines.push(p);
  }

  lines.forEach((node, i) => {
    node.classList.add("letter__line");
    node.style.animationDelay = `${0.35 + i * 0.28}s`;
    body.appendChild(node);
  });
}

function initLetter() {
  const btn = $("#openLetter");
  const modal = $("#letterModal");
  if (!btn || !modal) return;

  btn.addEventListener("click", () => {
    renderLetter(); // re-renderiza para a animação rodar toda vez que abrir
    burst(btn, { count: 10 });
    openModal(modal, btn);
    const body = $(".letter", modal);
    if (body) body.scrollTop = 0;
    const again = $("#letterAgain");
    if (again) again.hidden = false;
  });
}

/* ---------------------------------------------------------
   10) SEÇÃO 6 — QUIZ
   --------------------------------------------------------- */
function initQuiz() {
  const stage = $("#quizStage");
  const count = $("#quizCount");
  const bar = $("#quizBar");
  const fill = $("#quizFill");
  const box = $("#quizBox");
  if (!stage || !CONFIG.quiz || !Array.isArray(CONFIG.quiz.questions) || CONFIG.quiz.questions.length === 0) return;

  const questions = CONFIG.quiz.questions;
  const total = questions.length;
  let index = 0;
  let answers = [];

  const setProgress = (done) => {
    if (bar) { bar.setAttribute("aria-valuemax", String(total)); bar.setAttribute("aria-valuenow", String(done)); }
    if (fill) fill.style.width = `${(done / total) * 100}%`;
  };

  function renderQuestion() {
    const q = questions[index];
    stage.textContent = "";
    if (count) count.textContent = `Pergunta ${index + 1} de ${total}`;
    setProgress(index);

    const title = el("h3", "quiz__q", q.q);
    title.id = "quizQ";
    title.tabIndex = -1;

    const list = el("ul", "quiz__options");
    list.setAttribute("aria-labelledby", "quizQ");

    const next = el("button", "btn btn--primary", index === total - 1 ? "Ver resultado" : "Próxima pergunta");
    next.type = "button";
    next.disabled = true;

    q.options.forEach((opt, i) => {
      const li = el("li");
      const b = el("button", "quiz__opt", opt.text);
      b.type = "button";
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", () => {
        $$(".quiz__opt", list).forEach((o) => o.setAttribute("aria-pressed", "false"));
        b.setAttribute("aria-pressed", "true");
        answers[index] = i;
        next.disabled = false;
      });
      li.appendChild(b);
      list.appendChild(li);
    });

    next.addEventListener("click", () => {
      if (answers[index] === undefined) return;
      index += 1;
      if (index >= total) renderResult();
      else renderQuestion();
    });

    stage.append(title, list, next);
  }

  function pickResult() {
    const allCount = answers.reduce((n, a, qi) => {
      const opt = questions[qi] && questions[qi].options[a];
      return n + (opt && opt.kind === "all" ? 1 : 0);
    }, 0);
    const results = CONFIG.quiz.results || [];
    const sorted = results.slice().sort((a, b) => b.minAll - a.minAll);
    return sorted.find((r) => allCount >= r.minAll) || sorted[sorted.length - 1] || { title: "Fim do quiz ❤️", lines: ["Obrigado por brincar comigo."] };
  }

  function renderResult() {
    setProgress(total);
    if (count) count.textContent = "Quiz concluído";
    stage.textContent = "";

    const r = pickResult();
    const wrap = el("div", "quiz__result");
    const t = el("h3", "quiz__result-title", r.title);
    t.tabIndex = -1;
    wrap.appendChild(t);
    r.lines.forEach((line) => wrap.appendChild(el("p", null, line)));

    const again = el("button", "btn btn--ghost", "Refazer o teste");
    again.type = "button";
    again.addEventListener("click", () => {
      index = 0;
      answers = [];
      renderQuestion();
    });
    wrap.appendChild(again);
    stage.appendChild(wrap);
    t.focus({ preventScroll: true });
    if (box) burst(t, { count: 10 });
  }

  renderQuestion();
}

/* ---------------------------------------------------------
   11) SEÇÃO 9 — MENSAGENS SURPRESA
   --------------------------------------------------------- */
function showOut(node, text) {
  if (!node) return;
  node.classList.remove("is-new");
  node.textContent = text;
  void node.offsetWidth; // reinicia a animação
  node.classList.add("is-new");
}

function initSurprises() {
  const pickSurprise = makePicker(CONFIG.surpriseMessages);
  const pickCarinho = makePicker(CONFIG.carinhoMessages);
  const pickSaudade = makePicker(CONFIG.saudadeMessages);

  const b1 = $("#surpriseBtn");
  if (b1) b1.addEventListener("click", () => showOut($("#surpriseOut"), pickSurprise()));

  const b2 = $("#carinhoBtn");
  if (b2) b2.addEventListener("click", () => {
    burst(b2, { count: 7, symbols: ["❤", "❤", "✦"] });
    showOut($("#carinhoOut"), pickCarinho());
  });

  const b3 = $("#saudadeBtn");
  const meter = $("#saudadeMeter");
  const meterFill = $("#saudadeFill");
  if (b3) b3.addEventListener("click", async () => {
    if (meterFill) meterFill.style.width = "0%";
    if (meter) meter.setAttribute("aria-valuenow", "0");
    showOut($("#saudadeOut"), "Calculando (sem validade científica)...");
    await wait(prefersReducedMotion() ? 50 : 250);
    const value = 88 + Math.floor(Math.random() * 13); // só uma brincadeira: 88–100%
    if (meterFill) meterFill.style.width = `${value}%`;
    if (meter) meter.setAttribute("aria-valuenow", String(value));
    await wait(prefersReducedMotion() ? 50 : 1500);
    showOut($("#saudadeOut"), pickSaudade());
  });
}

/* ---------------------------------------------------------
   12) SEÇÃO 7 — DISTÂNCIA (pode ser ocultada)
   --------------------------------------------------------- */
function initDistance() {
  if (CONFIG.showDistanceSection) return;
  const section = $("#distancia");
  if (section) section.hidden = true;
}

/* ---------------------------------------------------------
   13) SEÇÃO 8 — CHALÉ (convite)
   --------------------------------------------------------- */
function formatDateBR(iso) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso || "")) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

function buildPlanMessage() {
  const date = formatDateBR($("#planDate")?.value);
  const period = $("#planPeriod")?.value || "";
  const ideas = ($("#planIdeas")?.value || "").trim();

  const parts = [CONFIG.invite.planIntro];
  if (date) parts.push(`Data que eu pensei: ${date}.`);
  if (period) parts.push(`Período: ${period}.`);
  if (ideas) parts.push(`Ideias: ${ideas}`);
  parts.push(CONFIG.invite.planOutro);
  return parts.join("\n");
}

function initInvite() {
  const planBtn = $("#planBtn");
  const talkBtn = $("#talkBtn");
  const planPanel = $("#planPanel");
  const talkPanel = $("#talkPanel");
  const planMessage = $("#planMessage");
  const talkMessage = $("#talkMessage");

  const toggle = (btn, panel, other, otherBtn) => {
    if (!btn || !panel) return;
    const willOpen = panel.hidden;
    panel.hidden = !willOpen;
    btn.setAttribute("aria-expanded", String(willOpen));
    if (willOpen && other && otherBtn) {
      other.hidden = true;
      otherBtn.setAttribute("aria-expanded", "false");
    }
    if (willOpen) {
      burst(btn, { count: 10, symbols: ["✦", "❤", "✦"] });
      panel.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "nearest" });
    }
  };

  if (planBtn) planBtn.addEventListener("click", () => {
    if (planMessage && !planMessage.dataset.edited) planMessage.value = buildPlanMessage();
    toggle(planBtn, planPanel, talkPanel, talkBtn);
  });

  if (talkBtn) talkBtn.addEventListener("click", () => {
    if (talkMessage && !talkMessage.value) talkMessage.value = CONFIG.invite.talkMessage;
    toggle(talkBtn, talkPanel, planPanel, planBtn);
  });

  // Atualiza a mensagem conforme os campos, a menos que ela tenha sido editada à mão
  ["#planDate", "#planPeriod", "#planIdeas"].forEach((sel) => {
    const field = $(sel);
    if (!field) return;
    const evt = field.tagName === "TEXTAREA" ? "input" : "change";
    field.addEventListener(evt, () => {
      if (planMessage && !planMessage.dataset.edited) planMessage.value = buildPlanMessage();
    });
  });
  if (planMessage) planMessage.addEventListener("input", () => { planMessage.dataset.edited = "1"; });

  const form = $("#planForm");
  if (form) form.addEventListener("submit", (e) => e.preventDefault());

  const wireCopy = (btnSel, areaSel, statusSel) => {
    const btn = $(btnSel);
    const area = $(areaSel);
    const status = $(statusSel);
    if (!btn || !area) return;
    btn.addEventListener("click", async () => {
      const ok = await copyText(area.value, area);
      if (status) status.textContent = ok ? "Mensagem copiada! ❤️" : "Não consegui copiar. Selecione o texto e copie manualmente.";
      if (ok) burst(btn, { count: 6 });
      setTimeout(() => { if (status) status.textContent = ""; }, 4000);
    });
  };
  wireCopy("#copyPlan", "#planMessage", "#copyStatus");
  wireCopy("#copyTalk", "#talkMessage", "#copyTalkStatus");

  // Vagalumes decorativos
  const box = $("#fireflies");
  if (box && !prefersReducedMotion()) {
    for (let i = 0; i < 14; i++) {
      const f = el("span", "firefly");
      f.style.left = `${Math.random() * 100}%`;
      f.style.top = `${30 + Math.random() * 65}%`;
      f.style.setProperty("--dur", `${7 + Math.random() * 8}s`);
      f.style.setProperty("--delay", `${-Math.random() * 10}s`);
      f.style.setProperty("--mx", `${(Math.random() - 0.5) * 80}px`);
      f.style.setProperty("--my", `${-20 - Math.random() * 50}px`);
      box.appendChild(f);
    }
  }
}

/* ---------------------------------------------------------
   14) MÚSICA (opcional, sempre manual)
   --------------------------------------------------------- */
function initMusic() {
  const btn = $("#musicBtn");
  const label = $("#musicLabel");
  const status = $("#musicStatus");
  if (!btn) return;

  const title = (CONFIG.music && CONFIG.music.title) || "Música";
  if (label) label.textContent = title;

  let audio = null;
  let broken = false;
  let hideTimer = null;

  const say = (msg) => {
    if (!status) return;
    status.textContent = msg;
    status.classList.add("is-visible");
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => status.classList.remove("is-visible"), 5000);
  };

  const setPlaying = (playing) => {
    btn.setAttribute("aria-pressed", String(playing));
    btn.setAttribute("aria-label", playing ? `Pausar música: ${title}` : `Tocar música: ${title}`);
  };
  setPlaying(false);

  const ensureAudio = () => {
    if (audio || broken) return audio;
    audio = new Audio();
    audio.preload = "none";
    audio.loop = true;
    audio.addEventListener("error", () => {
      broken = true;
      setPlaying(false);
      say("A música ainda não foi adicionada (assets/music/musica.mp3). O site continua funcionando normalmente. 🎵");
    });
    audio.addEventListener("pause", () => setPlaying(false));
    audio.addEventListener("play", () => setPlaying(true));
    audio.src = CONFIG.music.src;
    return audio;
  };

  btn.addEventListener("click", async () => {
    if (broken) {
      say("A música ainda não foi adicionada (assets/music/musica.mp3). O site continua funcionando normalmente. 🎵");
      return;
    }
    const a = ensureAudio();
    if (!a) return;
    try {
      if (a.paused) await a.play();
      else a.pause();
    } catch (err) {
      if (!broken) say("Não consegui tocar a música agora. Tente de novo em instantes.");
      setPlaying(false);
    }
  });
}

/* ---------------------------------------------------------
   15) INICIALIZAÇÃO
   --------------------------------------------------------- */
function safeInit(fn) {
  try { fn(); } catch (err) { console.error(`[Meu bem.exe] Erro em ${fn.name}:`, err); }
}

document.addEventListener("DOMContentLoaded", () => {
  const footer = $("#footerText");
  if (footer && CONFIG.footerText) footer.textContent = CONFIG.footerText;

  [
    initModals, initAtmosphere, initNavHighlight, initHero, initCounter,
    initTraits, initGallery, initLetter, initQuiz, initSurprises,
    initDistance, initInvite, initMusic
  ].forEach(safeInit);
});
