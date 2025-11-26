import { useState } from 'react'
import { cheatsheetResources, testTakingStrategies, studySchedule } from '../data/cheatsheetResources'

function Cheatsheets() {
  const [selectedCheatsheet, setSelectedCheatsheet] = useState(null)

  const downloadPDF = (resource) => {
    const link = document.createElement('a')
    link.href = resource.downloadUrl
    link.download = `${resource.id}.svg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const openInNewTab = (resource) => {
    window.open(resource.image, '_blank')
  }

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">📋 Cheatsheets & Resources</h1>
        <p className="text-gray-600 mb-8">Printable reference guides and study materials</p>

        {/* Cheatsheet Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">📚 Printable Cheatsheets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cheatsheetResources.map((resource) => (
              <div
                key={resource.id}
                className={`card ${resource.color} border-2 ${resource.borderColor} hover:shadow-lg transition-shadow cursor-pointer`}
                onClick={() => setSelectedCheatsheet(resource)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-lg font-semibold ${resource.accentColor} mb-2`}>
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{resource.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.topics.map((topic) => (
                    <span
                      key={topic}
                      className={`text-xs font-medium px-2 py-1 rounded ${resource.accentColor} bg-white border border-current`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-4 border-t border-gray-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      openInNewTab(resource)
                    }}
                    className="flex-1 btn-secondary text-sm"
                  >
                    👁️ View
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      downloadPDF(resource)
                    }}
                    className="flex-1 btn-primary text-sm"
                  >
                    📥 Download
                  </button>
                </div>

                {resource.instructions && (
                  <p className="text-xs text-gray-500 mt-3 italic">💡 {resource.instructions}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Test-Taking Strategies */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">🎯 Test-Taking Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testTakingStrategies.tips.map((tip, index) => (
              <div key={index} className="card border-l-4 border-warning">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{tip.icon}</div>
                  <div>
                    <h4 className="font-semibold text-primary-600 mb-2">{tip.title}</h4>
                    <p className="text-gray-700 text-sm">{tip.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Study Schedule */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">📅 4-Week Study Plan</h2>
          <div className="space-y-4">
            {studySchedule.weeks.map((week) => (
              <div key={week.week} className="card border-l-4 border-primary-600">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-lg text-primary-600">Week {week.week}: {week.focus}</h4>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <p className="font-medium">{week.studyHours} hours</p>
                    <p>{week.quizzesPerDay} quiz/day</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {week.topics.map((topic) => (
                    <span key={topic} className="bg-primary-100 text-primary-700 text-xs font-medium px-3 py-1 rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Use */}
        <div className="card bg-gradient-to-r from-primary-50 to-accent/20 border-2 border-primary-200">
          <h3 className="text-xl font-semibold mb-4">💡 How to Use These Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl mb-2">1️⃣</div>
              <h4 className="font-semibold mb-2">Download & Print</h4>
              <p className="text-sm text-gray-700">Click the download button to save the cheatsheets and print them on standard or cardstock paper.</p>
            </div>
            <div>
              <div className="text-2xl mb-2">2️⃣</div>
              <h4 className="font-semibold mb-2">Study Regularly</h4>
              <p className="text-sm text-gray-700">Use flashcards daily and reference guides while studying. Keep them visible during practice.</p>
            </div>
            <div>
              <div className="text-2xl mb-2">3️⃣</div>
              <h4 className="font-semibold mb-2">Practice & Review</h4>
              <p className="text-sm text-gray-700">Take quizzes, reference the guides when needed, and track your progress to identify weak areas.</p>
            </div>
          </div>
        </div>

        {/* Print Tips */}
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <h4 className="font-semibold text-blue-900 mb-2">🖨️ Print Tips</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>✓ Use cardstock for flashcards to make them more durable</li>
            <li>✓ Print in color for better visual organization and recall</li>
            <li>✓ Laminate flashcards for longer use and easier handling</li>
            <li>✓ Keep printed materials in a folder or binder organized by subject</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cheatsheets
