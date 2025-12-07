"use client"

// Utilidad para manejar el progreso del curso en localStorage

const STORAGE_KEY = "course-progress"

export interface ProgressState {
  completedLessons: string[]
}

export function getProgress(): ProgressState {
  if (typeof window === "undefined") {
    return { completedLessons: [] }
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (e) {
    console.error("Error reading progress:", e)
  }

  return { completedLessons: [] }
}

export function markLessonComplete(lessonId: string): ProgressState {
  const progress = getProgress()

  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }

  return progress
}

export function isLessonComplete(lessonId: string): boolean {
  const progress = getProgress()
  return progress.completedLessons.includes(lessonId)
}

export function getCompletedCount(): number {
  const progress = getProgress()
  return progress.completedLessons.length
}
