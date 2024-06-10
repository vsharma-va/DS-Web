/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            animation: {
                text: "text 5s ease infinite",
            },
            colors: {
                'primary': '#41002e',
                'on-primary': '#ffffff',
                'secondary': '#3a152c',
                'on-secondary': '#ffffff',
                'tertiary': '#450008',
                'on-tertiary': '#ffffff',
                'error': '#4e0002',
                'on-error': '#ffffff',
                'primary-container': '#741555',
                'on-primary-container': '#ffffff',
                'secondary-container': '#60354d',
                'on-secondary-container': '#ffffff',
                'tertiary-container': '#791820',
                'on-tertiary-container': '#ffffff',
                'error-container': '#8c0009',
                'on-error-container': '#ffffff',
                'surface-dim': '#e6d6dc',
                'surface': '#fff8f8',
                'inverse-surface': '#382e32',
                'on-surface': '#000000',

            },
            keyframes: {
                text: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
        },
    },
    plugins: [],
};
