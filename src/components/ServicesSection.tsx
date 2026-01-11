'use client';

const services = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: '학교 가구',
    description: '초·중·고·대학교에 최적화된 책상, 의자, 사물함 등 교육 환경에 맞춘 프리미엄 가구를 제공합니다.',
    items: ['학생용 책상/의자', '교사용 가구', '도서관 가구', '강당 의자', '기숙사 가구'],
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    title: '관공서 가구',
    description: '시청, 구청, 군청 등 공공기관에 적합한 내구성 높은 업무용 가구를 공급합니다.',
    items: ['업무용 책상', '회의실 가구', '수납장/캐비닛', '민원실 가구'],
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '군부대 가구',
    description: '군 시설에 필요한 견고하고 실용적인 가구를 국방 규격에 맞춰 납품합니다.',
    items: ['병영 가구', '사무실 가구', '강의실 가구', '휴게실 가구'],
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: '사무용 가구',
    description: '일반 기업 및 사무실에 적합한 모던하고 기능적인 오피스 가구를 제공합니다.',
    items: ['임원용 가구', '직원용 책상', '파티션', '응접 세트'],
  },
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-4 border border-primary-500/30">
            서비스 소개
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            공간에 맞는 <span className="text-primary-400">최적의 솔루션</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-400 max-w-2xl mx-auto mt-4">
            다양한 공공기관 및 기업의 특성에 맞춘 맞춤형 가구 솔루션을 제공합니다
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-secondary-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-secondary-700 group hover:border-primary-500/50"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-secondary-900 transition-all duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-secondary-400 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary-700 text-secondary-300 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-secondary-400 mb-6">
            원하시는 가구가 없으신가요? 맞춤 상담을 통해 해결해 드립니다.
          </p>
          <button onClick={scrollToContact} className="btn-primary">
            맞춤 상담 신청하기
          </button>
        </div>
      </div>
    </section>
  );
}
