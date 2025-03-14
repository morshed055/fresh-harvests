/** @type {import('tailwindcss').Config} */
export const content = [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
    extend: {
        fontFamily: {
            rubik: ['var(--font-rubik)', 'sans-serif'], // Use the CSS variable
        },
    },
};
export const plugins = [];