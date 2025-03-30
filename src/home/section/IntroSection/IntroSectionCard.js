import React from 'react';

export default function IntroSectionCard({data}) {  
  return (
    <article className='introCard'>
      {data.length > 0 && data.map((section)=>{
        return(
          <div key={section.category} className='introCard-content'>
            <h3>
              <em className={`introCard-title ${section.type}`}>{section.category}</em>
              {section.title}</h3>
            <div className="introCard-group">
              {section.items.map((card, index)=>(
                <div key={index} className='introCard-item'>
                <img src={`/images/intro/${card.img}.jpg`} alt={card.title} />
                <p>{card.title}</p>
              </div>
              ))}
            </div>
          </div>
        );
      })}
    </article>
  );
}