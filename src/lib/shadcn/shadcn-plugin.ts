import plugin from 'tailwindcss/plugin'

export const shadcnPlugin = plugin(
  function ({ addBase, theme }) {
    addBase({
      ':root': {

        // Named Colors
        // =============================================================
        '--primary': theme('colors.oceanicForest.800'),
        '--primary-50': theme('colors.gulfStream.100'),
        '--primary-250': theme('colors.gulfStream.150'),
        '--primary-500': theme('colors.gulfStream.450'),

        '--foreground-250': theme('colors.blackBlue.250'),
        '--foreground-500': theme('colors.blackBlue.400'),
        '--foreground-750': theme('colors.blackBlue.600'),

        '--background': theme('colors.white'),
        '--primary-foreground': '0 0% 98%',

        '--secondary': '240 4.8% 95.9%',
        '--secondary-foreground': '240 5.9% 10%',

        '--foreground': '240 10% 3.9%',

        '--accent': '240 4.8% 95.9%',
        '--accent-foreground': '240 5.9% 10%',

        '--muted': '240 4.8% 95.9%',
        '--muted-foreground': '240 3.8% 46.1%',

        // Other
        // =============================================================
        '--border': '240 5.9% 90%',
        '--input': '240 5.9% 90%',
        '--ring': '240 5% 64.9%',
        '--radius': '0.5rem',

        // Components
        // =============================================================
        '--card': '0 0% 100%',
        '--card-foreground': '240 10% 3.9%',

        '--popover': '0 0% 100%',
        '--popover-foreground': '240 10% 3.9%',

        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '0 0% 98%'
      },
      '.dark': {

        // Named Colors
        // =============================================================
        '--primary': theme('colors.blackBlue.850'),
        '--primary-50': theme('colors.gulfStream.100'),
        '--primary-250': theme('colors.blackBlue.800'),
        '--primary-500': theme('colors.blackBlue.550'),

        '--foreground-250': theme('colors.blackBlue.250'),
        '--foreground-500': theme('colors.blackBlue.150'),
        '--foreground-750': theme('colors.white'),

        '--background': theme('colors.blackBlue.600'),

        // TODO: REFACTORING IN PROGRESS - above is refactored
        '--primary-foreground': '240 5.9% 10%',

        '--foreground': '0 0% 98%',

        '--muted': '240 3.7% 15.9%',
        '--muted-foreground': '240 5% 64.9%',

        '--popover': '240 10% 3.9%',
        '--popover-foreground': '0 0% 98%',

        '--card': '240 10% 3.9%',
        '--card-foreground': '0 0% 98%',

        '--border': '240 3.7% 15.9%',
        '--input': '240 3.7% 15.9%',

        '--secondary': '240 3.7% 15.9%',
        '--secondary-foreground': '0 0% 98%',

        '--accent': '240 3.7% 15.9%',
        '--accent-foreground': '0 0% 98%',

        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '0 85.7% 97.3%',

        '--ring': '240 3.7% 15.9%'
      }
    })
    addBase({
      '*': {
        '@apply border-border': {}
      },
      body: {
        '@apply bg-background text-foreground': {}
      }
    })
  },
  {
    theme: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px'
        }
      },
      extend: {
        colors: {

          // Primitives
          // =================================================

          // Neutral
          // --------------------------------------
          oceanicForest: {
            50: '#FBFBFB',
            100: '#EDF1F1',
            200: '#C8D3D3',
            300: '#B0BFBF',
            400: '#96AAAA',
            500: '#7C9594',
            600: '#648181',
            700: '#4B6E6D',
            750: '#2F5756',
            800: '#244E4D',
            850: '#1E403F',
            900: '#162F2E',
            950: '#0D1C1C'
          },
          atollBlue: {
            50: '#FAFCFC',
            100: '#ECF3F4',
            200: '#C3D9DC',
            250: '#A9C8CD',
            300: '#8CB6BC',
            400: '#6FA4AB',
            500: '#55939C',
            600: '#3A828C',
            700: '#0F6773',
            800: '#0C545E',
            900: '#093E45',
            950: '#052529'
          },
          jungleGreen: {
            50: '#FBFDFD',
            100: '#EDF7F6',
            150: '#C7E6E3',
            200: '#AFDBD6',
            300: '#94CFC9',
            400: '#7AC3BB',
            500: '#6CBDB4',
            600: '#49ADA2',
            700: '#219B8E',
            800: '#1B7F74',
            900: '#145D55',
            950: '#0C3833'
          },
          gulfStream: {
            50: '#FDFEFD',
            100: '#F6F9F9',
            150: '#E3EDEB',
            200: '#D6E5E3',
            250: '#C8DCD9',
            300: '#BBD3D0',
            400: '#AECBC7',
            500: '#A2C3BE',
            600: '#8DB6B0',
            700: '#749590',
            750: '#64817D',
            800: '#556D6A',
            850: '#445754',
            900: '#33423F',
            950: '#33423F'
          },
          blackBlue: {
            50: '#FAFBFB',
            100: '#EDEEEF',
            150: '#C7CBCE',
            200: '#AEB4B8',
            250: '#939BA1',
            300: '#6A767E',
            400: '#515F68',
            500: '#364651',
            600: '#1D2F3B',
            700: '#182730',
            800: '#15212A',
            900: '#0E171C',
            950: '#0A1115'
          },
          // Feedback
          // --------------------------------------
          red: {
            50: '#FEF7F9',
            100: '#FBE6E9',
            150: '#F9D9DF',
            200: '#F3B3BF',
            250: '#EB8093',
            300: '#E7677E',
            400: '#E34D69',
            500: '#DD2748',
            600: '#D70128',
            650: '#B70122',
            700: '#96011C',
            750: '#810118',
            850: '#6B0014',
            900: '#40000C',
            950: '#200006'
          },
          green: {
            50: '#E8F3ED',
            100: '#DDECE4',
            150: '#BBDAC9',
            250: '#8DC1A5',
            300: '#77B594',
            350: '#60A882',
            450: '#3E9667',
            500: '#1C834C',
            550: '#186F41',
            650: '#145C35',
            700: '#114F2E',
            750: '#0E4126',
            850: '#082717',
            900: '#04140B',
            950: '#030D08'
          },
          yellow: {
            50: '#FFF8EA',
            100: '#FFF4E0',
            150: '#FFEAC0',
            250: '#FFDB97',
            300: '#FFD481',
            350: '#FFCD6D',
            450: '#FFC34D',
            500: '#FFB82E',
            550: '#D99C27',
            650: '#B28120',
            700: '#996E1B',
            750: '#805C17',
            850: '#4C370E',
            900: '#261C07',
            950: '#191205'
          },
          blue: {
            50: '#EBF3FF',
            100: '#E1EDFF',
            150: '#C2DBFF',
            250: '#9AC3FF',
            300: '#86B6FF',
            350: '#72AAFF',
            450: '#5398FF',
            500: '#3586FF',
            550: '#2F75DD',
            650: '#255BA7',
            700: '#255AA4',
            750: '#214E8D',
            850: '#1A3860',
            900: '#14283E',
            950: '#122233'
          },

          // Named Colors
          // =================================================
          primary: {
            DEFAULT: 'var(--primary)',
            50: 'var(--primary-50)',
            500: 'var(--primary)',
            foreground: 'var(--primary-foreground)'
          },

          foreground: {
            DEFAULT: 'var(--foreground-500)',
            250: 'var(--foreground-250)',
            500: 'var(--foreground-500)',
            750: 'var(--foreground-750)'
          },

          destructive: {
            DEFAULT: 'var(--destructive)',
            foreground: 'var(--destructive-foreground)'
          },
          muted: {
            DEFAULT: 'var(--muted)',
            foreground: 'var(--muted-foreground)'
          },
          accent: {
            DEFAULT: 'var(--accent)',
            foreground: 'var(--accent-foreground)'
          },

          // Other
          // =================================================
          border: 'var(--border)',
          input: 'var(--input)',
          ring: 'var(--ring)',
          background: 'var(--background)',

          // Components
          // =================================================
          popover: {
            DEFAULT: 'var(--popover)',
            foreground: 'var(--popover-foreground)'
          },
          card: {
            DEFAULT: 'var(--card)',
            foreground: 'var(--card-foreground)'
          }
        },
        // Animation
        // =================================================
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' }
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' }
          }
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out'
        }
      }
    }
  }
)
