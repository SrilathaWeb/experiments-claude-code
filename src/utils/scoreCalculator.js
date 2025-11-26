export function calculateScore(answers, correctAnswers) {
  let correct = 0
  const totalQuestions = Object.keys(correctAnswers).length

  for (const questionId in answers) {
    if (answers[questionId] === correctAnswers[questionId]) {
      correct++
    }
  }

  return Math.round((correct / totalQuestions) * 100)
}

export function getScoreGrade(score) {
  if (score >= 90) return { grade: 'A', color: 'text-green-600', bgColor: 'bg-green-100' }
  if (score >= 80) return { grade: 'B', color: 'text-blue-600', bgColor: 'bg-blue-100' }
  if (score >= 70) return { grade: 'C', color: 'text-yellow-600', bgColor: 'bg-yellow-100' }
  if (score >= 60) return { grade: 'D', color: 'text-orange-600', bgColor: 'bg-orange-100' }
  return { grade: 'F', color: 'text-red-600', bgColor: 'bg-red-100' }
}

export function getQuestionFeedback(isCorrect, explanation) {
  return {
    isCorrect,
    message: isCorrect ? 'Correct!' : 'Incorrect',
    explanation,
    type: isCorrect ? 'success' : 'error'
  }
}
