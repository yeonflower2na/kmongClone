'use client';
import React, { useEffect, useState } from 'react';
import './Header.css';
import Link from 'next/link';

export default function Header() {
  const [darkMode, setdarkMode] = useState(false);
  
  useEffect(()=>{
    const savedMode = localStorage.getItem("darkMode");
    if(savedMode === "enabled"){
      setdarkMode(true);
      document.body.classList.add("darkMode");
    }
  },[])

  useEffect(()=>{
    if(darkMode){
      document.body.classList.add("darkMode");
      localStorage.setItem("darkMode", "enabled");
    }else{
      document.body.classList.remove("darkMode");
      localStorage.setItem("darkMode","disabled");
    }
  },[darkMode]);

  return (
    <header>
      <div className="hdr-inner inner">
        <Link href="/" className="hdr-mainLogo">
          <img src="/images/mainlogo.png" alt="크몽"/>
        </Link>
        <div className="hdr-rightMenu">
        <ul className="hdr-userMenu">
          <li>
            <button onClick={()=>setdarkMode(!darkMode)}>
              {darkMode ? <i className="bi bi-moon"></i> : <i className="bi bi-sun"></i>} 
            </button>
          </li>
          <li>
            <Link href="#none">엔터프라이즈</Link>
            <span>기업용</span>
          </li>
          <li>
            <Link href="#none">전문가 등록</Link>
          </li>
          <li>
            <Link href="#none">로그인</Link>
          </li>
        </ul>
        <Link href="#none" className='hdr-membership'>회원가입</Link>
        </div>
      </div>
    </header>
  );
}