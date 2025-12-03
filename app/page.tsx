import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 첫 번째 섹션 - 파란색 */}
      <section className="w-full bg-blue-600 min-h-[50vh] flex items-center justify-center pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-white">
              첫 번째 섹션
            </h1>
          </div>
        </div>
      </section>

      {/* 두 번째 섹션 - 검정색 */}
      <section className="w-full bg-black min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-start gap-6 text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-white">
              세상의 문제를 질문하고,<br />
              AI로 문제를 해결하는<br />
              경험을 합니다.
            </h1>
          </div>
        </div>
      </section>

      {/* 세 번째 섹션 - 2열 레이아웃 */}
      <section className="w-full bg-black min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* 왼쪽: Future 섹션 */}
            <div className="bg-gray-900 p-12 flex flex-col items-center justify-center min-h-[600px]">
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">Future</h2>
              <div className="w-64 h-64 bg-blue-500 rounded-full flex items-center justify-center">
                {/* 지구본 그래픽 영역 - 나중에 이미지나 SVG로 대체 가능 */}
                <div className="text-white text-4xl">🌍</div>
              </div>
            </div>

            {/* 오른쪽: 텍스트 섹션 */}
            <div className="flex flex-col gap-6 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                미래 인재 양성을 위한 카카오 AI 루키 캠프가 시작됩니다.
              </h2>
              <p className="text-lg md:text-xl text-white leading-relaxed">
                AI가 세상을 바꾸는 시대, 변화의 힘은 AI 엔지니어에게 있습니다.<br />
                꿈꾸는 청소년들이 AI 엔지니어링의 진짜 과정을 경험하고,<br />
                기술을 이해하는 미래의 개발자로 성장할 수 있도록<br />
                카카오 AI 루키 캠프를 시작합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 네 번째 섹션 - Growth 섹션 */}
      <section className="w-full bg-black min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* 왼쪽: 텍스트 섹션 (2/3) */}
            <div className="lg:col-span-2 flex flex-col gap-6 text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                체험형 AI 코딩을 넘어,<br />
                'AI 엔지니어링'을 체득하며<br />
                성장합니다.
              </h2>
              <p className="text-lg md:text-xl text-white leading-relaxed">
                카카오 주니어 캠프는 코드를 따라 하며 탐색하는 수준을 넘어섭니다.<br />
                AI의 작동 원리를 이해하고, 동료와 같이 문제를 정의하며,<br />
                데이터를 기반으로 해결책을 구현하는<br />
                '문제 해결형 AI 엔지니어링 교육'입니다.
              </p>
            </div>

            {/* 오른쪽: Growth 그래픽 (1/3) */}
            <div className="bg-gray-900 rounded-2xl p-12 flex flex-col items-center justify-center min-h-[600px]">
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-12 uppercase">Growth</h3>
              <div className="relative flex items-center justify-center">
                {/* 픽셀화된 위쪽 화살표 */}
                <div className="text-yellow-400 text-8xl md:text-9xl filter drop-shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                  ↑
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 다섯 번째 섹션 - Tech 섹션 */}
      <section className="w-full bg-black min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* 왼쪽: Tech 그래픽 */}
            <div className="bg-gray-900 rounded-2xl p-12 flex flex-col items-center justify-center min-h-[600px] border-2 border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              <h3 className="text-6xl md:text-7xl font-bold text-white mb-12">Tech</h3>
              <div className="relative flex items-center justify-center">
                {/* 픽셀화된 녹색 코드 태그 아이콘 */}
                <div className="text-green-400 text-8xl md:text-9xl font-mono filter drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                  &lt;/&gt;
                </div>
              </div>
            </div>

            {/* 오른쪽: 텍스트 섹션 */}
            <div className="flex flex-col gap-6 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                기술을 통해 세상을 더 좋게 만들 미래의 리더를 기다립니다.
              </h2>
              <p className="text-lg md:text-xl text-white leading-relaxed">
                미래는 기술이 만드는 것이 아니라, 기술을 이해한 사람이 만듭니다.<br />
                우리는 기술을 통해 세상을 더 좋게 만들고 싶은 청소년,<br />
                그리고 집요하게 묻고 과감하게 도전하는<br />
                미래의 리더를 기다립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 여섯 번째 섹션 - 정보 섹션 */}
      <section className="w-full bg-black min-h-screen flex items-center py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12">
            {/* 제목 */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
              AI 엔지니어링에 관심이 많은 청소년이라면
            </h2>

            {/* 정보 카드 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 모집 기간 */}
              <div className="bg-gray-800 rounded-xl p-8 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-green-400 text-4xl">📅</div>
                  <h3 className="text-2xl font-bold text-white">모집 기간</h3>
                </div>
                <p className="text-lg text-white">
                  2025년 11월 25일(화) ~ 2025년 12월 23일(화)
                </p>
              </div>

              {/* 모집 대상 */}
              <div className="bg-gray-800 rounded-xl p-8 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-blue-400 text-4xl">👤</div>
                  <h3 className="text-2xl font-bold text-white">모집 대상</h3>
                </div>
                <p className="text-lg text-white">
                  기초 프로그래밍이 가능한 비수도권 소재 중학교 1~3학년 학생 (2025년 기준)
                </p>
              </div>

              {/* 참가 비용 */}
              <div className="bg-gray-800 rounded-xl p-8 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-green-400 text-4xl">💰</div>
                  <h3 className="text-2xl font-bold text-white">참가 비용</h3>
                </div>
                <p className="text-lg text-white">
                  카카오 전액 지원<br />
                  <span className="text-gray-400">* 단, 교통비 제외</span>
                </p>
              </div>

              {/* 캠프 일정 */}
              <div className="bg-gray-800 rounded-xl p-8 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-yellow-400 text-4xl">⏰</div>
                  <h3 className="text-2xl font-bold text-white">캠프 일정</h3>
                </div>
                <p className="text-lg text-white">
                  3박 4일<br />
                  <span className="text-gray-400">*지역별 일정 상이 / 하단의 캠프 과정 자세히 보기 참고</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 일곱 번째 섹션 - CTA 섹션 (노란색) */}
      <section className="w-full text-white bg-blue-600 min-h-[50vh] flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col items-center gap-8 text-center">
            <p className="text-xl md:text-2xl text-white font-medium">
              지금 바로 지원하세요.
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              PROTEEN
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                지원하기
              </button>
              <Link href="/camp-intro" className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors text-center">
                캠프 과정 자세히 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
