import { NextResponse } from 'next/server';
import * as yup from 'yup';
import { login } from '@/feedbackr-api/auth';
import { LoginParamSchema } from '@/feedbackr-api/auth/types'


const schema = yup.object({
  email: yup.string().email().required('Please enter an email address'),
  password: yup.string().required('Please enter a password'),
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
  const paramsFormData = await request.formData();
  const paramsObj = Object.fromEntries(paramsFormData)
  const errors = await validateParams(paramsObj);
  if (errors.length > 0) {
    return NextResponse.json({ errors: { general: errors }}, { status: 422 });
  }

  const sanitizedParams =  LoginParamSchema.parse(paramsObj);
  const { success, result } = await login(sanitizedParams);
  if (success) {
    const response = NextResponse.json({ success: true }, { status: 200 })
    response.cookies.set('accessToken', result.accessToken, { httpOnly: true })

    return response;
  } else {
    return NextResponse.json(result, { status: 422 });
  }
}
