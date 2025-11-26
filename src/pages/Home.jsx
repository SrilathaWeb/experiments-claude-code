function Home() {
  return (
    <div className="p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to PSAT Prep</h1>
        <p className="text-lg text-gray-600 mb-8">
          Master the test with daily practice, expert resources, and progress tracking.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Quick Stats */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">📊 Your Progress</h3>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-primary-600">0%</p>
              <p className="text-gray-600">Overall completion</p>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-4">🔥 Current Streak</h3>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-warning">0 days</p>
              <p className="text-gray-600">Keep it going!</p>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-4">🎯 Today's Challenge</h3>
            <div className="space-y-2">
              <p className="text-gray-600">Algebra Basics Quiz</p>
              <button className="btn-primary w-full mt-4">Take Quiz</button>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="card mb-12">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/math" className="p-6 border border-gray-200 rounded-lg hover:border-primary-500 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-2">📐 Math Topics</h3>
              <p className="text-gray-600">Learn algebra, geometry, and more</p>
            </a>

            <a href="/english" className="p-6 border border-gray-200 rounded-lg hover:border-primary-500 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-2">📖 English & Grammar</h3>
              <p className="text-gray-600">Master reading and writing skills</p>
            </a>

            <a href="/vocabulary" className="p-6 border border-gray-200 rounded-lg hover:border-primary-500 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-2">📝 Vocabulary</h3>
              <p className="text-gray-600">Build your word power</p>
            </a>

            <a href="/cheatsheets" className="p-6 border border-gray-200 rounded-lg hover:border-primary-500 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-2">📋 Cheatsheets</h3>
              <p className="text-gray-600">Quick reference guides</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
