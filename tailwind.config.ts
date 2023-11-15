import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nicomoji: ['var(--font-nicomoji)'],
        nixieone: ['var(--font-nixieone)'],
        myanmarmn: ['var(--font-myanmar-mn)']
      },
      backgroundImage: {
        'my-image': "url('../../public/img/background.png')",
      },
    },
  },
  plugins: [],
}
export default config
