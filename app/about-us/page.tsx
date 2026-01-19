"use client";
import React, { useState } from 'react';
import AboutHero from './component/abouthero';
import Header from '@/components/header';
import Footer from '@/components/footer';

const Page = () => {
       const [isDark, setIsDark] = useState<boolean>(true);
    
    return (
        <div>
      <Header isDark={isDark} toggleTheme={() => setIsDark(!isDark)}/>
            <AboutHero isDark={isDark}/>
            <Footer isDark={isDark}/>
        </div>
    );
}

export default Page;
