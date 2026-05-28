import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "news.celsolisboa.edu.br",
      },
      {
        protocol: "https",
        hostname: "vivefisioterapia.com",
      },
      {
        protocol: "http",
        hostname: "www.fisioterapiavtoledo.com",
      },
      {
        protocol: "https",
        hostname: "clinicamarin.es",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },
};

export default nextConfig;
