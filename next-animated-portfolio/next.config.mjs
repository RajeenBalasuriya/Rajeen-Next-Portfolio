/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          port: '',
          pathname: '/photos/**', // This will cover all image URLs starting with /photos/
        },
        {
          protocol: 'https',
          hostname: 'media.licdn.com',
          port: '',
          pathname: '/dms/image/v2/D5622AQFEUtxP7foTEQ/**', // This covers all image URLs starting with the specified path
        },
        {
          protocol: 'https',
          hostname: 'ultimez.com',
          port: '',
          pathname: '/blog/wp-content/uploads/**', // This will cover all image URLs starting with /blog/wp-content/uploads/
        },
        {
          protocol: 'https',
          hostname: 'media.geeksforgeeks.org',
          port: '',
          pathname: '/wp-content/uploads/**', // This will cover all image URLs starting with /wp-content/uploads/
        },
      ],
    },
  };
  
  export default nextConfig;
  