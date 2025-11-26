import { useStreakCalculation } from '../hooks/useStreakCalculation'
import { useQuizProgress } from '../hooks/useQuizProgress'

function Profile() {
  const { userProgress } = useStreakCalculation()
  const { quizResults, getAverageScore } = useQuizProgress()

  const badges = [
    { id: '3day_streak', name: '3-Day Streak', icon: '🔥', unlocked: userProgress.badges.includes('3day_streak') },
    { id: '7day_streak', name: '7-Day Streak', icon: '⭐', unlocked: userProgress.badges.includes('7day_streak') },
    { id: '30day_streak', name: '30-Day Streak', icon: '👑', unlocked: userProgress.badges.includes('30day_streak') },
  ]

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">👤 Your Profile</h1>

        {/* Progress Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">🔥 Current Streak</h3>
            <p className="text-4xl font-bold text-warning mb-2">{userProgress.streakCount || 0}</p>
            <p className="text-gray-600">days in a row</p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-4">✏️ Quizzes Completed</h3>
            <p className="text-4xl font-bold text-primary-600 mb-2">{quizResults.length}</p>
            <p className="text-gray-600">total quizzes</p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-4">📊 Average Score</h3>
            <p className="text-4xl font-bold text-success mb-2">{getAverageScore()}%</p>
            <p className="text-gray-600">across all quizzes</p>
          </div>
        </div>

        {/* Badges Section */}
        <div className="card mb-8">
          <h2 className="text-2xl font-semibold mb-6">🏆 Badges & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className={`text-center p-6 rounded-lg border-2 transition-all ${
                  badge.unlocked
                    ? 'bg-yellow-50 border-yellow-400'
                    : 'bg-gray-100 border-gray-300 opacity-50'
                }`}
              >
                <div className="text-5xl mb-3">{badge.icon}</div>
                <p className="font-semibold">{badge.name}</p>
                <p className="text-sm text-gray-600 mt-2">
                  {badge.unlocked ? '✅ Unlocked' : '🔒 Locked'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <h2 className="text-2xl font-semibold mb-6">📈 Recent Activity</h2>
          {quizResults.length === 0 ? (
            <p className="text-gray-600 text-center py-8">
              No quizzes completed yet. Start practicing to see your results here!
            </p>
          ) : (
            <div className="space-y-3">
              {quizResults.slice(-5).reverse().map((result, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <p className="font-medium">{result.quizId}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(result.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-primary-600">{result.score}%</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
