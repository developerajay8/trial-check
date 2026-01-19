"use client";
import Demopreview from '@/components/demopreview';
import Features from '@/components/features';
import FinalCTA from '@/components/finalcta';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Herosection from '@/components/herosection';
import HowItWork from '@/components/how-it-work';
import Perfectfor from '@/components/perfectfor';
import Pricing from '@/components/pricing';
import React, { useState } from 'react';

const Page = () => {
   const [isDark, setIsDark] = useState<boolean>(true);
  return (
    <div className={isDark ? 'dark' : ''}>
      <Header isDark={isDark} toggleTheme={() => setIsDark(!isDark)}/>
      <Herosection isDark={isDark}/>
      <HowItWork isDark={isDark}/>
      <Features isDark={isDark}/>
      <Perfectfor isDark={isDark}/>
      <Demopreview isDark={isDark}/>
      <Pricing isDark={isDark}/>
      <FinalCTA isDark={isDark}/>
      <Footer isDark={isDark}/>
    </div>
  );
}

export default Page;
