import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';
import invariant from 'tiny-invariant';

import { upvoteIssue, unvoteIssue } from '@/feedbackr-api/v1/issue_upvotes';

export async function POST(request: Request) {
  const params = await request.json();
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  invariant(accessToken, 'accessToken cookie is missing')

  const { success } = await upvoteIssue(params.issueUuid, accessToken);
  if (success) {
    return NextResponse.json({ success: true }, { status: 200 })
  } else {
    return NextResponse.json({ success: false }, { status: 422 });
  }
}

export async function PUT(request: Request) {
  const params = await request.json();
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  invariant(accessToken, 'accessToken cookie is missing')

  const { success } = await unvoteIssue(params.issueUuid, accessToken);
  if (success) {
    return NextResponse.json({ success: true }, { status: 200 })
  } else {
    return NextResponse.json({ success: false }, { status: 422 });
  }
}
