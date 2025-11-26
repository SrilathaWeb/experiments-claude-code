export const externalResources = {
  officialResources: {
    title: 'Official PSAT Resources',
    description: 'Resources directly from the College Board and SAT organizations',
    resources: [
      {
        id: 'collegeboard-psat',
        name: 'College Board - Official PSAT Page',
        url: 'https://www.psat.org',
        description: 'Official PSAT information, registration, and score reports',
        icon: '🎓',
        category: 'official',
        features: ['Official practice tests', 'Score information', 'College planning tools', 'Fee waivers']
      },
      {
        id: 'sat-practice-test',
        name: 'Khan Academy PSAT Practice',
        url: 'https://www.khanacademy.org/test-prep/psat',
        description: 'Free official PSAT practice through Khan Academy partnership',
        icon: '📚',
        category: 'official',
        features: ['Official practice questions', 'Video explanations', 'Personalized study plan', 'Free']
      },
      {
        id: 'sat-suite',
        name: 'SAT Suite Information',
        url: 'https://satsuite.collegeboard.org',
        description: 'Complete SAT Suite information including PSAT, SAT, and AP Exams',
        icon: '📋',
        category: 'official',
        features: ['Test dates', 'Score reports', 'College reporting', 'Test day info']
      }
    ]
  },

  freeStudyPlatforms: {
    title: 'Free Learning Platforms',
    description: 'Excellent free resources for PSAT preparation',
    resources: [
      {
        id: 'khan-academy',
        name: 'Khan Academy',
        url: 'https://www.khanacademy.org',
        description: 'Free comprehensive video lessons for all PSAT topics',
        icon: '🎬',
        category: 'free',
        subjects: ['Math', 'Reading', 'Writing'],
        features: ['Video lessons', 'Practice exercises', 'Progress tracking', 'Completely free']
      },
      {
        id: 'crash-course',
        name: 'Crash Course Videos',
        url: 'https://www.youtube.com/c/CrashCourse',
        description: 'Engaging video explanations for math, reading, and critical thinking',
        icon: '📹',
        category: 'free',
        subjects: ['Math', 'English', 'Science'],
        features: ['High-quality videos', 'Clear explanations', 'Free on YouTube', 'Engaging format']
      },
      {
        id: 'brilliant-org',
        name: 'Brilliant.org',
        url: 'https://www.brilliant.org',
        description: 'Interactive math and science problems for deeper understanding',
        icon: '⚡',
        category: 'free',
        subjects: ['Math', 'Logic', 'Problem-solving'],
        features: ['Interactive problems', 'Step-by-step solutions', 'Free tier available', 'Premium option']
      },
      {
        id: 'sparknotes',
        name: 'SparkNotes',
        url: 'https://www.sparknotes.com',
        description: 'Study guides and summaries for reading comprehension topics',
        icon: '📖',
        category: 'free',
        subjects: ['Literature', 'Reading', 'Writing'],
        features: ['Study guides', 'SparkNotes', 'Writing tips', 'Free']
      },
      {
        id: 'ixl-math',
        name: 'IXL Learning',
        url: 'https://www.ixl.com',
        description: 'Personalized math and language arts practice',
        icon: '🎯',
        category: 'free',
        subjects: ['Math', 'English', 'Science'],
        features: ['Adaptive practice', 'Real-time scores', 'Parent dashboard', 'Free trial']
      }
    ]
  },

  paidPlatforms: {
    title: 'Paid Test Prep Services',
    description: 'Comprehensive paid platforms for intensive preparation',
    resources: [
      {
        id: 'prepscholar',
        name: 'PrepScholar',
        url: 'https://www.prepscholar.com/psat/prep',
        description: 'Personalized PSAT prep with video lessons and practice tests',
        icon: '💻',
        category: 'paid',
        price: '$$$',
        features: ['Adaptive learning', 'Expert instructors', 'Full-length tests', 'Score guarantees']
      },
      {
        id: 'barrons-review',
        name: 'Barron\'s Test Prep',
        url: 'https://www.barronseduc.com',
        description: 'Comprehensive test prep with online classes and resources',
        icon: '📚',
        category: 'paid',
        price: '$$',
        features: ['Online courses', 'Practice tests', 'Expert feedback', 'Mobile app']
      },
      {
        id: 'test-masters',
        name: 'The Test Masters',
        url: 'https://www.thetestmasters.com',
        description: 'Personalized test prep with experienced instructors',
        icon: '👨‍🏫',
        category: 'paid',
        price: '$$$',
        features: ['Live classes', 'One-on-one tutoring', 'Flexible scheduling', 'Money-back guarantee']
      },
      {
        id: 'compass-ed',
        name: 'Compass Education',
        url: 'https://compasseducation.com',
        description: 'Expert-led PSAT and SAT preparation programs',
        icon: '🧭',
        category: 'paid',
        price: '$$$',
        features: ['Expert tutors', 'Customized plans', 'Progress reports', 'College advising']
      }
    ]
  },

  books: {
    title: 'Recommended Books & Study Guides',
    description: 'Best books for PSAT preparation and practice',
    resources: [
      {
        id: 'official-guide',
        name: 'Official PSAT/NMSQT Study Guide',
        author: 'College Board',
        description: 'The official guide with real practice tests and answers',
        icon: '📕',
        category: 'book',
        amazon: 'https://www.amazon.com/s?k=official+psat+study+guide',
        rating: 4.5,
        features: ['Official tests', 'Real questions', 'Answer explanations', 'Latest format']
      },
      {
        id: 'barrons-book',
        name: 'Barron\'s PSAT/NMSQT',
        author: 'Barron\'s Educational Series',
        description: 'Comprehensive review with practice tests and diagnostic quiz',
        icon: '📗',
        category: 'book',
        amazon: 'https://www.amazon.com/s?k=barrons+psat',
        rating: 4.3,
        features: ['Full review', 'Practice tests', 'Diagnostic quiz', 'Detailed answers']
      },
      {
        id: 'princeton-review',
        name: 'Princeton Review PSAT Prep',
        author: 'The Princeton Review',
        description: 'Test-taking strategies with proven techniques',
        icon: '📘',
        category: 'book',
        amazon: 'https://www.amazon.com/s?k=princeton+review+psat',
        rating: 4.2,
        features: ['Strategy guides', 'Proven techniques', 'Practice tests', 'Verbal explanations']
      },
      {
        id: 'kaplan-book',
        name: 'Kaplan PSAT Prep',
        author: 'Kaplan Test Prep',
        description: 'Strategic review with online resources and full-length tests',
        icon: '📙',
        category: 'book',
        amazon: 'https://www.amazon.com/s?k=kaplan+psat',
        rating: 4.1,
        features: ['Strategic review', 'Online resources', 'Full tests', 'Video explanations']
      }
    ]
  },

  youtubeChannels: {
    title: 'YouTube Channels & Video Resources',
    description: 'Video tutorials and explanations for PSAT concepts',
    resources: [
      {
        id: 'khan-academy-youtube',
        name: 'Khan Academy',
        url: 'https://www.youtube.com/@KhanAcademy',
        description: 'Comprehensive video lessons for all PSAT topics',
        icon: '🎓',
        category: 'video',
        subscribers: '9M+',
        features: ['High quality', 'Free', 'Comprehensive', 'Official partnership']
      },
      {
        id: 'crash-course-study',
        name: 'Crash Course',
        url: 'https://www.youtube.com/c/CrashCourse',
        description: 'Engaging explanations for complex topics',
        icon: '🚀',
        category: 'video',
        subscribers: '13M+',
        features: ['Engaging style', 'Visual explanations', 'Free', 'Quick lessons']
      },
      {
        id: 'patrickjmt',
        name: 'PatrickJMT (Math Focus)',
        url: 'https://www.youtube.com/c/patrickjmt',
        description: 'Clear math explanations for algebra, geometry, statistics',
        icon: '📐',
        category: 'video',
        subscribers: '1.2M+',
        features: ['Math focused', 'Clear explanations', 'Quick videos', 'Free']
      },
      {
        id: 'professor-leonard',
        name: 'Professor Leonard',
        url: 'https://www.youtube.com/c/ProfessorLeonard',
        description: 'In-depth math lectures for deeper understanding',
        icon: '👨‍🏫',
        category: 'video',
        subscribers: '2M+',
        features: ['Detailed lectures', 'Comprehensive', 'Free', 'College-level']
      },
      {
        id: 'amoeba-sisters',
        name: 'Amoeba Sisters',
        url: 'https://www.youtube.com/c/AmoebaSisters',
        description: 'Biology and science concepts explained simply',
        icon: '🧬',
        category: 'video',
        subscribers: '3M+',
        features: ['Simple explanations', 'Visual animations', 'Fun learning', 'Free']
      }
    ]
  },

  mobileApps: {
    title: 'Mobile Apps & Tools',
    description: 'Convenient study apps for on-the-go preparation',
    resources: [
      {
        id: 'khan-app',
        name: 'Khan Academy App',
        platform: 'iOS, Android',
        url: 'https://www.khanacademy.org/download',
        description: 'Official Khan Academy app for mobile learning',
        icon: '📱',
        category: 'app',
        features: ['Offline access', 'Video lessons', 'Practice problems', 'Free']
      },
      {
        id: 'quizlet-app',
        name: 'Quizlet',
        platform: 'iOS, Android, Web',
        url: 'https://www.quizlet.com',
        description: 'Flashcard app for vocabulary and concepts',
        icon: '🎴',
        category: 'app',
        features: ['Create flashcards', 'Study modes', 'Games', 'Collaborative learning']
      },
      {
        id: 'photomatch',
        name: 'Photomath',
        platform: 'iOS, Android',
        url: 'https://www.photomath.com',
        description: 'Math problem solver with step-by-step solutions',
        icon: '🔢',
        category: 'app',
        features: ['Photo solver', 'Step-by-step', 'Graphing', 'Detailed explanations']
      },
      {
        id: 'duolingo',
        name: 'Duolingo',
        platform: 'iOS, Android, Web',
        url: 'https://www.duolingo.com',
        description: 'Language learning (useful for vocabulary building)',
        icon: '🌍',
        category: 'app',
        features: ['Gamified learning', 'Vocabulary', 'Grammar', 'Free version']
      },
      {
        id: 'magoosh-app',
        name: 'Magoosh GRE Prep',
        platform: 'iOS, Android',
        url: 'https://www.magoosh.com',
        description: 'Math and verbal prep with video lessons',
        icon: '📊',
        category: 'app',
        features: ['Video lessons', 'Practice questions', 'Flashcards', 'Progress tracking']
      }
    ]
  },

  collegeResources: {
    title: 'College Planning & Resources',
    description: 'Resources for understanding college selection and PSAT benefits',
    resources: [
      {
        id: 'common-app',
        name: 'Common Application',
        url: 'https://www.commonapp.org',
        description: 'Platform for college applications',
        icon: '🎓',
        category: 'college',
        features: ['College list', 'Application essays', 'Common application', 'Deadlines']
      },
      {
        id: 'collegeboard-college-search',
        name: 'College Board College Search',
        url: 'https://bigfuture.collegeboard.org',
        description: 'Find colleges and scholarships',
        icon: '🔍',
        category: 'college',
        features: ['College finder', 'Scholarships', 'Career planning', 'Financial aid']
      },
      {
        id: 'nmsqt-info',
        name: 'NMSQT Information',
        url: 'https://www.nationalmerit.org',
        description: 'National Merit Scholarship information and benefits',
        icon: '🏆',
        category: 'college',
        features: ['Scholarship info', 'Eligibility', 'Recognition', 'College partnerships']
      },
      {
        id: 'act-vs-sat',
        name: 'ACT vs SAT Comparison',
        url: 'https://www.princeton.com/find-a-test/psat-sat-vs-act',
        description: 'Understanding differences between tests',
        icon: '⚖️',
        category: 'college',
        features: ['Test comparison', 'Score conversion', 'Which test', 'Registration']
      }
    ]
  }
}

export const prepTips = {
  title: 'PSAT Preparation Tips',
  tips: [
    {
      category: 'Study Schedule',
      icon: '📅',
      tips: [
        'Start preparing 2-3 months before the test',
        'Study 30-45 minutes daily rather than cramming',
        'Take at least 2-3 full-length practice tests',
        'Review wrong answers more than correct ones',
        'Increase study time the week before the test'
      ]
    },
    {
      category: 'Math Preparation',
      icon: '📐',
      tips: [
        'Master fundamentals before attempting hard problems',
        'Practice time management (aim for 3 min per problem)',
        'Show all work to catch calculation errors',
        'Use calculator strategically (not for every problem)',
        'Know basic formulas and shortcuts'
      ]
    },
    {
      category: 'Reading Preparation',
      icon: '📖',
      tips: [
        'Read actively with a purpose in mind',
        'Annotate passages to improve comprehension',
        'Practice eliminating wrong answers',
        'Build vocabulary through daily reading',
        'Understand question types before answering'
      ]
    },
    {
      category: 'Test Day Strategy',
      icon: '🎯',
      tips: [
        'Get 8+ hours of sleep the night before',
        'Eat a healthy breakfast on test day',
        'Arrive 15 minutes early to reduce stress',
        'Read questions carefully to avoid mistakes',
        'Manage time: skip hard questions and return to them'
      ]
    }
  ]
}
