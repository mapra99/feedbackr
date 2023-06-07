'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import Form from '@/components/form'
import TextField, { TextAreaField } from '@/components/text-field'
import SelectField from '@/components/select-field';
import { Button } from '@/components/button'
import { PencilIcon } from "@/icons"
import { IssueErrorsSchema } from './types'

import type { FormEvent } from 'react';
import type { EditIssueFormProps } from './types'

const ITEM_CATEGORIES = [
  { label: 'Feature', value: 'feature', id: 'feature' },
  { label: 'Bug', value: 'bug', id: 'bug' },
  { label: 'Enhancement', value: 'enhancement', id: 'enhancement' },
  { label: 'UI', value: 'ui', id: 'ui' },
  { label: 'UX', value: 'ux', id: 'ux' },
]

const ITEM_STATUSES = [
  { label: 'Suggestion', value: 'suggestion', id: 'suggestion' },
  { label: 'Planned', value: 'planned', id: 'planned' },
  { label: 'In-Progress', value: 'in_progress', id: 'in_progress' },
  { label: 'Live', value: 'live', id: 'live' },
]

export default function NewIssueForm({ productSlug, issue }: EditIssueFormProps) {
  const [errors, setErrors] = useState<string[] | null>(null)
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    formData.append('issueUuid', issue.uuid)

    const response = await fetch('/api/issues', { method: 'PUT', body: formData })

    if (response.status === 422) {
      const result = await response.json()
      setErrors(IssueErrorsSchema.parse(result).errors)
    } else if (response.status === 200) {
      setErrors(null)
      router.push(productSlug)
    }
  }

  const goBack = () => { window.history.back() }

  const handleDelete = async () => {
    await fetch(`/api/issues/${issue.uuid}`, { method: 'DELETE' })
    router.push(productSlug)
  }

  return (
    <Form
      icon={
        <div className="w-4 h-4">
          <PencilIcon />
        </div>
      }
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl sm:text-3xl font-sans text-marian-blue w-full mt-5 sm:mt-3 mb-6 sm:mb-10">
        Editing `{ issue.title }`
      </h1>

      { errors && errors.length > 0 ? (
        <ul className="flex flex-col w-full font-sans text-xs !font-normal sm:text-xs text-poppy bg-puppy/60 mb-6 sm:mb-10">
          { errors.map((error, index) => (
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

          <TextField id="title" name="title" type="text" className="text-xs sm:text-base font-normal" initialValue={issue.title} />
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
          <SelectField id="category" name="category" items={ITEM_CATEGORIES} selectedId={issue.category.name} />
        </div>

        <div>
          <label className=" flex flex-col mb-4 w-full font-sans">
            <div className="text-xs sm:text-lg flex flex-col gap-1">
              <span className="font-bold text-marian-blue">
                Update Status
              </span>

              <span className="font-normal text-glaucous">
                Change feature state
              </span>
            </div>
          </label>
          <SelectField id="status" name="status" items={ITEM_STATUSES} selectedId={issue.status} />
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

          <TextAreaField id="detail" name="detail" type="text" className="text-xs sm:text-base h-24 px-6 py-4 font-normal" initialValue={String(issue.detail)} />
        </label>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-between">
        <Button type="button" variant="danger" className="text-xs !font-bold sm:text-sm px-6 order-2 sm:order-1" onClick={handleDelete}>
          Delete
        </Button>

        <div className="flex flex-col sm:flex-row gap-4 order-1 sm:order-2">
          <Button type="submit" variant="primary" className="text-xs !font-bold sm:text-sm px-6 order-1 sm:order-2">
            Save Changes
          </Button>

          <Button type="button" variant="tertiary" className="text-xs !font-bold sm:text-sm px-6 order-2 sm:order-1" onClick={goBack}>
            Cancel
          </Button>
        </div>
      </div>
    </Form>
  )
}
