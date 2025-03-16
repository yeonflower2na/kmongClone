import React from 'react';
import IconMenuSectionItems from './IconMenuSectionItems';
import './IconMenuSection.css';

export default function IconMenuSection() {
  return (
    <section className='IconMenuSection'>
      <article className='IconMenuSection-inner inner'>
        <IconMenuSectionItems />
      </article>
    </section>
  );
}