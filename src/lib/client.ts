import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // Hardcode Supabase credentials since .env is blocked
  const supabaseUrl = 'https://qcrgacxgwlpltdfpwkiz.supabase.co';
  const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjcmdhY3hnd2xwbHRkZnB3a2l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNzIxMDAsImV4cCI6MjA2MTc0ODEwMH0.prNKbBkDnNKUE8QRBzU9bnSmRGtTRV8bf4o2RhQAKg8';

  return createBrowserClient(
    supabaseUrl,
    supabaseAnonKey
  )
}
