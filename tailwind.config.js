/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            spacing: {
                '1': '1px',
                '2': '2px',
                '3': '3px',
                '4': '4px',
                '5': '5px',
                '6': '6px',
                '7': '7px',
                '8': '8px',
                '9': '9px',
                '10': '10px',
                '11': '11px',
                '12': '12px',
                '13': '13px',
                '14': '14px',
                '15': '15px',
                '20': '20px',
                '25': '25px',
                '30': '30px',
                '35': '35px',
                '40': '40px',
                '50': '50px',
                '60': '60px',
                '70': '70px',
                '80': '80px',
                '90': '90px',
                '100': '100px',
            },
            height: {
                'fh': '100vh',
            },
            screens: {
                'mobile': '320px',
                'mobile_laptop': '420px',
                'laptop': '668px',
                'desktop': '10240px',
                // => @media (min-width: 1280px) { ... }
            },
            width: {
                'modal4': '550px',
                'modal3': '450px',
                'modal2': '350px',
                'modal1': '250px',
                'loginform3': '500px',
                'loginform2': '400px',
                'loginform1': '300px',
                'fw': '100vw',
            },
            minHeight: {
                'fh': '100vh',
            },
            minWidth: {
                'fw': '100vw',
            },
        },
        content: {
            content: "text",
            link: 'url("/icons/link.svg")',
            value: 'url("/icons/link.svg")',
            important: true
        },
        colors: {
            white: '#fff',
            black: '#181A1F',
            grey: '#6D727D',
            blue: '#0053E1',
            gray: '#A9B1C2',
            modalText: '#ACB1BC',
            modalTextDarker: '#6D727D',
        },
        borderWidth: {
            '1': '1px'
        },
        borderColor: {
            'login-input': '#D8DDE9',
            'divider': '#EBEEF5',
        },
        backgroundColor: {
            svg: '#E5EEFF',
            blue: '#0053E1',
            buttonBg: 'linear-gradient(180deg, #2D66F8 0%, #2A5EE6 52.08%, #2554CC 100%)',
        },
        fontFamily: {
            inter: 'Inter Tight'
        }
    },
    plugins: [],
}