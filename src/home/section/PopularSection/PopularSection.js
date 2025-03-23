'use client';
import React, { useEffect, useState } from 'react';
import PopularSectionFindList from './PopularSectionFindList';
import './PopularSection.css';

const popularSectionContent = [
  {
    title: (
      <h2>
        <mark style={{ background: '#fff5a5' }}>쇼핑몰 사장님</mark>이<br />
        많이 찾아요
      </h2>
    ),
    category: '쇼핑몰 사장님',
  },
  {
    title: (
      <h2>
        <mark style={{ background: '#ffd5f5' }}>매장 운영</mark>할 때<br />
        많이 찾아요
      </h2>
    ),
    category: '매장 운영',
  },
  {
    title: (
      <h2>
        <mark style={{ background: '#d5ebff' }}>예비창업가</mark>들이
        <br />
        많이 찾아요
      </h2>
    ),
    category: '예비창업가',
  },
];

export default function PopularSection() {
  const [popularCategories, setpopularCategories] = useState([]);

  useEffect(() => {
    fetch('/json/PopularSectionCategories.json')
      .then((res) => res.json())
      .then((result) => {
        setpopularCategories(result);
      })
      .catch((error) => console.error('데이터 로드 실패:', error));
  }, []);

  return (
    <section className="popularSection inner">
      {popularSectionContent.map(({ title, category }) => (
        <PopularSectionFindList
          items={popularCategories}
          title={title}
          category={category}
        />
      ))}
    </section>
  );
}