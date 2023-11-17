// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
// };
// module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
      },

      {
        protocol: "https",
        hostname: "graph.facebook.com",
      },
    ],
  },
};
