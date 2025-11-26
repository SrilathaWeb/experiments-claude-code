import { useParams, Link } from 'react-router-dom'

function TopicPage() {
  const { topicId } = useParams()

  const topicContent = {
    algebra_basics: {
      title: 'Algebra Basics',
      lessons: [
        { id: 'lesson_1', title: 'Introduction to Variables', content: 'Learn what variables are and how to use them in expressions.' },
        { id: 'lesson_2', title: 'Solving Linear Equations', content: 'Master the steps to solve equations and find unknown values.' },
      ],
      quizId: 'algebra_linear_101'
    },
    geometry_basics: {
      title: 'Geometry Fundamentals',
      lessons: [
        { id: 'lesson_1', title: 'Angles and Lines', content: 'Understand different types of angles and their properties.' },
        { id: 'lesson_2', title: 'Triangles and Properties', content: 'Learn about triangle types and angle sum properties.' },
      ],
      quizId: 'geometry_angles_101'
    },
    grammar_basics: {
      title: 'Grammar Essentials',
      lessons: [
        { id: 'lesson_1', title: 'Parts of Speech', content: 'Learn about nouns, verbs, adjectives, and other parts of speech.' },
        { id: 'lesson_2', title: 'Sentence Structure', content: 'Understand sentence components and how to construct proper sentences.' },
      ],
      quizId: 'grammar_tenses_101'
    },
    reading_comp: {
      title: 'Reading Comprehension',
      lessons: [
        { id: 'lesson_1', title: 'Active Reading Strategies', content: 'Learn techniques to understand passages better.' },
        { id: 'lesson_2', title: 'Inference and Analysis', content: 'Develop skills to read between the lines and analyze texts.' },
      ],
      quizId: 'reading_inference_101'
    }
  }

  const topic = topicContent[topicId] || topicContent.algebra_basics

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{topic.title}</h1>
        <p className="text-gray-600 mb-8">Complete all lessons and take the quiz to master this topic</p>

        {/* Lessons */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">📚 Lessons</h2>
          <div className="space-y-4">
            {topic.lessons.map((lesson) => (
              <div key={lesson.id} className="card">
                <h3 className="text-lg font-semibold mb-2">{lesson.title}</h3>
                <p className="text-gray-600 mb-4">{lesson.content}</p>
                <button className="btn-secondary">Read Lesson</button>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Section */}
        <div className="card bg-primary-50 border-2 border-primary-200">
          <h3 className="text-2xl font-semibold mb-4">✏️ Ready to Practice?</h3>
          <p className="text-gray-700 mb-6">
            After reviewing the lessons above, take the quiz to test your understanding.
          </p>
          <Link
            to={`/quiz/${topic.quizId}`}
            className="btn-primary inline-block"
          >
            Take the Quiz
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopicPage
