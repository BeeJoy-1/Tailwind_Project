tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#FFD2A4',
          news: 'rgba(255, 255, 255, 0.15)',
        },
        maxWidth: {
            'container': '1280px',
        },
        fontFamily: {
            'Roboto': "'Roboto Condensed', sans-serif",
        },
        backgroundImage: {
            'banner': "url('images/women.jpg')",
            'church': "linear-gradient(0deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%) ,url('images/pray.png')",
            'book': "linear-gradient(0deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%) ,url('images/book.png')",
            'read': "linear-gradient(0deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%) ,url('images/read.png')",
            'glass': "linear-gradient(0deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%) ,url('images/glass.png')",
            'angels': "url('images/angels.jpg')",
            'temple': "url('images/temple.jpg'),linear-gradient(110deg, #CD5423 -53.83%, #FFD0A0 62.61%)",
        }
    }
  }
}