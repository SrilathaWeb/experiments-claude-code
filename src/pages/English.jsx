import { Link } from 'react-router-dom'

function English() {
  const englishTopics = [
    { id: 'grammar_basics', name: 'Grammar Essentials', description: 'Sentence structure, tenses, and punctuation' },
    { id: 'reading_comp', name: 'Reading Comprehension', description: 'Passage analysis and inference skills' }
  ]

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">📖 English & Grammar</h1>
        <p className="text-gray-600 mb-8">Master reading and writing for the PSAT</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {englishTopics.map((topic) => (
            <Link
              key={topic.id}
              to={`/topic/${topic.id}`}
              className="card hover:shadow-lg transition-shadow cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">{topic.name}</h3>
              <p className="text-gray-600 mb-4">{topic.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-primary-600 font-medium">View lessons →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">💡 Pro Tip</h3>
          <p className="text-gray-700">Read actively and take notes. Understanding the "why" behind rules is more important than memorization.</p>
        </div>
      </div>
    </div>
  )
}

export default English
