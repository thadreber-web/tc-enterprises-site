module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',      // Professional Blue
        secondary: '#64748b',    // Muted Slate
        accent: '#f59e0b',        // Warm Amber
        background: '#fafafa',    // Light Background
        foreground: '#1a1a1a',    // Dark Text
        'background-dark': '#1a1a1a', // Dark Background
        'foreground-dark': '#fafafa', // Light Text
        muted: '#64748b',         // Muted
        'muted-foreground': '#9ca3af', // Muted Foreground
      },
      backgroundImage: {
        'cta-gradient': 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)'
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