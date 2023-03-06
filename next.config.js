const withTM = require("next-transpile-modules")(["three"]);

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["tailwindui.com", "images.unsplash.com"],
  },
  withTM,
};
