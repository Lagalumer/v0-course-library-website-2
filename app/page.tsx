import { Header } from "@/components/header"
import { CourseCard } from "@/components/course-card"

const courses = [
  {
    id: "marca-personal",
    title: "Curso Completo de Marca Personal",
    description:
      "Domina las redes sociales, crea contenido viral y monetiza tu marca personal con estrategias probadas.",
    modules: 8,
    lessons: 16,
    duration: "12h 45min",
    progress: 0,
    image: "/personal-branding-professional-dark-minimal.jpg",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-muted-foreground text-sm font-medium mb-6 tracking-wide">
            Academia de aprendizaje
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2 text-balance">
            Aprende, crece y transforma
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6">tu negocio</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Accede a cursos de alta calidad diseñados para impulsar tu marca personal y dominar las redes sociales.
          </p>
        </section>

        {/* Courses Section */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-8">Explora nuestros cursos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
