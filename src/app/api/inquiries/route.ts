import { NextRequest, NextResponse } from 'next/server';
import { addInquiry, getInquiries } from '@/lib/db';
import { sendDiscordNotification } from '@/lib/discord';

export async function GET() {
  try {
    const inquiries = await getInquiries();
    return NextResponse.json(inquiries);
  } catch (error) {
    console.error('Failed to get inquiries:', error);
    return NextResponse.json(
      { error: '문의 목록을 불러오는데 실패했습니다.' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: '이름과 연락처는 필수 입력 항목입니다.' },
        { status: 400 }
      );
    }

    const inquiry = await addInquiry({
      name,
      phone,
      message: message || '',
    });

    await sendDiscordNotification({
      name,
      phone,
      message: message || '',
    });

    return NextResponse.json(inquiry, { status: 201 });
  } catch (error) {
    console.error('Failed to create inquiry:', error);
    return NextResponse.json(
      { error: '문의 접수에 실패했습니다. 다시 시도해 주세요.' },
      { status: 500 }
    );
  }
}
