import { type ChangeEvent, type FormEvent, useState } from "react"
import { Input } from "../../ui/input.jsx"
import { Button } from "../../ui/button.jsx"
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "../../ui/field.jsx"

export type LoginFormValues = {
  email: string
  password: string
}

type LoginFormProps = {
  onSubmit?: (values: LoginFormValues) => void | Promise<void>
  isLoading?: boolean
}

type FormErrors = Partial<Record<keyof LoginFormValues, string>>

function validate(values: LoginFormValues): FormErrors {
  const errors: FormErrors = {}

  if (!values.email.trim()) {
    errors.email = "Введите email"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Некорректный email"
  }

  if (!values.password) {
    errors.password = "Введите пароль"
  } else if (values.password.length < 6) {
    errors.password = "Минимум 6 символов"
  }

  return errors
}

export default function LoginForm({ onSubmit, isLoading = false }: LoginFormProps) {
  const [values, setValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (field: keyof LoginFormValues) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }))

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    await onSubmit?.(values)
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto w-full max-w-sm rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-6 space-y-1">
        <h1 className="text-xl font-semibold text-zinc-900">Вход</h1>
        <p className="text-sm text-zinc-500">Войдите в Issue Desk</p>
      </div>

      <FieldGroup className="gap-5">
        <Field data-invalid={Boolean(errors.email)}>
          <FieldLabel htmlFor="login-email">Email</FieldLabel>
          <FieldContent>
            <Input
              id="login-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={handleChange("email")}
              aria-invalid={Boolean(errors.email)}
              disabled={isLoading}
            />
            {errors.email && <FieldError>{errors.email}</FieldError>}
          </FieldContent>
        </Field>

        <Field data-invalid={Boolean(errors.password)}>
          <FieldLabel htmlFor="login-password">Пароль</FieldLabel>
          <FieldContent>
            <Input
              id="login-password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={values.password}
              onChange={handleChange("password")}
              aria-invalid={Boolean(errors.password)}
              disabled={isLoading}
            />
            {errors.password && <FieldError>{errors.password}</FieldError>}
          </FieldContent>
        </Field>
      </FieldGroup>

      <Button type="submit" className="mt-6 w-full" disabled={isLoading}>
        {isLoading ? "Входим..." : "Войти"}
      </Button>
    </form>
  )
}
