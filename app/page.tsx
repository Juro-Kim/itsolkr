import Link from "next/link";
import { Wrench, HeartHandshake, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-4">
            Full-Stack AI Solutions
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">ITSOLKR</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto text-left">
            {[
              {
                icon: <Wrench size={28} strokeWidth={1.5} />,
                text: "웹 / 앱 / 프로그램 최적의 언어조합과 저렴한 비용으로 개발 및 유지보수 해드립니다.",
              },
              {
                icon: <HeartHandshake size={28} strokeWidth={1.5} />,
                text: "새로운 고객보다 이전 의뢰자를 최우선으로 두고 끝까지 책임집니다.",
              },
              {
                icon: <ShieldCheck size={28} strokeWidth={1.5} />,
                text: "최신 AI 기술을 융합하여 2배 이상 빠른 개발 속도와 고품질을 보장해 드립니다.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 text-center">
                <div className="text-indigo-300 mb-3 flex justify-center">{item.icon}</div>
                <p className="text-gray-200 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              포트폴리오 보기
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 hover:border-white hover:bg-white/5 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-indigo-600 py-10 text-white">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 text-center px-4">
          {[
            { num: "5+", label: "Projects Shipped" },
            { num: "3", label: "Industries" },
            { num: "100%", label: "Client Retention" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold">{s.num}</div>
              <div className="text-indigo-200 text-xs mt-1 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">서비스</h2>
          <p className="text-center text-gray-500 mb-12">기획부터 배포까지 원스톱으로 제공합니다</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📱",
                title: "모바일 앱 개발",
                desc: "React Native + Expo 기반 iOS/Android 크로스플랫폼 앱 개발. 실시간 채팅, 소셜 로그인, 위치 기반 서비스 구현.",
              },
              {
                icon: "🌐",
                title: "웹 서비스 개발",
                desc: "Next.js, React 기반 웹 서비스. SEO 최적화, PWA, 관리자 대시보드 등 풀스택 구현.",
              },
              {
                icon: "🤖",
                title: "AI 솔루션 통합",
                desc: "OpenAI API 등 최신 AI를 서비스에 통합. 자동화, 분석, 인텔리전트 기능 구현.",
              },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">출시 예정 앱</h2>
          <p className="text-center text-gray-500 mb-12">직접 개발하고 운영 중인 서비스</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-12 text-white text-center">
                <div className="text-6xl mb-4">🍔</div>
                <h3 className="text-2xl font-bold">푸드 딜리버리</h3>
                <p className="text-orange-100 mt-2 text-sm">Food Delivery Platform</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-5 leading-relaxed">
                  주문 접수 시 고유 링크를 생성해 라이더에게 전송, 앱 설치 없이 고객과 라이더가
                  실시간 채팅으로 소통하는 배달 플랫폼.
                </p>
                <div className="flex gap-3">
                  <Link href="/apps/delivery" className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors text-sm">
                    앱 소개 →
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/privacy/delivery" className="text-gray-400 hover:text-gray-600 transition-colors text-sm">
                    개인정보처리방침
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-12 text-white text-center">
                <div className="text-6xl mb-4">💜</div>
                <h3 className="text-2xl font-bold">데이팅 앱</h3>
                <p className="text-pink-100 mt-2 text-sm">Dating & Matching App</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-5 leading-relaxed">
                  프로필 기반 매칭 서비스. 닉네임, 직업, 관심사 등을 바탕으로 나에게
                  맞는 상대를 찾아주는 소셜 매칭 앱.
                </p>
                <div className="flex gap-3">
                  <Link href="/apps/dating" className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors text-sm">
                    앱 소개 →
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/privacy/dating" className="text-gray-400 hover:text-gray-600 transition-colors text-sm">
                    개인정보처리방침
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">주요 프로젝트</h2>
          <p className="text-center text-gray-500 mb-12">최근 완료한 외주 프로젝트</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "생산 자동화 플래너",
                desc: "납기일 자동 산출 시스템",
                tags: ["NestJS", "React", "TypeScript", "PostgreSQL"],
              },
              {
                title: "푸드 딜리버리 앱",
                desc: "주문·라이더 연결 플랫폼",
                tags: ["React Native", "Socket.io", "Redis", "Firebase"],
              },
              {
                title: "AI 외국어 학습 앱",
                desc: "영상 기반 자막·단어 관리",
                tags: ["Next.js", "OpenAI API", "Firebase", "PWA"],
              },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded-full border border-indigo-100">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              전체 포트폴리오 보기
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">프로젝트 문의</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            아이디어가 있으신가요?<br />
            요구사항을 보내주시면 최적의 기술 조합으로 빠르게 구현해 드립니다.
          </p>
          <Link
            href="/contact"
            className="bg-indigo-600 hover:bg-indigo-500 px-10 py-4 rounded-lg font-semibold transition-colors inline-block"
          >
            지금 연락하기
          </Link>
        </div>
      </section>
    </>
  );
}
