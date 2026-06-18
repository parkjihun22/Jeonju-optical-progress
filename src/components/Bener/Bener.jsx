import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="북전주 광신프로그레스 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내' || text === '북전주 광신프로그레스') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          기다리는 미래, 기대되는 북전주의 새로운 가치.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          북전주 광신프로그레스, 광신프로그레스 브랜드 가치와 실속 설계를 담은 주거공간.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전주 덕진구 고랑동에서 만나는 교통·생활·교육·미래가치 프리미엄 아파트.
        </div>
      </>
    );
  } else if (
    text === '사업개요' ||
    text === '세대안내' ||
    text === '인테리어' ||
    text === '청약안내' ||
    text === '모집공고안내' ||
    text === '인지세납부안내'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전주시 덕진구 고랑동 742번지 일원에 들어서는 북전주 광신프로그레스.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          지하 1층~지상 22층, 6개 동, 총 352세대 규모의 전용 84㎡ 중심 주거단지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전주 북부권 생활 인프라와 탄소소재 스마트그린 국가산업단지 인접 미래가치를 함께 누리는 선택.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          북전주 광신프로그레스
        </div>
      </>
    );
  } else if (text === '입지환경' || text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전주IC·호남고속도로, 동부대로·기린대로를 가까이 누리는 북전주 교통 입지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          에코시티·만성지구 생활권과 전주 탄소소재 스마트그린 국가산업단지 인접 프리미엄을 더합니다.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전용 84㎡ A·B 타입 중심의 실속 있는 주거 설계를 담은 북전주 광신프로그레스.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          남향 위주 배치와 4Bay 중심 설계, 공원형 단지 구성으로 쾌적한 일상을 선사합니다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          북전주의 새로운 주거가치, 북전주 광신프로그레스가 완성합니다.
        </div>
      </>
    );
  }
};
