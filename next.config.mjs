/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export estático: gera ./out, que é o que o Cloudflare Pages publica.
  output: 'export',
  // Sem otimizador da Vercel no export — senão o build quebra.
  images: { unoptimized: true },
  // Gera /en/index.html em vez de /en.html (evita 404 no Pages).
  trailingSlash: true,
};

export default nextConfig;
