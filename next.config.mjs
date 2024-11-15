/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static HTML export
    output: 'standalone',
    
    // Environment variables that will be publicly available
    env: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  
    // Redirect root to index.html
    async redirects() {
      return [
        {
          source: '/',
          destination: '/index.html',
          permanent: true,
        },
      ]
    },
  
    // Headers to allow Supabase requests and handle permissions
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*'
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
            },
            {
              key: 'Permissions-Policy',
              value: 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), interest-cohort=()'
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff'
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin'
            }
          ]
        }
      ]
    },
  
    // Additional security settings
    poweredByHeader: false,
  }
  
  export default nextConfig