/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/trips",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
