"use client";
import React, { useState } from 'react';
import AboutHero from './component/solutionspage';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SolutionsPage from './component/solutionspage';
import FinalCTA from '@/components/finalcta';

const Page = () => {
       const [isDark, setIsDark] = useState<boolean>(true);
    
    return (
        <div>
      <Header isDark={isDark} toggleTheme={() => setIsDark(!isDark)}/>
            <SolutionsPage isDark={isDark}/>
            <FinalCTA isDark={isDark}/>
            <Footer isDark={isDark}/>
        </div>
    );
}

export default Page;
