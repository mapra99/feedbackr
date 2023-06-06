import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';
import invariant from 'tiny-invariant';
import * as yup from 'yup';
import { createIssue } from '@/feedbackr-api/v1/issues';
import { CreateIssueParamsSchema } from '@/feedbackr-api/v1/issues/types'

const schema = yup.object({
  title: yup.string().required('Please enter a title'),
  category: yup.string().oneOf(['bug', 'feature', 'ui', 'ux', 'enhancement'], 'Please select a category'),
  detail: yup.string().required('Please enter a description')
});

const validateParams = async (params: unknown) => {
  let errors: string[] = []

  try {
    await schema.validate(params, { abortEarly: false })
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      errors = error.errors
    }
  }

  return errors
}

export async function POST(request: Request) {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  invariant(accessToken, 'accessToken cookie is missing')

  const paramsFormData = await request.formData();
  const paramsObj = Object.fromEntries(paramsFormData)
  const errors = await validateParams(paramsObj);

  if (errors.length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const sanitizedParams =  CreateIssueParamsSchema.parse(paramsObj);
  const { success, result } = await createIssue(sanitizedParams, accessToken);

  return NextResponse.json(result, { status: success ? 200 : 422 });
}
