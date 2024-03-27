// src/components/MixpanelInitializer.tsx

'use client'

import React, { useEffect } from 'react';
import { initializeMixpanel } from '@/lib/utility/mixpanel';

const MixpanelInitializer: React.FC = () => {
  useEffect(() => {
    initializeMixpanel();
  }, []);

  return null;
};

export default MixpanelInitializer;
