// src/components/MixpanelInitializer.tsx

'use client'

import type React from 'react'
import { useEffect } from 'react'
import { initializeMixpanel } from '@/lib/utility/mixpanel'

const MixpanelInitializer: React.FC = () => {
  useEffect(() => {
    initializeMixpanel()
  }, [])

  return null
}

export default MixpanelInitializer
