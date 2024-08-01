/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-bg-header-block': '#242424',
        'color-divider-header-red': '#c20c0c',
        'color-fff': '#fff',
        'color-8d8d8d': '#8d8d8d',
        'color-bg-download': '#303030'
      },
      fontSize: {
        sml: ['12px', '18px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px']
      },
      width: {
        1100: '1100px',
        310: '310px'
      },
      height: {
        310: '310px'
      },
      borderRadius: {
        20: '20%'
      },
      backgroundPosition: {
        '00': '0px 0px'
      },
      lineHeight: {
        70: '70px'
      },
      backgroundImage: {
        sprite_01: "url('./src/assets/img/sprite_01.png')",
        sprite_02: "url('./src/assets/img/sprite_02.png')",
        sprite_cover: "url('./src/assets/img/sprite_cover.png')",
        sprite_icon: "url('./src/assets/img/sprite_icon.png')",
        sprite_icon2: "url('./src/assets/img/sprite_icon2.png')",
        sprite_icon3: "url('./src/assets/img/sprite_icon3.png')",
        sprite_button: "url('./src/assets/img/sprite_button.png')",
        sprite_button2: "url('./src/assets/img/sprite_button2.png')",
        sprite_table: "url('./src/assets/img/sprite_table.png')",
        sprite_playbar: "url('./src/assets/img/sprite_playbar.png')",
        sprite_playlist: "url('./src/assets/img/sprite_playlist.png')",
        download: "url('./src/assets/img/download.png')"
      }
    }
  },
  plugins: []
}
