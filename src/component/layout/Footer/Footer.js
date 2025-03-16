'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import FooterPopup from './FooterPopup';

// CSS
import './Footer.css'
import 'primeicons/primeicons.css';

export default function Footer() {
  const [showFooterPopup, setShowFooterPopup] = useState(false);
  return (
    <footer>
      {showFooterPopup ? <FooterPopup setShowFooterPopup = {setShowFooterPopup}></FooterPopup> : null}

      <div className="footer-topInner inner">
        <nav className="footer-nav">
          <ul className="footer-menu">
            <li className='footer-info'>
              <div>
                <Link href="#none">고객센터</Link>
                <Link href="#none">전문가센터</Link>
              </div>
              <p>
                10:30~18:00 (점심시간 13:00~14:00)<br />
                주말, 공휴일 휴무
              </p>
              <div className='footer-request'>
                <div className="footer-requestIcon">
                  <i className="bi bi-chat-square-dots"></i>
                </div>
                <p>
                  크몽은 서비스 중개 플랫폼이에요. <br />
                작업 의뢰는 전문가에게 직접 문의해 주세요.
                </p>
              </div>
            </li>
            <li className='footer-mainMenu'>
              <Link href="#none">크몽</Link>
              <ul className="footer-subMenu">
                <li><Link href="#none">크몽 메인</Link></li>
                <li><Link href="#none">Prime</Link></li>
                <li><Link href="#none">엔터프라이즈</Link></li>
                <li><Link href="#none">프리랜서클럽</Link></li>
              </ul>
            </li>
            <li className='footer-mainMenu'>
              <Link href="#none">크몽 정보</Link>
              <ul className="footer-subMenu">
                <li><Link href="#none">서비스 소개</Link></li>
                <li><Link href="#none">인재영입</Link></li>
                <li><Link href="#none">제휴 광고</Link></li>
              </ul>
            </li>
            <li className='footer-mainMenu'>
              <Link href="#none">관련 사이트</Link>
              <ul className="footer-subMenu">
                <li><Link href="#none">크몽로그</Link></li>
                <li><Link href="#none">크몽 인스타그램</Link></li>
                <li><Link href="#none">크몽 유튜브</Link></li>
              </ul>
            </li>
            <li className='footer-mainMenu'>
              <Link href="#none">지원</Link>
              <ul className="footer-subMenu">
                <li><Link href="#none">공지사항</Link></li>
                <li><Link href="#none">자주 묻는 질문</Link></li>
                <li><Link href="#none">약관 및 정책</Link></li>
                <li><Link href="#none">개인정보처리방침</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className='footer-link'>
          <div className="footer-linkGoogle">
            <Link href="#none">Google play</Link>
          </div>
          <div className="footer-linkApple">
            <Link href="#none">App Store</Link>
          </div>
        </div>
      </div>
      <hr />
      <div className='footer-bottomInner inner'>
        <div className="footer-bottomContent">
          <p className='footer-bottomMenu'>
            (주)크몽<span></span>
            서울시 서초구 사임당로 157, 3층<span></span>
            대표 : 박현호, 김태헌<span></span>
            개인정보관리책임자 : 송준이<span></span>
            사업자등록번호 : 613-81-65278
            <a href="#none">사업자 정보확인</a>
            <br />
            통신판매업신고 : 2018-서울서초-2134<span></span>
            유료직업소개사업등록번호 : 제2021-3210195-14-5-00035호<span></span>
            고객센터 : 1544-6254<span></span>
            호스팅 사업자: Amazon Web Service(AWS)<span></span>
            1:1 문의하기<span></span>
          </p>
          <p className="footer-caution"
            onClick={()=>{
              setShowFooterPopup(true);
            }}>
              (주)크몽은 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품, 상품정보, 거래에 관한 의무와 책임은 판매회원에게 있습니다.
                <br />
                (주)크몽 사이트의 상품/판매회원/중개 서비스/거래 정보, 콘텐츠, UI 등에 대한 무단복제, 전송, 배포, 스크래핑 등의 행위는 저작권법, 콘텐츠산업 진흥법 등 관련법령에 의하여 엄격히 금지됩니다. [안내 보기]
            </p>
          <div className="footer-law">

          </div>
          <p className="footer-copy">
          Copyright © 2025 kmong Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}