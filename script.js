let currentQuestionIndex = 0;
const userAnswers = new Array(questions.length).fill(null);
const form = document.getElementById('quiz-form');

function renderQuestion(index) {
  const q = questions[index];
  form.innerHTML = `
    <div class="question">
      <p><strong>Câu ${index + 1}: ${q.question}</strong></p>
      <div class="options">
        ${q.options.map((option, i) => `
          <label>
            <input type="radio" name="answer" value="${i}" ${userAnswers[index] === i ? 'checked' : ''}>
            ${option}
          </label>
        `).join('')}
      </div>
    </div>
  `;
}

function saveAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (selected) {
    userAnswers[currentQuestionIndex] = parseInt(selected.value);
  }
}

function nextQuestion() {
  saveAnswer();
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
  }
}

function prevQuestion() {
  saveAnswer();
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion(currentQuestionIndex);
  }
}

function submitQuiz() {
  saveAnswer();
  let score = 0;
  questions.forEach((q, i) => {
    if (userAnswers[i] === q.correctAnswer) {
      score++;
    }
  });
  document.getElementById('result').textContent = `Bạn đúng ${score}/40 câu.`;
}

renderQuestion(currentQuestionIndex);

/*đồng hồ */
let timeLimit = 20 * 60; // 20 phút
let timerInterval;

function startTimer() {
  const timerEl = document.getElementById('timer');

  timerInterval = setInterval(() => {
    if (timeLimit <= 0) {
      clearInterval(timerInterval);
      alert("Hết giờ! Bài sẽ được nộp tự động.");
      submitQuiz();
      return;
    }

    const minutes = Math.floor(timeLimit / 60);
    const seconds = timeLimit % 60;
    timerEl.textContent = `⏱️ Thời gian còn lại: ${minutes} phút ${seconds < 10 ? '0' : ''}${seconds} giây`;
    timeLimit--;
  }, 1000);
}
  
  /*đánh dấu đã làm*/
  function renderQuestionGrid() {
  const grid = document.getElementById('question-grid');
  grid.innerHTML = '';

  questions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'question-button';
    if (userAnswers[i] !== null) btn.classList.add('answered');
    if (i === currentQuestionIndex) btn.classList.add('active');
    btn.textContent = i + 1;

    const dot = document.createElement('div');
    dot.className = 'dot';
    btn.appendChild(dot);

    btn.onclick = () => {
      saveAnswer();
      currentQuestionIndex = i;
      renderQuestion(currentQuestionIndex);
      renderQuestionGrid();
    };

    grid.appendChild(btn);
  });
}
 
    
