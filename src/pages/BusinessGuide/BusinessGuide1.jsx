import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";



const projectData = [
  { label: '사업명', value: '북전주 광신프로그레스' },

  {
    label: '대지위치',
    value: '전북특별자치도 전주시 덕진구 고랑동 742번지 일원',
  },

  {
    label: '주택형',
    value: '전용 84㎡ A · B',
  },

  {
    label: '세대수',
    value: '총 352세대',
  },

  {
    label: '입지환경',
    value: '전주 북부권 생활권 및 에코시티·만성지구 인접',
  },

  {
    label: '교통환경',
    value: '전주IC·호남고속도로·동부대로·기린대로를 통한 편리한 광역교통망',
  },

  {
    label: '생활인프라',
    value: '교육·생활·쇼핑·공원 인프라를 가까이 누리는 프리미엄 입지',
  },

  {
    label: '미래가치',
    value: '탄소소재 스마트그린 국가산업단지 인접 미래가치',
  },

  {
    label: '브랜드',
    value: '광신프로그레스 브랜드 아파트',
  },
];
const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/plan" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
  <title>북전주 광신프로그레스 | 사업안내</title>

  <meta
    name="description"
    content="북전주 광신프로그레스 사업안내. 전북특별자치도 전주시 덕진구 고랑동 742번지 일원에 조성되는 총 352세대 광신프로그레스 브랜드 아파트의 사업개요, 입지환경, 단지 가치와 미래가치를 확인하세요."
  />

  <meta
    name="keywords"
    content="북전주 광신프로그레스, 전주 광신프로그레스, 전주 덕진구 아파트, 고랑동 아파트, 전주 신축 아파트, 전주 아파트 분양, 광신프로그레스, 광신종합건설, 전주 탄소소재 국가산단, 북전주 아파트"
  />

  <meta name="robots" content="index,follow" />

  <link
    rel="canonical"
    href="https://www.godeok-athera.co.kr/BusinessGuide/intro"
  />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="북전주 광신프로그레스" />

  <meta
    property="og:title"
    content="북전주 광신프로그레스 | 사업안내"
  />

  <meta
    property="og:description"
    content="북전주 광신프로그레스 사업개요와 입지환경, 브랜드 프리미엄 정보를 확인하세요."
  />

  <meta
    property="og:url"
    content="https://www.godeok-athera.co.kr/BusinessGuide/intro"
  />

  <meta
    property="og:image"
    content="https://www.godeok-athera.co.kr/img/og/business.jpg"
  />

  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="북전주 광신프로그레스 | 사업안내"
  />

  <meta
    name="twitter:description"
    content="북전주 광신프로그레스 사업안내 및 브랜드 프리미엄 정보를 확인하세요."
  />

  <meta
    name="twitter:image"
    content="https://www.godeok-athera.co.kr/img/og/business.jpg"
  />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "북전주 광신프로그레스 사업안내",
      "url": "https://www.godeok-athera.co.kr/BusinessGuide/intro",
      "description":
        "전북특별자치도 전주시 덕진구 고랑동 742번지 일원에 조성되는 북전주 광신프로그레스의 사업개요, 입지환경, 단지 가치, 브랜드 프리미엄 정보를 제공합니다.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://www.godeok-athera.co.kr/img/og/business.jpg",
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
            "item": "https://www.godeok-athera.co.kr/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "사업안내",
            "item": "https://www.godeok-athera.co.kr/BusinessGuide/intro"
          }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  북전주 광신프로그레스 사업안내
</h1>

<p className={styles.screenReaderOnly}>
  북전주 광신프로그레스는 전북특별자치도 전주시 덕진구 고랑동 742번지 일원에
  조성되는 총 352세대 규모의 브랜드 아파트입니다. 전용 84㎡ 중심의
  실수요 선호 평면으로 구성되며, 전주 북부권 생활 인프라와
  에코시티·만성지구 생활권, 전주IC 및 호남고속도로 접근성,
  탄소소재 스마트그린 국가산업단지 인접 미래가치를 함께 누릴 수 있는
  주거 단지입니다. 북전주 광신프로그레스 사업개요와 입지환경,
  단지 가치 정보를 제공합니다.
</p>

<div className={styles.textBox}>
  <div>기대되는 북전주의 새로운 주거 가치</div>
  <div>북전주 광신프로그레스, 프리미엄 라이프를 완성합니다.</div>
</div>


<img className={styles.img3} src={page1} alt="북전주 광신프로그레스 사업개요 이미지"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
