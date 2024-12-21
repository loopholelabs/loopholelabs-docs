import { createPreset } from 'fumadocs-ui/tailwind-plugin';

const twilightPreset = {
    light: {
        background: '350 100% 99%',
        foreground: '270 15% 20%',
        muted: '270 20% 97%',
        'muted-foreground': '270 15% 45%',
        popover: '350 100% 99.5%',
        'popover-foreground': '270 15% 25%',
        card: '350 100% 98.5%',
        'card-foreground': '270 15% 20%',
        border: '270 20% 93%',
        primary: '270 50% 60%',
        'primary-foreground': '350 100% 99.5%',
        secondary: '270 20% 95%',
        'secondary-foreground': '270 15% 20%',
        accent: '270 30% 90%',
        'accent-foreground': '270 15% 20%',
        ring: '270 50% 60%',
    },
    dark: {
        background: '264 25% 5%',
        foreground: '220 15% 80%',
        muted: '264 15% 12%',
        'muted-foreground': '220 10% 60%',
        popover: '264 20% 7%',
        'popover-foreground': '220 15% 75%',
        card: '264 20% 8%',
        'card-foreground': '220 15% 80%',
        border: '264 15% 15%',
        primary: '265 60% 45%',
        'primary-foreground': '220 10% 95%',
        secondary: '264 15% 14%',
        'secondary-foreground': '220 15% 80%',
        accent: '265 40% 20%',
        'accent-foreground': '220 15% 80%',
        ring: '265 60% 45%',
    },
    css: {
        '#nd-sidebar': {
            '--muted': '270deg 20% 97%',
            '--secondary': '270deg 20% 95%',
            '--muted-foreground': '270 15% 45%',
        },
        '.dark #nd-sidebar': {
            '--muted': '264deg 15% 12%',
            '--secondary': '264deg 15% 14%',
            '--muted-foreground': '220 10% 60%',
        },
        '.prose': {
            '--tw-prose-body': 'theme(colors.fd-foreground / 85%)',
            '--tw-prose-headings': 'theme(colors.fd-foreground / 100%)',
            '--tw-prose-links': 'theme(colors.fd-primary.DEFAULT)',
            '--tw-prose-code': 'theme(colors.fd-primary.DEFAULT)',
        },
        '.prose :where(code):not(:where([class~="not-prose"],[class~="not-prose"] *))': {
            border: 'none',
            backgroundColor: 'theme(colors.fd-primary.DEFAULT / 30%)',
        },
    },
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
    content: [
        './node_modules/fumadocs-ui/dist/**/*.js',
        './node_modules/fumadocs-openapi/dist/**/*.js',

        './components/**/*.{ts,tsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{ts,tsx}',
        './app/**/*.{js,jsx}',
        './lib/**/*.{ts,tsx}',
        './lib/**/*.{js,jsx}',
        './content/**/*.{md,mdx}',
        './mdx-components.tsx',
    ],
  presets: [createPreset({
      preset: twilightPreset,
      layoutWidth: '1400px',
  })],
    plugins: [require("tailwindcss-animate")],
    theme: {
    	extend: {
            fontFamily: {
                sans: ['var(--font-inter)'],
            },
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
            animation: {
                'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
            },
            keyframes: {
                ping: {
                    '90%, 100%': {
                        opacity: '0',
                    },
                },
            },
    	}

    }
};
