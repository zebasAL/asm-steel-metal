module.exports = {
  images: {
    domains: ['panelyacanalados.com', 'flowbite.com', "panelyacanalados.com", "www.magnacero.com"],
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
