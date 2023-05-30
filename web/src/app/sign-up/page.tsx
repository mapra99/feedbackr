'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import Form from '@/components/form'
import TextField from '@/components/text-field'
import { Button } from '@/components/button'
import { BotIcon } from "@/icons"
import { SignUpErrorsSchema } from '@/feedbackr-api/v1/auth/types'

import type { FormEvent } from 'react';
import type { SignUpErrors } from '@/feedbackr-api/v1/auth/types'

export default function SignUp() {
  const [errors, setErrors] = useState<SignUpErrors | null>(null)
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/sign-up', { method: 'POST', body: formData })
    const result = await response.json()

    if (response.status === 422) {
      setErrors(SignUpErrorsSchema.parse(result))
    } else if (response.status === 200) {
      setErrors(null)
      router.push('/')
    }
  }

  return (
    <main className="flex items-center justify-center w-full min-h-screen">
      <div className="my-20 mx-6 max-w-lg w-full">
        <Form icon={<BotIcon />} onSubmit={handleSubmit}>
          <h1 className="text-xl sm:text-3xl font-sans text-marian-blue w-full mt-5 sm:mt-3 mb-6 sm:mb-10">
            Sign Up
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
              First Name
              <TextField id="firstName" name="firstName" placeholder="Jhon" type="text" className="text-xs sm:text-base" error={errors?.errors.firstName?.join(', ')} />
            </label>

            <label className=" flex flex-col gap-2 w-full font-sans text-xs font-bold sm:text-lg text-marian-blue">
              Last Name
              <TextField id="lastName" name="lastName" placeholder="Doe" type="text" className="text-xs sm:text-base" error={errors?.errors.lastName?.join(', ')} />
            </label>

            <label className=" flex flex-col gap-2 w-full font-sans text-xs font-bold sm:text-lg text-marian-blue">
              Username
              <TextField id="username" name="username" placeholder="jhon.doe" type="text" className="text-xs sm:text-base" error={errors?.errors.username?.join(', ')} />
            </label>

            <label className=" flex flex-col gap-2 w-full font-sans text-xs font-bold sm:text-lg text-marian-blue">
              Email
              <TextField id="email" name="email" placeholder="email@example.com" type="email" className="text-xs sm:text-base" error={errors?.errors.email?.join(', ')} />
            </label>

            <label className=" flex flex-col gap-2 w-full font-sans text-xs font-bold sm:text-lg text-marian-blue">
              Password
              <TextField id="password" name="password" placeholder="********" type="password" className="text-xs sm:text-base" error={errors?.errors.password?.join(', ')} />
            </label>

            <label className=" flex flex-col gap-2 w-full font-sans text-lg text-marian-blue">
              Confirm your Password
              <TextField id="passwordConfirmation" name="passwordConfirmation" placeholder="********" type="password" error={errors?.errors.passwordConfirmation?.join(', ')} />
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-end">
            <Button type="submit" variant="primary" className="text-xs !font-bold sm:text-sm">
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
    </main>
  )
}
