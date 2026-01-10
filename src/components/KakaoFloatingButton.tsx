'use client';

export default function KakaoFloatingButton() {
  const handleClick = () => {
    window.open('http://pf.kakao.com/_xcQnxon/chat', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none"
      aria-label="카카오톡 상담"
    >
      <img
        src="/images/카톡_원형_로고.png"
        alt="카카오톡 상담"
        className="w-full h-full rounded-full"
      />
    </button>
  );
}
