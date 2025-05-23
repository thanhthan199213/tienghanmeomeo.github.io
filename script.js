// let currentQuestionIndex = 0;
// const userAnswers = new Array(questions.length).fill(null);
// const form = document.getElementById('quiz-form');

// function renderQuestion(index) {
//   const q = questions[index];
//   form.innerHTML = `
//     <div class="question">
//       <p><strong>Câu ${index + 1}: ${q.question}</strong></p>
//       <div class="options">
//         ${q.options.map((option, i) => `
//           <label>
//             <input type="radio" name="answer" value="${i}" ${userAnswers[index] === i ? 'checked' : ''}>
//             ${option}
//           </label>
//         `).join('')}
//       </div>
//     </div>
//   `;
// }

// function saveAnswer() {
//   const selected = document.querySelector('input[name="answer"]:checked');
//   if (selected) {
//     userAnswers[currentQuestionIndex] = parseInt(selected.value);
//   }
// }

// function nextQuestion() {
//   saveAnswer();
//   if (currentQuestionIndex < questions.length - 1) {
//     currentQuestionIndex++;
//     renderQuestion(currentQuestionIndex);
//   }
// }

// function prevQuestion() {
//   saveAnswer();
//   if (currentQuestionIndex > 0) {
//     currentQuestionIndex--;
//     renderQuestion(currentQuestionIndex);
//   }
// }

// function submitQuiz() {
//   saveAnswer();
//   let score = 0;
//   questions.forEach((q, i) => {
//     if (userAnswers[i] === q.correctAnswer) {
//       score++;
//     }
//   });
//   document.getElementById('result').textContent = `Bạn đúng ${score}/40 câu.`;
// }

// renderQuestion(currentQuestionIndex);

// /*đồng hồ */
// let timeLimit = 20 * 60; // 20 phút
// let timerInterval;

// function startTimer() {
//   const timerEl = document.getElementById('timer');

//   timerInterval = setInterval(() => {
//     if (timeLimit <= 0) {
//       clearInterval(timerInterval);
//       alert("Hết giờ! Bài sẽ được nộp tự động.");
//       submitQuiz();
//       return;
//     }

//     const minutes = Math.floor(timeLimit / 60);
//     const seconds = timeLimit % 60;
//     timerEl.textContent = `⏱️ Thời gian còn lại: ${minutes} phút ${seconds < 10 ? '0' : ''}${seconds} giây`;
//     timeLimit--;
//   }, 1000);
// }
  
//   /*đánh dấu đã làm*/
//   function renderQuestionGrid() {
//   const grid = document.getElementById('question-grid');
//   grid.innerHTML = '';

//   questions.forEach((_, i) => {
//     const btn = document.createElement('button');
//     btn.className = 'question-button';
//     if (userAnswers[i] !== null) btn.classList.add('answered');
//     if (i === currentQuestionIndex) btn.classList.add('active');
//     btn.textContent = i + 1;

//     const dot = document.createElement('div');
//     dot.className = 'dot';
//     btn.appendChild(dot);

//     btn.onclick = () => {
//       saveAnswer();
//       currentQuestionIndex = i;
//       renderQuestion(currentQuestionIndex);
//       renderQuestionGrid();
//     };

//     grid.appendChild(btn);
//   });
// }


// const words = [
//   { word: "apple", meaning: "quả táo" },
//   { word: "computer", meaning: "máy tính" },
//   { word: "book", meaning: "quyển sách" },
// ];

// let current = 0;

// function updateCard() {
//   document.getElementById("cardFront").textContent = words[current].word;
//   document.getElementById("cardBack").textContent = words[current].meaning;
//   document.querySelector('.flashcard').classList.remove("flipped");
// }

// function flipCard() {
//   document.querySelector('.flashcard').classList.toggle("flipped");
// }

// function nextCard() {
//   current = (current + 1) % words.length;
//   updateCard();
// }

// updateCard();

let data = {};
let currentWords = [];
let currentIndex = 0;

fetch('data.json')
  .then(response => response.json())
  .then(json => {
    data = json;
    const themes = Object.keys(data);
    loadTheme(themes[0]);
    populateThemeSelector(themes);
  });

// function populateThemeSelector(themes) {
//   const select = document.getElementById("themeSelector");
//   themes.forEach(theme => {
//     const option = document.createElement("option");
//     option.value = theme;
//     option.textContent = theme;
//     select.appendChild(option);
//   });
// }

function populateThemeSelector(themes) {
  const container = document.getElementById("themeButtons");
  container.innerHTML = "";
  themes.forEach(theme => {
    const btn = document.createElement("button");
    btn.textContent = theme;
    btn.onclick = () => {
      document.querySelectorAll("#themeButtons button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadTheme(theme);
    };
    container.appendChild(btn);
  });
}




function loadTheme(theme) {
  currentWords = shuffleArray(data[theme]);
  currentIndex = 0;
  updateCard();
}

function updateCard() {
  const word = currentWords[currentIndex];
  document.getElementById("cardFront").textContent = word.word;
  document.getElementById("cardBack").textContent = word.meaning;
  document.getElementById("audioBtn").onclick = () => playAudio(word.audio);
  document.querySelector(".flashcard").classList.remove("flipped");
  saveToLocalStorage(word);
}

function flipCard() {
  document.querySelector(".flashcard").classList.toggle("flipped");
}

function nextCard() {
  currentIndex = (currentIndex + 1) % currentWords.length;
  updateCard();
}

function playAudio(audioUrl) {
  const audio = new Audio(audioUrl);
  audio.play();
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function saveToLocalStorage(word) {
  let history = JSON.parse(localStorage.getItem("vocabHistory")) || [];
  if (!history.some(item => item.word === word.word)) {
    history.push(word);
    localStorage.setItem("vocabHistory", JSON.stringify(history));
  }
}
