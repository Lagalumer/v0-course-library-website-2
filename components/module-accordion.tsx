"use client"

import { useState, useEffect } from "react"
import { ChevronDown, PlayCircle, CheckCircle2, Clock, BookOpen, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import type { Module } from "@/lib/course-data"
import { isLessonComplete } from "@/lib/progress-store"

interface ModuleAccordionProps {
  module: Module
  moduleNumber: number
  courseId: string
}

export function ModuleAccordion({ module, moduleNumber, courseId }: ModuleAccordionProps) {
  const [isOpen, setIsOpen] = useState(moduleNumber === 1)
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null)
  const [completedLessons, setCompletedLessons] = useState<string[]>([])

  useEffect(() => {
    // Verificar cuáles lecciones están completadas
    const completed = module.lessons.filter((l) => isLessonComplete(l.id)).map((l) => l.id)
    setCompletedLessons(completed)

    // Escuchar actualizaciones de progreso
    const handleUpdate = () => {
      const updated = module.lessons.filter((l) => isLessonComplete(l.id)).map((l) => l.id)
      setCompletedLessons(updated)
    }

    window.addEventListener("progress-update", handleUpdate)
    return () => window.removeEventListener("progress-update", handleUpdate)
  }, [module.lessons])

  const completedCount = completedLessons.length

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary text-sm font-semibold text-foreground">
            {moduleNumber}
          </span>
          <div>
            <h3 className="font-medium text-foreground">{module.title}</h3>
            <p className="text-sm text-muted-foreground mt-0.5">
              {completedCount} de {module.lessons.length} clases
            </p>
          </div>
        </div>

        <ChevronDown
          className={cn("h-5 w-5 text-muted-foreground transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>

      <div className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-2 space-y-2">
            {module.lessons.map((lesson) => {
              const isCompleted = completedLessons.includes(lesson.id)

              return (
                <div key={lesson.id} className="rounded-lg border border-border/50 overflow-hidden">
                  <div className="flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors">
                    <button
                      onClick={() => setExpandedLesson(expandedLesson === lesson.id ? null : lesson.id)}
                      className="flex items-center gap-3 text-left flex-1"
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0" />
                      ) : (
                        <PlayCircle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span
                        className={cn("text-sm font-medium", isCompleted ? "text-muted-foreground" : "text-foreground")}
                      >
                        {lesson.title}
                      </span>
                    </button>

                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {lesson.duration}
                      </span>
                      <Link
                        href={`/curso/${courseId}/clase/${lesson.id}`}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors"
                      >
                        Acceder
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                      {lesson.topics && lesson.topics.length > 0 && (
                        <button onClick={() => setExpandedLesson(expandedLesson === lesson.id ? null : lesson.id)}>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 text-muted-foreground transition-transform duration-200",
                              expandedLesson === lesson.id && "rotate-180",
                            )}
                          />
                        </button>
                      )}
                    </div>
                  </div>

                  {lesson.topics && lesson.topics.length > 0 && (
                    <div
                      className={cn(
                        "grid transition-all duration-300",
                        expandedLesson === lesson.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 pb-4 pt-1 ml-8 border-t border-border/30">
                          <div className="flex items-center gap-2 mt-3 mb-3">
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                              Contenido de la clase
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {lesson.topics.map((topic, index) => (
                              <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
