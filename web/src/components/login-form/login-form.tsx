'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import Form from '@/components/form'
import TextField from '@/components/text-field'
import { Button } from '@/components/button'
import { BotIcon } from "@/icons"
import { LoginErrorsSchema } from '@/feedbackr-api/v1/auth/types'

import type { FormEvent } from 'react';
import type { LoginErrors } from '@/feedbackr-api/v1/auth/types'


export default function LoginForm() {
  const [errors, setErrors] = useState<LoginErrors | null>(null)
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/login', { method: 'POST', body: formData })

    if (response.status === 422) {
      const result = await response.json()
      setErrors(LoginErrorsSchema.parse(result))
    } else if (response.status === 200) {
      setErrors(null)
      router.push('/')
    }
  }

  return (
    <Form
      icon={
        <div className="w-6 h-6">
          <BotIcon />
        </div>
      }
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl sm:text-3xl font-sans text-marian-blue w-full mt-5 sm:mt-3 mb-6 sm:mb-10">
        Login
      </h1>

      { errors?.errors.general ? (
        <ul className="flex flex-col w-full font-sans text-xs !font-normal sm:text-xs text-poppy bg-puppy/60 mb-6 sm:mb-10">
          { errors?.errors.general.map((error, index) => (
            <li key={index}>{error}</li>
          )) }
        </ul>
      ) : null}

      <div className="flex flex-col w-full gap-6 mb-10 sm:mb-8">
        <label className=" flex flex-col gap-2 w-full font-sans text-xs font-bold sm:text-lg text-marian-blue">
          Email
          <TextField id="email" name="email" placeholder="email@example.com" type="email" className="text-xs sm:text-base" />
        </label>

        <label className=" flex flex-col gap-2 w-full font-sans text-xs font-bold sm:text-lg text-marian-blue">
          Password
          <TextField id="password" name="password" placeholder="********" type="password" className="text-xs sm:text-base" />
        </label>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-end">
        <Button type="submit" variant="primary" className="text-xs !font-bold sm:text-sm">
          Log In
        </Button>
      </div>
    </Form>
  )
}
