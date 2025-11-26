# 📚 PSAT Preparation Website

A comprehensive, interactive PSAT preparation platform for 9th and 10th grade students. Master math, English, and vocabulary with interactive lessons, quizzes, printable cheatsheets, and daily progress tracking.

**Live Demo:** http://localhost:3001 (when running locally)

---

## ✨ Key Features

### 🎓 **Learning Modules**
- **Math Topics** - Algebra basics, geometry fundamentals, and more
- **English Topics** - Grammar essentials, reading comprehension strategies
- **Vocabulary** - High-frequency PSAT words with definitions and examples

### ✏️ **Interactive Quizzes**
- Multiple choice questions with instant feedback
- Detailed explanations for each answer
- Score tracking and progress monitoring
- Quiz history and performance analytics

### 📋 **Printable Cheatsheets**
- **Math Formulas** - Algebra, geometry, and statistics formulas
- **Grammar Rules** - Subject-verb agreement, tenses, punctuation
- **Vocabulary Flashcards** - 6 high-frequency words, ready to print and cut
- **Reading Comprehension Guide** - Strategies and tips

### 📊 **Progress Tracking**
- Daily activity monitoring
- Weekly statistics
- Streak counter (consecutive days of practice)
- Topic-wise progress visualization
- Badge achievements (3-day, 7-day, 30-day streaks)

### 📚 **Comprehensive Resources**
- Official PSAT resources from College Board
- Free study platforms (Khan Academy, Crash Course, etc.)
- Paid test prep services
- Recommended books and study guides
- YouTube channels and video resources
- Mobile apps for on-the-go studying
- College planning resources

### 🎯 **Gamification**
- Streak badges for consistent practice
- Achievement recognition
- Daily challenges
- Progress visualization
- Motivational milestones

---

## 🛠️ Technology Stack

### Frontend
- **React 19** - Modern UI framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Professional styling
- **Vite** - Fast build tool and dev server

### Data & Storage
- **localStorage API** - Client-side progress persistence
- **No Backend Required** - Static deployment ready

### Additional Tools
- **SVG** - Scalable vector graphics for cheatsheets
- **CSS3** - Print-friendly styles for resources

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd experiments-claude-code
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3001`

4. **Build for production**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder

---

## 🎮 Using the Application

### Home Page
- Dashboard overview with progress summary
- Quick access to all learning areas
- Daily challenge feature
- Current streak display

### Learning Sections

#### Math (📐)
- Algebra Basics
- Geometry Fundamentals
- Topic lessons with explanations
- Links to related practice quizzes

#### English (📖)
- Grammar Essentials
- Reading Comprehension Basics
- Lessons and best practices
- Strategy guides

#### Vocabulary (📝)
- High-frequency PSAT words
- Definitions and usage examples
- Context-based learning
- Easy memorization

#### Practice (✏️)
- 10+ interactive quizzes
- Multiple choice format
- Instant scoring
- Performance history
- Daily challenge feature

#### Cheatsheets (📋)
- Downloadable reference guides
- Math formulas and grammar rules
- Vocabulary flashcard templates
- Reading comprehension strategies
- Test-taking tips
- Study schedule

#### Resources (🔗)
- Official PSAT materials
- Free study platforms
- Paid prep services
- Recommended books
- YouTube channels
- Mobile apps
- College planning tools

#### Profile (👤)
- Current streak counter
- Total quizzes completed
- Average score across all quizzes
- Earned badges
- Recent quiz history

---

## 📊 Content Included

### Math Topics
- Algebra Basics (Linear equations, substitution)
- Geometry Fundamentals (Angles, triangles, shapes)

### English Topics
- Grammar Essentials (Agreement, tenses, punctuation)
- Reading Comprehension (Strategies and inference)

### Vocabulary
- 50-100 high-frequency PSAT words
- Definitions with examples
- Usage context

### Quizzes
- 10+ practice quizzes covering all topics
- 5 questions per quiz
- Detailed answer explanations
- Multiple difficulty levels

### Cheatsheets
- Math formulas (Algebra, Geometry, Statistics)
- Grammar rules with examples
- Printable vocabulary flashcards
- Reading comprehension guide
- Test-taking strategies
- 4-week study plan

### External Resources
- 30+ curated preparation materials
- Official College Board resources
- Free and paid platforms
- Books and video channels
- Mobile apps

---

## 💾 Data & Progress Tracking

All progress is saved locally in your browser using `localStorage`:

### Stored Data
- **User Profile** - Unique ID, current streak, badges
- **Quiz Results** - Scores, timestamps, answers
- **Progress** - Topic completion, daily activity

### Privacy
- ✅ No data sent to servers
- ✅ All progress stored locally
- ✅ Complete privacy and control
- ⚠️ Clearing browser data will reset progress

---

## 🎯 Learning Path Recommendation

### Week 1: Math Fundamentals
- Study Algebra Basics
- Take algebra quizzes
- Review cheatsheets
- **Target:** 5 hours, 1 quiz/day

### Week 2: Geometry
- Study Geometry Fundamentals
- Practice geometry quizzes
- Review formulas
- **Target:** 5 hours, 1 quiz/day

### Week 3: English Grammar
- Study Grammar Essentials
- Take grammar quizzes
- Review grammar rules
- **Target:** 5 hours, 1 quiz/day

### Week 4: Reading & Vocabulary
- Study reading strategies
- Build vocabulary
- Take reading quizzes
- **Target:** 6 hours, 2 quizzes/day

---

## 📱 Mobile Responsiveness

The platform is fully responsive and works on:
- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Tablet (iPad, Android)
- ✅ Mobile (iPhone, Android phones)

Mobile features:
- Touch-friendly interface
- Responsive navigation
- Optimized for small screens
- Easy quiz taking

---

## 🖨️ Printing Resources

All cheatsheets are print-optimized:
- Click "View" to see in browser
- Click "Download" to save as file
- Use Ctrl+P (or Cmd+P) to print
- Recommended: Print in color on cardstock

**Print Tips:**
- Use cardstock for durability
- Laminate flashcards for reuse
- Organize printed materials by subject
- Keep accessible during study

---

## 🔄 Project Structure

```
src/
├── pages/                    # 10 main pages
│   ├── Home.jsx             # Dashboard
│   ├── Math.jsx             # Math topics
│   ├── English.jsx          # English topics
│   ├── Vocabulary.jsx       # Vocabulary builder
│   ├── Practice.jsx         # Quiz hub
│   ├── Cheatsheets.jsx      # Printable resources
│   ├── Resources.jsx        # External resources
│   ├── Profile.jsx          # User dashboard
│   ├── TopicPage.jsx        # Lesson pages
│   └── QuizPage.jsx         # Interactive quizzes
│
├── components/              # Reusable components
│   ├── Header.jsx           # Top navigation
│   └── Sidebar.jsx          # Navigation menu
│
├── data/                    # Content data
│   ├── cheatsheetResources.js
│   └── externalResources.js
│
├── hooks/                   # Custom React hooks
│   ├── useLocalStorage.js
│   ├── useStreakCalculation.js
│   └── useQuizProgress.js
│
├── utils/                   # Utility functions
│   ├── dateUtils.js
│   └── scoreCalculator.js
│
├── styles/
│   └── globals.css          # Tailwind + custom styles
│
├── App.jsx                  # Main app component
└── main.jsx                 # Entry point
```

---

## 🚀 Deployment

### GitHub Pages
```bash
npm run build
# Upload dist/ folder to GitHub Pages
```

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop dist/ folder to Netlify
```

---

## 📈 Future Features

- [ ] More vocabulary words (200+)
- [ ] Additional math topics (Statistics, Ratios, Polynomials)
- [ ] Rhetorical Analysis and Writing topics
- [ ] Difficulty level selection
- [ ] Printable full-length practice tests
- [ ] Weak area recommendations
- [ ] Weekly progress reports
- [ ] Study streak notifications
- [ ] Leaderboards (optional)
- [ ] Teacher dashboard (enterprise)

---

## 🤝 Contributing

To contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit with clear messages
5. Push to your fork
6. Submit a pull request

---

## 📄 License

Licensed under Apache License 2.0 - see LICENSE file for details

---

## 📚 Documentation Files

- **FEATURES.md** - Detailed feature descriptions
- **RESOURCES_GUIDE.md** - Complete resources tab guide
- **CLAUDE.md** - Development guidance
- **FEATURES.md** - Feature documentation

---

## 🆘 Support & FAQ

### How is my progress saved?
Progress is saved in your browser's localStorage. It persists across sessions but will be lost if you clear browser data.

### What if I clear my browser cache?
Your progress will be reset. Consider printing your scores or taking screenshots for backup.

### Can I use this offline?
The app works offline once loaded, but external resources in the Resources tab require internet access.

### How many quizzes are included?
Currently 10+ quizzes. More are being added regularly.

### Can teachers use this?
Yes! Teachers can use this with their students for supplementary practice. Future versions will include a teacher dashboard.

---

## 📞 Contact & Feedback

Found a bug? Have a feature request? Your feedback is valuable!

---

## 🎓 About PSAT

The **PSAT/NMSQT** is a standardized test for 9th and 10th graders that:
- Prepares students for the SAT
- Can qualify for National Merit Scholarships
- Tests Math, Reading, and Writing
- Takes approximately 2 hours 45 minutes
- Is offered once a year in October

This platform helps students prepare comprehensively for success on test day!

---

## 📊 Quick Stats

| Metric | Value |
|--------|-------|
| **Pages** | 10+ |
| **Topics** | 4 main categories |
| **Quizzes** | 10+ interactive |
| **Cheatsheets** | 4 professional |
| **External Resources** | 30+ curated |
| **Learning Hours** | 20+ hours of content |
| **Mobile Responsive** | ✅ Yes |
| **Offline Capable** | ✅ Partial |
| **Backend Required** | ❌ No |

---

## 🙏 Credits

Built with:
- React & Vite
- Tailwind CSS
- Open source community resources

---

## 📅 Last Updated

November 2024 - Version 1.0

---

**Ready to master the PSAT? Start studying today!** 🚀

Visit http://localhost:3001 when running locally, or deploy to your hosting platform.

Happy studying! 📚✨
