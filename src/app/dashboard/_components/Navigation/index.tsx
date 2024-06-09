'use client'

import React from 'react';
import NavigationDesktop from './Desktop';
import NavigationMobile from './Mobile';

function Navigation() {
  return (
    <>
      <NavigationDesktop className="hidden lg:flex" />
      <NavigationMobile className="lg:hidden" />
    </>
  )
}

export default Navigation;
