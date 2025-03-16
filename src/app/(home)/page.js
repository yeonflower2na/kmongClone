import React from 'react';
import IconMenuSection from '@/home/section/IconMenuSection/IconMenuSection.js';
import PopularSection from '@/home/section/PopularSection/PopularSection.js';
/* 
import MainVisual from './section/MainVisualSection/MainVisual';
import IntroSection from './section/IntroSection/IntroSection';
import BestSection from './section/BestSection/BestSection';
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
      <IconMenuSection/>
      <PopularSection/>
      {/*
      <MainVisual/>
      <IntroSection/>
      <BestSection/>
      <AdBannerSection/>
      <InfoSection/>
      <RankingSection/>
      <ManualSection/> */}
    </main>
  )
}
