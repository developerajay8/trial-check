"use client";
import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Herocontact from './component/herocontact';
import ContactForm from './component/contactform';
import FAQs from './component/faqs';
import SupportEmail from './component/supportemail';

const Page = () => {
       const [isDark, setIsDark] = useState<boolean>(true);
    
    return (
        <div>
      <Header isDark={isDark} toggleTheme={() => setIsDark(!isDark)}/>
            <Herocontact isDark={isDark}/>
            <ContactForm isDark={isDark}/>
            <SupportEmail isDark={isDark}/>
            <FAQs isDark={isDark}/>
            <Footer isDark={isDark}/>
        </div>
    );
}

export default Page;
