'use client';
import './FooterPopup.css';

export default function FooterPopup({setShowFooterPopup}){
  return (
    <div className="footer-popup">
      <div className="footer-popupContainer">
        <div className="footer-popupContainerInner">
          <h2>콘텐츠산업 진흥법에 따른 표시</h2>
          <img src="/images/footerpopup.jpg" alt="콘텐츠산업 진흥법" />
          <ol>
            <li>콘텐츠의 명칭 : 상품/판매회원/중개 서비스 및 거래 정보 등</li>
          <li>제작년월일: 개별 콘텐츠의 개시일 또는 갱신일</li>
          <li>제작자: (주)크몽 및 개별 판매회원</li>
          </ol>
          <p>(주)크몽 사이트 상의 모든 콘텐츠는 '콘텐츠산업 진흥법'에 따라 개시일 또는 그 갱신일로부터 5년간 보호됩니다. <br />
          (제작자의 동의 없는 무단 복제 및 이용 등을 금함)</p>
          <button className='footer-popupCloseBtn' onClick={()=>{
            setShowFooterPopup(false);
          }}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        </div>
    </div>
  )
}