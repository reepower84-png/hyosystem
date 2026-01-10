'use client';

const clientCategories = [
  {
    title: '교육기관',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: '지방자치단체',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    title: '국방/군 시설',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: '공공기관',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const stats = [
  { number: '500+', label: '납품 완료 프로젝트' },
  { number: '200+', label: '공공기관 납품' },
  { number: '15+', label: '년 업력' },
  { number: '98%', label: '재계약률' },
];

export default function ClientsSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="clients" className="py-24 bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-4 border border-primary-500/30">
            신뢰의 파트너
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-primary-400">500개 이상</span>의 기관이 선택했습니다
          </h2>
          <p className="text-lg md:text-xl text-secondary-400 max-w-2xl mx-auto mt-4">
            학교, 관공서, 군부대 등 다양한 공공기관과 함께해온 효시스템의 실적
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-secondary-800 rounded-2xl border border-secondary-700"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-secondary-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clientCategories.map((category, index) => (
            <div key={index} className="bg-secondary-800 rounded-2xl p-6 border border-secondary-700 hover:border-primary-500/50 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-400 mx-auto mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-white">
                {category.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-secondary-800 rounded-3xl border border-primary-500/30 p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="w-12 h-12 text-primary-500/50 mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl md:text-2xl text-secondary-200 mb-6 leading-relaxed">
              &ldquo;효시스템은 단순한 가구 납품을 넘어 공간 전체를 고려한 솔루션을 제안해 주셨습니다.
              납품 일정도 정확히 지켜주시고, 사후 관리까지 완벽하게 해주셔서 매우 만족스러웠습니다.&rdquo;
            </blockquote>
            <div className="text-primary-400">
              - 부천시 관내 공공기관 시설담당자
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-secondary-400 mb-6">
            다음 파트너가 되어 주세요. 지금 바로 상담 신청하세요.
          </p>
          <button onClick={scrollToContact} className="btn-primary">
            상담 신청하기
          </button>
        </div>
      </div>
    </section>
  );
}
