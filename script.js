const screens = [...document.querySelectorAll('.screen')];
const progressDots = [...document.querySelectorAll('.progress-dot')];
const sparkleLayer = document.getElementById('sparkle-layer');

const q1Choices = document.getElementById('q1-choices');
const q1Result = document.getElementById('q1-result');
const q1Visual = document.getElementById('q1-visual');
const q1Message = document.getElementById('q1-message');
const q1Detail = document.getElementById('q1-detail');

const q2Choices = document.getElementById('q2-choices');
const q2Result = document.getElementById('q2-result');
const q2Visual = document.getElementById('q2-visual');
const q2Message = document.getElementById('q2-message');
const q2Detail = document.getElementById('q2-detail');

const illustrations = {
  hug: `
    <div class="answer-illustration" aria-hidden="true">
      <svg viewBox="0 0 340 245">
        <g class="bear-hug-left">
          <circle cx="122" cy="112" r="58" fill="#FFE6CB" stroke="#6A5559" stroke-width="5"/>
          <circle cx="84" cy="68" r="22" fill="#FFE6CB" stroke="#6A5559" stroke-width="5"/>
          <circle cx="157" cy="68" r="22" fill="#FFE6CB" stroke="#6A5559" stroke-width="5"/>
          <circle cx="105" cy="108" r="5" fill="#4E4245"/>
          <circle cx="139" cy="108" r="5" fill="#4E4245"/>
          <ellipse cx="122" cy="128" rx="18" ry="14" fill="#FFF8F1"/>
          <path d="M117 124Q122 120 127 124M122 126V132" fill="none" stroke="#4E4245" stroke-width="4" stroke-linecap="round"/>
          <ellipse cx="92" cy="127" rx="10" ry="6" fill="#FFB7C8" opacity=".65"/>
          <path d="M96 159Q135 202 173 163" fill="none" stroke="#6A5559" stroke-width="22" stroke-linecap="round"/>
        </g>
        <g class="bear-hug-right">
          <ellipse cx="211" cy="116" rx="59" ry="56" fill="#FFF8F1" stroke="#6A5559" stroke-width="5"/>
          <path d="M173 83C157 68 161 43 179 35C195 28 207 40 210 55" fill="#FFF8F1" stroke="#6A5559" stroke-width="5"/>
          <path d="M249 83C265 68 261 43 243 35C227 28 215 40 212 55" fill="#FFF8F1" stroke="#6A5559" stroke-width="5"/>
          <circle cx="194" cy="112" r="5" fill="#4E4245"/>
          <circle cx="228" cy="112" r="5" fill="#4E4245"/>
          <path d="M203 130Q211 138 219 130" fill="none" stroke="#4E4245" stroke-width="4" stroke-linecap="round"/>
          <ellipse cx="181" cy="130" rx="10" ry="6" fill="#FFB7C8" opacity=".65"/>
          <ellipse cx="241" cy="130" rx="10" ry="6" fill="#FFB7C8" opacity=".65"/>
          <path d="M242 160Q205 202 166 163" fill="none" stroke="#6A5559" stroke-width="22" stroke-linecap="round"/>
        </g>
        <path class="heart-pulse" d="M169 61C159 47 139 53 141 70C143 85 169 98 169 98C169 98 195 85 197 70C199 53 179 47 169 61Z" fill="#FF7699"/>
        <ellipse cx="170" cy="211" rx="94" ry="13" fill="#EBD8D0" opacity=".55"/>
      </svg>
    </div>`,

  clap: `
    <div class="answer-illustration" aria-hidden="true">
      <svg viewBox="0 0 340 245">
        <circle cx="170" cy="116" r="68" fill="#FFF0C9" stroke="#6A5559" stroke-width="5"/>
        <circle cx="125" cy="66" r="25" fill="#FFF0C9" stroke="#6A5559" stroke-width="5"/>
        <circle cx="215" cy="66" r="25" fill="#FFF0C9" stroke="#6A5559" stroke-width="5"/>
        <path d="M143 111Q153 101 163 111" fill="none" stroke="#4E4245" stroke-width="5" stroke-linecap="round"/>
        <path d="M177 111Q187 101 197 111" fill="none" stroke="#4E4245" stroke-width="5" stroke-linecap="round"/>
        <path d="M156 136Q170 149 184 136" fill="none" stroke="#4E4245" stroke-width="5" stroke-linecap="round"/>
        <ellipse cx="130" cy="134" rx="12" ry="7" fill="#FFB7C8" opacity=".75"/>
        <ellipse cx="210" cy="134" rx="12" ry="7" fill="#FFB7C8" opacity=".75"/>
        <g class="clap-left">
          <path d="M126 165Q98 175 99 200" fill="none" stroke="#6A5559" stroke-width="18" stroke-linecap="round"/>
          <ellipse cx="117" cy="188" rx="18" ry="13" fill="#FFF0C9" stroke="#6A5559" stroke-width="4"/>
        </g>
        <g class="clap-right">
          <path d="M214 165Q242 175 241 200" fill="none" stroke="#6A5559" stroke-width="18" stroke-linecap="round"/>
          <ellipse cx="223" cy="188" rx="18" ry="13" fill="#FFF0C9" stroke="#6A5559" stroke-width="4"/>
        </g>
        <path d="M86 154L71 143M93 136L85 119M248 154L263 143M241 136L249 119" stroke="#FFB84A" stroke-width="5" stroke-linecap="round"/>
        <path d="M120 185Q170 218 220 185" fill="#FF9FB7" stroke="#6A5559" stroke-width="5" stroke-linejoin="round"/>
      </svg>
    </div>`,

  love: `
    <div class="answer-illustration" aria-hidden="true">
      <svg viewBox="0 0 340 245">
        <g class="float-slow">
          <circle cx="120" cy="138" r="56" fill="#FFE9D8" stroke="#6A5559" stroke-width="5"/>
          <circle cx="91" cy="91" r="21" fill="#FFE9D8" stroke="#6A5559" stroke-width="5"/>
          <circle cx="149" cy="91" r="21" fill="#FFE9D8" stroke="#6A5559" stroke-width="5"/>
          <circle cx="104" cy="135" r="5" fill="#4E4245"/><circle cx="136" cy="135" r="5" fill="#4E4245"/>
          <path d="M112 151Q120 159 128 151" fill="none" stroke="#4E4245" stroke-width="4" stroke-linecap="round"/>
          <circle cx="220" cy="138" r="56" fill="#FFF8F1" stroke="#6A5559" stroke-width="5"/>
          <path d="M184 105C171 89 175 68 192 61C207 55 218 67 220 82" fill="#FFF8F1" stroke="#6A5559" stroke-width="5"/>
          <path d="M256 105C269 89 265 68 248 61C233 55 222 67 220 82" fill="#FFF8F1" stroke="#6A5559" stroke-width="5"/>
          <circle cx="204" cy="135" r="5" fill="#4E4245"/><circle cx="236" cy="135" r="5" fill="#4E4245"/>
          <path d="M212 151Q220 159 228 151" fill="none" stroke="#4E4245" stroke-width="4" stroke-linecap="round"/>
          <path d="M143 178Q170 197 197 178" fill="none" stroke="#6A5559" stroke-width="16" stroke-linecap="round"/>
        </g>
        <g class="heart-pulse">
          <path d="M170 56C157 38 132 47 135 68C138 88 170 104 170 104C170 104 202 88 205 68C208 47 183 38 170 56Z" fill="#FF6F94"/>
        </g>
        <path d="M70 53C64 44 51 49 53 60C54 70 70 78 70 78C70 78 86 70 87 60C89 49 76 44 70 53Z" fill="#FF9CB3" opacity=".75"/>
        <path d="M276 65C270 56 257 61 259 72C260 82 276 90 276 90C276 90 292 82 293 72C295 61 282 56 276 65Z" fill="#FF9CB3" opacity=".75"/>
      </svg>
    </div>`
};

function showScreen(id) {
  const target = document.getElementById(id);
  if (!target) return;

  screens.forEach((screen) => {
    const isTarget = screen === target;
    screen.hidden = !isTarget;
    screen.classList.toggle('active', isTarget);
  });

  const activeStep = Number(target.dataset.step || 0);
  progressDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === activeStep);
    dot.classList.toggle('complete', index < activeStep);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  const heading = target.querySelector('h1, h2');
  if (heading) {
    heading.setAttribute('tabindex', '-1');
    window.setTimeout(() => heading.focus({ preventScroll: true }), 120);
  }

  if (id === 'ending') {
    burstHearts(18);
  }
}

function burstHearts(count = 12) {
  const icons = ['💗', '💖', '💕', '♡', '✨'];
  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = icons[Math.floor(Math.random() * icons.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.setProperty('--duration', `${2.2 + Math.random() * 1.8}s`);
    heart.style.setProperty('--size', `${16 + Math.random() * 20}px`);
    heart.style.setProperty('--sway', `${-55 + Math.random() * 110}px`);
    sparkleLayer.appendChild(heart);
    window.setTimeout(() => heart.remove(), 4300);
  }
}

function answerQuestionOne(answer) {
  q1Choices.hidden = true;
  q1Result.hidden = false;

  if (answer === 'tired') {
    q1Visual.innerHTML = illustrations.hug;
    q1Message.textContent = 'มาาา เค้ากอดดด 🫂';
    q1Detail.textContent = 'วันนี้เก่งมากก แต่จริง ๆ เก่งทุกวันอยู่ละ :3';
    burstHearts(8);
  } else {
    q1Visual.innerHTML = illustrations.clap;
    q1Message.textContent = 'เก่งมากครับเบ้บ! 👏';
    q1Detail.textContent = 'ปรบมือให้คนเก่งของเค้าาา';
    burstHearts(7);
  }
}

function answerQuestionTwo(answer) {
  q2Choices.hidden = true;
  q2Result.hidden = false;

  if (answer === 'miss') {
    q2Visual.innerHTML = illustrations.love;
    q2Message.textContent = 'คิดถึงเหมือนกันนน <33';
    q2Detail.textContent = 'คิดถึงแบบเยอะมากก มากกว่าที่พิมพ์หมดอีก';
    burstHearts(16);
  } else {
    q2Visual.innerHTML = `
      <div class="cat-frame">
<img src="./sad-cat.png" alt="แมวเศร้าาาา 🥺" />
      </div>`;
    q2Message.textContent = 'งืม ๆ';
    q2Detail.textContent = 'แต่เค้าก็คิดถึงอยู่ดีแหละะะ 🥺';
  }
}

document.addEventListener('click', (event) => {
  const nextButton = event.target.closest('[data-next]');
  if (nextButton) {
    showScreen(nextButton.dataset.next);
    return;
  }

  const answerButton = event.target.closest('[data-answer]');
  if (!answerButton) return;

  const answer = answerButton.dataset.answer;
  if (answer === 'tired' || answer === 'not-tired') {
    answerQuestionOne(answer);
  }
  if (answer === 'miss' || answer === 'not-miss') {
    answerQuestionTwo(answer);
  }
});

document.getElementById('restart-button').addEventListener('click', () => {
  q1Choices.hidden = false;
  q1Result.hidden = true;
  q1Visual.innerHTML = '';

  q2Choices.hidden = false;
  q2Result.hidden = true;
  q2Visual.innerHTML = '';

  showScreen('welcome');
});
