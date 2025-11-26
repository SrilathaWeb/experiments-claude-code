import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { calculateScore, getScoreGrade } from '../utils/scoreCalculator'
import { useQuizProgress } from '../hooks/useQuizProgress'
import { useStreakCalculation } from '../hooks/useStreakCalculation'

function QuizPage() {
  const { quizId } = useParams()
  const navigate = useNavigate()
  const { saveQuizResult } = useQuizProgress()
  const { updateActivity } = useStreakCalculation()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [startTime] = useState(Date.now())

  const quizzes = {
    algebra_linear_101: {
      title: 'Linear Equations',
      questions: [
        {
          id: 'q1',
          question: 'Solve for x: 2x + 5 = 13',
          options: ['x = 4', 'x = 5', 'x = 6', 'x = 7'],
          correct: 0,
          explanation: 'Subtract 5 from both sides: 2x = 8, then divide by 2: x = 4'
        },
        {
          id: 'q2',
          question: 'What is the slope of y = 3x + 2?',
          options: ['2', '3', '5', '-3'],
          correct: 1,
          explanation: 'In y = mx + b form, m is the slope. Here m = 3'
        },
        {
          id: 'q3',
          question: 'Solve: x/2 = 6',
          options: ['x = 3', 'x = 8', 'x = 12', 'x = 6'],
          correct: 2,
          explanation: 'Multiply both sides by 2: x = 6 × 2 = 12'
        },
        {
          id: 'q4',
          question: '3(x + 2) = 15. What is x?',
          options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
          correct: 0,
          explanation: 'Divide by 3: x + 2 = 5, then subtract 2: x = 3'
        },
        {
          id: 'q5',
          question: 'If 4x - 2 = 10, what is x?',
          options: ['x = 2', 'x = 3', 'x = 4', 'x = 5'],
          correct: 1,
          explanation: 'Add 2: 4x = 12, divide by 4: x = 3'
        }
      ]
    },
    geometry_angles_101: {
      title: 'Angles and Triangles',
      questions: [
        {
          id: 'q1',
          question: 'What is the sum of angles in a triangle?',
          options: ['90°', '180°', '270°', '360°'],
          correct: 1,
          explanation: 'The sum of all angles in any triangle is always 180°'
        },
        {
          id: 'q2',
          question: 'In a right triangle, if one angle is 90° and another is 35°, what is the third angle?',
          options: ['35°', '45°', '55°', '90°'],
          correct: 2,
          explanation: '180° - 90° - 35° = 55°'
        },
        {
          id: 'q3',
          question: 'What type of triangle has all angles equal?',
          options: ['Right triangle', 'Equilateral triangle', 'Isosceles triangle', 'Scalene triangle'],
          correct: 1,
          explanation: 'An equilateral triangle has all three angles equal to 60°'
        },
        {
          id: 'q4',
          question: 'Vertical angles are always...',
          options: ['Supplementary', 'Complementary', 'Equal', 'Adjacent'],
          correct: 2,
          explanation: 'Vertical angles (opposite angles formed by two intersecting lines) are always equal'
        },
        {
          id: 'q5',
          question: 'What is the measure of one angle in a regular hexagon?',
          options: ['90°', '120°', '135°', '150°'],
          correct: 1,
          explanation: 'Sum of hexagon angles = (6-2) × 180° = 720°, so each angle = 720°/6 = 120°'
        }
      ]
    }
  }

  const quiz = quizzes[quizId] || quizzes.algebra_linear_101

  const handleAnswer = (optionIndex) => {
    setAnswers({
      ...answers,
      [currentQuestion]: optionIndex
    })
  }

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    const correctAnswers = {}
    quiz.questions.forEach((q, index) => {
      correctAnswers[index] = q.correct
    })

    const finalScore = calculateScore(answers, correctAnswers)
    setScore(finalScore)
    setShowResults(true)

    const timeSpent = Math.round((Date.now() - startTime) / 1000)
    saveQuizResult(quizId, finalScore, timeSpent, answers)
    updateActivity()
  }

  if (showResults) {
    const gradeInfo = getScoreGrade(score)

    return (
      <div className="p-6 md:p-8">
        <div className="max-w-2xl mx-auto">
          <div className={`card text-center ${gradeInfo.bgColor}`}>
            <h1 className="text-4xl font-bold mb-4">Quiz Complete! 🎉</h1>
            <p className={`text-6xl font-bold mb-4 ${gradeInfo.color}`}>{score}%</p>
            <p className={`text-2xl font-semibold mb-8 ${gradeInfo.color}`}>Grade: {gradeInfo.grade}</p>
            <p className="text-gray-700 mb-8">
              You answered {Math.round(score / 100 * quiz.questions.length)} out of {quiz.questions.length} questions correctly.
            </p>

            <div className="space-y-4 mb-8 text-left">
              {quiz.questions.map((question, index) => {
                const isCorrect = answers[index] === question.correct
                return (
                  <div key={index} className="p-4 bg-white rounded border-l-4" style={{
                    borderColor: isCorrect ? '#10b981' : '#ef4444'
                  }}>
                    <p className="font-semibold mb-2">Q{index + 1}: {question.question}</p>
                    <p className={`text-sm ${isCorrect ? 'text-success' : 'text-red-600'}`}>
                      {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </p>
                    <p className="text-xs text-gray-600 mt-2 italic">{question.explanation}</p>
                  </div>
                )
              })}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => navigate('/practice')}
                className="btn-primary flex-1"
              >
                Back to Practice
              </button>
              <button
                onClick={() => {
                  setCurrentQuestion(0)
                  setAnswers({})
                  setShowResults(false)
                }}
                className="btn-secondary flex-1"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const question = quiz.questions[currentQuestion]
  const selectedAnswer = answers[currentQuestion]

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="card">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">{quiz.title}</h1>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary-600 h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-6">{question.question}</h2>

          <div className="space-y-3 mb-8">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  selectedAnswer === index
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded border-2 flex items-center justify-center font-bold ${
                      selectedAnswer === index
                        ? 'bg-primary-600 border-primary-600 text-white'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedAnswer === index && '✓'}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`flex-1 py-2 rounded-lg transition-colors ${
                currentQuestion === 0
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'btn-secondary'
              }`}
            >
              Previous
            </button>

            {currentQuestion < quiz.questions.length - 1 ? (
              <button
                onClick={handleNext}
                className="flex-1 btn-primary"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={Object.keys(answers).length < quiz.questions.length}
                className={`flex-1 transition-colors ${
                  Object.keys(answers).length < quiz.questions.length
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'btn-primary'
                }`}
              >
                Submit Quiz
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizPage
