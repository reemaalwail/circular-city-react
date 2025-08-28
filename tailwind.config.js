/** @type {import('tailwindcss').Config} */

export default {
  mode: 'jit', // Ensure JIT is enabled
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        'xs':'0px',
        'sm': '450px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
      },
      extend: {
        'justify-center': 'justify-center',
        'justify-start':'justify-start',
        'justify-end':'justify-end',
        'justify-items-center': 'justify-items-center	',
        'content-center': 'content-center',
        'justify-between': 'justify-between',
        'items-center':'items-center',
        'flex-col':'column',
        container: {
          center: true,
          padding: {
            DEFAULT: '0.5rem',
            'sm': '2rem',
            'xsm':'0rem',
            'lg': '4rem',
            'xl': '5rem',
            '2xl': '6rem',
          },
        }
      },
    },
    plugins: [],
  };
  