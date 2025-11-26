export function getTodayString() {
  return new Date().toDateString()
}

export function getYesterdayString() {
  const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
  return yesterday.toDateString()
}

export function getDaysDifference(date1String, date2String) {
  if (!date1String || !date2String) return null

  const date1 = new Date(date1String)
  const date2 = new Date(date2String)
  const diffTime = Math.abs(date2 - date1)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

export function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export function getTodaysQuizzes() {
  const quizzes = [
    'algebra_linear_101',
    'grammar_basics_101',
    'vocab_common_101',
    'geometry_basics_101',
    'reading_comp_101'
  ]

  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
  return quizzes[dayOfYear % quizzes.length]
}
