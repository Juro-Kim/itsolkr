import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "데이팅 앱 | ITSOLKR",
  description: "프로필 기반 매칭 데이팅 앱 — 닉네임, 직업, 관심사 기반 소셜 매칭",
};

export default function DatingApp() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="text-6xl mb-5">💜</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">데이팅 앱</h1>
        <p className="text-gray-500 text-lg">프로필 기반 소셜 매칭 서비스</p>
      </div>

      <div className="bg-pink-50 border border-pink-100 rounded-2xl p-8 mb-10">
        <p className="text-gray-700 leading-relaxed text-lg">
          닉네임, 직업, 종교, 키 등 상세한 프로필을 바탕으로 나에게 맞는 상대를 찾아주는 소셜 매칭 앱.
          자기소개를 통해 개성을 표현하고, 관심 있는 상대와 자유롭게 소통할 수 있습니다.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-5">주요 기능</h2>
          <ul className="space-y-3">
            {[
              "상세 프로필 등록 (닉네임, 직업, 종교, 키 등)",
              "자기소개 작성 및 프로필 이미지 업로드",
              "조건 기반 상대방 탐색",
              "실시간 1:1 채팅",
              "좋아요 / 매칭 시스템",
              "푸시 알림 (새 메시지, 매칭)",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0 mt-2" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-5">수집 프로필 항목</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {["닉네임", "전화번호", "이메일", "직업", "키", "종교*", "자기소개"].map((t) => (
              <span
                key={t}
                className={`text-sm px-3 py-1 rounded-full border ${
                  t === "종교*"
                    ? "bg-yellow-50 text-yellow-800 border-yellow-200"
                    : "bg-pink-50 text-pink-800 border-pink-200"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-400">* 종교는 민감정보로 분류되며 별도 동의 후 수집됩니다.</p>

          <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">플랫폼</p>
            <p className="font-semibold text-gray-800">Android (Google Play Store)</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row gap-4 text-sm">
        <Link href="/privacy/dating" className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium">
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
