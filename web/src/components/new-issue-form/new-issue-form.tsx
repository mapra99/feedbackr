'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import Form from '@/components/form'
import TextField, { TextAreaField } from '@/components/text-field'
import SelectField from '@/components/select-field';
import { Button } from '@/components/button'
import { PlusIcon } from "@/icons"
import { LoginErrorsSchema } from '@/feedbackr-api/v1/auth/types'

import type { FormEvent } from 'react';
import type { LoginErrors } from '@/feedbackr-api/v1/auth/types'

const ITEM_CATEGORIES = [
  { label: 'Feature', value: 'feature', id: 'feature' },
  { label: 'Bug', value: 'bug', id: 'bug' },
  { label: 'Enhancement', value: 'enhancement', id: 'enhancement' },
  { label: 'UI', value: 'ui', id: 'ui' },
  { label: 'UX', value: 'ux', id: 'ux' },
]

export default function NewIssueForm() {
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

  const goBack = () => { window.history.back() }

  return (
    <Form
      icon={
        <div className="w-3 h-3">
          <PlusIcon />
        </div>
      }
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl sm:text-3xl font-sans text-marian-blue w-full mt-5 sm:mt-3 mb-6 sm:mb-10">
        Create New Feedback
      </h1>

      { errors?.errors.general ? (
        <ul className="flex flex-col w-full font-sans text-xs !font-normal sm:text-xs text-poppy bg-puppy/60 mb-6 sm:mb-10">
          { errors?.errors.general.map((error, index) => (
            <li key={index}>{error}</li>
          )) }
        </ul>
      ) : null}

      <div className="flex flex-col w-full gap-6 mb-10 sm:mb-8">
        <label className=" flex flex-col gap-4 w-full font-sans">
          <div className="text-xs sm:text-lg flex flex-col gap-1">
            <span className="font-bold text-marian-blue">
              Feedback Title
            </span>

            <span className="font-normal text-glaucous">
              Add a short, descriptive headline
            </span>
          </div>

          <TextField id="title" name="title" type="text" className="text-xs sm:text-base font-normal" />
        </label>

        <div>
          <label className=" flex flex-col mb-4 w-full font-sans">
            <div className="text-xs sm:text-lg flex flex-col gap-1">
              <span className="font-bold text-marian-blue">
                Category
              </span>

              <span className="font-normal text-glaucous">
                Choose a category for your feedback
              </span>
            </div>
          </label>
          <SelectField id="category" name="category" items={ITEM_CATEGORIES} selectedId='feature' />
        </div>

        <label className=" flex flex-col gap-4 w-full font-sans">
          <div className="text-xs sm:text-lg flex flex-col gap-1">
            <span className="font-bold text-marian-blue">
              Feedback Detail
            </span>

            <span className="font-normal text-glaucous">
              Include any specific comments on what should be improved, added, etc.
            </span>
          </div>

          <TextAreaField id="detail" name="detail" type="text" className="text-xs sm:text-base h-24 px-6 py-4 font-normal" />
        </label>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-end">
        <Button type="submit" variant="primary" className="text-xs !font-bold sm:text-sm px-6 order-1 sm:order-2">
          Add Feedback
        </Button>

        <Button type="button" variant="tertiary" className="text-xs !font-bold sm:text-sm px-6 order-2 sm:order-1" onClick={goBack}>
          Cancel
        </Button>
      </div>
    </Form>
  )
}
