import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            '2xl': {
                max: '1535px',
            },
            xl: {
                max: '1279px',
            },
            lg: {
                max: '1023px',
            },
            md: {
                max: '768px',
            },
            sm: {
                max: '639px',
            },
            xs: {
                max: '479px',
            },
        },
        extend: {
            keyframes: {
                zoomOut: {
                    to: {
                        transform: 'scale(0)',
                    },
                    from: {
                        transform: 'scale(1)',
                    },
                },
            },
            colors: {
                primary: '#ffffff',
                secondary: '#7F848F',
                'secondary-dark': '#555559',
                'body-color': '#1D1D2D',
                'header-color': '#222533',
                'button-color-light': '#9a77d2',
                'button-color': '#7434C3',
                'button-color-dark': '#461f75',
                'gray-color': '#C3C2C7',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'skeleton-wave':
                    'linear-gradient(90deg, #222533 0, #7F848F 20%, #555559 60%, #222533)',
                hero: 'linear-gradient(to bottom, #1D1D2D66 40%, #1D1D2D)',
                banner: 'linear-gradient(to bottom, #1D1D2D26, #1D1D2D 98%)',
            },
            boxShadow: {
                'button-play': '0px 0px 7px 8px #ff00004d;',
            },
            animation: {
                'skeleton-wave': 'shimmer 3s infinite',
                'zoom-out': 'zoomOut 4s ease-in-out',
            },
        },
    },
    plugins: [],
}
export default config
