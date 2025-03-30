import React from 'react';
import IntroSectionCard from './IntroSectionCard';
import './IntroSection.css';

export default function IntroSection() {
  const introCard = [
    {
      type:"design",
      category: "디자인",
      title: "에서 놓치지 마세요",
      items: [
        { img: "design01", title: "로고 디자인" },
        { img: "design02", title: "명함" },
        { img: "design03", title: "포토샵·파일변환" },
        { img: "design04", title: "PPT·인포그래픽" }
      ]
    },
    {
      type:"marketing",
      category: "마케팅",
      title: "에서 추천해 드려요",
      items: [
        { img: "marketing01", title: "지도 활성화" },
        { img: "marketing02", title: "스토어 마케팅" },
        { img: "marketing03", title: "백링크·트래픽" },
        { img: "marketing04", title: "바이럴·포스팅" }
      ]
    },
    {
      type:"trend",
      category: "요즘",
      title: ", 뜨고 있어요",
      items: [
        { img: "trend01", title: "에어컨 청소" },
        { img: "trend02", title: "전화 운세" },
        { img: "trend03", title: "숏폼 영상" },
        { img: "trend04", title: "투잡·노하우 전자책" }
      ]
    }
  ];
  return (
    <section className='introSection inner'>
      <IntroSectionCard data={introCard}/>
    </section>
  );
}