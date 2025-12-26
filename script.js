// ===== Podcast Data =====
const podcasts = [
  {
    title: "The Night Market Beat – Taiwan After Dark",
    summary: "這一集的 Podcast 以台灣夜市為主軸...熱鬧卻讓人安心。",
    audio: "audio/episode1.mp3" // 替換成真實音檔
  },
  {
    title: "Brewing Balance: Mountain Oolong and the Rhythm of Nature",
    summary: "這一集以台灣高山烏龍茶為核心...映照出整座山的呼吸與世界的平衡。",
    audio: "audio/episode2.mp3"
  },
  {
    title: "A Land of Dance: Rituals and Resilience of Taiwan's Indigenous Peoples",
    summary: "這一集以台灣原住民族的祭典與舞蹈為主題...充滿韌性的生活方式。",
    audio: "audio/episode3.mp3"
  },
  {
    title: "Seasons of Celebration – Mid-Autumn Festival & Dragon Boat Festival",
    summary: "這一集以中秋節為核心...凝聚情感、讓生活持續前行的共同節奏。",
    audio: "audio/episode4.mp3"
  },
  {
    title: "Pilgrimage and Passion – The Living Faith of Taiwan",
    summary: "這一集以白沙屯媽祖遶境為主題...交織而成的獨特風景。",
    audio: "audio/episode5.mp3"
  }
];

// ===== Render Podcast =====
const podcastContainer = document.querySelector(".podcast-container");
podcasts.forEach(ep => {
  const card = document.createElement("div");
  card.classList.add("podcast-card");
  card.innerHTML = `
    <h3>${ep.title}</h3>
    <p>${ep.summary}</p>
    <audio controls>
      <source src="${ep.audio}" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  `;
  podcastContainer.appendChild(card);
});

// ===== Game Data =====
const gameQuestions = [
  {
    question: "Which snack symbolizes Taiwanese night markets?",
    choices: ["Stinky tofu", "French fries", "Sushi"],
    answer: "Stinky tofu",
    feedback: "Night markets are famous for unique local snacks!"
  },
  {
    question: "Taiwanese high mountain oolong tea comes from which area?",
    choices: ["Alishan", "Paris", "Amazon"],
    answer: "Alishan",
    feedback: "Correct! High mountain oolong tea is cultivated in Alishan."
  },
  {
    question: "Which ritual is part of Taiwan's indigenous peoples' festival?",
    choices: ["Flying Fish Festival", "Thanksgiving", "Halloween"],
    answer: "Flying Fish Festival",
    feedback: "Well done! The Flying Fish Festival is celebrated by the Tao people."
  },
  {
    question: "Which festival is associated with mooncakes and family gatherings?",
    choices: ["Mid-Autumn Festival", "Dragon Boat Festival", "Christmas"],
    answer: "Mid-Autumn Festival",
    feedback: "Correct! Mid-Autumn Festival is celebrated with mooncakes."
  },
  {
    question: "Which religious event involves Matsu pilgrimage?",
    choices: ["Baishatun Mazu Pilgrimage", "Easter Parade", "Diwali"],
    answer: "Baishatun Mazu Pilgrimage",
    feedback: "Yes! Baishatun Mazu Pilgrimage is a major religious event in Taiwan."
  }
];

// ===== Game Logic =====
const startBtn = document.getElementById("start-game");
const gameContainer = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

startBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  scoreDisplay.textContent = "";
  showQuestion();
});

function showQuestion() {
  if (currentQuestion >= gameQuestions.length) {
    gameContainer.innerHTML = `<h3>Game Over! Your score: ${score}/${gameQuestions.length}</h3>`;
    return;
  }
  const q = gameQuestions[currentQuestion];
  gameContainer.innerHTML = `<p>${q.question}</p>`;
  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.addEventListener("click", () => checkAnswer(choice));
    gameContainer.appendChild(btn);
  });
}

function checkAnswer(choice) {
  const q = gameQuestions[currentQuestion];
  if (choice === q.answer) score++;
  alert(q.feedback);
  currentQuestion++;
  showQuestion();
}