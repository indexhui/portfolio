export default {
  theme: {
    /* ... */
    borderRadius: {
      'rb-0': '10px 10px 0 10px',
      sm: '0.125rem',
      DEFAULT: '4px',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      large: '12px',
    },
    fontSize: {
      '2xl': [
        '20px',
        {
          letterSpacing: '0.02em',
          lineHeight: '34px',
        },
      ],
      // Or with a default line-height as well
      '3xl': [
        '24px',
        {
          letterSpacing: '0.02em',
          lineHeight: '42px',
        },
      ],
    },
  },
  plugins: [
    require('windicss/plugin/aspect-ratio'),
    // ...
  ],
  shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
}
