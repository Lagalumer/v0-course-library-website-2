"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Mail, Lock } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simular autenticación
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      {/* Logo y nombre */}
      <Link href="/" className="flex items-center gap-2 mb-8">
        <GraduationCap className="h-8 w-8 text-foreground" />
        <span className="text-xl font-semibold text-foreground">Academia de aprendizaje</span>
      </Link>

      <Card className="w-full max-w-md border-border bg-card">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold text-foreground">Iniciar Sesión</CardTitle>
          <CardDescription className="text-muted-foreground">
            Ingresa tus credenciales para acceder a tus cursos
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {/* Campo Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-ring"
                  required
                />
              </div>
            </div>

            {/* Campo Contraseña */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                Contraseña
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-ring"
                  required
                />
              </div>
            </div>

            {/* Link olvidaste contraseña */}
            <div className="text-right">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              ¿No tienes una cuenta?{" "}
              <Link href="#" className="text-foreground hover:underline font-medium">
                Regístrate
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>

      {/* Footer */}
      <p className="mt-8 text-sm text-muted-foreground">
        © 2025 Academia de aprendizaje. Todos los derechos reservados.
      </p>
    </div>
  )
}
