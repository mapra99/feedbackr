import { NextResponse } from 'next/server';
import * as yup from 'yup';
import { signUp } from '@/feedbackr-api/auth';
import { SignUpParamsSchema } from '@/feedbackr-api/auth/types'


const schema = yup.object({
  firstName: yup.string().required('Please enter your first name'),
  lastName: yup.string().required('Please enter your last name'),
  username: yup.string().required('A Username is required'),
  email: yup.string().email().required('Please enter an email address'),
  password: yup.string().required('Please enter a password'),
  passwordConfirmation: yup.string().required('Please confirm your password').oneOf([yup.ref('password')], 'Password and password confirmation should match')
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

  const sanitizedParams =  SignUpParamsSchema.parse(paramsObj);
  const { success, result } = await signUp(sanitizedParams);
  if (success) {
    return NextResponse.json(result);
  } else {
    return NextResponse.json(result, { status: 422 });
  }
}
