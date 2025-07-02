import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import path from "path";
import { compression } from 'vite-plugin-compression2';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$/, /\.(gz)$/],
      threshold: 10240, // Only compress files larger than 10kb
    }),
    compression({
      algorithm: 'brotliCompress',
      exclude: [/\.(br)$/, /\.(gz)$/],
      threshold: 10240,
    }),
  ],
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Set to true to minify output
    minify: 'terser',
    // Configure Terser options
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true, // Remove debugger statements
      },
    },
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react', 
            'react-dom', 
            'react-router-dom',
            'framer-motion',
          ],
          ui: [
            '@radix-ui/react-accordion', 
            '@radix-ui/react-dialog',
            '@radix-ui/react-navigation-menu',
            'lucide-react',
            'clsx',
            'tailwind-merge',
          ],
        },
      },
    },
    // Enable source maps in development only
    sourcemap: process.env.NODE_ENV === 'development',
    // Ensure static assets from public directory are copied to dist
    assetsInlineLimit: 4096, // 4kb
    copyPublicDir: true,
    outDir: 'dist',
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dev server
  server: {
    port: 3000,
    strictPort: true,
    host: true,
  },
  // Enable preview
  preview: {
    port: 3000,
    strictPort: true,
    host: true,
  },
  // Add environment variables
  define: {
    'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL),
    'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY),
  },
});
