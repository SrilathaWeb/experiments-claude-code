import { useLocalStorage } from './useLocalStorage'

export function useStreakCalculation() {
  const [userProgress, setUserProgress] = useLocalStorage('userProgress', {
    userId: generateUserId(),
    lastActiveDate: null,
    streakCount: 0,
    currentStreak: { started: null },
    badges: [],
    topicProgress: {}
  })

  const updateActivity = () => {
    const today = new Date().toDateString()
    const lastActive = userProgress.lastActiveDate

    setUserProgress(prev => {
      const updatedProgress = { ...prev, lastActiveDate: today }

      if (lastActive !== today) {
        const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toDateString()

        if (lastActive === yesterday) {
          updatedProgress.streakCount = (prev.streakCount || 0) + 1
        } else {
          updatedProgress.streakCount = 1
          updatedProgress.currentStreak = { started: today }
        }

        updatedProgress.badges = updateBadges(updatedProgress.streakCount, prev.badges)
      }

      return updatedProgress
    })
  }

  return { userProgress, updateActivity }
}

function updateBadges(streakCount, currentBadges = []) {
  const newBadges = [...currentBadges]

  if (streakCount === 3 && !newBadges.includes('3day_streak')) {
    newBadges.push('3day_streak')
  }
  if (streakCount === 7 && !newBadges.includes('7day_streak')) {
    newBadges.push('7day_streak')
  }
  if (streakCount === 30 && !newBadges.includes('30day_streak')) {
    newBadges.push('30day_streak')
  }

  return newBadges
}

function generateUserId() {
  return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
}
