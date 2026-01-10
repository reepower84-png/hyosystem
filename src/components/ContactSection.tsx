'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitResult({
          success: true,
          message: '문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.',
        });
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setSubmitResult({
          success: false,
          message: data.error || '문의 접수 중 오류가 발생했습니다. 다시 시도해 주세요.',
        });
      }
    } catch {
      setSubmitResult({
        success: false,
        message: '네트워크 오류가 발생했습니다. 다시 시도해 주세요.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-4 border border-primary-500/30">
              문의하기
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-primary-400">무료 상담</span>을 신청하세요
            </h2>
            <p className="text-lg text-secondary-400 mb-8">
              효시스템의 전문 상담원이 귀사에 가장 적합한 가구 솔루션을 무료로 제안해
              드립니다. 부담 없이 문의해 주세요.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-secondary-800 rounded-xl border border-secondary-700">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    전화 문의
                  </h4>
                  <p className="text-secondary-400">평일 09:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-secondary-800 rounded-xl border border-secondary-700">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    빠른 응답
                  </h4>
                  <p className="text-secondary-400">
                    문의 접수 후 24시간 이내 연락드립니다
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-secondary-800 rounded-xl border border-secondary-700">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    무료 상담
                  </h4>
                  <p className="text-secondary-400">
                    견적 및 상담은 무료로 진행됩니다
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-secondary-800 rounded-3xl p-8 md:p-10 border border-secondary-700">
            <h3 className="text-2xl font-bold text-white mb-6">
              상담 신청서
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-secondary-300 mb-2"
                >
                  이름 <span className="text-primary-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="홍길동"
                  className="w-full px-4 py-3 bg-secondary-900 border border-secondary-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-white placeholder-secondary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-secondary-300 mb-2"
                >
                  연락처 <span className="text-primary-400">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="010-1234-5678"
                  className="w-full px-4 py-3 bg-secondary-900 border border-secondary-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-white placeholder-secondary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-secondary-300 mb-2"
                >
                  상담 문의
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="문의하실 내용을 입력해 주세요"
                  className="w-full px-4 py-3 bg-secondary-900 border border-secondary-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none text-white placeholder-secondary-500"
                />
              </div>

              {submitResult && (
                <div
                  className={`p-4 rounded-xl ${
                    submitResult.success
                      ? 'bg-green-900/50 text-green-400 border border-green-700'
                      : 'bg-red-900/50 text-red-400 border border-red-700'
                  }`}
                >
                  {submitResult.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-secondary-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    접수 중...
                  </span>
                ) : (
                  '상담 신청하기'
                )}
              </button>

              <p className="text-xs text-secondary-500 text-center">
                제출하신 정보는 상담 목적으로만 사용됩니다.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
