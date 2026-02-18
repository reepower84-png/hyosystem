'use client';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Logo */}
          <div className="lg:col-span-2">
            <img
              src="/images/효시스템_로고_가로형_1-removebg-preview.png"
              alt="효시스템"
              className="h-12 w-auto mb-6"
            />
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

        {/* Business Info */}
        <div className="mt-12 pt-8 border-t border-secondary-800">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 인천 본점 */}
            <div>
              <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-4">
                인천 본점
              </h4>
              <div className="space-y-2 text-secondary-300 text-sm">
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
                <p className="flex items-start gap-2">
                  <span className="text-secondary-400 flex-shrink-0">주소:</span>
                  <span>인천광역시 계양구 계산새로87번길 5, 6층 602호</span>
                </p>
              </div>
            </div>

            {/* 부천 직영점 */}
            <div>
              <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-4">
                부천 직영점
              </h4>
              <div className="space-y-2 text-secondary-300 text-sm">
                <p>
                  <span className="text-secondary-400">상호:</span> 효시스템 부천직영점
                </p>
                <p>
                  <span className="text-secondary-400">대표:</span> 이주영
                </p>
                <p>
                  <span className="text-secondary-400">사업자등록번호:</span>{' '}
                  290-62-00902
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-secondary-400 flex-shrink-0">주소:</span>
                  <span>경기도 부천시 원미구 송내대로265번길 23, 201-G11</span>
                </p>
              </div>
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
