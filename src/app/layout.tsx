import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '효시스템 | 공공기관 사무용 가구 전문',
  description:
    '나라장터 등록 국산 정품 사무용 가구 전문 유통. 학교, 관공서, 시청, 구청, 군부대 등 공공기관에 최적화된 프리미엄 가구 솔루션을 제공합니다.',
  keywords:
    '효시스템, 사무용 가구, 나라장터, 학교 가구, 관공서 가구, 군부대 가구, 공공기관 가구, 국산 가구',
  openGraph: {
    title: '효시스템 | 공공기관 사무용 가구 전문',
    description:
      '나라장터 등록 국산 정품 사무용 가구 전문 유통. 학교, 관공서, 시청, 구청, 군부대 등 공공기관에 최적화된 프리미엄 가구 솔루션을 제공합니다.',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
