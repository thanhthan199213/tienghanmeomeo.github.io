// Đây là dữ liệu mẫu. Bạn có thể nạp từ file JSON ngoài hoặc API.
const questions = Array.from({ length: 40 }, (_, i) => ({
  question: `Câu ${i + 1}: Đây là nội dung câu hỏi số ${i + 1}?`,
  options: [
    `Đáp án A của câu ${i + 1}`,
    `Đáp án B của câu ${i + 1}`,
    `Đáp án C của câu ${i + 1}`,
    `Đáp án D của câu ${i + 1}`
  ],

  question: `Câu ${i + 2}: Đây là nội dung câu hỏi số ${i + 2}?`,
  options: [
    `A`,
    `B`,
    `C`,
    `D`
  ],
  correctAnswer: 0 // Đáp án đúng là A
}));
