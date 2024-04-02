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
        stroke: '#47DFF3',
        'oceanic-forest': {
          OF71D: '#15212A',
          OF82D: '#1E403F',
          OF54L: '#899F9F',
          OF100: '#244E4D',
          OF8L: '#EDF1F1'
        },
        'jungle-geen': {
          JG42D: '#0E413C',
          JG54D: '#114F48',
          JG60D: '#145D55',
          JG89D: '#1D8A7E',
          JG77L: '#54B2A8',
          JG71L: '#6CBDB4',
          JG13L: '#E2F2F0'
        },
        'gulf-stream': {
          GS66L: '#B4CFCB',
          GS42L: '#CFE0DE',
          GS31L: '#DCE8E7',
          GS25L: '#E3EDEB',
          GS13L: '#F0F6F5',
          GS8L: '#F6F9F9',
          GS2L: '#FDFEFD'
        },
        'blck-blue': {
          BB48D: '#0E171C',
          BB82D: '#182730',
          BB77D: '#16242D',
          BB100: '#1D2F3B',
          BB89L: '#364651',
          BB77L: '#515F68',
          BB66L: '#6A767E',
          BB48L: '#939CA1',
          BB42L: '#A0A8AD',
          BB25L: '#C7CBCE'
        },
        // Dark theme colors
        'dark-background': '#0E171C',
        'dark-primary': '#1D8A7E',
        'dark-light-gray': '#515F68',
        'dark-extra-light-gs': '#111C23',
        'dark-mid-gs': '#16242D',
        'dark-light-gs': '#364651',
        'dark-error-bg': '#2C141E',
        'dark-error-light': '#B70122',
        'dark-error-dark': '#B70122',
        'dark-success-bg': '#07150E',
        'dark-success-light': '#60A882',
        'dark-success-dark': '#1C834C',
        'dark-warning-bg': '#16242D',
        'dark-warning-light': '#805C17',
        'dark-warning-dark': '#B28120',
        'dark-info-bg': '#10181E',
        'dark-info-light': '#5398FF',
        'dark-info-dark': '#5398FF',
        'dark-text-primary': '#FFFFFF',
        'dark-text-mid-gray': '#C7CBCE',
        'dark-text-light-gray': '#A0A8AD',
        'dark-msg-sent': '#1F9387',
        'dark-msg-received': '#15212A',
        'dark-input-bg': '#16242D',
        'dark-input-text': '#C7CBCE',
        'dark-input-title': '#515F68',
        'dark-input-action': '#54B2A8',
        'dark-input-description': '#A0A8AD',
        'dark-input-hover-border': '#114F48',
        'dark-input-focused-border': '#1D8A7E',
        'dark-input-success-icon': '#1C834C',
        'dark-input-success-border': '#114F48',
        'dark-input-loading-border': '#515F68',
        'dark-input-disabled-text': '#515F68',
        'dark-btn-disabled-text': '#515F68',
        'dark-btn-disabled-bg': '#16242D',
        'dark-btn-primary-text': '#FDFEFD',
        'dark-btn-primary-bg': '#1D8A7E',
        'dark-btn-primary-hover-bg': '#145D55',
        'dark-btn-primary-click-bg': '#0E413C',
        'dark-btn-focused-stroke': '#47DFF3',
        'dark-btn-secondary-default-border': '#54B2A8',
        'dark-btn-secondary-default-text': '#54B2A8',
        'dark-btn-secondary-hover-bg': '#15212A',
        'dark-btn-secondary-click-bg': '#182730',
        'dark-btn-tertiary-default-text': '#54B2A8',
        'dark-btn-tertiary-hover-bg': '#15212A',
        'dark-btn-tertiary-click-bg': '#1D2F3B',
        // Light theme colors
        'light-background': '#FDFDFD',
        'light-primary': '#244E4D',
        'light-light-gray': '#A0A8AD',
        'light-extra-light-gs': '#F6F9F9',
        'light-mid-gs': '#B4CFCB',
        'light-light-gs': '#DCE8E7',
        'light-error-bg': '#FEF7F9',
        'light-error-light': '#FBE6E9',
        'light-error-dark': '#DD2748',
        'light-success-bg': '#E8F3ED',
        'light-success-light': '#BBDAC9',
        'light-success-dark': '#1C834C',
        'light-warning-bg': '#FFF8EA',
        'light-warning-light': '#FFEAC0',
        'light-warning-dark': '#FFB82E',
        'light-info-bg': '#EBF3FF',
        'light-info-light': '#C2DBFF',
        'light-info-dark': '#5398FF',
        'light-text-primary': '#1D2F3B',
        'light-text-mid-gray': '#515F68',
        'light-text-light-gray': '#939BA1',
        'light-msg-sent': '#3A828C',
        'light-msg-received': '#EDF1F1',
        'light-input-bg': '#ECF3F4',
        'light-input-text': '#16242D',
        'light-input-title': '#899F9F',
        'light-input-action': '#1D8A7E',
        'light-input-description': '#515F68',
        'light-input-hover-border': '#CFE0DE',
        'light-input-focused-border': '#1D8A7E',
        'light-input-success-icon': '#1C834C',
        'light-input-success-border': '#B4CFCB',
        'light-input-loading-border': '#CFE0DE',
        'light-input-disabled-text': '#899F9F',
        'light-btn-disabled-text': '#B4CFCB',
        'light-btn-disabled-bg': '#F0F6F5',
        'light-btn-primary-text': '#FFFFFF',
        'light-btn-primary-bg': '#244E4D',
        'light-btn-primary-hover-bg': '#1E403F',
        'light-btn-primary-click-bg': '#1D8A7E',
        'light-btn-focused-stroke': '#47DFF3',
        'light-btn-secondary-default-border': '#244E4D',
        'light-btn-secondary-default-text': '#244E4D',
        'light-btn-secondary-hover-bg': '#E2F2F0',
        'light-btn-secondary-click-bg': '#CFE0DE',
        'light-btn-tertiary-default-text': '#244E4D',
        'light-btn-tertiary-hover-bg': '#E2F2F0',
        'light-btn-tertiary-click-bg': '#CFE0DE'
      }
    }
  },
  plugins: []
}

export default config
