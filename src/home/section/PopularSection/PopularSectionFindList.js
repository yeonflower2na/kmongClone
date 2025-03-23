import React from 'react';
import PopularSectionCard from './PopularSectionCard';

export default function PopularSectionFindList ({items}) {

  return (
    <article className='popularContent'>
      <h2>쇼핑몰 사장님이 <br />
        많이 찾아요</h2>
      <PopularSectionCard items={items}/>
    </article>
  )
}
