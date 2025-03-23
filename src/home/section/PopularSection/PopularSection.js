'use client';
import React, {useEffect, useState} from 'react';
import PopularSectionFindList from './PopularSectionFindList';
import './PopularSection.css';

export default function PopularSection() {
  const [popularCategories, setpopularCategories] = useState([]);

  useEffect(()=>{
    fetch("/json/PopularSectionCategories.json")
    .then((res)=>res.json())
    .then((result)=>{
      setpopularCategories(result);
    })
    .catch((error) => console.error('데이터 로드 실패:', error));
  },[]);
  
  return (
    <section className='popularSection inner'>
      <PopularSectionFindList items={popularCategories}/>
    </section>
  );
}