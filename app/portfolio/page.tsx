import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "포트폴리오 | ITSOLKR",
  description: "ITSOLKR 풀스택 개발 프로젝트 포트폴리오",
};

const projects = [
  {
    title: "생산 자동화 플래너 — 납기일 자동 산출 시스템",
    description:
      "재고와 장비 정보를 입력하면 최적 생산 순서와 납기일을 자동으로 계산하는 풀스택 생산 자동화 시스템. 다중 장비·교대 근무·예외 일정을 반영한 스케줄러가 핵심입니다.",
    tech: ["NestJS", "React", "TypeScript", "TypeORM", "SQLite", "PostgreSQL", "Vite"],
    features: [
      "재고·장비 데이터 기반 생산 수량 및 납기일 자동 계산",
      "장비별 가동 시간·교대 근무·예외 일정 통합 스케줄링",
      "SQLite(로컬) ↔ PostgreSQL(프로덕션) 다중 DB 지원",
    ],
    color: "from-blue-700 to-indigo-800",
  },
  {
    title: "푸드 딜리버리 앱 — 주문·라이더 연결 플랫폼",
    description:
      "주문 접수 시 고유 링크를 생성해 라이더에게 전송, 앱 설치 없이 고객과 라이더가 채팅으로 소통하는 배달 플랫폼. 식당별 이벤트·할인 기능과 Firebase 소셜 인증을 지원합니다.",
    tech: ["React Native", "Expo", "Fastify", "PostgreSQL", "Redis", "Socket.io", "Firebase", "Cloudflare R2"],
    features: [
      "주문 접수 시 링크 자동 생성 → 라이더에게 전송, 앱 설치 없이 고객·라이더 채팅",
      "식당 이벤트 관리 — 전체 할인·기간 한정 할인·특정 메뉴 개별 할인 설정",
      "Firebase + JWT 소셜 로그인, Cloudflare R2 이미지 업로드",
    ],
    color: "from-orange-600 to-red-700",
  },
  {
    title: "AI 외국어 학습 앱 — 영상 기반 자막·단어 관리",
    description:
      "YouTube나 로컬 영상을 등록하면 OpenAI Whisper가 자동으로 자막을 생성하고 발음·번역·문법까지 분석해주는 PWA 외국어 학습 앱. 오프라인에서도 영상과 단어장 사용 가능.",
    tech: ["Next.js", "React", "TypeScript", "Firebase", "OpenAI API", "Tailwind CSS", "IndexedDB", "Next-PWA"],
    features: [
      "YouTube·로컬 영상 등록 → Whisper 자동 자막 생성 및 발음·문법 분석",
      "단어장 관리 (엑셀 일괄 등록·내보내기, 이미지 첨부, 암기 상태 추적)",
      "IndexedDB + Service Worker 기반 오프라인 영상·데이터 캐싱",
    ],
    color: "from-emerald-700 to-teal-800",
  },
];

export default function Portfolio() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <p className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-3">Case Studies</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">포트폴리오</h1>
        <p className="text-gray-500 text-lg">ITSOLKR이 완성한 프로젝트 — {projects.length}건</p>
      </div>

      <div className="space-y-10">
        {projects.map((p, i) => (
          <article key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className={`bg-gradient-to-r ${p.color} px-8 py-6 text-white`}>
              <h2 className="text-xl font-bold">{p.title}</h2>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6 leading-relaxed">{p.description}</p>

              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">사용 기술</h3>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-slate-50 text-slate-700 text-sm px-3 py-1 rounded-full border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">기능 구현</h3>
                <ul className="space-y-2">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-700 text-sm">
                      <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
