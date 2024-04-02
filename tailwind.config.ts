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
        // Constant colors
        white: '#FFFFFF',
        stroke: '#47DFF3',
        'oceanic-forest': {
          PG71D: '#15212A',
          PG82D: '#1E403F',
          PG54L: '#899F9F',
          PG100: '#244E4D',
          PG8L: '#EDF1F1'
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
        // Dark theme specific colors
        dark: {
          background: '#0E171C',
          primary: '#1D8A7E',
          'light-gray': '#515F68',
          'extra-light-gs': '#111C23',
          'mid-gs': '#16242D',
          'light-gs': '#364651',
          error: {
            background: '#2C141E',
            light: '#B70122',
            dark: '#B70122'
          },
          success: {
            background: '#07150E',
            light: '#60A882',
            dark: '#1C834C'
          },
          warning: {
            background: '#16242D',
            light: '#805C17',
            dark: '#B28120'
          },
          info: {
            background: '#10181E',
            light: '#5398FF',
            dark: '#5398FF'
          },
          text: {
            primary: '#FFFFFF',
            'mid-gray': '#C7CBCE',
            'light-gray': '#A0A8AD'
          },
          messages: {
            sent: {
              background: '#1F9387'
            },
            received: {
              background: '#15212A'
            }
          },
          input: {
            backgrund: '#16242D',
            text: '#C7CBCE',
            title: '#515F68',
            action: '#54B2A8',
            description: '#A0A8AD',
            hover: {
              border: '#114F48'
            },
            focused: {
              border: '#1D8A7E'
            },
            success: {
              icon: '#1C834C',
              border: '#114F48'
            },
            loading: {
              border: '#515F68'
            },
            disabled: {
              text: '#515F68'
            }
          },
          btn: {
            disabled: {
              text: '#515F68',
              background: '#16242D'
            },
            primary: {
              text: '#FDFEFD',
              default: {
                background: '#1D8A7E'
              },
              hover: {
                background: '#145D55'
              },
              click: {
                background: '#0E413C'
              }
            },
            focused: {
              stroke: '#47DFF3'
            },
            secondary: {
              default: {
                border: '#54B2A8',
                text: '#54B2A8'
              },
              hover: {
                background: '#15212A'
              },
              click: {
                background: '#182730'
              }
            },
            tertinary: {
              default: {
                text: '#54B2A8'
              },
              hover: {
                background: '#15212A'
              },
              click: {
                background: '#1D2F3B'
              }
            }
          }
        },
        // Light theme specific colors
        light: {
          background: '#FDFDFD',
          primary: '#244E4D',
          'light-gray': '#A0A8AD',
          'extra-light-gs': '#F6F9F9',
          'mid-gs': '#B4CFCB',
          'light-gs': '#DCE8E7',
          error: {
            background: '#FEF7F9',
            light: '#FBE6E9',
            dark: '#DD2748'
          },
          success: {
            background: '#E8F3ED',
            light: '#BBDAC9',
            dark: '#1C834C'
          },
          warning: {
            background: '#FFF8EA',
            light: '#FFEAC0',
            dark: '#FFB82E'
          },
          info: {
            background: '#EBF3FF',
            light: '#C2DBFF',
            dark: '#5398FF'
          },
          text: {
            primary: '#1D2F3B',
            'mid-gray': '#515F68',
            'light-gray': '#939BA1'
          },
          messages: {
            sent: {
              background: '#3A828C'
            },
            received: {
              background: '#EDF1F1'
            }
          },
          input: {
            backgrund: '#ECF3F4',
            text: '#16242D',
            title: '#899F9F',
            action: '#1D8A7E',
            description: '#515F68',
            hover: {
              border: '#CFE0DE'
            },
            focused: {
              border: '#1D8A7E'
            },
            success: {
              icon: '#1C834C',
              border: '#B4CFCB'
            },
            loading: {
              border: '#CFE0DE'
            },
            disabled: {
              text: '#899F9F'
            }
          },
          btn: {
            disabled: {
              text: '#B4CFCB',
              background: '#F0F6F5'
            },
            primary: {
              text: '#FFFFFF',
              default: {
                background: '#244E4D'
              },
              hover: {
                background: '#1E403F'
              },
              click: {
                background: '#1D8A7E'
              }
            },
            focused: {
              stroke: '#47DFF3'
            },
            secondary: {
              default: {
                border: '#244E4D',
                text: '#244E4D'
              },
              hover: {
                background: '#E2F2F0'
              },
              click: {
                background: '#CFE0DE'
              }
            },
            tertinary: {
              default: {
                text: '#244E4D'
              },
              hover: {
                background: '#E2F2F0'
              },
              click: {
                background: '#CFE0DE'
              }
            }
          }
        }
      }
    }
  },
  plugins: []
}
export default config
