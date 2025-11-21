import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.mdx"],
  theme: {
    extend: {
      colors: {
        sand: {
          light: '#FAF9F7',
          DEFAULT: '#F5F3F0',
          dark: '#EBE8E3',
          silk: '#FFFEF9'
        },
        ink: {
          DEFAULT: '#2B2826',
          soft: '#5A5550',
          light: '#8B857E',
          deep: '#1A1816'
        },
        wood: {
          light: '#D9B896',
          DEFAULT: '#C9A777',
          dark: '#B39360',
          aged: '#8B7355'
        },
        accent: {
          oshikokeshi: '#7D4040',
          shachokokeshi: '#2A5248',
          story: '#5A4535'
        },
        sumi: {
          DEFAULT: '#1C1A18',
          fade: 'rgba(28, 26, 24, 0.02)',
          deep: '#0F0E0D',
          mist: 'rgba(28, 26, 24, 0.05)'
        },
        kinpaku: {
          light: '#E8D4A0',
          DEFAULT: '#D4AF37',
          dark: '#B8960C',
          aged: '#9B8039'
        },
        ai: {
          light: '#4A6D8C',
          DEFAULT: '#2B4C6F',
          dark: '#1A3552'
        },
        koke: {
          light: '#6B7C5D',
          DEFAULT: '#4A5D3F',
          dark: '#3A4D30'
        }
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', 'serif'],
        sans: ['"Noto Sans JP"', 'sans-serif']
      },
      maxWidth: {
        prose: '64rem'
      },
      borderRadius: {
        subtle: '0.125rem',
        soft: '0.375rem'
      },
      boxShadow: {
        washi: '0 2px 24px rgba(28, 26, 24, 0.018), 0 0 1px rgba(28, 26, 24, 0.03)',
        washi_hover: '0 4px 32px rgba(28, 26, 24, 0.03), 0 0 1px rgba(28, 26, 24, 0.06)',
        inner_soft: 'inset 0 1px 3px rgba(28, 26, 24, 0.015)',
        kinpaku: '0 2px 16px rgba(212, 175, 55, 0.08)',
        deep: '0 8px 40px rgba(15, 14, 13, 0.12), 0 2px 8px rgba(15, 14, 13, 0.08)'
      },
      letterSpacing: {
        'relaxed-jp': '0.1em',
        'wide-jp': '0.2em',
        'ultra-wide-jp': '0.3em'
      },
      lineHeight: {
        'relaxed-jp': '2.2',
        'loose-jp': '2.6'
      },
      backgroundImage: {
        'washi-texture': 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.015\'/%3E%3C/svg%3E")',
        'silk-texture': 'linear-gradient(135deg, rgba(255, 254, 249, 0) 0%, rgba(255, 254, 249, 0.4) 50%, rgba(255, 254, 249, 0) 100%)'
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-in-out',
        'slide-up': 'slideUp 1s ease-out',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
