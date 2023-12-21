module.exports = {
  // eslint: {
  //   dirs: ['pages', 'utils'],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'panelyacanalados.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'flowbite.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.magnacero.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'stablo-template.vercel.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
