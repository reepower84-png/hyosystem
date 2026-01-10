'use client';

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: '나라장터 등록 제품',
    description: '조달청 나라장터에 정식 등록된 제품만을 취급하여 안전한 거래를 보장합니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    title: '100% 국산 정품',
    description: '믿을 수 있는 국내 제조사의 정품만을 사용하여 품질을 보증합니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '신속한 납품',
    description: '체계적인 물류 시스템으로 약속된 기한 내 정확한 납품을 실현합니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '전문 컨설팅',
    description: '15년 이상의 경험을 바탕으로 공간에 최적화된 솔루션을 제안합니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: '합리적인 가격',
    description: '중간 유통 과정을 최소화하여 최고 품질의 제품을 합리적인 가격에 제공합니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'A/S 보장',
    description: '납품 후에도 책임지는 사후 관리 서비스로 오랜 신뢰를 구축합니다.',
  },
];

export default function FeaturesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-4 border border-primary-500/30">
            왜 효시스템인가?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-primary-400">효시스템</span>을 선택하는 이유
          </h2>
          <p className="text-lg md:text-xl text-secondary-400 max-w-2xl mx-auto mt-4">
            고객 만족을 최우선으로 생각하는 효시스템만의 특별한 강점
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-secondary-900 rounded-2xl hover:bg-primary-500 transition-all duration-500 border border-secondary-800 hover:border-primary-400"
            >
              <div className="w-14 h-14 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-400 group-hover:bg-secondary-900 group-hover:text-primary-400 transition-all duration-500 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-secondary-900 transition-colors mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-400 group-hover:text-secondary-800 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-secondary-800 to-secondary-900 p-12 text-center border border-primary-500/30">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>
          <div className="relative z-10">
            <p className="text-primary-400 text-lg md:text-xl font-semibold mb-3 tracking-wide">
              "기준을 먼저 생각하고, 품질로 답합니다."
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              지금 바로 전문 상담을 받아보세요
            </h3>
            <p className="text-secondary-400 mb-8 max-w-2xl mx-auto">
              효시스템의 전문 상담원이 귀사에 가장 적합한 솔루션을 무료로 제안해 드립니다.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-primary-500 text-secondary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              무료 상담 신청
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
