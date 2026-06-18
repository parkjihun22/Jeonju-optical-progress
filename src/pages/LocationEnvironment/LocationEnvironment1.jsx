import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "북전주 핵심 입지<br />높아지는 미래가치",
    contentText:
      "전주 북부권의 새로운 주거 중심 입지<br />북전주 광신프로그레스가 누리는 미래가치 프리미엄",
  },
  {
    img: section2Image2,
    titleText: "풍부한 생활 인프라<br />편리한 생활 환경",
    contentText:
      "에코시티·만성지구 생활권을 가까이 누리는 입지<br />풍부한 생활편의시설과 함께하는 프리미엄 라이프",
  },
  {
    img: section2Image3,
    titleText: "광역 교통망 프리미엄<br />편리한 교통 환경",
    contentText:
      "전주IC·호남고속도로·동부대로를 통한 편리한 교통망<br />전주 전역을 빠르게 연결하는 광역 교통 프리미엄",
  },
  {
    img: section2Image4,
    titleText: "교육·생활 인프라<br />쾌적한 주거 환경",
    contentText:
      "교육·공원·생활편의시설을 가까이 누리는 생활권<br />가족 중심 라이프를 위한 쾌적한 주거 환경",
  },
  {
    img: section2Image5,
    titleText: "광신프로그레스 브랜드<br />프리미엄 주거 가치",
    contentText:
      "광신프로그레스만의 차별화된 설계와 상품성<br />실거주 만족도를 높이는 브랜드 프리미엄",
  },
  {
    img: section2Image6,
    titleText: "탄소소재 국가산단 인접<br />미래가치 프리미엄",
    contentText:
      "탄소소재 스마트그린 국가산업단지 인접 입지<br />북전주의 미래와 함께 성장하는 프리미엄 가치",
  },
];

const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
  <title>북전주 광신프로그레스 | 입지환경</title>

  <meta
    name="description"
    content="북전주 광신프로그레스 입지환경 안내. 전북특별자치도 전주시 덕진구 고랑동 742번지 일원 북전주 광신프로그레스의 생활 인프라, 광역 교통망, 교육환경, 공원·녹지 환경, 탄소소재 스마트그린 국가산업단지 인접 가치를 확인하세요."
  />

  <meta
    name="keywords"
    content="북전주 광신프로그레스, 북전주 광신프로그레스 입지환경, 전주 광신프로그레스, 전주 덕진구 아파트, 고랑동 아파트, 북전주 아파트, 전주 아파트 분양, 전주 교통환경, 전주 탄소소재 국가산단, 광신프로그레스"
  />

  <meta name="robots" content="index,follow" />

  <link
    rel="canonical"
    href="https://www.bjj-gwangshin.co.kr/LocationEnvironment/intro"
  />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="북전주 광신프로그레스" />

  <meta
    property="og:title"
    content="북전주 광신프로그레스 | 입지환경"
  />

  <meta
    property="og:description"
    content="북전주 광신프로그레스의 생활 인프라, 광역 교통망, 교육환경과 탄소소재 스마트그린 국가산업단지 인접 가치를 확인하세요."
  />

  <meta
    property="og:url"
    content="https://www.bjj-gwangshin.co.kr/LocationEnvironment/intro"
  />

  <meta
    property="og:image"
    content="https://www.bjj-gwangshin.co.kr/img/og/location.jpg"
  />

  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="북전주 광신프로그레스 | 입지환경"
  />

  <meta
    name="twitter:description"
    content="북전주 광신프로그레스의 교통, 교육, 생활 인프라와 전주 북부권 주거환경을 확인하세요."
  />

  <meta
    name="twitter:image"
    content="https://www.bjj-gwangshin.co.kr/img/og/location.jpg"
  />

  <meta
    name="twitter:url"
    content="https://www.bjj-gwangshin.co.kr/LocationEnvironment/intro"
  />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "북전주 광신프로그레스 입지환경",
      "url": "https://www.bjj-gwangshin.co.kr/LocationEnvironment/intro",
      "description":
        "북전주 광신프로그레스 입지환경 페이지입니다. 전북특별자치도 전주시 덕진구 고랑동 742번지 일원 북전주 광신프로그레스의 생활 인프라, 광역 교통망, 교육환경, 공원·녹지 환경, 탄소소재 스마트그린 국가산업단지 인접 가치를 안내합니다.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://www.bjj-gwangshin.co.kr/img/og/location.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "홈",
            "item": "https://www.bjj-gwangshin.co.kr/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "입지환경",
            "item": "https://www.bjj-gwangshin.co.kr/LocationEnvironment/intro"
          }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="입지환경" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  북전주 광신프로그레스 입지환경
</h1>

<p className={styles.screenReaderOnly}>
  북전주 광신프로그레스 입지환경 페이지입니다.
  전북특별자치도 전주시 덕진구 고랑동 742번지 일원에 조성되는
  북전주 광신프로그레스의 생활 인프라와 광역 교통망, 교육환경,
  공원·녹지 환경, 탄소소재 스마트그린 국가산업단지 인접 가치 등
  입지 프리미엄을 안내합니다.
  북전주 광신프로그레스 입지환경과 전주 북부권 주거 가치를 확인해 보세요.
</p>

<div className={styles.textBox}>
  <div>기대되는 북전주의 생활권에서</div>
  <div>삶의 가치가 높아지는 곳</div>
  <div>북전주 광신프로그레스가 새로운 주거 가치로 찾아옵니다.</div>
</div>

<img
  src={page1}
  className={styles.image2}
  alt="북전주 광신프로그레스 입지환경 전주 덕진구 고랑동 생활권 이미지"
/>

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 북전주 광신프로그레스사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
