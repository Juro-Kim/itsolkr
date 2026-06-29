import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "푸드 딜리버리 앱 | ITSOLKR",
  description: "주문·라이더 연결 배달 플랫폼 — 앱 설치 없이 채팅 소통, 식당 이벤트 관리",
};

export default function DeliveryApp() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="text-6xl mb-5">🍔</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">푸드 딜리버리</h1>
        <p className="text-gray-500 text-lg">주문·라이더 연결 플랫폼</p>
      </div>

      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 mb-10">
        <p className="text-gray-700 leading-relaxed text-lg">
          주문 접수 시 고유 링크를 자동 생성해 라이더에게 전송합니다. 라이더와 고객은 별도 앱 설치 없이
          해당 링크만으로 실시간 채팅이 가능하며, 식당별 이벤트·할인 설정과 Firebase 소셜 인증을 지원합니다.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-5">주요 기능</h2>
          <ul className="space-y-3">
            {[
              "주문 접수 시 고유 링크 자동 생성",
              "앱 설치 없이 고객·라이더 실시간 채팅",
              "전체 할인 / 기간 한정 할인 / 특정 메뉴 개별 할인 설정",
              "식당 이벤트 관리 대시보드",
              "Firebase + JWT 소셜 로그인",
              "Cloudflare R2 이미지 업로드",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 mt-2" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-5">기술 스택</h2>
          <div className="flex flex-wrap gap-2">
            {["React Native", "Expo", "Fastify", "PostgreSQL", "Redis", "Socket.io", "Firebase", "Cloudflare R2"].map((t) => (
              <span
                key={t}
                className="bg-orange-50 text-orange-800 border border-orange-200 text-sm px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">플랫폼</p>
            <p className="font-semibold text-gray-800">Android (Google Play Store)</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row gap-4 text-sm">
        <Link href="/privacy/delivery" className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium">
          개인정보처리방침 →
        </Link>
        <Link href="/terms" className="text-gray-500 hover:text-gray-700 transition-colors">
          이용약관
        </Link>
        <Link href="/contact" className="text-gray-500 hover:text-gray-700 transition-colors">
          문의하기
        </Link>
      </div>
    </div>
  );
}
