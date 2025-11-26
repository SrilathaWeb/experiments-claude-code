import { Link } from 'react-router-dom'

function Math() {
  const mathTopics = [
    { id: 'algebra_basics', name: 'Algebra Basics', description: 'Linear equations, substitution method, and fundamentals' },
    { id: 'geometry_basics', name: 'Geometry Fundamentals', description: 'Angles, triangles, basic shapes, and properties' }
  ]

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">📐 Math Topics</h1>
        <p className="text-gray-600 mb-8">Learn essential math concepts for the PSAT</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mathTopics.map((topic) => (
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
          <p className="text-gray-700">Master one topic at a time. Complete all lessons before moving to the next topic for best results.</p>
        </div>
      </div>
    </div>
  )
}

export default Math
