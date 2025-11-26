export const cheatsheetResources = [
  {
    id: 'math-formulas',
    title: 'Math Formulas Cheatsheet',
    description: 'Essential formulas for Algebra, Geometry, and Statistics',
    image: '/cheatsheets/math-formulas.svg',
    category: 'math',
    topics: ['Algebra', 'Geometry', 'Statistics'],
    isPrintable: true,
    downloadUrl: '/cheatsheets/math-formulas.svg',
    color: 'bg-blue-50',
    borderColor: 'border-blue-200',
    accentColor: 'text-blue-600'
  },
  {
    id: 'grammar-rules',
    title: 'Grammar Rules Guide',
    description: 'Subject-verb agreement, tenses, punctuation, and common mistakes',
    image: '/cheatsheets/grammar-rules.svg',
    category: 'english',
    topics: ['Grammar', 'Punctuation', 'Syntax'],
    isPrintable: true,
    downloadUrl: '/cheatsheets/grammar-rules.svg',
    color: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    accentColor: 'text-cyan-600'
  },
  {
    id: 'vocabulary-flashcards',
    title: 'Vocabulary Flashcards',
    description: 'Printable flashcard set with 6 high-frequency PSAT words',
    image: '/cheatsheets/vocabulary-flashcard.svg',
    category: 'vocabulary',
    topics: ['Vocabulary', 'Word Building'],
    isPrintable: true,
    downloadUrl: '/cheatsheets/vocabulary-flashcard.svg',
    color: 'bg-amber-50',
    borderColor: 'border-amber-200',
    accentColor: 'text-amber-600',
    instructions: 'Print on cardstock, cut along dashed lines'
  },
  {
    id: 'reading-comprehension',
    title: 'Reading Comprehension Strategy Guide',
    description: 'Strategies for analyzing passages and answering questions',
    image: '/cheatsheets/reading-comprehension.svg',
    category: 'english',
    topics: ['Reading', 'Comprehension', 'Inference'],
    isPrintable: true,
    downloadUrl: '/cheatsheets/reading-comprehension.svg',
    color: 'bg-green-50',
    borderColor: 'border-green-200',
    accentColor: 'text-green-600'
  }
]

export const testTakingStrategies = {
  title: 'Test-Taking Strategies',
  tips: [
    {
      title: 'Time Management',
      content: 'Allocate your time wisely. For Math: ~3 minutes per problem. For Reading: 5-7 minutes per passage.',
      icon: '⏱️'
    },
    {
      title: 'Read All Options',
      content: 'Always read all answer choices before selecting. Sometimes the best answer comes last.',
      icon: '👀'
    },
    {
      title: 'Eliminate Wrong Answers',
      content: 'Cross out obviously wrong answers first. This increases your chances of selecting the correct one.',
      icon: '❌'
    },
    {
      title: 'Show Your Work',
      content: 'For math problems, write out your steps. This helps you catch errors and follow your logic.',
      icon: '📝'
    },
    {
      title: 'Read Carefully',
      content: 'Watch for keywords like NOT, EXCEPT, ALWAYS. These change the meaning of the question.',
      icon: '🔍'
    },
    {
      title: 'Don\'t Leave Blanks',
      content: 'If you don\'t know the answer, make an educated guess. There\'s no penalty for wrong answers.',
      icon: '🎲'
    }
  ]
}

export const studySchedule = {
  title: 'Weekly Study Plan',
  weeks: [
    {
      week: 1,
      focus: 'Math Fundamentals',
      topics: ['Linear Equations', 'Slopes', 'Distance Formula'],
      quizzesPerDay: 1,
      studyHours: 5
    },
    {
      week: 2,
      focus: 'Geometry Basics',
      topics: ['Angles', 'Triangles', 'Circles'],
      quizzesPerDay: 1,
      studyHours: 5
    },
    {
      week: 3,
      focus: 'English Grammar',
      topics: ['Subject-Verb Agreement', 'Tenses', 'Punctuation'],
      quizzesPerDay: 1,
      studyHours: 5
    },
    {
      week: 4,
      focus: 'Reading & Vocabulary',
      topics: ['Comprehension Strategies', 'Vocabulary Building'],
      quizzesPerDay: 2,
      studyHours: 6
    }
  ]
}
