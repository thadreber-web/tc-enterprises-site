import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#319795',    // Deep Teal
        secondary: '#4FD1C5',  // Light Teal
        accent: '#ED8936',      // Warm Orange
        'text-main': '#2D3748',   // Charcoal Blue
        'text-muted': '#718096', // Muted Gray
        'bg-main': '#F8FAFC',      // Off-White
        'bg-surface': '#F7F7F7', // Softer Professional Gray
        'bg-surface-dark': '#3a4759', // Dark Surface
      },
      backgroundImage: {
        'cta-gradient': 'linear-gradient(135deg, #6C4DF6 0%, #1B2A4E 100%)'
      },
      boxShadow: {
        card: "0 6px 16px rgba(0,0,0,0.1)"
      },
      borderRadius: {
        card: "12px"
      }
    },
    container: {
      center: true,
      padding: "1rem"
    }
  },
  plugins: []
}
export default config