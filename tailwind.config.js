const spacingPxValues = [
  '5px',
  '9px',
  '10px',
  '14px',
  '18px',
  '21px',
  '22px',
  '27px',
  '29px',
  '35px',
  '44px',
  '50px',
  '52px',
  '60px',
  '64px',
  '80px',
  '122px',
  '160px',
  '200px',
  '220px',
  '240px',
  '320px',
  '560px'
];
const spacingPx = {};
spacingPxValues.forEach((value) => {
  spacingPx[value] = value;
});

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        md: '32px'
      }
    },
    extend: {
      borderRadius: {
        '4px': '4px',
        '10px': '10px',
        '14px': '14px',
        '20px': '20px'
      },
      colors: {
        969696: '#969696',
        cccccc: '#cccccc',
        dark: 'var(--color-dark)',
        grey: {
          DEFAULT: 'var(--color-grey)',
          background: 'var(--color-grey-background)',
          border: 'var(--color-grey-border)'
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          background: 'var(--color-primary-background)',
          border: 'var(--color-primary-border)'
        },
        secondary: 'var(--color-secondary)'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      fontSize: {
        '10px': ['10px', '12px'],
        '11px': ['11px', '11px'],
        '12px': ['12px', '14px'],
        '13px': [
          '13px',
          {
            letterSpacing: '-0.18px',
            lineHeight: '16px'
          }
        ],
        '15px': ['15px', '28px'],
        '17px': ['17px', '30px'],
        '20px': [
          '20px',
          {
            letterSpacing: '-0.18px',
            lineHeight: '27px'
          }
        ]
      },
      minWidth: {
        ...spacingPx
      },
      maxWidth: {
        ...spacingPx,
        '1/6': '16.666667%',
        '1/4': '25%',
        '1/3': '33.333333%',
        '1/2': '50%',
        '2/3': '66.666667%',
        '3/4': '75%',
        '5/6': '83.333333%'
      },
      spacing: {
        ...spacingPx
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['even']
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};
