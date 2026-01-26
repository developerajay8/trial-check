"use client";
import React, { useState } from 'react';

const Page = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: ""
  })

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      Sign Up
    </div>
  );
}

export default Page;
