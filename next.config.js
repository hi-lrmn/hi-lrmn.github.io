const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/profile',
        destination: 'https://lrmn.is-a.dev/',
        permanent: false,
      },
      {
        source: '/virtualphotography',
        destination: 'https://vp.lrmn.fun/',
        permanent: true,
      },
      {
        source: '/mewwme',
        destination: 'https://mewwme.is-a.fun/',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/romanroman.nya',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/lrmn7',
        permanent: true,
      },
      {
        source: '/spotify',
        destination: 'https://open.spotify.com/artist/3jHW4HKnaYSaEmovirJRKj',
        permanent: true,
      },
      {
        source: '/pinterest',
        destination: 'https://id.pinterest.com/romanromannya',
        permanent: true,
      },
      {
        source: '/medium',
        destination: 'https://medium.com/@lrmn',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/6EXgrmtkPX',
        permanent: true,
      },
      {
        source: '/tiktok',
        destination: 'https://www.tiktok.com/@romanroman.nya',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/@lrmn_vp',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://x.com/romanromannya',
        permanent: true,
      },
    ];
  }, 
  trailingSlash: false
}; 
