// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>북전주 광신프로그레스</span>
        </li>

        <li>
          <strong>대지위치</strong>
          <span>
            전북특별자치도 전주시 덕진구
            <br />
            고랑동 742번지 일원
          </span>
        </li>

        <li>
          <strong>건축규모</strong>
          <span>
            지하 1층 ~ 지상 22층
            <br />
            총 6개동, 352세대
          </span>
        </li>

        <li>
          <strong>세대정보</strong>
          <span>전용 84㎡ A · B</span>
        </li>

        <li>
          <strong>시행사</strong>
          <span>(주)광신주택</span>
        </li>

        <li>
          <strong>시공사</strong>
          <span>(주)광신종합건설</span>
        </li>

        <li>
          <strong>입주예정</strong>
          <span>2028년 2월 예정</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="북전주 광신프로그레스 입지환경 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="북전주 광신프로그레스 생활권 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            북전주의 새로운 미래가치를 품은<br />
            북전주 광신프로그레스 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "북전주 미래가치를 품은 핵심 입지",
      desc:
        "전주 북부권의 새로운 주거 중심 입지<br/>탄소소재 스마트그린 국가산단 인접 프리미엄<br/>미래가치를 더하는 북전주 광신프로그레스",
    },
    {
      img: slide2,
      title: "전용 84㎡ 실속형 특화 설계",
      desc:
        "선호도 높은 전용 84㎡ A·B 타입 구성<br/>실용성과 공간 활용도를 높인 혁신 설계<br/>실거주 만족도를 높이는 주거 특화 공간",
    },
    {
      img: slide3,
      title: "전주IC·호남고속도로 광역 교통망",
      desc:
        "전주IC와 호남고속도로 접근이 편리한 입지<br/>동부대로·기린대로를 통한 빠른 이동 환경<br/>출퇴근과 생활을 더욱 편리하게 누리는 교통 프리미엄",
    },
    {
      img: slide4,
      title: "교육·생활 인프라를 누리는 생활권",
      desc:
        "학교와 생활편의시설이 가까운 생활환경<br/>에코시티·만성지구 생활권을 함께 누리는 입지<br/>가족 중심 라이프를 위한 쾌적한 주거 환경",
    },
    {
      img: slide5,
      title: "광신프로그레스 브랜드 프리미엄",
      desc:
        "광신프로그레스만의 차별화된 상품 설계<br/>쾌적한 단지 배치와 다양한 커뮤니티 공간<br/>일상을 더욱 가치 있게 만드는 프리미엄 라이프",
    },
    {
      img: slide6,
      title: "탄소소재 국가산단 미래가치 프리미엄",
      desc:
        "탄소소재 스마트그린 국가산업단지 인접 입지<br/>직주근접과 풍부한 미래 배후수요 기대<br/>실거주와 미래가치를 함께 누리는 프리미엄",
    },
  ];
  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
