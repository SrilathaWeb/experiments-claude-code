import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Sidebar() {
  const location = useLocation()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/')

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/math', label: 'Math', icon: '📐' },
    { path: '/english', label: 'English', icon: '📖' },
    { path: '/vocabulary', label: 'Vocabulary', icon: '📝' },
    { path: '/practice', label: 'Practice', icon: '✏️' },
    { path: '/cheatsheets', label: 'Cheatsheets', icon: '📋' },
  ]

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-primary-600 text-white rounded-lg"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:relative w-64 h-screen bg-primary-900 text-white transition-transform duration-300 z-40 overflow-y-auto`}
      >
        <div className="p-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary-200 mb-8">
            Navigation
          </h2>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary-700 text-white'
                    : 'text-primary-100 hover:bg-primary-800'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-primary-800">
          <p className="text-xs text-primary-300 text-center">
            Master the PSAT with daily practice
          </p>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
        />
      )}
    </>
  )
}

export default Sidebar
