"use client"

import { useEffect, useState } from "react"
import { getCompletedCount } from "@/lib/progress-store"

interface CourseProgressProps {
  total: number
}

export function CourseProgress({ total }: CourseProgressProps) {
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    setCompleted(getCompletedCount())

    const handleStorage = () => {
      setCompleted(getCompletedCount())
    }

    window.addEventListener("storage", handleStorage)
    window.addEventListener("progress-update", handleStorage)

    return () => {
      window.removeEventListener("storage", handleStorage)
      window.removeEventListener("progress-update", handleStorage)
    }
  }, [])

  const percentage = Math.min(100, Math.round((completed / total) * 100))

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-foreground">Tu progreso</span>
        <span className="text-sm text-muted-foreground">
          {Math.min(completed, total)} de {total} clases completadas
        </span>
      </div>

      <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-foreground rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-2 text-right">
        <span className="text-2xl font-bold text-foreground">{percentage}%</span>
      </div>
    </div>
  )
}
