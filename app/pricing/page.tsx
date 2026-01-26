"use client";
import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Heropricing from './component/heropricing';
import Pricing from '@/components/pricing';
import FinalCTA from '@/components/finalcta';

const Page = () => {
       const [isDark, setIsDark] = useState<boolean>(true);
    
    return (
        <div>
      <Header isDark={isDark} toggleTheme={() => setIsDark(!isDark)}/>
            <Heropricing isDark={isDark}/>
            <Pricing isDark={isDark}/>
            <FinalCTA isDark={isDark}/>
            <Footer isDark={isDark}/>
        </div>
    );
}

export default Page;
