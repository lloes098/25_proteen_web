"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProteenIntro() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const cardDetails = {
    "정기 봉사": {
      title: "정기 봉사",
      gradient: "from-blue-500 to-blue-600",
      shadow: "shadow-blue-500/20",
      description: "매주 정해진 시간에 지역 청소년들을 대상으로 정기적인 코딩 교육 봉사를 진행합니다. 체계적인 커리큘럼을 통해 지속적인 학습을 지원합니다.",
      details: [
        "매주 토요일 오후 2시~5시",
        "기초 프로그래밍부터 AI 기초까지 단계별 교육",
        "1:1 멘토링 시스템 운영"
      ]
    },
    "자유 봉사": {
      title: "자유 봉사",
      gradient: "from-green-500 to-green-600",
      shadow: "shadow-green-500/20",
      description: "멤버들이 자유롭게 참여할 수 있는 봉사 활동입니다. 다양한 프로젝트와 이벤트를 통해 청소년들에게 실질적인 도움을 제공합니다.",
      details: [
        "멤버 개인의 시간에 맞춰 참여 가능",
        "다양한 프로젝트 기회 제공",
        "유연한 봉사 시간 운영"
      ]
    },
    "진로 멘토링/학교 투어": {
      title: "진로 멘토링/학교 투어",
      gradient: "from-yellow-400 to-yellow-500",
      shadow: "shadow-yellow-400/20",
      description: "청소년들의 진로 탐색을 돕기 위한 멘토링 프로그램과 연세대학교 캠퍼스 투어를 진행합니다. 대학생과의 소통을 통해 미래를 설계할 수 있도록 지원합니다.",
      details: [
        "월 1회 정기 멘토링 세션",
        "연세대학교 캠퍼스 투어",
        "개인별 맞춤 진로 상담"
      ]
    },
    "친목 활동": {
      title: "친목 활동",
      gradient: "from-purple-500 to-purple-600",
      shadow: "shadow-purple-500/20",
      description: "동아리 멤버들 간의 친목을 도모하고 팀워크를 강화하기 위한 다양한 활동을 진행합니다. 함께 성장하는 동아리 문화를 만들어갑니다.",
      details: [
        "정기 모임 및 MT",
        "팀 빌딩 활동",
        "멤버 간 네트워킹"
      ]
    }
  };

  const handleCardClick = (cardName: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardName)) {
        newSet.delete(cardName);
      } else {
        newSet.add(cardName);
      }
      return newSet;
    });
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <main className="pt-24">
        {/* 헤더 섹션 */}
        <section className="w-full bg-black py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              프로틴 소개
            </h2>
          </div>
        </section>

        {/* 소개 섹션 */}
        <section className="w-full bg-black py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col gap-8 text-white">
              <div className="text-lg md:text-xl leading-relaxed">
                <p className="mb-6">
                  PROTEEN은 Programming for Teenagers 로 청소년 대상 코딩 교육 봉사 동아리입니다. <br/>
                  연세대학교 재학생들로 구성되어 있어, 대학생 멘토와 청소년들이 함께 성장하는 교육 환경을 제공합니다.
                </p>
                <p className="mb-6">
                  우리는 단순한 코딩 교육을 넘어, AI 엔지니어링의 전 과정을 체험할 수 있는 캠프를 운영합니다. 
                  문제 정의부터 아이디어 설계, 기술 구현, 발표까지의 과정을 통해 청소년들이 미래 AI 엔지니어로서의 가능성을 발견할 수 있도록 돕습니다.
                </p>
                <p className="mb-6">
                  특히 비수도권 지역의 청소년들에게 양질의 프로그래밍 교육 기회를 제공하여, 
                  지역 간 교육 격차를 줄이고 미래 인재를 양성하는 것을 목표로 합니다.
                </p>
                <p className="mb-6">
                  PROTEEN과 함께 기술을 통해 세상을 더 좋게 만들고 싶은 청소년들의 꿈을 응원합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Activities 섹션 */}
        <section className="w-full bg-[#0a0a0a] py-24">
          <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          학기 활동
            </h2>
            
            {/* 카드 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {Object.entries(cardDetails).map(([cardName, details]) => {
                const isFlipped = flippedCards.has(cardName);
                return (
                  <div
                    key={cardName}
                    onClick={() => handleCardClick(cardName)}
                    className="relative min-h-[300px] cursor-pointer perspective-1000"
                    style={{ perspective: '1000px' }}
                  >
                    <div
                      className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                        isFlipped ? 'rotate-y-180' : ''
                      }`}
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      }}
                    >
                      {/* 카드 앞면 */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${details.gradient} rounded-3xl p-10 flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-${details.shadow} transition-all duration-300 backface-hidden`}
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
                          {cardName.split('/').map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < cardName.split('/').length - 1 && <br />}
                            </span>
                          ))}
                        </h3>
                      </div>

                      {/* 카드 뒷면 */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${details.gradient} rounded-3xl p-8 flex flex-col justify-between shadow-2xl backface-hidden rotate-y-180`}
                        style={{
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                        }}
                      >
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-4">
                            {details.title}
                          </h3>
                          <p className="text-white/90 text-sm mb-4 leading-relaxed">
                            {details.description}
                          </p>
                          <ul className="space-y-2">
                            {details.details.map((detail, index) => (
                              <li key={index} className="flex items-start gap-2 text-white/80 text-sm">
                                <span className="text-yellow-300 mt-1">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p className="text-white/70 text-xs text-center mt-4">
                          다시 클릭하여 뒤집기
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 안내 문구 */}
            <p className="text-center text-gray-400 text-base">
              카드를 클릭하면 자세한 정보를 확인할 수 있습니다.
            </p>
          </div>
        </section>

        {/* 주요 성과 섹션 */}
        <section className="w-full bg-[#0a0a0a] py-24">
          <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              주요 성과
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">100+</div>
                <p className="text-white text-xl font-medium">지원한 청소년</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-6">20+</div>
                <p className="text-white text-xl font-medium">진행한 캠프</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-6">50+</div>
                <p className="text-white text-xl font-medium">활동 멤버</p>
              </div>
            </div>
          </div>
        </section>

        {/* 연락처 섹션 */}
        <section className="w-full bg-[#0a0a0a] py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              문의하기
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 md:p-16 max-w-3xl mx-auto border border-white/10">
              <div className="flex flex-col gap-10 text-white">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">이메일</h3>
                  <p className="text-gray-200 text-xl">proteen@yonsei.ac.kr</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">인스타그램</h3>
                  <a 
                    href="https://www.instagram.com/proteen_yonsei/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-xl"
                  >
                    @proteen_yonsei
                  </a>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">소속</h3>
                  <p className="text-gray-200 text-xl">연세대학교</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ 섹션 */}
        <section className="w-full bg-[#0a0a0a] py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              자주 묻는 질문
            </h2>
            <div className="flex flex-col gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Q. 누가 참여할 수 있나요?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  비수도권 소재 중학교 1~3학년 학생 중 기초 프로그래밍이 가능하고 SW 개발에 관심이 많은 학생이면 누구나 참여할 수 있습니다.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Q. 참가 비용이 있나요?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  캠프 참가비는 전액 지원되며, 숙박·식사·교육 커리큘럼이 모두 포함됩니다. 단, 캠프 장소까지의 이동 비용은 지원되지 않습니다.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Q. 멤버로 지원하려면 어떻게 해야 하나요?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  연세대학교 재학생이라면 학기 초 모집 공고를 통해 지원할 수 있습니다. 자세한 내용은 인스타그램을 통해 확인해주세요.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

