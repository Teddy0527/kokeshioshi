/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: false,
  images: {
    localPatterns: [
      {
        pathname: '/images/**'
      },
      {
        pathname: '/images/おちょこけし.png',
        search: '?v=2'
      }
    ]
  }
};

export default nextConfig;
