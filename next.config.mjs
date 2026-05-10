/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins:[
    "10.230.245.100",
  ],
  output:"export",
  images:{unoptimized:true},
};
// module.exports = nextConfig;
  export default nextConfig;
