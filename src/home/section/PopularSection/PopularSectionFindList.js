import React from 'react';
import PopularSectionCard from './PopularSectionCard';

export default function PopularSectionFindList({ title, items, category }) {
  return (
    <article className="popularContent">
      {title}
      <PopularSectionCard items={items} category={category} />
    </article>
  );
}