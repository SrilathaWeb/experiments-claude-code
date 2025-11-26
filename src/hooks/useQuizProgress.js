import { useLocalStorage } from './useLocalStorage'

export function useQuizProgress() {
  const [quizResults, setQuizResults] = useLocalStorage('quizResults', [])

  const saveQuizResult = (quizId, score, timeSpent, answers) => {
    const result = {
      quizId,
      date: new Date().toISOString(),
      score,
      timeSpent,
      answers
    }

    setQuizResults([...quizResults, result])
    return result
  }

  const getQuizzesByTopic = (topic) => {
    return quizResults.filter(result => result.quizId.startsWith(topic))
  }

  const getAverageScore = (topic = null) => {
    let filtered = quizResults
    if (topic) {
      filtered = getQuizzesByTopic(topic)
    }

    if (filtered.length === 0) return 0
    const sum = filtered.reduce((acc, result) => acc + result.score, 0)
    return Math.round(sum / filtered.length)
  }

  const getTopicProgress = (topic, totalQuestions) => {
    const topicResults = getQuizzesByTopic(topic)
    const completedQuestions = topicResults.length * 5
    return Math.min(Math.round((completedQuestions / totalQuestions) * 100), 100)
  }

  return {
    quizResults,
    saveQuizResult,
    getQuizzesByTopic,
    getAverageScore,
    getTopicProgress
  }
}
