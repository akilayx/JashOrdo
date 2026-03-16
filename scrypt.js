// ============================================================
// Jash Ordo — script.js
// ============================================================

'use strict';

// ─────────────────────────────────────────────
// ДАННЫЕ: стажировки
// ─────────────────────────────────────────────
const SIMULATIONS = {
  'Frontend — MBank': {
    company: 'MBank',
    desc: 'Почувствуй себя frontend-разработчиком: верстай реальные экраны, пиши JS-логику и сдавай код на ревью.',
    tasks: [
      {
        title: 'Задание 1 — Брифинг',
        text: 'Ознакомься с техническим заданием от MBank. Тебе нужно сверстать страницу входа в личный кабинет. Изучи макет и требования.',
        input: 'text',
        placeholder: 'Опиши своими словами, что нужно сделать...',
      },
      {
        title: 'Задание 2 — Вёрстка',
        text: 'Напиши HTML-структуру формы входа: два поля (логин, пароль) и кнопка. Опиши или напиши код ниже.',
        input: 'code',
        placeholder: '<form>\n  <!-- твой код -->\n</form>',
      },
      {
        title: 'Задание 3 — Стилизация',
        text: 'Какие CSS-свойства ты используешь, чтобы форма выглядела современно? Перечисли ключевые свойства и объясни выбор.',
        input: 'text',
        placeholder: 'Например: border-radius для скруглений, потому что...',
      },
      {
        title: 'Задание 4 — Код-ревью',
        text: 'Твой ментор оставил комментарий: "Кнопка не адаптивна на мобильных". Как ты это исправишь?',
        input: 'text',
        placeholder: 'Опиши решение...',
      },
    ],
  },

  'Data Analyst — MBank': {
    company: 'MBank',
    desc: 'Анализируй финансовые данные, строй дашборды и формулируй выводы для бизнеса.',
    tasks: [
      {
        title: 'Задание 1 — Знакомство с данными',
        text: 'У тебя есть таблица из 500 транзакций. Какие первые шаги ты сделаешь для анализа? Перечисли по порядку.',
        input: 'text',
        placeholder: '1. Проверю на дубликаты...',
      },
      {
        title: 'Задание 2 — SQL-запрос',
        text: 'Напиши SQL-запрос, который показывает топ-5 клиентов по сумме транзакций за последний месяц.',
        input: 'code',
        placeholder: 'SELECT ...',
      },
      {
        title: 'Задание 3 — Интерпретация',
        text: 'Ты видишь аномалию: у одного клиента 50 транзакций за один день. Что это может значить? Какие действия предложишь?',
        input: 'text',
        placeholder: 'Это может быть...',
      },
    ],
  },

  'Маркетинг — IT Agency': {
    company: 'IT Agency',
    desc: 'Разработай маркетинговую стратегию для реального IT-продукта: от анализа аудитории до рекламной кампании.',
    tasks: [
      {
        title: 'Задание 1 — Анализ аудитории',
        text: 'IT Agency запускает новое мобильное приложение для студентов. Опиши целевую аудиторию: возраст, интересы, боли.',
        input: 'text',
        placeholder: 'Целевая аудитория: 18–25 лет...',
      },
      {
        title: 'Задание 2 — Контент-план',
        text: 'Придумай 3 поста для Instagram-страницы приложения. Кратко опиши тему и идею каждого.',
        input: 'text',
        placeholder: 'Пост 1: ...\nПост 2: ...\nПост 3: ...',
      },
      {
        title: 'Задание 3 — Рекламный бюджет',
        text: 'Тебе дали 10 000 сом на таргетированную рекламу. Как распределишь бюджет между Instagram, TikTok и Google? Объясни.',
        input: 'text',
        placeholder: 'Instagram — X сом, потому что...',
      },
    ],
  },

  'Fintech — Салым Финанс': {
    company: 'Салым Финанс',
    desc: 'Погрузись в мир финансовых технологий: анализируй продукты, работай с данными клиентов, предлагай улучшения.',
    tasks: [
      {
        title: 'Задание 1 — Продуктовый анализ',
        text: 'Изучи два финтех-продукта: мобильный кошелёк и кредитная карта. В чём их ключевые отличия для пользователя?',
        input: 'text',
        placeholder: 'Мобильный кошелёк удобен тем что...',
      },
      {
        title: 'Задание 2 — Метрики',
        text: 'Какие 3 ключевые метрики ты будешь отслеживать для оценки успешности нового платёжного приложения?',
        input: 'text',
        placeholder: '1. DAU (ежедневные активные пользователи)...',
      },
      {
        title: 'Задание 3 — Риски',
        text: 'Клиент заявляет, что не проводил транзакцию на 5000 сом. Опиши шаги по расследованию ситуации.',
        input: 'text',
        placeholder: 'Шаг 1: Проверить логи...',
      },
    ],
  },

  'UI/UX Design': {
    company: 'IT Agency',
    desc: 'Спроектируй пользовательский интерфейс для мобильного приложения: от исследования до прототипа.',
    tasks: [
      {
        title: 'Задание 1 — User Research',
        text: 'Ты проектируешь приложение для поиска стажировок (как Jash Ordo). Напиши 3 вопроса для интервью с пользователями.',
        input: 'text',
        placeholder: 'Вопрос 1: Как вы сейчас ищете стажировки?...',
      },
      {
        title: 'Задание 2 — User Flow',
        text: 'Опиши пошаговый путь пользователя: от открытия приложения до успешной подачи заявки на стажировку.',
        input: 'text',
        placeholder: 'Шаг 1: Открыл приложение → ...',
      },
      {
        title: 'Задание 3 — Прототип',
        text: 'Перечисли экраны, которые войдут в прототип приложения. Опиши ключевые элементы каждого экрана.',
        input: 'text',
        placeholder: 'Экран 1 — Главная: карточки стажировок, поиск, фильтр...',
      },
    ],
  },

  'Project Manager': {
    company: 'Jash Ordo Lab',
    desc: 'Управляй командой разработчиков: планируй спринты, решай конфликты, доставляй продукт в срок.',
    tasks: [
      {
        title: 'Задание 1 — Планирование спринта',
        text: 'У тебя 2-недельный спринт и команда из 3 человек. Задачи: верстка главной, логика фильтра, тестирование. Распредели задачи.',
        input: 'text',
        placeholder: 'Разработчик 1 — верстка, потому что...',
      },
      {
        title: 'Задание 2 — Конфликт в команде',
        text: 'Два разработчика не могут договориться об архитектуре. Дедлайн через 3 дня. Как ты поступишь как PM?',
        input: 'text',
        placeholder: 'Я организую короткую встречу на 30 минут...',
      },
      {
        title: 'Задание 3 — Ретроспектива',
        text: 'Спринт завершён, но одна задача не успела. Что ты скажешь стейкхолдерам и что изменишь в следующем спринте?',
        input: 'text',
        placeholder: 'Стейкхолдерам объясню причину и новый срок...',
      },
    ],
  },

  'QA Tester': {
    company: 'Jash Ordo Lab',
    desc: 'Найди баги раньше, чем их найдут пользователи. Тестируй мобильное приложение и пиши баг-репорты.',
    tasks: [
      {
        title: 'Задание 1 — Тест-кейсы',
        text: 'Напиши 3 тест-кейса для кнопки "Подать заявку" в мобильном приложении.',
        input: 'text',
        placeholder: 'Тест 1: Нажатие при заполненной форме → ожидаемый результат: ...',
      },
      {
        title: 'Задание 2 — Баг-репорт',
        text: 'Ты нашёл баг: при вводе email без @ форма всё равно отправляется. Напиши баг-репорт.',
        input: 'text',
        placeholder: 'Название: Форма отправляется с невалидным email\nШаги: 1...',
      },
      {
        title: 'Задание 3 — Регрессия',
        text: 'После фикса бага разработчик выложил обновление. Что ты проверишь в первую очередь и почему?',
        input: 'text',
        placeholder: 'Сначала проверю сам зафиксированный баг, затем...',
      },
    ],
  },

  'Финансы — Optima Bank': {
    company: 'Optima Bank',
    desc: 'Работай с финансовыми моделями, анализируй отчётность и готовь презентации для руководства.',
    tasks: [
      {
        title: 'Задание 1 — Анализ отчёта',
        text: 'Выручка компании за квартал: янв — 500к, фев — 480к, мар — 620к сом. Какие выводы ты сделаешь и какие вопросы зададишь?',
        input: 'text',
        placeholder: 'В феврале наблюдается спад, возможные причины...',
      },
      {
        title: 'Задание 2 — Бюджет',
        text: 'Тебе нужно составить бюджет отдела на месяц. Какие статьи расходов ты включишь? Перечисли и объясни приоритеты.',
        input: 'text',
        placeholder: '1. Зарплаты — обязательная статья...',
      },
      {
        title: 'Задание 3 — Презентация',
        text: 'Как ты представишь финансовые результаты директору за 5 минут? Опиши структуру своего выступления.',
        input: 'text',
        placeholder: 'Слайд 1: ключевые цифры...',
      },
    ],
  },

  'Junior IT': {
    company: 'Jash Ordo',
    desc: 'Первые шаги в мире технологий. Подходит для 8–9 класса — никаких знаний не нужно!',
    tasks: [
      {
        title: 'Задание 1 — Что такое программа?',
        text: 'Представь, что ты объясняешь другу что такое программа. Напиши объяснение простыми словами (3–5 предложений).',
        input: 'text',
        placeholder: 'Программа — это как рецепт для компьютера...',
      },
      {
        title: 'Задание 2 — Логика',
        text: 'Напиши инструкцию "как заварить чай" в виде шагов. Представь, что объясняешь роботу — он понимает только точные команды.',
        input: 'text',
        placeholder: 'Шаг 1: Налить воду в чайник...',
      },
      {
        title: 'Задание 3 — Мини-страница',
        text: 'Используя HTML, напиши простую страницу: заголовок "Привет, я [твоё имя]" и один абзац о себе.',
        input: 'code',
        placeholder: '<h1>Привет, я Айдай</h1>\n<p>Мне 15 лет и я учусь в...</p>',
      },
    ],
  },

  'Юный маркетолог': {
    company: 'Jash Ordo',
    desc: 'Узнай как работает реклама и создай свой первый мини-проект для соцсетей.',
    tasks: [
      {
        title: 'Задание 1 — Любимый бренд',
        text: 'Выбери свой любимый бренд (одежда, еда, приложение). Почему ты его любишь? Что делает его рекламу привлекательной?',
        input: 'text',
        placeholder: 'Мой любимый бренд — ..., потому что...',
      },
      {
        title: 'Задание 2 — Придумай пост',
        text: 'Придумай Instagram-пост для школьного магазина с канцтоварами. Напиши текст поста и опиши, какой будет картинка.',
        input: 'text',
        placeholder: 'Текст поста: ...\nКартинка: ...',
      },
      {
        title: 'Задание 3 — Целевая аудитория',
        text: 'Для кого ты делаешь рекламу? Опиши "идеального покупателя" школьного магазина: возраст, интересы, что им важно.',
        input: 'text',
        placeholder: 'Наш покупатель — ученик 7–11 класса...',
      },
    ],
  },

  'Предпринимательство': {
    company: 'Jash Ordo',
    desc: 'Придумай бизнес-идею, посчитай экономику и защити её перед виртуальным жюри.',
    tasks: [
      {
        title: 'Задание 1 — Идея',
        text: 'Придумай бизнес-идею для Бишкека. Что за продукт или услуга? Какую проблему решает? Кто будет платить?',
        input: 'text',
        placeholder: 'Идея: доставка домашней еды для студентов...',
      },
      {
        title: 'Задание 2 — Экономика',
        text: 'Посчитай: сколько стоит твой продукт, сколько тебе нужно продать в месяц, чтобы заработать 30 000 сом?',
        input: 'text',
        placeholder: 'Цена продукта: X сом\nЗатраты: ...\nНужно продать: ...',
      },
      {
        title: 'Задание 3 — Питч',
        text: 'Напиши 3-минутный питч для инвесторов. Структура: проблема → решение → рынок → команда → что просишь.',
        input: 'text',
        placeholder: 'Проблема: студенты не успевают готовить...',
      },
    ],
  },
};

// ─────────────────────────────────────────────
// ДАННЫЕ: обучение
// ─────────────────────────────────────────────
const LEARNING_DATA = {
  cv: {
    tag: 'Карьерные ресурсы',
    title: 'Как составить CV',
    desc: 'Резюме — это твой первый шанс произвести впечатление. Посмотри видео и изучи советы ниже.',
    videoId: 'BUEkYVGz8B0',
    tips: [
      { icon: '✅', text: 'Начни с контактных данных: имя, email, телефон, LinkedIn или GitHub.' },
      { icon: '✅', text: 'Добавь краткое "О себе" — 2–3 предложения о твоих навыках и цели.' },
      { icon: '✅', text: 'Раздел "Опыт": даже волонтёрство, учебные проекты, фриланс считаются.' },
      { icon: '✅', text: 'Навыки: раздели на хард-скиллы (Excel, Figma) и софт-скиллы (коммуникация).' },
      { icon: '❌', text: 'Не добавляй фото, если это не требует компания.' },
      { icon: '❌', text: 'Не пиши "хочу развиваться" — пиши конкретно, чего хочешь достичь.' },
    ],
  },
  cover: {
    tag: 'Карьерные ресурсы',
    title: 'Cover Letter',
    desc: 'Сопроводительное письмо — шанс рассказать то, что не влезает в CV.',
    videoId: 'JiBz4ye5f1M',
    tips: [
      { icon: '✅', text: 'Первый абзац: кто ты и на какую позицию претендуешь.' },
      { icon: '✅', text: 'Второй абзац: почему именно эта компания? Покажи, что ты изучил её.' },
      { icon: '✅', text: 'Третий абзац: какой конкретный опыт или навык поможет тебе справиться.' },
      { icon: '✅', text: 'Финал: призыв к действию — "Буду рад пообщаться на интервью".' },
      { icon: '❌', text: 'Не копируй шаблонные фразы вроде "ответственный, коммуникабельный".' },
      { icon: '❌', text: 'Не делай письмо длиннее одной страницы A4.' },
    ],
  },
  interview: {
    tag: 'Карьерные ресурсы',
    title: 'Собеседование',
    desc: 'Интервью — это разговор двух людей, а не экзамен. Готовься и будь собой.',
    videoId: 'q-AmQYHyCiY',
    tips: [
      { icon: '✅', text: '"Расскажите о себе" — это не пересказ CV. Кратко: кто, что умеешь, почему здесь.' },
      { icon: '✅', text: 'Используй метод STAR: Ситуация → Задача → Действие → Результат.' },
      { icon: '✅', text: 'Изучи компанию заранее: продукты, последние новости, ценности.' },
      { icon: '✅', text: 'Задай 2–3 вопроса в конце — это показывает твой интерес.' },
      { icon: '❌', text: 'Не говори плохо о прошлых работодателях или учителях.' },
      { icon: '❌', text: 'Не опаздывай — даже онлайн. Подключись за 5 минут до начала.' },
    ],
  },
  linkedin: {
    tag: 'Карьерные ресурсы',
    title: 'LinkedIn профиль',
    desc: 'LinkedIn — это твоя онлайн-визитка для рекрутеров. Правильно оформленный профиль работает за тебя 24/7.',
    videoId: 'BUEkYVGz8B0',
    tips: [
      { icon: '✅', text: 'Добавь профессиональное фото — профили с фото получают в 14 раз больше просмотров.' },
      { icon: '✅', text: 'Headline: не просто "Студент", а "Frontend Developer | HTML CSS JS | Ищу стажировку".' },
      { icon: '✅', text: 'Раздел About: 3–5 предложений о себе, навыках и цели.' },
      { icon: '✅', text: 'Добавь учебные и личные проекты в Experience или Projects.' },
      { icon: '❌', text: 'Не оставляй профиль пустым — даже базовая информация лучше, чем ничего.' },
      { icon: '❌', text: 'Не рассылай запросы без персонального сообщения — пиши, почему хочешь добавиться.' },
    ],
  },
};

// ─────────────────────────────────────────────
// СОСТОЯНИЕ
// ─────────────────────────────────────────────
const state = {
  currentSimulation: null,
  taskStep: 0,
  answers: [],
  lastApplyCompany: '',
};

// ─────────────────────────────────────────────
// УТИЛИТЫ
// ─────────────────────────────────────────────

/** Скрыть все секции */
function hideAll() {
  document.querySelectorAll('header, main > section, footer').forEach((el) => {
    el.style.display = 'none';
  });
}

/** Показать одну секцию */
function showSection(id) {
  hideAll();
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = '';
  el.removeAttribute('aria-hidden');
  el.classList.add('fade-in');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/** Вернуться на главную */
function goBack() {
  document.querySelectorAll('header, main > section, footer').forEach((el) => {
    el.style.display = '';
  });
  // скрыть page-view секции
  document.querySelectorAll('.page-view').forEach((el) => {
    el.style.display = 'none';
    el.setAttribute('aria-hidden', 'true');
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/** Конвертировать YouTube URL → embed */
function toEmbedUrl(videoId) {
  return `[youtube.com](https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1)`;
}

// ─────────────────────────────────────────────
// НАВИГАЦИЯ — СТАЖИРОВКИ
// ─────────────────────────────────────────────
function openInternships() {
  showSection('internships-page');
  initFilters();
  initGlobalSearch();
}

// ─────────────────────────────────────────────
// ФИЛЬТР
// ─────────────────────────────────────────────
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
    });
  });
}

function applyFilter(category) {
  const cards = document.querySelectorAll('#allInternships .card');
  cards.forEach((card) => {
    const match = category === 'all' || card.dataset.category === category;
    card.style.display = match ? '' : 'none';
  });
}

// ─────────────────────────────────────────────
// ПОИСК
// ─────────────────────────────────────────────
function initGlobalSearch() {
  const input = document.getElementById('globalSearch');
  if (!input) return;
  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();
    const cards = document.querySelectorAll('#allInternships .card');
    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? '' : 'none';
    });
  });
}

// Поиск на главной — открывает страницу стажировок и фильтрует
function initHeroSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      openInternships();
      setTimeout(() => {
        const globalInput = document.getElementById('globalSearch');
        if (globalInput) {
          globalInput.value = input.value;
          globalInput.dispatchEvent(new Event('input'));
        }
      }, 100);
    }
  });
}

// ─────────────────────────────────────────────
// СИМУЛЯЦИЯ
// ─────────────────────────────────────────────
function openSimulation(track) {
  const sim = SIMULATIONS[track];
  if (!sim) {
    console.warn('Симуляция не найдена:', track);
    return;
  }

  state.currentSimulation = sim;
  state.taskStep = 0;
  state.answers = [];

  showSection('simulation');

  document.getElementById('simCompanyTag').textContent = sim.company;
  document.getElementById('sim-heading').textContent = track + ' — симуляция';
  document.getElementById('simDesc').textContent = sim.desc;

  document.getElementById('simComplete').classList.add('hidden');
  document.getElementById('simTaskCard').classList.remove('hidden');
  document.getElementById('simActions').classList.remove('hidden');

  renderTask();
}

function renderTask() {
  const sim = state.currentSimulation;
  const tasks = sim.tasks;
  const step = state.taskStep;

  if (step >= tasks.length) {
    showSimComplete();
    return;
  }

  const task = tasks[step];
  const total = tasks.length;
  const pct = Math.round((step / total) * 100);

  // Прогресс
  const bar = document.getElementById('progressBar');
  bar.style.width = pct + '%';
  bar.closest('[role="progressbar"]').setAttribute('aria-valuenow', pct);
  document.getElementById('simStepLabel').textContent =
    `Шаг ${step + 1} из ${total}`;

  // Задание
  document.getElementById('simTaskTitle').textContent = task.title;
  document.getElementById('simTaskText').textContent = task.text;

  // Поле ввода
  const inputWrap = document.getElementById('simTaskInput');
  inputWrap.innerHTML = '';

  if (task.input === 'code') {
    const ta = document.createElement('textarea');
    ta.className = 'sim-textarea sim-textarea--code';
    ta.placeholder = task.placeholder;
    ta.rows = 6;
    ta.setAttribute('aria-label', 'Введи код');
    inputWrap.appendChild(ta);
  } else {
    const ta = document.createElement('textarea');
    ta.className = 'sim-textarea';
    ta.placeholder = task.placeholder;
    ta.rows = 4;
    ta.setAttribute('aria-label', 'Введи ответ');
    inputWrap.appendChild(ta);
  }
}

function nextTask() {
  // Сохраняем ответ
  const ta = document.querySelector('#simTaskInput textarea');
  const answer = ta ? ta.value.trim() : '';
  state.answers.push(answer);
  state.taskStep++;
  renderTask();
}

function showSimComplete() {
  const bar = document.getElementById('progressBar');
  bar.style.width = '100%';
  bar.closest('[role="progressbar"]').setAttribute('aria-valuenow', 100);
  document.getElementById('simStepLabel').textContent = 'Завершено!';

  document.getElementById('simTaskCard').classList.add('hidden');
  document.getElementById('simActions').classList.add('hidden');
  document.getElementById('simComplete').classList.remove('hidden');
}

// ─────────────────────────────────────────────
// ФОРМА ЗАЯВКИ
// ─────────────────────────────────────────────
function openApply(company = '') {
  state.lastApplyCompany = company;
  showSection('apply-page');

  const nameEl = document.getElementById('apply-heading');
  const companyEl = document.getElementById('applyCompanyName');
  if (nameEl) nameEl.textContent = 'Оставь заявку';
  if (companyEl) {
    companyEl.textContent = company ? `Позиция: ${company}` : '';
  }
}

function initApplyForm() {
  const form = document.getElementById('applyForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.getElementById('applyStatus');

    // Простая валидация
    const email = document.getElementById('applyEmail').value.trim();
    if (!email.includes('@')) {
      showFormStatus(status, '❌ Введи корректный email', 'error');
      return;
    }

    // Имитация отправки
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Отправляем...';
    btn.disabled = true;

    setTimeout(() => {
      showFormStatus(
        status,
        '✅ Заявка отправлена! Мы свяжемся с тобой в течение 2 рабочих дней.',
        'success',
      );
      form.reset();
      btn.textContent = 'Отправить заявку';
      btn.disabled = false;
    }, 1500);
  });
}

// ─────────────────────────────────────────────
// ОБУЧЕНИЕ
// ─────────────────────────────────────────────
function openLearning(topic) {
  const data = LEARNING_DATA[topic];
  if (!data) return;

  showSection('learning-page');

  document.getElementById('learningTag').textContent = data.tag;
  document.getElementById('learning-page-heading').textContent = data.title;
  document.getElementById('learningDesc').textContent = data.desc;

  const iframe = document.getElementById('learningVideo');
  iframe.src = toEmbedUrl(data.videoId);

  // Советы
  const tipsContainer = document.getElementById('learningTips');
  tipsContainer.innerHTML = `
    <h3>Ключевые советы</h3>
    <ul class="tips-list">
      ${data.tips.map((t) => `<li class="tip"><span class="tip__icon">${t.icon}</span><span>${t.text}</span></li>`).join('')}
    </ul>
  `;
}

// ─────────────────────────────────────────────
// КОНТАКТНАЯ ФОРМА
// ─────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    const btn = form.querySelector('button[type="submit"]');

    btn.textContent = 'Отправляем...';
    btn.disabled = true;

    setTimeout(() => {
      status.classList.remove('sr-only');
      showFormStatus(status, '✅ Сообщение отправлено! Скоро ответим.', 'success');
      form.reset();
      btn.textContent = 'Отправить';
      btn.disabled = false;
    }, 1500);
  });
}

function showFormStatus(el, msg, type) {
  el.textContent = msg;
  el.className = `form-status form-status--${type}`;
}

// ─────────────────────────────────────────────
// БУРГЕР-МЕНЮ
// ─────────────────────────────────────────────
function initBurger() {
  const burger = document.querySelector('.burger');
  const navList = document.getElementById('nav-list');
  if (!burger || !navList) return;

  burger.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('nav-links--open');
    burger.setAttribute('aria-expanded', isOpen);
  });

  // Закрыть при клике на ссылку
  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('nav-links--open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ─────────────────────────────────────────────
// ПРОГРЕСС-БАР СКРОЛЛА
// ─────────────────────────────────────────────
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const scrolled =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = scrolled + '%';
  });
}

// ─────────────────────────────────────────────
// НАВБАР — тень при скролле
// ─────────────────────────────────────────────
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 40);
  });
}

// ─────────────────────────────────────────────
// АНИМАЦИЯ КАРТОЧЕК при появлении
// ─────────────────────────────────────────────
function initCardAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('card--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll('.card, .story, .step').forEach((el) => {
    observer.observe(el);
  });
}

// ─────────────────────────────────────────────
// ДЕЛЕГИРОВАНИЕ СОБЫТИЙ (все кнопки через data-action)
// ─────────────────────────────────────────────
function initActions() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;

    const action = btn.dataset.action;

    switch (action) {
      case 'open-internships':
        openInternships();
        break;

      case 'open-simulation':
        openSimulation(btn.dataset.track);
        break;

      case 'open-apply':
        openApply(btn.dataset.company || '');
        break;

      case 'open-apply-after-sim':
        openApply(state.currentSimulation?.company || '');
        break;

      case 'next-task':
        nextTask();
        break;

      case 'open-learning':
        openLearning(btn.dataset.topic);
        break;

      case 'go-back':
        goBack();
        break;

      default:
        break;
    }
  });
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initActions();
  initBurger();
  initHeroSearch();
  initContactForm();
  initApplyForm();
  initScrollProgress();
  initNavbarScroll();
  initCardAnimation();

  // Скрыть все page-view по умолчанию
  document.querySelectorAll('.page-view').forEach((el) => {
    el.style.display = 'none';
    el.setAttribute('aria-hidden', 'true');
  });
});
