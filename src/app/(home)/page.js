import React from 'react';
import MainVisual from '@/home/section/MainVisualSection/MainVisual';
import IconMenuSection from '@/home/section/IconMenuSection/IconMenuSection.js';
import PopularSection from '@/home/section/PopularSection/PopularSection.js';
import IntroSection from '@/home/section/IntroSection/IntroSection';
import BestSection from '@/home/section/BestSection/BestSection';
/* 
import AdBannerSection from './section/AdBannerSection/AdBannerSection';
import InfoSection from './section/InfoSection/InfoSection';
import RankingSection from './section/RankingSection/RankingSection';
import ManualSection from './section/ManualSection/ManualSection';
 */
/* css */
import './HomePage.css';

export default function HomePage() {
  return (
    <main>
      <MainVisual/>
      <IconMenuSection/>
      <PopularSection/>
      <IntroSection/>
      <BestSection/>
      {/*
      <AdBannerSection/>
      <InfoSection/>
      <RankingSection/>
      <ManualSection/> */}
    </main>
  )
}
