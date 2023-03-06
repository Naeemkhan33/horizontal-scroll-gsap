const withTM = require("next-transpile-modules")(["three"]);

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["example-package"], // add your transpiled packages here
  images: {
    domains: ["tailwindui.com", "images.unsplash.com"],
  },
  withTM,
};
