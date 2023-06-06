import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';
import invariant from 'tiny-invariant';
import * as yup from 'yup';
import { createComment } from '@/feedbackr-api/v1/comments';
import { CreateCommentParamsSchema } from '@/feedbackr-api/v1/comments/types'

const schema = yup.object({
  content: yup.string().required('Please enter a comment')
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

  const params = await request.json();

  const errors = await validateParams(params);
  if (errors.length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const sanitizedParams =  CreateCommentParamsSchema.parse(params);
  const { success, result } = await createComment(sanitizedParams, accessToken);

  return NextResponse.json(result, { status: success ? 200 : 422 });
}
