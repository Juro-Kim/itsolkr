import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "데이팅앱 개인정보처리방침 | ITSOLKR",
  description: "ITSOLKR 데이팅 앱 개인정보처리방침",
};

export default function DatingPrivacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">개인정보처리방침</h1>
      <p className="text-gray-500 mb-2">서비스명: ITSOLKR 데이팅 앱</p>
      <p className="text-gray-500 mb-10">시행일: 2024년 1월 1일</p>

      <div className="space-y-10 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. 개인정보 수집 항목 및 수집 방법</h2>
          <p className="mb-3">ITSOLKR(이하 &ldquo;회사&rdquo;)은 데이팅 서비스 제공을 위해 아래와 같은 개인정보를 수집합니다.</p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">수집 시점</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">수집 항목</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">구분</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">회원가입 시</td>
                  <td className="border border-gray-200 px-4 py-3">닉네임, 이메일, 전화번호</td>
                  <td className="border border-gray-200 px-4 py-3">일반 개인정보</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">프로필 등록 시</td>
                  <td className="border border-gray-200 px-4 py-3">직업, 키, 자기소개, 프로필 사진</td>
                  <td className="border border-gray-200 px-4 py-3">일반 개인정보</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">프로필 등록 시 (선택)</td>
                  <td className="border border-gray-200 px-4 py-3 font-medium text-amber-700">종교</td>
                  <td className="border border-gray-200 px-4 py-3 text-amber-700 font-medium">민감정보</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">서비스 이용 중 자동 수집</td>
                  <td className="border border-gray-200 px-4 py-3">기기 식별자, IP 주소, 접속 로그</td>
                  <td className="border border-gray-200 px-4 py-3">일반 개인정보</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
            <p className="font-semibold text-amber-800 mb-1">⚠ 민감정보 처리에 관한 고지</p>
            <p className="text-amber-700">
              종교 정보는 「개인정보 보호법」 제23조에 따른 민감정보에 해당합니다.
              해당 항목은 <strong>선택적으로 입력</strong>할 수 있으며, 수집 시 별도의 동의를 받습니다.
              미입력 시에도 서비스 이용에 불이익이 없습니다.
            </p>
          </div>

          <p className="mt-3 text-sm text-gray-500">수집 방법: 앱 내 회원가입 및 프로필 등록 양식을 통한 직접 입력</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. 개인정보 수집 및 이용 목적</h2>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>회원 가입 및 본인 확인</li>
            <li>프로필 생성 및 매칭 서비스 제공</li>
            <li>다른 이용자에게 프로필 공개 (닉네임, 직업, 키, 종교 등 선택적으로 공개 설정)</li>
            <li>이용자 간 1:1 채팅 서비스 제공</li>
            <li>서비스 이용 통계 분석 및 서비스 개선</li>
            <li>불법·부정 이용 방지 및 서비스 보안 유지</li>
            <li>법령 준수 및 분쟁 해결</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. 개인정보 보유 및 이용 기간</h2>
          <p className="mb-3">회사는 개인정보 수집 및 이용 목적이 달성되면 지체 없이 파기합니다. 단, 관련 법령에 따라 아래와 같이 보존합니다.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">보존 항목</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">보존 기간</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">근거 법령</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">회원 정보</td>
                  <td className="border border-gray-200 px-4 py-3">탈퇴 즉시 삭제</td>
                  <td className="border border-gray-200 px-4 py-3">—</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">불법 이용 기록</td>
                  <td className="border border-gray-200 px-4 py-3">1년</td>
                  <td className="border border-gray-200 px-4 py-3">내부 방침</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">소비자 불만·분쟁 처리 기록</td>
                  <td className="border border-gray-200 px-4 py-3">3년</td>
                  <td className="border border-gray-200 px-4 py-3">전자상거래법</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">접속 로그</td>
                  <td className="border border-gray-200 px-4 py-3">3개월</td>
                  <td className="border border-gray-200 px-4 py-3">통신비밀보호법</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. 개인정보의 제3자 제공</h2>
          <p>회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우는 예외로 합니다.</p>
          <ul className="list-disc list-inside space-y-2 text-sm mt-3">
            <li>이용자가 사전에 동의한 경우 (예: 다른 이용자에게 프로필 공개)</li>
            <li>법령의 규정에 의거하거나 수사기관의 요구가 있는 경우</li>
          </ul>
          <p className="mt-3 text-sm bg-blue-50 border border-blue-100 rounded-lg p-3">
            매칭 서비스 특성상 이용자가 공개로 설정한 프로필 정보(닉네임, 직업, 키, 종교 등)는
            앱 내 다른 이용자에게 노출될 수 있습니다. 공개 범위는 이용자가 직접 설정할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. 개인정보의 파기</h2>
          <p>회원 탈퇴 요청 또는 보유 기간 만료 시 지체 없이 파기합니다.</p>
          <ul className="list-disc list-inside space-y-2 text-sm mt-3">
            <li><strong>전자적 파일:</strong> 복구 불가능한 방법으로 영구 삭제</li>
            <li><strong>종이 문서:</strong> 분쇄기로 파쇄 또는 소각</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. 이용자의 권리·의무 및 행사 방법</h2>
          <p className="mb-3">이용자는 언제든지 다음 권리를 행사할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>개인정보 열람 요청</li>
            <li>오류 정정 요청</li>
            <li>삭제 요청 (회원 탈퇴)</li>
            <li>처리 정지 요청</li>
            <li>민감정보(종교) 동의 철회 요청</li>
          </ul>
          <p className="mt-3 text-sm">위 권리 행사는 개인정보 보호책임자에게 이메일로 요청하시면 지체 없이 처리합니다.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. 개인정보 보호책임자</h2>
          <div className="bg-gray-50 rounded-xl p-5 text-sm">
            <p><strong>성명:</strong> 김주영</p>
            <p className="mt-1"><strong>소속:</strong> ITSOLKR</p>
            <p className="mt-1"><strong>이메일:</strong> <a href="mailto:juro3040@gmail.com" className="text-indigo-600 hover:underline">juro3040@gmail.com</a></p>
            <p className="mt-1"><strong>주소:</strong> 광주광역시 남구 회재로 1201, 201동 902호</p>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            개인정보 관련 민원은 개인정보 보호위원회(privacy.go.kr) 또는 한국인터넷진흥원(privacy.kisa.or.kr)에 신고하실 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">8. 개인정보처리방침의 변경</h2>
          <p className="text-sm">이 개인정보처리방침은 법령·정책 또는 보안 기술의 변경에 따라 내용이 추가·삭제 및 수정될 수 있습니다. 변경 시 앱 내 공지사항을 통해 사전 공지합니다.</p>
          <p className="mt-2 text-sm text-gray-500">최초 시행일: 2024년 1월 1일</p>
        </section>

      </div>
    </div>
  );
}
