import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // const session = await getServerSession(authOptions);

  const body = await request.json();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/v1/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //   Authorization: `Bearer ${session?.administrator?.token}`,
      },
      body: JSON.stringify(body),
      cache: 'no-store',
    });

    const data = await res.json();
    console.log('responseData::', data);
    // return NextResponse.json({ data }, { status: res.status });
    return NextResponse.json(data);
  } catch (error) {
    console.log('error::', error);
    return NextResponse.json(error);
    //   return NextResponse.json({
    //     message: error,
    //   });
  }
}
