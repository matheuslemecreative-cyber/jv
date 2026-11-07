
"use strict";

// ========================================
// JOGOS VORAZES - O DESAFIO DE PANEM
// 50 PERGUNTAS | 3 DIFICULDADES
// ========================================

const QUESTIONS = [

  // ========== FÁCIL (15) ==========

  {
    level: "easy",
    category: "PERSONAGENS",
    question: "Qual é o nome da protagonista dos filmes originais de Jogos Vorazes?",
    options: ["Lucy Gray Baird", "Katniss Everdeen", "Johanna Mason", "Primrose Everdeen"],
    answer: 1,
    explanation: "Katniss Everdeen é a protagonista da saga original e se torna o símbolo da revolução."
  },
  {
    level: "easy",
    category: "OS DISTRITOS",
    question: "De qual distrito Katniss Everdeen é originalmente?",
    options: ["Distrito 1", "Distrito 4", "Distrito 12", "Distrito 13"],
    answer: 2,
    explanation: "Katniss nasceu no Distrito 12, conhecido principalmente pela mineração de carvão."
  },
  {
    level: "easy",
    category: "PERSONAGENS",
    question: "Qual é o nome do tributo masculino que participa dos 74º Jogos Vorazes com Katniss?",
    options: ["Gale Hawthorne", "Finnick Odair", "Cato", "Peeta Mellark"],
    answer: 3,
    explanation: "Peeta Mellark é selecionado como tributo masculino do Distrito 12."
  },
  {
    level: "easy",
    category: "A COLHEITA",
    question: "Por quem Katniss se oferece como voluntária no primeiro filme?",
    options: ["Sua irmã Prim", "Sua mãe", "Rue", "Madge"],
    answer: 0,
    explanation: "Katniss se voluntaria para salvar sua irmã mais nova, Primrose Everdeen."
  },
  {
    level: "easy",
    category: "ARMAS",
    question: "Qual é a principal arma utilizada por Katniss?",
    options: ["Espada", "Arco e flecha", "Lança", "Machado"],
    answer: 1,
    explanation: "Katniss é uma excelente arqueira, habilidade desenvolvida durante suas caçadas."
  },
  {
    level: "easy",
    category: "A CAPITAL",
    question: "Quem governa Panem durante a maior parte da saga original?",
    options: ["Presidente Coin", "Coriolanus Snow", "Seneca Crane", "Plutarch Heavensbee"],
    answer: 1,
    explanation: "Coriolanus Snow é o presidente autoritário de Panem."
  },
  {
    level: "easy",
    category: "OS JOGOS",
    question: "Quantos tributos normalmente participam de uma edição dos Jogos Vorazes?",
    options: ["12", "20", "24", "36"],
    answer: 2,
    explanation: "Cada um dos 12 distritos envia dois tributos, totalizando 24 participantes."
  },
  {
    level: "easy",
    category: "PERSONAGENS",
    question: "Quem é o mentor de Katniss e Peeta nos primeiros Jogos?",
    options: ["Haymitch Abernathy", "Caesar Flickerman", "Cinna", "Beetee"],
    answer: 0,
    explanation: "Haymitch é um antigo vencedor dos Jogos Vorazes e mentor dos tributos do Distrito 12."
  },
  {
    level: "easy",
    category: "SÍMBOLOS",
    question: "Qual pássaro se torna o símbolo da revolução?",
    options: ["Águia", "Corvo", "Tordo", "Falcão"],
    answer: 2,
    explanation: "O Tordo representa Katniss e se transforma no principal símbolo da resistência."
  },
  {
    level: "easy",
    category: "PERSONAGENS",
    question: "Qual é o nome do melhor amigo de Katniss no Distrito 12?",
    options: ["Gale Hawthorne", "Finnick Odair", "Thresh", "Marvel"],
    answer: 0,
    explanation: "Gale Hawthorne caça com Katniss e participa da resistência contra a Capital."
  },
  {
    level: "easy",
    category: "OS JOGOS",
    question: "Como é chamada a cerimônia que escolhe os tributos?",
    options: ["A Seleção", "A Colheita", "A Escolha", "O Sorteio Real"],
    answer: 1,
    explanation: "A Colheita é a cerimônia anual em que os nomes dos tributos são sorteados."
  },
  {
    level: "easy",
    category: "PERSONAGENS",
    question: "Qual é o nome da menina do Distrito 11 que faz amizade com Katniss?",
    options: ["Clove", "Wiress", "Rue", "Mags"],
    answer: 2,
    explanation: "Rue forma uma aliança com Katniss durante os 74º Jogos Vorazes."
  },
  {
    level: "easy",
    category: "A CAPITAL",
    question: "Quem apresenta as entrevistas dos tributos nos Jogos Vorazes?",
    options: ["Caesar Flickerman", "Claudius Templesmith", "Cinna", "Romulus Thread"],
    answer: 0,
    explanation: "Caesar Flickerman é o apresentador das entrevistas dos tributos."
  },
  {
    level: "easy",
    category: "A REVOLUÇÃO",
    question: "Qual distrito é conhecido por ter sido destruído e depois reaparecer como centro da rebelião?",
    options: ["Distrito 2", "Distrito 7", "Distrito 10", "Distrito 13"],
    answer: 3,
    explanation: "O Distrito 13 sobreviveu secretamente e se tornou o centro da revolução."
  },
  {
    level: "easy",
    category: "O PRELÚDIO",
    question: "Quem é o protagonista masculino de A Cantiga dos Pássaros e das Serpentes?",
    options: ["Sejanus Plinth", "Coriolanus Snow", "Casca Highbottom", "Lucky Flickerman"],
    answer: 1,
    explanation: "O prelúdio acompanha o jovem Coriolanus Snow antes de sua ascensão ao poder."
  },

  // ========== MÉDIO (20) ==========

  {
    level: "medium",
    category: "OS JOGOS",
    question: "Em qual edição dos Jogos Vorazes Katniss participa pela primeira vez?",
    options: ["72ª", "73ª", "74ª", "75ª"],
    answer: 2,
    explanation: "Katniss e Peeta participam dos 74º Jogos Vorazes."
  },
  {
    level: "medium",
    category: "EM CHAMAS",
    question: "Qual é o nome da edição especial dos 75º Jogos Vorazes?",
    options: ["Massacre Quaternário", "Jogos da Vitória", "Grande Colheita", "Edição da Capital"],
    answer: 0,
    explanation: "Os 75º Jogos são o terceiro Massacre Quaternário, uma edição especial realizada a cada 25 anos."
  },
  {
    level: "medium",
    category: "PERSONAGENS",
    question: "Quem é o estilista responsável pelos trajes mais marcantes de Katniss?",
    options: ["Portia", "Cinna", "Effie Trinket", "Octavia"],
    answer: 1,
    explanation: "Cinna cria os trajes que fazem Katniss ser conhecida como a Garota em Chamas."
  },
  {
    level: "medium",
    category: "OS DISTRITOS",
    question: "Qual é a principal atividade econômica do Distrito 4?",
    options: ["Agricultura", "Mineração", "Pesca", "Tecnologia"],
    answer: 2,
    explanation: "O Distrito 4 é especializado na pesca e na indústria relacionada ao mar."
  },
  {
    level: "medium",
    category: "PERSONAGENS",
    question: "Quem é o vencedor do Distrito 4 conhecido por utilizar um tridente?",
    options: ["Finnick Odair", "Beetee", "Brutus", "Gloss"],
    answer: 0,
    explanation: "Finnick Odair é um vencedor dos Jogos Vorazes e especialista em tridentes."
  },
  {
    level: "medium",
    category: "A ARENA",
    question: "Qual alimento venenoso Katniss e Peeta ameaçam comer no final dos primeiros Jogos?",
    options: ["Cogumelos vermelhos", "Amoras-cadeado", "Maçãs negras", "Raízes selvagens"],
    answer: 1,
    explanation: "Os dois ameaçam comer amoras-cadeado para obrigar a Capital a declarar ambos vencedores."
  },
  {
    level: "medium",
    category: "PERSONAGENS",
    question: "Qual é o nome da acompanhante do Distrito 12 que anuncia os tributos?",
    options: ["Tigris", "Alma Coin", "Effie Trinket", "Enobaria"],
    answer: 2,
    explanation: "Effie Trinket acompanha os tributos do Distrito 12 e conduz a cerimônia da Colheita."
  },
  {
    level: "medium",
    category: "A REVOLUÇÃO",
    question: "Quem é a presidente do Distrito 13 durante a rebelião?",
    options: ["Alma Coin", "Paylor", "Commander Lyme", "Dr. Gaul"],
    answer: 0,
    explanation: "Alma Coin lidera o Distrito 13 e assume papel central na revolução."
  },
  {
    level: "medium",
    category: "EM CHAMAS",
    question: "Qual é o formato principal da arena dos 75º Jogos Vorazes?",
    options: ["Labirinto", "Relógio", "Pirâmide", "Círculo de gelo"],
    answer: 1,
    explanation: "A arena funciona como um relógio, com ameaças específicas em diferentes setores e horários."
  },
  {
    level: "medium",
    category: "PERSONAGENS",
    question: "Qual tributo do Distrito 3 é conhecido por suas habilidades com eletricidade?",
    options: ["Thresh", "Beetee", "Cato", "Blight"],
    answer: 1,
    explanation: "Beetee é um especialista em tecnologia e eletricidade, importante na destruição da arena."
  },
  {
    level: "medium",
    category: "A ARENA",
    question: "Qual é o nome da estrutura onde os tributos encontram armas e suprimentos no início dos Jogos?",
    options: ["Cornucópia", "Torre da Capital", "Estação Central", "Fortaleza dos Tributos"],
    answer: 0,
    explanation: "A Cornucópia reúne equipamentos, alimentos e armas, tornando-se um local perigoso."
  },
  {
    level: "medium",
    category: "O PRELÚDIO",
    question: "De qual distrito Lucy Gray Baird é selecionada para os 10º Jogos Vorazes?",
    options: ["Distrito 4", "Distrito 11", "Distrito 12", "Distrito 8"],
    answer: 2,
    explanation: "Lucy Gray Baird é a tributo feminina do Distrito 12 nos 10º Jogos Vorazes."
  },
  {
    level: "medium",
    category: "PERSONAGENS",
    question: "Qual é o nome da esposa de Finnick Odair?",
    options: ["Annie Cresta", "Johanna Mason", "Mags", "Wiress"],
    answer: 0,
    explanation: "Finnick se casa com Annie Cresta durante os acontecimentos de A Esperança."
  },
  {
    level: "medium",
    category: "A REVOLUÇÃO",
    question: "Qual é o nome do cinegrafista que registra as mensagens de propaganda de Katniss?",
    options: ["Castor", "Pollux", "Cressida", "Messalla"],
    answer: 0,
    explanation: "Castor trabalha como cinegrafista na equipe de propaganda da revolução."
  },
  {
    level: "medium",
    category: "EM CHAMAS",
    question: "Quem é o idealizador dos 75º Jogos e secretamente participa da resistência?",
    options: ["Seneca Crane", "Plutarch Heavensbee", "Casca Highbottom", "Romulus Thread"],
    answer: 1,
    explanation: "Plutarch Heavensbee é o Idealizador-Chefe dos Jogos e atua secretamente com os rebeldes."
  },
  {
    level: "medium",
    category: "OS DISTRITOS",
    question: "Qual distrito é conhecido pela produção de madeira?",
    options: ["Distrito 5", "Distrito 7", "Distrito 9", "Distrito 11"],
    answer: 1,
    explanation: "O Distrito 7 é especializado em madeira e atividades florestais."
  },
  {
    level: "medium",
    category: "A ESPERANÇA",
    question: "Quem Katniss mata com uma flecha durante a execução pública no último filme?",
    options: ["Presidente Snow", "Presidente Coin", "Comandante Paylor", "Plutarch Heavensbee"],
    answer: 1,
    explanation: "Katniss atira em Alma Coin em vez de executar Snow."
  },
  {
    level: "medium",
    category: "O PRELÚDIO",
    question: "Quem é o melhor amigo de Coriolanus Snow durante sua juventude na Academia?",
    options: ["Sejanus Plinth", "Billy Taupe", "Festus Creed", "Felix Ravinstill"],
    answer: 0,
    explanation: "Sejanus Plinth é um estudante da Academia que desenvolve amizade com Coriolanus."
  },
  {
    level: "medium",
    category: "A ARENA",
    question: "Qual foi a nota que Katniss recebeu na avaliação privada dos Idealizadores antes dos 74º Jogos?",
    options: ["8", "10", "11", "12"],
    answer: 2,
    explanation: "Katniss recebe nota 11 após atirar uma flecha na maçã da mesa dos Idealizadores."
  },
  {
    level: "medium",
    category: "PERSONAGENS",
    question: "Qual vencedora do Distrito 7 participa dos 75º Jogos Vorazes?",
    options: ["Clove", "Cashmere", "Johanna Mason", "Foxface"],
    answer: 2,
    explanation: "Johanna Mason é vencedora do Distrito 7 e participa do terceiro Massacre Quaternário."
  },

  // ========== DIFÍCIL (15) ==========

  {
    level: "hard",
    category: "HISTÓRIA DOS JOGOS",
    question: "Em qual edição Haymitch Abernathy venceu os Jogos Vorazes?",
    options: ["45ª", "50ª", "55ª", "60ª"],
    answer: 1,
    explanation: "Haymitch venceu os 50º Jogos Vorazes, realizados durante o segundo Massacre Quaternário."
  },
  {
    level: "hard",
    category: "O PRELÚDIO",
    question: "Qual é o nome da criadora de jogos que orienta Snow durante os 10º Jogos Vorazes?",
    options: ["Dra. Volumnia Gaul", "Dra. Livia Cardew", "Dra. Hilarius Heavensbee", "Dra. Clemensia Dovecote"],
    answer: 0,
    explanation: "A Dra. Volumnia Gaul é a Idealizadora-Chefe dos 10º Jogos Vorazes."
  },
  {
    level: "hard",
    category: "EM CHAMAS",
    question: "Qual tributo se sacrifica na névoa venenosa para salvar Finnick, Katniss e Peeta?",
    options: ["Wiress", "Mags", "Cecelia", "Seeder"],
    answer: 1,
    explanation: "Mags entra voluntariamente na névoa venenosa para permitir que os outros escapem."
  },
  {
    level: "hard",
    category: "DETALHES DA ARENA",
    question: "Qual é o primeiro grande perigo que atinge o grupo de Katniss na arena-relógio depois de encontrarem água?",
    options: ["Chuva de sangue", "Névoa venenosa", "Macacos mutantes", "Onda gigante"],
    answer: 1,
    explanation: "A névoa venenosa persegue Katniss, Peeta, Finnick e Mags na arena dos 75º Jogos."
  },
  {
    level: "hard",
    category: "O PRELÚDIO",
    question: "Qual música Lucy Gray canta durante sua apresentação na Colheita dos 10º Jogos?",
    options: ["The Hanging Tree", "Nothing You Can Take from Me", "Deep in the Meadow", "Pure as the Driven Snow"],
    answer: 1,
    explanation: "Lucy Gray canta Nothing You Can Take from Me após ser selecionada na Colheita."
  },
  {
    level: "hard",
    category: "PERSONAGENS",
    question: "Qual é o nome do avox que trabalha como câmera subterrâneo na equipe de propaganda de Katniss?",
    options: ["Pollux", "Castor", "Messalla", "Boggs"],
    answer: 0,
    explanation: "Pollux é um avox que conhece os túneis subterrâneos da Capital e acompanha o grupo."
  },
  {
    level: "hard",
    category: "OS DISTRITOS",
    question: "Qual é a especialidade industrial do Distrito 6?",
    options: ["Transporte", "Energia", "Têxteis", "Pecuária"],
    answer: 0,
    explanation: "O Distrito 6 é especializado em transportes."
  },
  {
    level: "hard",
    category: "O PRELÚDIO",
    question: "Qual é o nome da prima de Coriolanus Snow que vive com ele na Capital?",
    options: ["Livia", "Tigris", "Clemensia", "Maude Ivory"],
    answer: 1,
    explanation: "Tigris é prima de Coriolanus e ajuda sua família durante o período de dificuldades financeiras."
  },
  {
    level: "hard",
    category: "EM CHAMAS",
    question: "Qual tributo reconhece que a arena dos 75º Jogos funciona como um relógio?",
    options: ["Johanna Mason", "Wiress", "Beetee", "Finnick Odair"],
    answer: 1,
    explanation: "Wiress percebe o padrão dos perigos da arena e repete a palavra 'tique-taque'."
  },
  {
    level: "hard",
    category: "A REVOLUÇÃO",
    question: "Qual é o nome do comandante do esquadrão de Katniss durante a missão na Capital?",
    options: ["Boggs", "Mitchell", "Jackson", "Homes"],
    answer: 0,
    explanation: "Boggs lidera inicialmente o Esquadrão 451 durante a missão na Capital."
  },
  {
    level: "hard",
    category: "O PRELÚDIO",
    question: "Qual tributo masculino do Distrito 12 participa dos 10º Jogos ao lado de Lucy Gray?",
    options: ["Reaper Ash", "Jessup Diggs", "Marcus", "Treech"],
    answer: 1,
    explanation: "Jessup Diggs é selecionado como tributo masculino do Distrito 12."
  },
  {
    level: "hard",
    category: "DETALHES DOS FILMES",
    question: "Qual é o nome do comandante da força de Pacificadores que substitui Cray no Distrito 12?",
    options: ["Romulus Thread", "Darius", "Boggs", "Antonius"],
    answer: 0,
    explanation: "Romulus Thread assume o comando dos Pacificadores e impõe medidas violentas no Distrito 12."
  },
  {
    level: "hard",
    category: "O PRELÚDIO",
    question: "Qual veneno é utilizado por Snow para matar Casca Highbottom no final do prelúdio?",
    options: ["Veneno de rastreadoras", "Estricnina", "Arsênico", "Veneno de cobra"],
    answer: 2,
    explanation: "No filme, Snow envenena a dose de morfina de Highbottom com arsênico."
  },
  {
    level: "hard",
    category: "EM CHAMAS",
    question: "Qual é o nome da vencedora do Distrito 2 que possui dentes afiados artificialmente?",
    options: ["Clove", "Cashmere", "Enobaria", "Lavinia"],
    answer: 2,
    explanation: "Enobaria modificou seus dentes para que se parecessem com presas."
  },
  {
    level: "hard",
    category: "O PRELÚDIO",
    question: "Qual é o nome do reitor da Academia que demonstra hostilidade contra Coriolanus Snow?",
    options: ["Casca Highbottom", "Lucky Flickerman", "Strabo Plinth", "Felix Ravinstill"],
    answer: 0,
    explanation: "Casca Highbottom é o reitor da Academia e possui uma história complicada com a família Snow."
  }

];

// ========================================
// CONFIGURAÇÕES
// ========================================

const CONFIG = {
  easyPoints: 10,
  mediumPoints: 20,
  hardPoints: 30,
  hardTime: 15,
  recordKey: "panemQuizRecordV1",
  nameKey: "panemQuizPlayerV1"
};

const TOTAL = QUESTIONS.length;

function getPoints(level) {
  if (level === "easy") return CONFIG.easyPoints;
  if (level === "medium") return CONFIG.mediumPoints;
  return CONFIG.hardPoints;
}

const MAX_SCORE = QUESTIONS.reduce(
  (total, question) => total + getPoints(question.level),
  0
);

// ========================================
// ELEMENTOS
// ========================================

const $ = id => document.getElementById(id);

const screens = {
  home: $("homeScreen"),
  quiz: $("quizScreen"),
  result: $("resultScreen")
};

const els = {
  playerName: $("playerName"),
  startBtn: $("startBtn"),
  soundBtn: $("soundBtn"),
  scoreValue: $("scoreValue"),
  questionCounter: $("questionCounter"),
  progressPercent: $("progressPercent"),
  progressFill: $("progressFill"),
  questionCard: $("questionCard"),
  difficultyBadge: $("difficultyBadge"),
  questionCategory: $("questionCategory"),
  questionText: $("questionText"),
  answersContainer: $("answersContainer"),
  timerBox: $("timerBox"),
  timerValue: $("timerValue"),
  timerFill: $("timerFill"),
  feedback: $("feedback"),
  feedbackTitle: $("feedbackTitle"),
  feedbackText: $("feedbackText"),
  streakValue: $("streakValue"),
  nextBtn: $("nextBtn"),
  playerLabel: $("playerLabel"),
  resultTrophy: $("resultTrophy"),
  resultTitle: $("resultTitle"),
  resultMessage: $("resultMessage"),
  finalScore: $("finalScore"),
  correctCount: $("correctCount"),
  wrongCount: $("wrongCount"),
  accuracyValue: $("accuracyValue"),
  performanceDetails: $("performanceDetails"),
  newRecord: $("newRecord"),
  recordText: $("recordText"),
  restartBtn: $("restartBtn"),
  shareBtn: $("shareBtn"),
  toast: $("toast")
};

// ========================================
// ESTADO DO JOGO
// ========================================

let player = "Tributo";
let gameQuestions = [];
let currentIndex = 0;
let score = 0;
let correct = 0;
let wrong = 0;
let streak = 0;
let bestStreak = 0;
let answered = false;

let timerInterval = null;
let timerDeadline = 0;
let soundEnabled = false;
let audioContext = null;
let toastTimeout = null;

let performance = createPerformance();

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

function createPerformance() {
  return {
    easy: { correct: 0, total: 0 },
    medium: { correct: 0, total: 0 },
    hard: { correct: 0, total: 0 }
  };
}

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function prepareQuestions() {
  const easy = shuffle(
    QUESTIONS.filter(q => q.level === "easy")
  );

  const medium = shuffle(
    QUESTIONS.filter(q => q.level === "medium")
  );

  const hard = shuffle(
    QUESTIONS.filter(q => q.level === "hard")
  );

  return [...easy, ...medium, ...hard].map(question => {
    const options = shuffle(
      question.options.map((text, index) => ({
        text,
        correct: index === question.answer
      }))
    );

    return {
      ...question,
      options: options.map(option => option.text),
      answer: options.findIndex(option => option.correct)
    };
  });
}

function showScreen(name) {
  Object.values(screens).forEach(screen => {
    screen.classList.remove("active");
  });

  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    els.toast.classList.remove("show");
  }, 2800);
}

function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // O jogo continua sem armazenamento.
  }
}

// ========================================
// EFEITOS SONOROS
// ========================================

function playSound(type) {
  if (!soundEnabled) return;

  try {
    const AudioCtx =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioCtx) return;

    if (!audioContext) {
      audioContext = new AudioCtx();
    }

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.type = type === "wrong" ? "sawtooth" : "sine";

    const sounds = {
      correct: [620, 930, 0.23],
      wrong: [240, 130, 0.3],
      tick: [440, 350, 0.07],
      finish: [520, 1050, 0.5]
    };

    const [startFreq, endFreq, duration] =
      sounds[type] || sounds.tick;

    oscillator.frequency.setValueAtTime(startFreq, now);
    oscillator.frequency.exponentialRampToValueAtTime(
      Math.max(1, endFreq),
      now + duration
    );

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(
      0.07,
      now + 0.015
    );
    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      now + duration
    );

    oscillator.start(now);
    oscillator.stop(now + duration + 0.02);
  } catch {
    // Sons são opcionais.
  }
}

els.soundBtn.addEventListener("click", () => {
  soundEnabled = !soundEnabled;

  els.soundBtn.textContent = soundEnabled ? "♫" : "♪";

  els.soundBtn.setAttribute(
    "aria-label",
    soundEnabled ? "Desativar sons" : "Ativar sons"
  );

  showToast(
    soundEnabled ? "Sons ativados!" : "Sons desativados!"
  );

  if (soundEnabled) playSound("correct");
});

// ========================================
// PARTÍCULAS DE FOGO
// ========================================

function createParticles() {
  const container = $("particles");
  container.innerHTML = "";

  const count = window.innerWidth < 600 ? 22 : 48;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    particle.style.animationDuration =
      `${7 + Math.random() * 13}s`;

    particle.style.animationDelay =
      `${-Math.random() * 20}s`;

    const size = 1 + Math.random() * 4;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    container.appendChild(particle);
  }
}

// ========================================
// INICIAR PARTIDA
// ========================================

function startGame() {
  const enteredName = els.playerName.value.trim();

  player = enteredName || "Tributo";

  safeStorageSet(CONFIG.nameKey, player);

  gameQuestions = prepareQuestions();

  currentIndex = 0;
  score = 0;
  correct = 0;
  wrong = 0;
  streak = 0;
  bestStreak = 0;
  answered = false;

  performance = createPerformance();

  clearTimer();

  els.scoreValue.textContent = "0";
  els.streakValue.textContent = "0";

  els.playerLabel.textContent =
    `TRIBUTO: ${player.toUpperCase()}`;

  showScreen("quiz");
  renderQuestion();
}

// ========================================
// MOSTRAR PERGUNTA
// ========================================

function renderQuestion() {
  clearTimer();

  if (currentIndex >= gameQuestions.length) {
    finishGame();
    return;
  }

  answered = false;

  const question = gameQuestions[currentIndex];

  els.feedback.classList.add("hidden");
  els.nextBtn.classList.add("hidden");
  els.timerBox.classList.add("hidden");
  els.timerBox.classList.remove("urgent");

  const number = currentIndex + 1;
  const percent = Math.round(number / TOTAL * 100);

  els.questionCounter.textContent =
    `DESAFIO ${String(number).padStart(2, "0")} / ${TOTAL}`;

  els.progressPercent.textContent = `${percent}%`;
  els.progressFill.style.width = `${percent}%`;

  const levelNames = {
    easy: "FÁCIL",
    medium: "MÉDIO",
    hard: "DIFÍCIL"
  };

  els.difficultyBadge.textContent =
    levelNames[question.level];

  els.difficultyBadge.className =
    `difficulty-badge ${question.level}`;

  els.questionCategory.textContent = question.category;
  els.questionText.textContent = question.question;

  els.answersContainer.innerHTML = "";

  const letters = ["A", "B", "C", "D"];

  question.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "answer-btn";

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = letters[index];

    const text = document.createElement("span");
    text.className = "answer-text";
    text.textContent = option;

    const icon = document.createElement("span");
    icon.className = "answer-icon";

    button.append(letter, text, icon);

    button.addEventListener("click", () => {
      selectAnswer(index);
    });

    els.answersContainer.appendChild(button);
  });

  els.questionCard.classList.remove("question-enter");
  void els.questionCard.offsetWidth;
  els.questionCard.classList.add("question-enter");

  if (question.level === "hard") {
    startTimer();
  }
}

// ========================================
// CRONÔMETRO DE 15 SEGUNDOS
// ========================================

function performanceNow() {
  return window.performance.now();
}

function clearTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function startTimer() {
  els.timerBox.classList.remove("hidden");

  els.timerValue.textContent = `${CONFIG.hardTime}s`;
  els.timerFill.style.width = "100%";

  timerDeadline =
    performanceNow() + CONFIG.hardTime * 1000;

  timerInterval = setInterval(() => {
    if (answered) {
      clearTimer();
      return;
    }

    const remainingMs = Math.max(
      0,
      timerDeadline - performanceNow()
    );

    const seconds = Math.ceil(remainingMs / 1000);
    const percent =
      remainingMs / (CONFIG.hardTime * 1000) * 100;

    els.timerValue.textContent = `${seconds}s`;
    els.timerFill.style.width = `${percent}%`;

    if (seconds <= 5) {
      els.timerBox.classList.add("urgent");
    }

    if (remainingMs <= 0) {
      clearTimer();
      selectAnswer(-1);
    }
  }, 50);
}

// ========================================
// RESPONDER
// ========================================

function selectAnswer(selectedIndex) {
  if (answered) return;

  const question = gameQuestions[currentIndex];

  if (
    question.level === "hard" &&
    selectedIndex !== -1 &&
    performanceNow() >= timerDeadline
  ) {
    selectedIndex = -1;
  }

  answered = true;
  clearTimer();

  const isCorrect = selectedIndex === question.answer;
  const timedOut = selectedIndex === -1;

  performance[question.level].total++;

  if (isCorrect) {
    correct++;
    streak++;

    bestStreak = Math.max(bestStreak, streak);

    performance[question.level].correct++;

    score += getPoints(question.level);

    els.scoreValue.textContent = score;

    playSound("correct");
  } else {
    wrong++;
    streak = 0;
    playSound("wrong");
  }

  els.streakValue.textContent = streak;

  const buttons =
    els.answersContainer.querySelectorAll(".answer-btn");

  buttons.forEach((button, index) => {
    button.disabled = true;

    const icon = button.querySelector(".answer-icon");

    if (index === question.answer) {
      button.classList.add("correct");
      icon.textContent = "✓";
    } else if (index === selectedIndex) {
      button.classList.add("wrong");
      icon.textContent = "✕";
    } else {
      button.classList.add("dimmed");
    }
  });

  els.feedback.classList.remove("hidden");

  if (isCorrect) {
    els.feedbackTitle.textContent =
      `✦ Resposta correta! +${getPoints(question.level)} pontos`;
  } else if (timedOut) {
    els.feedbackTitle.textContent =
      "⌛ O tempo acabou, tributo!";
  } else {
    els.feedbackTitle.textContent =
      "✕ Resposta incorreta!";
  }

  els.feedbackText.textContent = question.explanation;

  els.nextBtn.textContent =
    currentIndex === TOTAL - 1
      ? "VER RESULTADO FINAL ➜"
      : "PRÓXIMO DESAFIO ➜";

  els.nextBtn.classList.remove("hidden");
}

// ========================================
// PRÓXIMA PERGUNTA
// ========================================

function nextQuestion() {
  if (!answered) return;

  currentIndex++;

  if (currentIndex >= TOTAL) {
    finishGame();
  } else {
    renderQuestion();

    if (window.innerWidth < 700) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
}

// ========================================
// CLASSIFICAÇÕES
// ========================================

function getRank(accuracy) {
  if (accuracy >= 90) {
    return {
      title: "SÍMBOLO DA REVOLUÇÃO",
      trophy: "🏆",
      message:
        `${player}, você conhece Panem como ninguém! ` +
        "Seu conhecimento é digno do próprio Tordo. " +
        "A Capital não conseguiria esconder nenhum segredo de você."
    };
  }

  if (accuracy >= 75) {
    return {
      title: "VENCEDOR DOS JOGOS",
      trophy: "🏹",
      message:
        `${player}, você provou ser um verdadeiro vencedor! ` +
        "Seu conhecimento da arena e dos distritos é impressionante."
    };
  }

  if (accuracy >= 55) {
    return {
      title: "TRIBUTO DE ELITE",
      trophy: "🔥",
      message:
        `${player}, você sobreviveu a muitos desafios! ` +
        "Mas ainda existem segredos de Panem que precisam ser descobertos."
    };
  }

  if (accuracy >= 35) {
    return {
      title: "SOBREVIVENTE DA ARENA",
      trophy: "⚔️",
      message:
        `${player}, você conseguiu enfrentar parte dos desafios, ` +
        "mas ainda precisa de treinamento para vencer os Jogos."
    };
  }

  return {
    title: "TRIBUTO INICIANTE",
    trophy: "🎯",
    message:
      `${player}, sua jornada em Panem está apenas começando. ` +
      "Reveja os filmes, prepare suas estratégias e volte à arena!"
  };
}

// ========================================
// FINALIZAR
// ========================================

function finishGame() {
  clearTimer();

  const accuracy = Math.round(correct / TOTAL * 100);
  const rank = getRank(accuracy);

  els.resultTrophy.textContent = rank.trophy;
  els.resultTitle.textContent = rank.title;
  els.resultMessage.textContent = rank.message;

  els.finalScore.textContent = score;
  els.correctCount.textContent = correct;
  els.wrongCount.textContent = wrong;
  els.accuracyValue.textContent = `${accuracy}%`;

  renderPerformance();

  const previousRecord =
    Number(safeStorageGet(CONFIG.recordKey)) || 0;

  const isNewRecord = score > previousRecord;

  if (isNewRecord) {
    safeStorageSet(CONFIG.recordKey, String(score));
  }

  const record = Math.max(score, previousRecord);

  els.newRecord.classList.toggle(
    "hidden",
    !isNewRecord
  );

  els.recordText.textContent =
    `Seu recorde pessoal: ${record} de ${MAX_SCORE} pontos • ` +
    `Maior sequência nesta partida: ${bestStreak}`;

  showScreen("result");
  playSound("finish");
}

// ========================================
// DESEMPENHO POR NÍVEL
// ========================================

function renderPerformance() {
  els.performanceDetails.innerHTML = "";

  const levels = [
    { key: "easy", label: "Fácil" },
    { key: "medium", label: "Médio" },
    { key: "hard", label: "Difícil" }
  ];

  levels.forEach(level => {
    const data = performance[level.key];

    const percent = data.total
      ? Math.round(data.correct / data.total * 100)
      : 0;

    const row = document.createElement("div");
    row.className = "performance-row";

    const label = document.createElement("div");
    label.className = "performance-label";

    const title = document.createElement("span");
    title.textContent = level.label;

    const count = document.createElement("span");
    count.textContent = `${data.correct} / ${data.total}`;

    label.append(title, count);

    const track = document.createElement("div");
    track.className = "performance-track";

    const fill = document.createElement("div");
    fill.className = `performance-fill ${level.key}`;
    fill.style.width = `${percent}%`;

    track.appendChild(fill);
    row.append(label, track);

    els.performanceDetails.appendChild(row);
  });
}

// ========================================
// COMPARTILHAR RESULTADO
// ========================================

async function shareResult() {
  const accuracy = Math.round(correct / TOTAL * 100);
  const rank = getRank(accuracy);

  const message =
    `🔥 JOGOS VORAZES - DESAFIO DE PANEM 🔥\n\n` +
    `🏹 Tributo: ${player}\n` +
    `🏆 Classificação: ${rank.title}\n` +
    `✨ Pontuação: ${score}/${MAX_SCORE}\n` +
    `✅ Acertos: ${correct}/${TOTAL}\n` +
    `🎯 Precisão: ${accuracy}%\n` +
    `🔥 Maior sequência: ${bestStreak}\n\n` +
    `Que a sorte esteja sempre a seu favor!\n` +
    `Você consegue superar meu resultado?`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: "Jogos Vorazes - Desafio de Panem",
        text: message
      });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  try {
    await navigator.clipboard.writeText(message);

    showToast(
      "Resultado copiado! Compartilhe com seus amigos."
    );
  } catch {
    const field = document.createElement("textarea");

    field.value = message;
    field.style.position = "fixed";
    field.style.opacity = "0";

    document.body.appendChild(field);
    field.select();

    let copied = false;

    try {
      copied = document.execCommand("copy");
    } catch {}

    field.remove();

    showToast(
      copied
        ? "Resultado copiado!"
        : "Não foi possível copiar automaticamente."
    );
  }
}

// ========================================
// EVENTOS
// ========================================

els.startBtn.addEventListener("click", startGame);

els.playerName.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    startGame();
  }
});

els.nextBtn.addEventListener("click", nextQuestion);

els.restartBtn.addEventListener("click", startGame);

els.shareBtn.addEventListener("click", shareResult);

$("brand").addEventListener("click", event => {
  event.preventDefault();

  if (screens.quiz.classList.contains("active")) {
    const confirmExit = window.confirm(
      "Deseja abandonar a arena? Seu progresso será perdido."
    );

    if (!confirmExit) return;
  }

  clearTimer();
  showScreen("home");
});

// ========================================
// INICIALIZAÇÃO
// ========================================

function init() {
  createParticles();

  const savedName = safeStorageGet(CONFIG.nameKey);

  if (savedName) {
    els.playerName.value = savedName;
  }

  const savedRecord =
    Number(safeStorageGet(CONFIG.recordKey)) || 0;

  if (savedRecord > 0) {
    showToast(
      `Seu recorde atual é ${savedRecord} pontos!`
    );
  }

  const levels = {
    easy: QUESTIONS.filter(q => q.level === "easy").length,
    medium: QUESTIONS.filter(q => q.level === "medium").length,
    hard: QUESTIONS.filter(q => q.level === "hard").length
  };

  if (
    TOTAL !== 50 ||
    levels.easy !== 15 ||
    levels.medium !== 20 ||
    levels.hard !== 15
  ) {
    console.warn(
      "Confira a quantidade de perguntas:",
      levels
    );
  }

  console.log(
    `Desafio de Panem iniciado: ${TOTAL} perguntas, ` +
    `${MAX_SCORE} pontos possíveis.`
  );
}

init();
