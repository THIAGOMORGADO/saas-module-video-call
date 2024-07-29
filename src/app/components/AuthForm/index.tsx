'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

export default function AuthForm() {
  const form = useForm();
  const router = useRouter();

  const handleSubmit = form.handleSubmit((data: any) => {
    if (data.email === 'admin@admin.com' && data.password === 'admin') {
      router.push('/providers')
    } else if (data.email === 'usuario@usuario.com' && data.password === 'usuario') {
      router.push('/dashboard')
    } else {
      alert('Invalid credentials')
    }
  })
  return (
    <div className="flex items-center justify-center min-h-[100dvh] px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold">Sign In</CardTitle>
          <CardDescription className="text-sm sm:text-base">Enter your email and password to access your account.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required className="w-full" {...form.register('email')} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm sm:text-base">Password</Label>
              </div>
              <Input id="password" type="password" required className="w-full" {...form.register('password')} />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full text-sm sm:text-base">
              Sign In
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}