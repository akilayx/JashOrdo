/* ================== ВСПОМОГАТЕЛЬНЫЕ ================== */
function hideAll() {
  document.querySelectorAll("header, section, footer")
    .forEach(el => el.style.display = "none");
}

function showMain() {
  document.querySelectorAll("header, section, footer")
    .forEach(el => el.style.display = "");
  document.querySelectorAll(".hidden")
    .forEach(el => el.style.display = "none");
}

/* ================== ПОИСК НА ГЛАВНОЙ ================== */
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", e => {
    if (e.key === "Enter") openInternships();
  });
}

/* ================== СТРАНИЦА СТАЖИРОВОК ================== */
function openInternships() {
  hideAll();
  const page = document.getElementById("internships-page");
  page.style.display = "block";

  const global = document.getElementById("globalSearch");
  if (global && searchInput) {
    global.value = searchInput.value.toLowerCase();
    filterInternships();
  }
}

function filterInternships() {
  const value = document.getElementById("globalSearch").value.toLowerCase();
  document.querySelectorAll("#allInternships .card")
    .forEach(card => {
      card.style.display = card.innerText.toLowerCase().includes(value)
        ? "block"
        : "none";
    });
}

document.addEventListener("input", e => {
  if (e.target.id === "globalSearch") filterInternships();
});

/* ================== СИМУЛЯЦИЯ (FORAGE-МОДЕЛЬ) ================== */
let taskStep = 0;

const simulations = {
  Frontend: [
    "Ознакомься с задачей компании",
    "Исправь HTML/CSS макет",
    "Добавь интерактив на JS",
    "Отправь решение"
  ],
  School: [
    "Узнай, чем занимается профессия",
    "Пройди мини-тест",
    "Выполни практическое задание"
  ]
};

function openSimulation(type) {
  hideAll();
  document.getElementById("simulation").style.display = "block";

  document.getElementById("simTitle").innerText =
    type + " — виртуальная стажировка";

  taskStep = 0;
  updateSimulation(type);
}

function nextTask() {
  const title = document.getElementById("simTitle").innerText;
  const key = title.includes("School") ? "School" : "Frontend";
  taskStep++;
  updateSimulation(key);
}

function updateSimulation(key) {
  const tasks = simulations[key];
  const bar = document.getElementById("progressBar");

  if (taskStep < tasks.length) {
    document.getElementById("taskText").innerText = tasks[taskStep];
    bar.style.width = (taskStep / tasks.length) * 100 + "%";
  } else {
    document.getElementById("taskText").innerText =
      "Симуляция завершена 🎉 Вы можете подать заявку и прикрепить CV.";
    bar.style.width = "100%";
  }
}

/* ================== ИСТОРИИ СТУДЕНТОВ ================== */
function openStory(id) {
  hideAll();
  document.getElementById("storyPage").style.display = "block";

  const title = document.getElementById("storyTitle");
  const text = document.getElementById("storyText");

  const stories = {
    alina: {
      title: "Алина — Frontend",
      text: "Алина прошла симуляцию Frontend, выполнила задания и получила оффер на стажировку в IT-компании."
    },
    danil: {
      title: "Даниил — Маркетинг",
      text: "Даниил прошёл маркетинговую симуляцию и получил практический опыт в реальном проекте."
    },
    aijan: {
      title: "Айжан — Финтех",
      text: "Айжан прошла виртуальную стажировку и получила рекомендации от ментора."
    }
  };

  title.innerText = stories[id].title;
  text.innerText = stories[id].text;
}

/* ================== ОБУЧЕНИЕ ================== */
function openLearning(type) {
  hideAll();
  document.getElementById("learning-page").style.display = "block";

  const title = document.getElementById("learningTitle");
  const video = document.getElementById("learningVideo");

 if(type==="cv"){
t.innerText="Как составить CV";
v.src="https://youtu.be/BUEkYVGz8B0?si=MTdJocw2upbzY8-u";
}
if(type==="cover"){
t.innerText="Cover Letter";
v.src="https://youtu.be/JiBz4ye5f1M?si=_a9TIfbZok_wp_E1";
}
if(type==="interview"){
t.innerText="Интервью";
v.src="https://youtu.be/q-AmQYHyCiY?si=AEW_eA9Vgxiz2LdZ";
}
}

/* ================== КНОПКИ ================== */
document.addEventListener("click", e => {
  if (e.target.classList.contains("applyBtn")) {
    openInternships();
  }

  if (
    e.target.tagName === "BUTTON" &&
    e.target.innerText.includes("Подать")
  ) {
    alert("Заявка принята! Мы свяжемся с вами 💌");
  }
});

/* ================== ФОРМА КОНТАКТА ================== */
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Спасибо! Мы получили ваше сообщение 🚀");
    form.reset();
  });
}

/* ================== НАЗАД ================== */
function goBack() {
  showMain();
}