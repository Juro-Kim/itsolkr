import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | ITSOLKR",
  description: "ITSOLKR 서비스 이용약관",
};

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">이용약관</h1>
      <p className="text-gray-500 mb-10">시행일: 2024년 1월 1일</p>

      <div className="space-y-10 text-gray-700 leading-relaxed text-sm">

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">제1조 (목적)</h2>
          <p>이 약관은 ITSOLKR(이하 &ldquo;회사&rdquo;)이 제공하는 모바일 애플리케이션 및 관련 서비스(이하 &ldquo;서비스&rdquo;)의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">제2조 (약관의 효력 및 변경)</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>이 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.</li>
            <li>회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을 변경할 수 있습니다.</li>
            <li>약관 변경 시 회사는 변경 내용을 앱 내 공지사항에 7일 이상 사전 공지합니다.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">제3조 (서비스 제공 및 변경)</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>회사는 다음과 같은 서비스를 제공합니다.
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>푸드 딜리버리: 주문·라이더 연결 배달 플랫폼</li>
                <li>데이팅 앱: 프로필 기반 소셜 매칭 서비스</li>
                <li>기타 회사가 정하는 서비스</li>
              </ul>
            </li>
            <li>회사는 서비스 내용을 변경할 경우 사전에 공지합니다.</li>
            <li>서비스는 연중무휴 24시간 제공함을 원칙으로 하나, 시스템 점검 등의 사유로 중단될 수 있습니다.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">제4조 (회원 가입)</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>이용자는 회사가 정한 가입 양식에 따라 정보를 기입한 후 약관에 동의함으로써 회원 가입을 신청합니다.</li>
            <li>회사는 다음의 경우 가입 신청을 승낙하지 않을 수 있습니다.
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>허위 정보를 기재한 경우</li>
                <li>타인의 정보를 도용한 경우</li>
                <li>이전에 약관 위반으로 이용이 정지된 경우</li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">제5조 (이용자의 의무)</h2>
          <p className="mb-3">이용자는 다음 행위를 하여서는 안 됩니다.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>타인의 정보를 도용하거나 허위 정보를 등록하는 행위</li>
            <li>음란, 폭력적, 차별적 콘텐츠를 게시하는 행위</li>
            <li>서비스의 정상적인 운영을 방해하는 행위</li>
            <li>다른 이용자를 괴롭히거나 스토킹하는 행위</li>
            <li>영리 목적의 광고 또는 스팸 행위</li>
            <li>관련 법령을 위반하는 행위</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">제6조 (서비스 이용 제한)</h2>
          <p>회사는 이용자가 이 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우 경고, 일시 정지, 영구 이용 정지 등의 조치를 취할 수 있습니다.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">제7조 (책임의 제한)</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인해 서비스를 제공할 수 없는 경우 책임을 지지 않습니다.</li>
            <li>회사는 이용자 간의 매칭 결과 및 이용자 간 거래에 대해 책임을 지지 않습니다.</li>
            <li>이용자가 게시한 콘텐츠로 인한 법적 책임은 해당 이용자에게 있습니다.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">제8조 (분쟁 해결)</h2>
          <p>이 약관과 관련한 분쟁은 대한민국 법령을 준거법으로 하며, 광주지방법원을 제1심 관할 법원으로 합니다.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">제9조 (문의)</h2>
          <div className="bg-gray-50 rounded-xl p-4">
            <p><strong>회사명:</strong> ITSOLKR</p>
            <p className="mt-1"><strong>대표:</strong> 김주영</p>
            <p className="mt-1"><strong>이메일:</strong> <a href="mailto:juro3040@gmail.com" className="text-indigo-600 hover:underline">juro3040@gmail.com</a></p>
            <p className="mt-1"><strong>주소:</strong> 광주광역시 남구 회재로 1201, 201동 902호</p>
          </div>
        </section>

      </div>
    </div>
  );
}
