import { Header } from "@/components/header"
import { CourseProgress } from "@/components/course-progress"
import { ModuleAccordion } from "@/components/module-accordion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { courseData } from "@/lib/course-data"

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const course = courseData

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">Volver a cursos</span>
        </Link>

        {/* Course Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{course.title}</h1>
          <p className="text-muted-foreground text-lg">{course.description}</p>
        </div>

        <CourseProgress total={course.totalLessons} />

        {/* Modules */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-foreground mb-6">Contenido del curso</h2>

          <div className="space-y-4">
            {course.modules.map((module, index) => (
              <ModuleAccordion key={module.id} module={module} moduleNumber={index + 1} courseId={id} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
