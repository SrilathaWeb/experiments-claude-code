import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">📚</span>
          </div>
          <h1 className="text-xl font-bold text-primary-900">PSAT Prep</h1>
        </div>

        <Link
          to="/profile"
          className="flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors"
        >
          <span className="text-lg">👤</span>
          <span className="hidden sm:inline">Profile</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
