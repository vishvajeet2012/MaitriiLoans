export default function manifest() {
    return {
      name: 'Maitrii Loans',
      short_name: 'Maitrii',
      description: 'Trusted Finance Company in Rajasthan',
      start_url: '/',
      display: 'standalone',
      background_color: '#FFFFFF',
      theme_color: '#6D3078',
      icons: [
        {
          src: '/icons/icon.svg',
          sizes: 'any',
          type: 'image/svg+xml',
        },
      ],
    }
  }
