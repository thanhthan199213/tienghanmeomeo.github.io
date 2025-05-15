
const questions = Array.from({ length: 40 }, (_, i) => ({
  question: `Câu hỏi số ${i + 1}: Nội dung câu hỏi?`,
  options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
  correctAnswer: Math.floor(Math.random() * 4)
}));
