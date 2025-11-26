import { Link } from 'react-router-dom'

function Practice() {
  const quizzes = [
    { id: 'algebra_linear_101', name: 'Linear Equations', topic: 'Algebra', questions: 5 },
    { id: 'algebra_systems_101', name: 'Systems of Equations', topic: 'Algebra', questions: 5 },
    { id: 'geometry_angles_101', name: 'Angles and Triangles', topic: 'Geometry', questions: 5 },
    { id: 'grammar_tenses_101', name: 'Verb Tenses', topic: 'Grammar', questions: 5 },
    { id: 'reading_inference_101', name: 'Reading Inference', topic: 'Reading', questions: 5 },
  ]

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">✏️ Practice Quizzes</h1>
        <p className="text-gray-600 mb-8">Test your knowledge with interactive quizzes</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quizzes.map((quiz) => (
            <Link
              key={quiz.id}
              to={`/quiz/${quiz.id}`}
              className="card hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">{quiz.name}</h3>
                <span className="bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {quiz.topic}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{quiz.questions} questions</p>
              <button className="btn-primary w-full">Start Quiz</button>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-warning/10 rounded-lg border border-warning/30">
            <h3 className="text-lg font-semibold mb-2">🎯 Daily Challenge</h3>
            <p className="text-gray-700 mb-4">Complete today's featured quiz to build your streak!</p>
            <button className="btn-primary">View Today's Challenge</button>
          </div>

          <div className="p-6 bg-success/10 rounded-lg border border-success/30">
            <h3 className="text-lg font-semibold mb-2">📊 Your Stats</h3>
            <p className="text-gray-700">Quizzes Completed: <span className="font-bold text-primary-600">0</span></p>
            <p className="text-gray-700">Average Score: <span className="font-bold text-primary-600">-</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practice
