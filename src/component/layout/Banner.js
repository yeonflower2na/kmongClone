import React from 'react'

export default function Banner() {
  return (
    <section className='banner' style={{  height: '48px', backgroundColor: '#212224'}}>
      <div className="banner-inner inner" style={{height: 'inherit'}}>
        <img src="/images/sticky-banner-241122.png" alt="회원가입 부스팅 웰컴 배너" style={{height:'inherit'}}/>
      </div>
    </section>
  );
}