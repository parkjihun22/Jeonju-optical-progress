import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/SalesInfo/SalesInfoAnnouncement/page1.jpg";
import pdfIcon from "../../assets/icons/pdf-icon.png";  // PDF 아이콘 이미지 임포트

import Ready from "../../components/Ready/Ready";


const ComplexGuide1 = () => {
  const menuContents = [
    { title: "계약안내문", url: "/SalesInfo/guide" },
    { title: "공급안내", url: "/BusinessGuide/documents" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
    // { title: "청약방법안내", url: "/SalesInfo/SubscriptionGuide" },


  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const { pathname } = useLocation();

  // 페이지 로드 시 상단으로 스크롤 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 스크롤 이벤트로 헤더 상태 변경
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

  // 이미지 로드 후 애니메이션 실행
  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

  // PDF 새 창으로 열기 함수
  const openPDF = () => {
    setIsLoading(true); // PDF 로딩 시작
    const pdfUrl = "/announcement.pdf"; // 실제 PDF 파일 경로로 수정
    const newWindow = window.open(pdfUrl, "_blank");

    // PDF 로딩 후 로딩 상태 해제
    newWindow.onload = () => {
      setIsLoading(false);
    };
  };

  return (
    <div className={styles.container}>

      
```jsx
<Helmet>
  <title>북전주 광신프로그레스 | 모집공고 안내</title>

  <meta
    name="description"
    content="북전주 광신프로그레스 모집공고 안내. 전북특별자치도 전주시 덕진구 고랑동 742번지 일원 북전주 광신프로그레스의 공급 정보, 청약 일정, 신청 자격, 당첨자 발표, 계약 절차 및 유의사항을 공식 모집공고 기준으로 확인하세요."
  />

  <meta
    name="keywords"
    content="북전주 광신프로그레스, 북전주 광신프로그레스 모집공고, 전주 광신프로그레스, 전주 아파트 분양, 전주 청약, 전주 덕진구 아파트, 고랑동 아파트, 전주 신축 아파트, 광신프로그레스, 광신종합건설"
  />

  <link
    rel="canonical"
    href="https://www.godeok-athera.co.kr/SalesInfo/announcement"
  />

  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="모집공고안내" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  북전주 광신프로그레스 모집공고 안내
</h1>

<p className={styles.screenReaderOnly}>
  본 페이지에서는 북전주 광신프로그레스 모집공고 주요 사항을 안내합니다.
  전북특별자치도 전주시 덕진구 고랑동 742번지 일원에 공급되는
  북전주 광신프로그레스의 공급 정보와 청약 일정, 신청 자격,
  특별공급, 일반공급, 당첨자 발표, 계약 절차 및 유의사항을
  공식 모집공고 기준으로 확인하세요.
  북전주 광신프로그레스 모집공고와 청약 정보를 안내합니다.
</p>

<div className={styles.textBox}>
  <div>북전주 광신프로그레스 모집공고 안내</div>
  <div>공급정보와 청약 일정을 확인하세요.</div>
</div>

<img
  className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
  src={page1}
  alt="북전주 광신프로그레스 모집공고안내 이미지"
  onLoad={handleImageLoad}
/>
```

      <button onClick={openPDF} className={styles.pdfButton}>
        <img src={pdfIcon} alt="모집공고 PDF 아이콘" className={styles.pdfIcon} /> 
        <span>모집공고 PDF<br/>확인하기</span>
      </button>



      {/* 로딩 중일 때 표시할 스피너 */}
      {isLoading && (
        <div className={styles.loader}>
          <p>파일을 로딩 중입니다...</p>
          {/* 여기에 스피너 아이콘 추가 가능 */}
          <div className={styles.spinner}></div>
        </div>
      )}
      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※ 상기 내용은 편집과정상 오류가 있을 수 있으니 반드시 입주자모집공고를
          확인하시기 바랍니다.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComplexGuide1;
