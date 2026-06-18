import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


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
  <title>북전주 광신프로그레스 | 프리미엄</title>

  <meta
    name="description"
    content="북전주 광신프로그레스 프리미엄 안내. 전북특별자치도 전주시 덕진구 고랑동 742번지 일원 북전주 광신프로그레스의 브랜드 가치, 생활 인프라, 광역 교통 환경, 미래가치와 주거 프리미엄을 확인하세요."
  />

  <meta
    name="keywords"
    content="북전주 광신프로그레스, 북전주 광신프로그레스 프리미엄, 전주 광신프로그레스, 전주 덕진구 아파트, 고랑동 아파트, 전주 신축 아파트, 전주 아파트 분양, 탄소소재 스마트그린 국가산단, 광신프로그레스, 광신종합건설"
  />

  <link
    rel="canonical"
    href="https://www.godeok-athera.co.kr/LocationEnvironment/primium"
  />

  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="프리미엄" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  북전주 광신프로그레스 프리미엄
</h1>

<p className={styles.screenReaderOnly}>
  북전주 광신프로그레스만의 프리미엄을 확인하세요.
  전북특별자치도 전주시 덕진구 고랑동 742번지 일원에 조성되는
  북전주 광신프로그레스는 광신프로그레스 브랜드 가치와
  풍부한 생활 인프라, 편리한 광역 교통 환경,
  교육 여건과 공원·녹지 환경,
  탄소소재 스마트그린 국가산업단지 인접 미래가치를
  함께 누릴 수 있는 주거 프리미엄을 제안합니다.
</p>

<div className={styles.textBox}>
  <div>기대되는 북전주의 미래 위에</div>
  <div>북전주 광신프로그레스의 프리미엄을 누리세요.</div>
</div>

<img
  src={page1}
  className={styles.image3}
  alt="북전주 광신프로그레스 프리미엄 전주 덕진구 고랑동 주거가치 이미지"
/>


      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
