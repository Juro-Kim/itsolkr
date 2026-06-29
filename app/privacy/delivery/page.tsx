import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "배달앱 개인정보처리방침 | ITSOLKR",
  description: "ITSOLKR 푸드 딜리버리 앱 개인정보처리방침",
};

export default function DeliveryPrivacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">개인정보처리방침</h1>
      <p className="text-gray-500 mb-2">서비스명: 푸드 딜리버리 (ITSOLKR Food Delivery)</p>
      <p className="text-gray-500 mb-10">시행일: 2024년 1월 1일</p>

      <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. 개인정보 수집 항목 및 수집 방법</h2>
          <p className="mb-3">ITSOLKR(이하 &ldquo;회사&rdquo;)은 푸드 딜리버리 서비스 제공을 위해 아래와 같은 개인정보를 수집합니다.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">수집 시점</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">수집 항목</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">회원가입 시</td>
                  <td className="border border-gray-200 px-4 py-3">이메일 주소, 전화번호</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">주문 시</td>
                  <td className="border border-gray-200 px-4 py-3">배달 주소(위치 정보)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">서비스 이용 중 자동 수집</td>
                  <td className="border border-gray-200 px-4 py-3">기기 식별자, IP 주소, 접속 로그, 쿠키</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-500">수집 방법: 앱 내 회원가입 및 주문 양식을 통한 직접 입력</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. 개인정보 수집 및 이용 목적</h2>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>회원 가입 및 본인 확인</li>
            <li>주문 접수, 배달 처리 및 고객 서비스 제공</li>
            <li>배달 기사와의 실시간 채팅 연결 (배달 주소 기반 링크 생성)</li>
            <li>서비스 이용 통계 분석 및 서비스 개선</li>
            <li>불법·부정 이용 방지 및 서비스 보안 유지</li>
            <li>법령 준수 및 분쟁 해결</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. 개인정보 보유 및 이용 기간</h2>
          <p className="mb-3">회사는 개인정보 수집 및 이용 목적이 달성되면 지체 없이 파기합니다. 단, 관련 법령에 따라 일정 기간 보존이 필요한 경우 아래와 같이 보존합니다.</p>
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
                  <td className="border border-gray-200 px-4 py-3">계약 또는 청약철회 기록</td>
                  <td className="border border-gray-200 px-4 py-3">5년</td>
                  <td className="border border-gray-200 px-4 py-3">전자상거래법</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">대금결제 및 재화 공급 기록</td>
                  <td className="border border-gray-200 px-4 py-3">5년</td>
                  <td className="border border-gray-200 px-4 py-3">전자상거래법</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">소비자 불만 또는 분쟁 처리 기록</td>
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
            <li>이용자가 사전에 동의한 경우</li>
            <li>법령의 규정에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
          </ul>
          <p className="mt-3 text-sm">배달 서비스 제공을 위해 배달 기사에게는 <strong>배달 주소 및 주문 정보</strong>가 공유됩니다.</p>
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
            <li>삭제 요청</li>
            <li>처리 정지 요청</li>
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
