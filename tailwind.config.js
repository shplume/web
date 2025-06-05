/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 启用类名切换暗黑模式
  theme: {
    extend: {
      colors: {
        // 扩展颜色
        'gray-750': '#2d3748', // 在gray-700和gray-800之间的颜色
        'gray-850': '#1a202c', // 在gray-800和gray-900之间的颜色
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}