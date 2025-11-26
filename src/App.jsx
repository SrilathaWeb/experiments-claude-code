import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Math from './pages/Math'
import English from './pages/English'
import Vocabulary from './pages/Vocabulary'
import Practice from './pages/Practice'
import Cheatsheets from './pages/Cheatsheets'
import Profile from './pages/Profile'
import TopicPage from './pages/TopicPage'
import QuizPage from './pages/QuizPage'

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/math" element={<Math />} />
              <Route path="/english" element={<English />} />
              <Route path="/vocabulary" element={<Vocabulary />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/cheatsheets" element={<Cheatsheets />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/topic/:topicId" element={<TopicPage />} />
              <Route path="/quiz/:quizId" element={<QuizPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
