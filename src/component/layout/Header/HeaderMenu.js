import React from 'react';
import './Header.css';
import Link from 'next/link';

export default function HomePage() {
  const mainMenu = [
    {
      name : "디자인",
      link : "/services/design"
    },
    {
      name : "마케팅",
      link : "/services/marketing"
    },
    {
      name : "IT·프로그래밍",
      link : "/services/it"
    },
    {
      name : "영상·사진·음향",
      link : "/services/video"
    },
    {
      name : "문서·글쓰기",
      link : "/services/writing"
    },
    {
      name : "번역·통역",
      link : "/services/translation"
    }
  ]

  const plusMenu = [
    {
      name: "전자책·템플릿",
      link: "#none"
    },
    {
      name: "포트폴리오",
      link: "#none"
    },
    {
      name: "크몽 Biz",
      link: "#none"
    }
  ]
  
  return (
    <div className="hdr-menu inner">
      <ul className='hdr-mainMenu'>
        <li className='hdr-siteMap'>
          <Link href="#none">
            <img src="/images/icon-category18.png" alt="메뉴 전체보기" />
            전체
            <i className="bi bi-chevron-down"></i>
          </Link>
        </li>
        {mainMenu.map((menu, index)=>(
          <li key={index}>
            <Link href={menu.link}>
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hdr-plusMenu">
        {plusMenu.map((menu, index)=>(
          <Link key={index} href={menu.link}>
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  )
}