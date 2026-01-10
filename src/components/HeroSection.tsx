'use client';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      />

      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-secondary-900/85 to-black/95" />

      {/* Additional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-primary-600/20 backdrop-blur-sm rounded-full text-primary-300 text-sm font-medium mb-6 border border-primary-500/30">
            나라장터 등록 | 국산 정품 인증
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200">
          <span className="block">공공기관을 위한</span>
          <span className="block mt-2 bg-gradient-to-r from-primary-400 via-primary-300 to-primary-400 bg-clip-text text-transparent">
            프리미엄 사무가구
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-white/80 mb-10 animate-fade-in-up animation-delay-400">
          학교, 관공서, 시청, 구청, 군부대까지
          <br className="hidden sm:block" />
          <span className="font-semibold text-white">15년 경험</span>의 전문 컨설팅으로 최적의 솔루션을 제공합니다
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
          <button onClick={scrollToContact} className="bg-primary-500 text-secondary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group">
            <span className="flex items-center">
              무료 상담 신청
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
          <button onClick={scrollToContact} className="bg-transparent border-2 border-primary-400/50 text-primary-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-500/10 hover:border-primary-400 transition-all duration-300">
            견적 요청하기
          </button>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in animation-delay-600">
          {[
            { number: '15+', label: '년 경력' },
            { number: '500+', label: '프로젝트 완료' },
            { number: '100%', label: '국산 정품' },
            { number: '98%', label: '고객 만족도' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
