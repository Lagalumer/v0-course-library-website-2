"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { CourseProgress } from "@/components/course-progress"
import { ArrowLeft, ArrowRight, Clock, BookOpen, Lightbulb, CheckCircle2, Target } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { getLessonById, getModuleByLessonId, getAdjacentLessons, courseData } from "@/lib/course-data"
import { markLessonComplete } from "@/lib/progress-store"

export default function LessonPage() {
  const params = useParams()
  const id = params.id as string
  const lessonId = params.lessonId as string

  const lesson = getLessonById(lessonId)
  const module = getModuleByLessonId(lessonId)
  const { prev, next } = getAdjacentLessons(lessonId)

  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    if (lessonId) {
      markLessonComplete(lessonId)
      setIsCompleted(true)
      // Disparar evento para actualizar otros componentes
      window.dispatchEvent(new Event("progress-update"))
    }
  }, [lessonId])

  if (!lesson || !module) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Clase no encontrada</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link
          href={`/curso/${id}`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">Volver al curso</span>
        </Link>

        <div className="mb-8">
          <CourseProgress total={courseData.totalLessons} />
        </div>

        {/* Lesson Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <span className="px-2 py-0.5 rounded bg-secondary text-xs font-medium">Módulo {module.id}</span>
            <span>•</span>
            <span>{module.title}</span>
            {isCompleted && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1 text-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Completada
                </span>
              </>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{lesson.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {lesson.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              {lesson.topics.length} temas
            </span>
          </div>
        </div>

        {/* Topics Overview */}
        <div className="mb-10 p-6 bg-secondary/30 rounded-xl border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Target className="h-5 w-5" />
            Lo que aprenderás en esta clase
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {lesson.topics.map((topic, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lesson Content */}
        <div className="space-y-10">
          {lesson.content.sections.map((section, sectionIndex) => (
            <section key={sectionIndex} className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3">{section.title}</h2>

              {/* Main content paragraphs */}
              {section.content.length > 0 && (
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground leading-relaxed text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {/* Subsections */}
              {section.subsections && section.subsections.length > 0 && (
                <div className="space-y-6 ml-4 border-l-2 border-border pl-6">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">{subsection.title}</h3>
                      {subsection.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* List items */}
              {section.list && section.list.length > 0 && (
                <ul className="space-y-3 bg-secondary/20 p-5 rounded-lg">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center text-xs font-semibold text-foreground">
                        {itemIndex + 1}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Highlight box */}
              {section.highlight && (
                <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-5 flex gap-4">
                  <Lightbulb className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium leading-relaxed">{section.highlight}</p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-between gap-4">
            {prev ? (
              <Link
                href={`/curso/${id}/clase/${prev.id}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-secondary/50 transition-colors flex-1 max-w-[45%]"
              >
                <ArrowLeft className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <div className="text-left overflow-hidden">
                  <span className="text-xs text-muted-foreground block">Clase anterior</span>
                  <span className="text-sm font-medium text-foreground truncate block">{prev.title}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/curso/${id}/clase/${next.id}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-colors flex-1 max-w-[45%] justify-end"
              >
                <div className="text-right overflow-hidden">
                  <span className="text-xs opacity-70 block">Siguiente clase</span>
                  <span className="text-sm font-medium truncate block">{next.title}</span>
                </div>
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
              </Link>
            ) : (
              <Link
                href={`/curso/${id}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                <span className="text-sm font-medium">Volver al curso</span>
                <CheckCircle2 className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
