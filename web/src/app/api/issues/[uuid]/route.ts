import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';
import invariant from 'tiny-invariant';
import { deleteIssue } from '@/feedbackr-api/v1/issues';

import type { DeleteContextParams } from './types'

export async function DELETE(_request: Request, { params }: DeleteContextParams) {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  invariant(accessToken, 'accessToken cookie is missing')

  const { success } = await deleteIssue(params.uuid, accessToken);
  return NextResponse.json({ success: true }, { status: success ? 200 : 422 });
}
