import { useState } from 'react'
import { externalResources, prepTips } from '../data/externalResources'

function Resources() {
  const [activeCategory, setActiveCategory] = useState('officialResources')
  const [expandedTip, setExpandedTip] = useState(null)

  const categories = [
    { id: 'officialResources', label: '🎓 Official', icon: '📋' },
    { id: 'freeStudyPlatforms', label: '💰 Free Platforms', icon: '🆓' },
    { id: 'paidPlatforms', label: '💻 Paid Services', icon: '💳' },
    { id: 'books', label: '📚 Books', icon: '📖' },
    { id: 'youtubeChannels', label: '🎬 Videos', icon: '📹' },
    { id: 'mobileApps', label: '📱 Apps', icon: '📱' },
    { id: 'collegeResources', label: '🎓 College', icon: '🎓' }
  ]

  const getCurrentResources = () => {
    return externalResources[activeCategory]
  }

  const renderResourceCard = (resource) => {
    return (
      <a
        key={resource.id}
        href={resource.url || resource.amazon}
        target="_blank"
        rel="noopener noreferrer"
        className="card hover:shadow-lg transition-all hover:-translate-y-1 border-l-4 border-primary-500"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3 flex-1">
            <span className="text-3xl">{resource.icon}</span>
            <div className="flex-1">
              <h4 className="font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                {resource.name}
              </h4>
              {resource.author && <p className="text-sm text-gray-500">by {resource.author}</p>}
              {resource.platform && <p className="text-sm text-gray-500">{resource.platform}</p>}
              {resource.price && (
                <p className="text-sm font-medium text-warning mt-1">{resource.price}</p>
              )}
            </div>
          </div>
          {resource.rating && (
            <div className="text-right">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span className="font-semibold">{resource.rating}</span>
              </div>
            </div>
          )}
        </div>

        <p className="text-gray-700 text-sm mb-4">{resource.description}</p>

        <div className="flex flex-wrap gap-2">
          {resource.features && resource.features.map((feature, idx) => (
            <span key={idx} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
              {feature}
            </span>
          ))}
          {resource.subjects && resource.subjects.map((subject, idx) => (
            <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              {subject}
            </span>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-gray-200">
          <span className="text-xs font-medium text-primary-600 hover:text-primary-700">
            Visit Website →
          </span>
        </div>
      </a>
    )
  }

  const currentData = getCurrentResources()

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">📚 PSAT Preparation Resources</h1>
        <p className="text-gray-600 mb-8">
          Comprehensive collection of official, free, and paid resources to support your PSAT journey
        </p>

        {/* Category Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 pb-4 min-w-max md:min-w-0 md:flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{currentData.title}</h2>
          <p className="text-gray-600 mb-6">{currentData.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentData.resources.map((resource) => renderResourceCard(resource))}
          </div>
        </div>

        {/* Study Tips Section */}
        <div className="mt-16 pt-8 border-t border-gray-300">
          <h2 className="text-2xl font-semibold mb-6">💡 {prepTips.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prepTips.tips.map((tipGroup, idx) => (
              <div key={idx} className="card bg-gradient-to-br from-primary-50 to-blue-50 border-l-4 border-primary-500">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-600 mb-1">
                      {tipGroup.icon} {tipGroup.category}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {tipGroup.tips.map((tip, tipIdx) => (
                    <li key={tipIdx} className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold mt-0.5">✓</span>
                      <span className="text-gray-700 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="mt-12 p-8 bg-gradient-to-r from-primary-50 via-blue-50 to-accent/20 rounded-xl border-2 border-primary-200">
          <h3 className="text-2xl font-semibold mb-6">🚀 Getting Started Guide</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border-l-4 border-primary-600">
              <div className="text-3xl mb-3">📅</div>
              <h4 className="font-semibold mb-3 text-primary-600">3 Months Before</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ Register for the test</li>
                <li>✓ Take a diagnostic test</li>
                <li>✓ Identify weak areas</li>
                <li>✓ Create study schedule</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-accent">
              <div className="text-3xl mb-3">📚</div>
              <h4 className="font-semibold mb-3 text-accent">1 Month Before</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ Use paid resources if needed</li>
                <li>✓ Take full-length tests</li>
                <li>✓ Review errors thoroughly</li>
                <li>✓ Practice time management</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-success">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold mb-3 text-success">1 Week Before</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ Light practice only</li>
                <li>✓ Review key concepts</li>
                <li>✓ Get plenty of sleep</li>
                <li>✓ Build confidence</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resource Recommendations by Need */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">🎯 Choose Resources by Your Needs</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Budget-Conscious */}
            <div className="card border-2 border-success">
              <h4 className="text-lg font-semibold text-success mb-4">💰 Budget-Conscious? Go FREE</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>🎓 <strong>Khan Academy</strong> - Best free resource</li>
                <li>🎬 <strong>YouTube channels</strong> - Free video explanations</li>
                <li>📖 <strong>SparkNotes</strong> - Free study guides</li>
                <li>📱 <strong>Quizlet App</strong> - Free flashcards</li>
              </ul>
              <p className="text-xs text-gray-600 mt-4">Total Cost: $0 (just your time)</p>
            </div>

            {/* Need Guidance */}
            <div className="card border-2 border-warning">
              <h4 className="text-lg font-semibold text-warning mb-4">👨‍🏫 Need Expert Guidance?</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>💻 <strong>PrepScholar</strong> - Personalized plans</li>
                <li>📚 <strong>Barron's Prep</strong> - Online classes</li>
                <li>👨‍🏫 <strong>The Test Masters</strong> - Live instruction</li>
                <li>📚 <strong>Official Study Guide</strong> - College Board</li>
              </ul>
              <p className="text-xs text-gray-600 mt-4">Investment: $200-$2,000</p>
            </div>

            {/* Want Structure */}
            <div className="card border-2 border-primary-500">
              <h4 className="text-lg font-semibold text-primary-600 mb-4">📋 Want a Structured Plan?</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>📅 <strong>This App</strong> - 4-week study plan</li>
                <li>📚 <strong>Official Study Guide</strong> - Practice tests</li>
                <li>📚 <strong>Princeton Review</strong> - Strategy-focused</li>
                <li>📊 <strong>IXL Learning</strong> - Adaptive practice</li>
              </ul>
              <p className="text-xs text-gray-600 mt-4">Mix of free and paid</p>
            </div>

            {/* Short Timeline */}
            <div className="card border-2 border-accent">
              <h4 className="text-lg font-semibold text-accent mb-4">⚡ Short Timeline (4 Weeks)?</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>🎓 <strong>Khan Academy + Premium</strong> - Fast tracking</li>
                <li>📚 <strong>Official Practice Tests</strong> - Must do</li>
                <li>👨‍🏫 <strong>Paid tutoring</strong> - Focused help</li>
                <li>📱 <strong>Mobile apps</strong> - Study anytime</li>
              </ul>
              <p className="text-xs text-gray-600 mt-4">Focus on weak areas only</p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <h4 className="font-semibold text-blue-900 mb-3">⚠️ Important Notes</h4>
          <ul className="text-sm text-blue-900 space-y-2">
            <li>✓ Always use <strong>official College Board resources</strong> for authentic practice</li>
            <li>✓ Take at least <strong>2-3 full-length practice tests</strong> before test day</li>
            <li>✓ <strong>Review wrong answers</strong> more than correct ones</li>
            <li>✓ Use <strong>free resources first</strong>, then supplement with paid if needed</li>
            <li>✓ PSAT can qualify you for <strong>National Merit Scholarships</strong> - study seriously!</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resources
