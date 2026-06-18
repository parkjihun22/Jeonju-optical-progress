import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
	const menuContents = [
    { title: "브랜드 소개", url: "/brand/intro" }, 
    // { title: "홍보 영상", url: "/brand/video" }
    ];


	const [isScroll, setIsScroll] = useState(false);
	const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false); 
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>
<Helmet>
  <title>북전주 광신프로그레스 | 홍보영상</title>

  <meta
    name="description"
    content="북전주 광신프로그레스 홍보영상 안내. 전주시 덕진구 고랑동 742번지 일원에 조성되는 북전주 광신프로그레스의 브랜드 가치, 입지환경, 단지 설계와 미래가치를 영상으로 확인하세요."
  />

  <meta
    name="keywords"
    content="북전주 광신프로그레스, 북전주 광신프로그레스 홍보영상, 전주 광신프로그레스, 전주 덕진구 아파트, 고랑동 아파트, 북전주 아파트, 전주 아파트 분양, 전주 신축 아파트, 광신프로그레스, 광신종합건설"
  />

  <link
    rel="canonical"
    href="https://www.godeok-athera.co.kr/Brand/video"
  />

  <meta name="robots" content="index,follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="북전주 광신프로그레스" />

  <meta
    property="og:title"
    content="북전주 광신프로그레스 | 홍보영상"
  />

  <meta
    property="og:description"
    content="전주시 덕진구 고랑동 742번지 일원에 조성되는 북전주 광신프로그레스의 브랜드 가치와 주거 프리미엄을 홍보영상으로 만나보세요."
  />

  <meta
    property="og:url"
    content="https://www.godeok-athera.co.kr/Brand/video"
  />

  <meta
    property="og:image"
    content="https://www.godeok-athera.co.kr/images/og/main.jpg"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="북전주 광신프로그레스 | 홍보영상"
  />

  <meta
    name="twitter:description"
    content="북전주 광신프로그레스의 브랜드 가치와 입지 프리미엄, 미래가치를 홍보영상으로 확인하세요."
  />

  <meta
    name="twitter:image"
    content="https://www.godeok-athera.co.kr/images/og/main.jpg"
  />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="홍보영상" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  북전주 광신프로그레스 홍보영상
</h1>

<p className={styles.screenReaderOnly}>
  북전주 광신프로그레스 홍보영상 페이지입니다.
  전북특별자치도 전주시 덕진구 고랑동 742번지 일원에 공급되는
  북전주 광신프로그레스의 브랜드 가치와 입지환경, 생활 인프라,
  단지 설계, 미래가치를 영상으로 확인할 수 있습니다.
  전주IC와 호남고속도로 접근성, 탄소소재 스마트그린 국가산업단지 인접 가치,
  전주 북부권 생활 인프라를 갖춘 북전주 광신프로그레스의 다양한 정보를 확인해 보세요.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>기대되는 북전주의 새로운 주거가치</div>
  <div>북전주 광신프로그레스의 브랜드 가치를 영상으로 만나보세요.</div>
</div>


			<div className={styles.videoContainer}>
				<YouTube
					videoId="9z8_2qPGqqs"
					opts={{
						width: isMobile ? "400" : "1300",
						height: isMobile ? "300" : "500",
						playerVars: {
							autoplay: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div>

			<Footer />
		</div>
	)
}

export default Brand2;
