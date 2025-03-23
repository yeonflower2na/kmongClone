import React from 'react'

export default function PopularSectionCard ({items}) {
  const filter = items.filter((item, index)=>{
    return item.category === "쇼핑몰 사장님"
  })
  console.log(filter);
  return (
    <div className='popularCardWrap'>
      {filter.length > 0 && filter.map((item, index)=>{
        return(
          <div key={index} className='popularCard-item'>
            <img src={item.src} alt={item.title} />
            {item.prime && <span className='primeTag'>Prime</span>}
            <h5>{item.title}</h5>
            <p className='popularCard-rating'>
              <i className="bi bi-star-fill"></i>
              {item.rating} <span>({item.comment.toLocaleString()})</span></p>
              <p className='popularCard-price'>{item.price.toLocaleString()}원~</p>
            <div className='popularCard-logo'>
              <img src={item.logo} alt={item.logoTitle} />
              <p>{item.logoTitle}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
