import Link from "next/link"
import Image from "next/image"
import { Clock, BookOpen, Layers } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Course {
  id: string
  title: string
  description: string
  modules: number
  lessons: number
  duration: string
  progress: number
  image: string
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="bg-card border-border overflow-hidden group hover:border-muted-foreground/30 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>

      <CardContent className="p-6">
        <h3 className="font-semibold text-lg text-card-foreground mb-2 line-clamp-2">{course.title}</h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{course.description}</p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
          <span className="flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5" />
            {course.modules} módulos
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" />
            {course.lessons} clases
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {course.duration}
          </span>
        </div>

        <Button asChild className="w-full bg-transparent" variant="outline">
          <Link href={`/curso/${course.id}`}>Acceder al curso</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
