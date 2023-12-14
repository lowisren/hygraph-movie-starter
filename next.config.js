/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com'
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com'
      }
      
    ]
      
    },
}
module.exports = nextConfig