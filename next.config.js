const nextTranslate = require('next-translate-plugin');

module.exports = nextTranslate({
  // eslint: {
  //   dirs: ['pages', 'utils'],
  // },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
  },
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
      {
        protocol: 'https',
        hostname: 'zys2nicxwzkmnh5p.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  webpack(config, { isServer, webpack }) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(pdf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/pdf', // Carpeta de salida en la construcción
              publicPath: '/_next/static/pdf', // Ruta pública para acceder a los archivos
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm)$/i, // Agrega formatos de video según tus necesidades
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/videos', // Carpeta de salida en la construcción
              publicPath: '/_next/static/videos', // Ruta pública para acceder a los archivos
            },
          },
        ],
      }
    );

    return config;
  },
})
