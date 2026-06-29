import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3 tracking-widest">ITSOLKR</h3>
            <p className="text-sm leading-relaxed">
              풀스택 AI 개발 솔루션<br />
              모바일 앱 · 웹 서비스 · 외주 개발
            </p>
            <p className="text-sm mt-3 leading-relaxed">
              광주광역시 남구 회재로 1201,<br />
              201동 902호
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">서비스</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/apps/delivery" className="hover:text-white transition-colors">배달 플랫폼</Link></li>
              <li><Link href="/apps/dating" className="hover:text-white transition-colors">데이팅 앱</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">포트폴리오</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">외주 문의</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">법적 고지</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy/delivery" className="hover:text-white transition-colors">배달앱 개인정보처리방침</Link></li>
              <li><Link href="/privacy/dating" className="hover:text-white transition-colors">데이팅앱 개인정보처리방침</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">이용약관</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-6 text-sm text-center">
          © 2024 ITSOLKR. All rights reserved. &nbsp;|&nbsp; 대표: 김주영 &nbsp;|&nbsp;
          <a href="mailto:juro3040@gmail.com" className="hover:text-white transition-colors"> juro3040@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
