import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xs: '320px', // iPhone SE, Samsung Galaxy A10
        sm: '640px', // iPhone 8, Samsung Galaxy S8
        md: '768px', // iPad, Samsung Galaxy Tab S6
        lg: '1024px', // iPad Pro, small laptops
        xl: '1280px', // Medium laptops
        '2xl': '1536px' // Larger laptops, like MacBook Pro 16"
      }
    },
    fontFamily: {
      serifpro: ['source-serif-pro'],
      poppins: ['Poppins']
    },
    extend: {
      colors: {
        // Universal colors applicable to both themes go here
        stroke: 'var(--S-000)', // Created a custom variable
        'oceanic-forest': {
          OF71D: 'var(--OF-71D)',
          OF82D: 'var(--OF-82D)',
          OF54L: 'var(--OF-54L)',
          OF100: 'var(--OF-100)',
          OF8L: 'var(--OF-8L)'
        },
        'jungle-geen': {
          JG42D: 'var(--JG-42D)',
          JG54D: 'var(--JG-54D)',
          JG60D: 'var(--JG-60D)',
          JG89D: 'var(--JG-89D)',
          JG77L: 'var(--JG-77L)',
          JG71L: '#6CBDB4', // not used?
          JG13L: 'var(--JG-13L)'
        },
        'gulf-stream': {
          GS66L: 'var(--GS-66L)',
          GS42L: 'var(--GS-42L)',
          GS31L: 'var(--GS-31L)',
          GS25L: '#E3EDEB', // not used?
          GS13L: 'var(--GS-13L)',
          GS8L: 'var(--GS-8L)',
          GS2L: 'var(--GS-2L)'
        },
        'black-blue': {
          BB48D: 'var(--BB-48D)',
          BB82D: 'var(--BB-82D)',
          BB77D: 'var(--BB-77D)',
          BB100: 'var(--BB-100)',
          BB89L: 'var(--BB-89L)',
          BB77L: 'var(--BB-77L)',
          BB66L: '#6A767E', // not used?
          BB48L: '#939CA1', // not uses?
          BB42L: 'var(--BB-42L)',
          BB25L: 'var(--BB-25L)'
        },
        // Light theme colors
        'light-background': 'var(--AB-2L)',
        'light-primary': 'var(--OF-100)',
        'light-light-gray': 'var(--BB-42L)',
        'light-extra-light-gs': 'var(--GS-8L)',
        'light-mid-gs': 'var(--GS-66L)',
        'light-light-gs': 'var(--GS-31L)',
        'light-error-bg': 'var(--R-3L)',
        'light-error-light': 'var(--R-10L)',
        'light-error-dark': 'var(--R-85L)',
        'light-success-bg': 'var(--G-10L)',
        'light-success-light': '#BBDAC9', // no variable
        'light-success-dark': 'var(--G-100)',
        'light-warning-bg': 'var(--Y-10L)',
        'light-warning-light': 'var(--Y-15L)',
        'light-warning-dark': 'var(--Y-100)',
        'light-info-bg': '#EBF3FF', // no variable
        'light-info-light': '#C2DBFF', // no variable
        'light-info-dark': '#5398FF', // no variable
        'light-text-primary': 'var(--BB-100)',
        'light-text-mid-gray': 'var(--BB-77L)',
        'light-text-light-gray': '#939BA1', // no variable
        'light-msg-sent': '#3A828C', // no variable
        'light-msg-received': 'var(--OF-8L)',
        'light-input-bg': '#ECF3F4', // no variable
        'light-input-text': 'var(--BB-77D)',
        'light-input-title': 'var(--OF-54L)',
        'light-input-action': 'var(--JG-89D)',
        'light-input-description': 'var(--BB-77L)',
        'light-input-hover-border': 'var(--GS-42L)',
        'light-input-focused-border': 'var(--JG-89D)',
        'light-input-success-icon': 'var(--G-100)',
        'light-input-success-border': 'var(--GS-66L)',
        'light-input-loading-border': 'var(--GS-42L)',
        'light-input-disabled-text': 'var(--OF-54L)',
        'light-btn-disabled-text': 'var(--GS-66L)',
        'light-btn-disabled-bg': 'var(--GS-13L)',
        'light-btn-primary-text': '#FFFFFF', // no variable
        'light-btn-primary-bg': 'var(--OF-100)',
        'light-btn-primary-hover-bg': 'var(--OF-82D)',
        'light-btn-primary-click-bg': 'var(--JG-89D)',
        'light-btn-focused-stroke': 'var(--S-000)',
        'light-btn-secondary-default-border': 'var(--OF-100)',
        'light-btn-secondary-default-text': 'var(--OF-100)',
        'light-btn-secondary-hover-bg': 'var(--JG-13L)',
        'light-btn-secondary-click-bg': 'var(--GS-42L)',
        'light-btn-tertiary-default-text': 'var(--OF-100)',
        'light-btn-tertiary-hover-bg': 'var(--JG-13L)',
        'light-btn-tertiary-click-bg': 'var(--GS-42L)',
        // Dark theme colors
        'dark-background': 'var(--BB-48D)',
        'dark-primary': 'var(--JG-89D)',
        'dark-light-gray': 'var(--BB-77L)',
        'dark-extra-light-gs': '#111C23', // no variable
        'dark-mid-gs': 'var(--BB-77D)',
        'dark-light-gs': 'var(--BB-89L)',
        'dark-error-bg': '#2C141E', // no variable
        'dark-error-light': '#B70122', // no variable
        'dark-error-dark': '#B70122', // no variable
        'dark-success-bg': '#07150E', // no variable
        'dark-success-light': '#60A882', // no variable
        'dark-success-dark': 'var(--G-100)',
        'dark-warning-bg': 'var(--BB-77D)',
        'dark-warning-light': '#805C17', // no variable
        'dark-warning-dark': '#B28120', // no variable
        'dark-info-bg': '#10181E', // no variable
        'dark-info-light': '#5398FF', // no variable
        'dark-info-dark': '#5398FF', // no variable
        'dark-text-primary': '#FFFFFF', // no variable
        'dark-text-mid-gray': 'var(--BB-25L)',
        'dark-text-light-gray': 'var(--BB-42L)',
        'dark-msg-sent': '#1F9387', // no variable
        'dark-msg-received': 'var(--OF-71D)',
        'dark-input-bg': 'var(--BB-77D)',
        'dark-input-text': 'var(--BB-25L)',
        'dark-input-title': 'var(--BB-77L)',
        'dark-input-action': 'var(--JG-77L)',
        'dark-input-description': 'var(--BB-42L)',
        'dark-input-hover-border': 'var(--JG-54D)',
        'dark-input-focused-border': 'var(--JG-89D)',
        'dark-input-success-icon': 'var(--G-100)',
        'dark-input-success-border': 'var(--JG-54D)',
        'dark-input-loading-border': 'var(--BB-77L)',
        'dark-input-disabled-text': 'var(--BB-77L)',
        'dark-btn-disabled-text': 'var(--BB-77L)',
        'dark-btn-disabled-bg': 'var(--BB-77D)',
        'dark-btn-primary-text': 'var(--GS-2L)',
        'dark-btn-primary-bg': 'var(--JG-89D)',
        'dark-btn-primary-hover-bg': 'var(--JG-60D)',
        'dark-btn-primary-click-bg': 'var(--JG-42D)',
        'dark-btn-focused-stroke': 'var(--S-000)',
        'dark-btn-secondary-default-border': 'var(--JG-77L)',
        'dark-btn-secondary-default-text': 'var(--JG-77L)',
        'dark-btn-secondary-hover-bg': 'var(--OF-71D)',
        'dark-btn-secondary-click-bg': 'var(--BB-82D)',
        'dark-btn-tertiary-default-text': 'var(--JG-77L)',
        'dark-btn-tertiary-hover-bg': 'var(--OF-71D)',
        'dark-btn-tertiary-click-bg': 'var(--BB-100)'
      }
    }
  },
  plugins: []
}

export default config
