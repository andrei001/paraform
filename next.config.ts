import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  crossOrigin: "anonymous",

    headers: async () => (
  
      [
  
        {
  
          source: '/:path*',
  
          headers: [
  
            { key: 'Referrer-Policy', value: 'unsafe-url' },
  
          ],
  
        },
  
      ]
  
  
    )
};



export default nextConfig;
