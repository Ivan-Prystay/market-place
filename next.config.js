// New Rule
/************************************
// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
// };
// module.exports = nextConfig;

// Old Rule
/***********************************/

// module.exports = {
//   images: {
//     domains: ["cdn.pixabay.com", "lh3.googleusercontent.com"],
//   },
// };

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};
