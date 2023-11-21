// /**
//  * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
//  * for Docker builds.
//  */
// await import("./src/env.mjs");

// /** @type {import("next").NextConfig} */
// const config = {
//   reactStrictMode: true,

//   /**
//    * If you are using `appDir` then you must comment the below `i18n` config out.
//    *
//    * @see https://github.com/vercel/next.js/issues/41980
//    */
//   i18n: {
//     locales: ["en"],
//     defaultLocale: "en",
//   },
// };

// export default config;

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};