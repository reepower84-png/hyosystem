'use client';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img
              src="/images/효시스템_로고_가로형_1-removebg-preview.png"
              alt="효시스템"
              className="h-12 w-auto mb-6"
            />
            <div className="space-y-3 text-secondary-300">
              <p>
                <span className="text-secondary-400">상호:</span> 효시스템
              </p>
              <p>
                <span className="text-secondary-400">대표:</span> 이주영
              </p>
              <p>
                <span className="text-secondary-400">사업자등록번호:</span>{' '}
                556-56-00868
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">바로가기</h4>
            <ul className="space-y-2">
              {[
                { label: '서비스', id: 'services' },
                { label: '특장점', id: 'features' },
                { label: '고객사', id: 'clients' },
                { label: '문의하기', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Addresses */}
        <div className="mt-12 pt-8 border-t border-secondary-800">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-3">
                인천 본점
              </h4>
              <p className="text-secondary-300 flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-secondary-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                인천광역시 계양구 계산새로87번길 5, 6층 602호
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-3">
                부천 직영점
              </h4>
              <p className="text-secondary-300 flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-secondary-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                경기도 부천시 원미구 송내대로265번길 23, 201-G11호
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-secondary-800 text-center">
          <p className="text-secondary-400 text-sm">
            &copy; {new Date().getFullYear()} 효시스템. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
