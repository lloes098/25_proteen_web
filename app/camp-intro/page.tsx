import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CampIntro() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <main className="pt-24">
        {/* 헤더 섹션 */}
        <section className="w-full bg-[#0a0a0a] py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              과정 안내
            </h1>
          </div>
        </section>

        {/* 01 교육 목적 */}
        <section className="w-full bg-[#0a0a0a] py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-start gap-8 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shrink-0 shadow-lg shadow-blue-500/30">
                01
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white pt-2">교육 목적</h3>
            </div>
            <div className="ml-0 md:ml-28">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                  AI 시대를 이끌어갈 청소년들이 창의적 문제 해결력과 기술 기반 사고력, 협업 능력을 갖춘 미래 AI 엔지니어로 성장할 수 있도록 이끕니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02 교육 과정 */}
        <section className="w-full bg-[#0a0a0a] py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-start gap-8 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shrink-0 shadow-lg shadow-blue-500/30">
                02
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white pt-2">교육 과정</h3>
            </div>
            <div className="ml-0 md:ml-28 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 mb-10">
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                  AI 루키 캠프는 문제 정의부터 아이디어 설계, 기술 구현, 발표까지의 과정을 경험하는 3박 4일 프로젝트 실습 캠프입니다. 청소년들은 프로젝트 과정에서 협업하며 리더십을 발휘하고, 직접 결과물을 완성해 나가며 미래 AI 엔지니어로서의 가능성과 비전을 발견합니다.
                </p>
              </div>
            </div>

            {/* 교육 과정 카드들 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-0 md:ml-28 max-w-5xl">
              {/* 카드 1 */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 flex flex-col gap-4 shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300">
                <h4 className="text-xl md:text-2xl font-bold text-white">AI 엔지니어링 이해와 실습</h4>
                <p className="text-blue-50 italic text-base mb-3">
                  "AI가 어떻게 생각하고 움직이는지, 직접 보고, 작동시키며 배우는 시간"
                </p>
                <p className="text-white text-base leading-relaxed">
                  피지컬 교구와 비주얼 코딩을 활용해 '기술이 살아 움직이는 순간'을 체험합니다.
                </p>
              </div>

              {/* 카드 2 */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 flex flex-col gap-4 shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300">
                <h4 className="text-xl md:text-2xl font-bold text-white">바이브 코딩 기반 문제 해결 프로젝트</h4>
                <p className="text-green-50 italic text-base mb-3">
                  "스스로 정의한 문제를 AI로 해결해 보는 프로젝트"
                </p>
                <p className="text-white text-base leading-relaxed">
                  아이디어를 코드로 구현하고, 실제로 작동하는 솔루션을 만듭니다. 시행착오를 거치며 문제 정의력, 창의력, 실행력을 키웁니다.
                </p>
              </div>

              {/* 카드 3 */}
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-8 flex flex-col gap-4 shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300">
                <h4 className="text-xl md:text-2xl font-bold text-white">진로 비저닝과 미래 특강</h4>
                <p className="text-yellow-50 italic text-base mb-3">
                  "AI와 함께 나의 미래를 설계하는 시간"
                </p>
                <p className="text-white text-base leading-relaxed">
                  AI 기술이 산업과 직업의 세상을 어떻게 바꾸는지 탐험합니다. 현직 개발자의 특강과 멘토링을 통해 진로 방향성을 세우는 시간입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 타임 테이블 */}
        <section className="w-full bg-[#0a0a0a] py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-start gap-8 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shrink-0 shadow-lg shadow-blue-500/30">
                03
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white pt-2">Time Table</h3>
            </div>
            <div className="ml-0 md:ml-28 overflow-x-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 min-w-[800px]">
                {/* 테이블 헤더 */}
                <div className="grid grid-cols-5 gap-3 mb-3">
                  <div className="text-white font-bold text-base p-3"></div>
                  <div className="text-white font-bold text-base p-3 text-center bg-white/10 rounded-xl">Day 1</div>
                  <div className="text-white font-bold text-base p-3 text-center bg-white/10 rounded-xl">Day 2</div>
                  <div className="text-white font-bold text-base p-3 text-center bg-white/10 rounded-xl">Day 3</div>
                  <div className="text-white font-bold text-base p-3 text-center bg-white/10 rounded-xl">Day 4</div>
                </div>

                {/* 타임 테이블 행들 */}
                <div className="grid grid-cols-5 gap-3 mb-3">
                  <div className="text-white text-base p-3 font-semibold">08:00-09:00</div>
                  <div className="bg-white/10 rounded-xl p-3 text-white text-sm">이동 및 도착</div>
                  <div className="bg-white/10 rounded-xl p-3 text-white text-sm">기상·아침식사</div>
                  <div className="bg-white/10 rounded-xl p-3 text-white text-sm">기상·아침식사</div>
                  <div className="bg-white/10 rounded-xl p-3 text-white text-sm">기상·아침식사</div>
                </div>

                <div className="grid grid-cols-5 gap-3 mb-3">
                  <div className="text-white text-base p-3 font-semibold">09:00-12:00</div>
                  <div className="bg-white/10 rounded-xl p-3 text-white text-sm">이동 및 도착</div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 text-white text-sm shadow-lg">AI 엔지니어링<br />(피지컬 컴퓨팅)</div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 text-white text-sm shadow-lg">프로젝트 설계</div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 text-white text-sm shadow-lg">최종 프로젝트 발표회</div>
                </div>

                <div className="grid grid-cols-5 gap-3 mb-3">
                  <div className="text-white text-base p-3 font-semibold">12:00-13:00</div>
                  <div className="bg-white/10 rounded-xl p-3 text-white text-sm">점심 식사</div>
                  <div className="bg-white/10 rounded-xl p-3 text-white text-sm">점심 식사</div>
                  <div className="bg-white/10 rounded-xl p-3 text-white text-sm">점심 식사</div>
                  <div className="bg-white/10 rounded-xl p-3 text-white text-sm">점심 식사</div>
                </div>

                <div className="grid grid-cols-5 gap-3 mb-3">
                  <div className="text-white text-base p-3 font-semibold">13:00-14:30</div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 text-white text-sm shadow-lg">오리엔테이션·팀빌딩</div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 text-white text-sm shadow-lg">AI 엔지니어링<br />(바이브 코딩)</div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 text-white text-sm shadow-lg">프로젝트 집중 개발</div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 text-white text-sm shadow-lg">수료식·시상</div>
                </div>

                <div className="grid grid-cols-5 gap-3 mb-3">
                  <div className="text-white text-base p-3 font-semibold">14:30-17:30</div>
                  <div className="bg-transparent rounded-xl p-3"></div>
                  <div className="bg-transparent rounded-xl p-3"></div>
                  <div className="bg-transparent rounded-xl p-3"></div>
                  <div className="bg-white/10 rounded-xl p-3 text-white text-sm">이동 및 귀가<br />(14:30~)</div>
                </div>

                <div className="grid grid-cols-5 gap-3 mb-3">
                  <div className="text-white text-base p-3 font-semibold">17:30-19:00</div>
                  <div className="bg-white/10 rounded-xl p-3 text-white text-sm">저녁 식사</div>
                  <div className="bg-white/10 rounded-xl p-3 text-white text-sm">저녁 식사</div>
                  <div className="bg-white/10 rounded-xl p-3 text-white text-sm">저녁 식사</div>
                  <div className="bg-white/10 rounded-xl p-3 text-white text-sm">이동 및 귀가</div>
                </div>

                <div className="grid grid-cols-5 gap-3 mb-3">
                  <div className="text-white text-base p-3 font-semibold">19:00-21:30</div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 text-white text-sm shadow-lg">문제 발견 워크숍</div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 text-white text-sm shadow-lg">진로 특강 & 멘토링</div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 text-white text-sm shadow-lg">프로젝트 완성 및 피드백</div>
                  <div className="bg-white/10 rounded-xl p-3 text-white text-sm">이동 및 귀가</div>
                </div>

                <div className="grid grid-cols-5 gap-3">
                  <div className="text-white text-base p-3 font-semibold">21:30-</div>
                  <div className="bg-white/10 rounded-xl p-3 text-white text-sm">취침</div>
                  <div className="bg-white/10 rounded-xl p-3 text-white text-sm">취침</div>
                  <div className="bg-white/10 rounded-xl p-3 text-white text-sm">취침</div>
                  <div className="bg-transparent rounded-xl p-3"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 모집 대상 */}
        <section className="w-full bg-[#0a0a0a] py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-start gap-8 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shrink-0 shadow-lg shadow-blue-500/30">
                04
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white pt-2">모집 대상</h3>
            </div>
            <div className="ml-0 md:ml-28">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
                <ul className="flex flex-col gap-5 text-xl md:text-2xl text-gray-200 leading-relaxed">
                  <li className="flex items-start gap-4">
                    <span className="text-yellow-400 mt-2">•</span>
                    <span>25년 기준 비수도권 소재 중학교 1~3학년 학생</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-yellow-400 mt-2">•</span>
                    <span>기초 프로그래밍이 가능하며, SW 개발에 관심이 많은 학생</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-yellow-400 mt-2">•</span>
                    <span>미래 AI 인재로 성장하고자 하는 열정을 가진 학생</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 05 캠프 정보 */}
        <section className="w-full bg-[#0a0a0a] py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-start gap-8 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shrink-0 shadow-lg shadow-blue-500/30">
                05
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white pt-2">캠프 정보</h3>
            </div>
            <div className="ml-0 md:ml-28">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
                <div className="flex flex-col gap-5 text-xl md:text-2xl text-gray-200 leading-relaxed">
                  <p>2개 지역으로 나누어 각 1회씩, 3박 4일의 과정으로 진행됩니다.</p>
                  <p>1회차 (충청&전라 & 제주권): 2026년 2월 4일(수)~7일(토)</p>
                  <p>2회차 (경상 & 강원권): 2026년 2월 9일(월)~12일(목)</p>
                  <p>신청 학생의 학교 소재지에 해당하는 권역 회차에 신청 가능합니다.</p>
                  <p>3박 4일 일정 모두 참석해야 하며, 일부 기간만 참석하는 것은 불가합니다.</p>
                  <p>교육 마지막 날, 발표 공유 및 수료식에 보호자가 참여할 수 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06 참가 비용 */}
        <section className="w-full bg-[#0a0a0a] py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-start gap-8 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shrink-0 shadow-lg shadow-blue-500/30">
                06
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white pt-2">참가 비용</h3>
            </div>
            <div className="ml-0 md:ml-28">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
                <div className="flex flex-col gap-5 text-xl md:text-2xl text-gray-200 leading-relaxed">
                  <p>카카오가 캠프 참가비 전액을 지원하며, 숙박·식사·교육 커리큘럼 등이 포함됩니다.</p>
                  <p className="text-gray-400">* 단, 캠프 장소까지의 이동 비용은 지원되지 않습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07 장소 */}
        <section className="w-full bg-[#0a0a0a] py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-start gap-8 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shrink-0 shadow-lg shadow-blue-500/30">
                07
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white pt-2">장소</h3>
            </div>
            <div className="ml-0 md:ml-28">
              <div className="flex flex-col gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
                    카카오 AI 캠퍼스 (1인 1실 숙박 제공)
                  </p>
                  <div className="bg-white/10 rounded-2xl p-6 max-w-md">
                    <p className="text-white text-lg mb-2 font-semibold">카카오 판교 아지트</p>
                    <p className="text-gray-400 text-sm mb-4">판교역</p>
                    <p className="text-white text-base leading-relaxed">
                      카카오 AI의 가능성을 열어가는 새로운 공간, 카카오 AI 캠퍼스
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

