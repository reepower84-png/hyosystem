import { NextRequest, NextResponse } from 'next/server';
import { sendDiscordNotification } from '@/lib/discord';

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

    const success = await sendDiscordNotification({
      name,
      phone,
      message: message || '',
    });

    if (!success) {
      return NextResponse.json(
        { error: '문의 접수에 실패했습니다. 다시 시도해 주세요.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Failed to send inquiry:', error);
    return NextResponse.json(
      { error: '문의 접수에 실패했습니다. 다시 시도해 주세요.' },
      { status: 500 }
    );
  }
}
