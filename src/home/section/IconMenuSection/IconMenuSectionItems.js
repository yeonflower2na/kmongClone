'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function  IconMenuSectionItems () {
  const [showIconMenu, setShowIconMenu] = useState(false);
  const [iconCategories, seticonCategories] = useState([]);
  
  useEffect(() => {
    fetch("/IconMenuSectionCategories.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        seticonCategories(data || { iconCategories: [], iconCategoriesHidden: [] });
      })
      .catch((error) => console.error('데이터 로드 실패:', error));
  }, []);


  return (
    <div className='IconMenuSectionItems'>
      {iconCategories?.iconCategories?.map((category, index)=>(
        <Link href={category.link} key={index} className="iconMenuItem">            <img src={category.src} alt={category.title} />
            {category.label && <span className='hot-label'>HOT</span>}
            <p className="iconMenu-title">{category.title}</p>
        </Link>
      ))}
      <button className='IconMenu-fullView' onClick={()=>{
        setShowIconMenu(!showIconMenu);
      }}>
        <img src="/images/icon-category18.png" alt="메뉴 전체보기" />
        <p>전체보기</p>
      </button>
      {showIconMenu && iconCategories?.iconCategoriesHidden?.map((category, index)=>(
        <Link href={category.link} key={index} className="iconMenuItem iconCategoriesHidden">
          <img src={category.src} alt={category.title} />
          <p className="iconMenu-title">{category.title}</p>
        </Link>
      ))}
    </div>
  )
}
