
import type { Config } from 'tailwindcss'


const config: Config = {
  prefix: 'tw-',
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-color': '#B08450',
        'accent-hover': "#402019B8",
        'grey-input': "#999999"
      },
      fontFamily: {
        nicomoji: ['var(--font-nicomoji)'],
        nixieone: ['var(--font-nixieone)'],
        myanmarmn: ['var(--font-myanmar-mn)'],
        sans: ['var(--font-inter)'],
      },
      backgroundImage: {
        'my-image': "url('../../public/img/background.png')",
      },
    },
  },
  plugins: [],
}
export default config

