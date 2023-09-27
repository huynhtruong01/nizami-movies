import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#ffffff',
                secondary: '#7F848F',
                'secondary-dark': '#555559',
                'body-color': '#1D1D2D',
                'header-color': '#222533',
                'button-color': '#7434C3',
                'button-color-dark': '#461f75',
                'gray-color': '#C3C2C7',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                'button-play': '0px 0px 7px 8px #ff00004d;',
            },
        },
    },
    plugins: [],
}
export default config
