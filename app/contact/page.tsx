import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "연락처 | ITSOLKR",
  description: "ITSOLKR 문의 및 외주 개발 연락처",
};

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">연락처</h1>
        <p className="text-gray-500 text-lg">프로젝트 문의, 외주 개발 상담을 환영합니다.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">📧</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">이메일</h3>
                <a
                  href="mailto:juro3040@gmail.com"
                  className="text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  juro3040@gmail.com
                </a>
                <p className="text-gray-400 text-sm mt-1">24시간 이내 답변</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">📍</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">주소</h3>
                <p className="text-gray-700">
                  광주광역시 남구 회재로 1201,<br />
                  201동 902호
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">👤</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">대표</h3>
                <p className="text-gray-700">김주영</p>
                <p className="text-gray-400 text-sm mt-1">풀스택 AI 프롬프트 개발자</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-indigo-900 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">외주 개발 문의</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            모바일 앱, 웹 서비스, AI 솔루션 통합 등<br />
            다양한 프로젝트 경험이 있습니다.
          </p>
          <ul className="space-y-3 text-sm text-gray-200 mb-8">
            {[
              "React Native iOS/Android 앱 개발",
              "Next.js 풀스택 웹 서비스",
              "AI/OpenAI API 통합 개발",
              "실시간 채팅 (Socket.io)",
              "관리자 대시보드 구축",
              "기존 서비스 리팩토링",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="https://mail.google.com/mail/?view=cm&to=juro3040@gmail.com&su=ITSOLKR 외주 개발 문의"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-500 hover:bg-indigo-400 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            이메일로 문의하기
          </a>
        </div>
      </div>

      <div className="mt-16 bg-gray-50 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">사업자 정보</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          {[
            { label: "상호명", value: "ITSOLKR" },
            { label: "대표자", value: "김주영" },
            { label: "소재지", value: "광주광역시 남구" },
            { label: "이메일", value: "juro3040@gmail.com" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-gray-400 mb-1">{item.label}</p>
              <p className="font-semibold text-gray-800 break-all">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
