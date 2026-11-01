/** @type {import('next').NextConfig} */
const nextConfig = {
  // The Carlier landing pages are static `index.html` files under `public/`.
  // Their directory URLs need a trailing slash so the static server resolves
  // the directory index (for example, `/carlier/coin-identifier/`).
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
