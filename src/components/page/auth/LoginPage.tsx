import { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import LoginForm, { type LoginFormValues } from "./LoginForm"

export default function LoginPage() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (values: LoginFormValues) => {
    setIsLoading(true)

    try {
      // TODO: заменить на реальный запрос к API
      await new Promise((resolve) => setTimeout(resolve, 800))

      localStorage.setItem("user", JSON.stringify({ email: values.email }))
      toast.success("Вы вошли в систему")
      navigate("/")
    } catch {
      toast.error("Не удалось войти. Проверьте email и пароль")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
      <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
    </div>
  )
}
