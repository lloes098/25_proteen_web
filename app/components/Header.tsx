"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 첫 번째 섹션(파란색)의 높이를 넘어가면 배경 적용
      const scrollPosition = window.scrollY;
      const firstSectionHeight = window.innerHeight * 0.5; // 50vh
      setIsScrolled(scrollPosition > firstSectionHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 상태 확인

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/20 backdrop-blur-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-white font-semibold text-xl hover:text-gray-300 transition-colors">
          PROTEEN
        </a>
        <div className="flex items-center gap-6">
          <a href="/camp-intro" className="text-white hover:text-gray-300 transition-colors font-bold">
            캠프 소개
          </a>
          <a 
            href="https://www.instagram.com/proteen_yonsei/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors font-bold"
          >
            인스타그램
          </a>
        </div>
      </div>
    </header>
  );
}

