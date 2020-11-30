const dev = process.env.VERCEL_ENV !== 'production';
export const baseUrl = dev ? 'http://localhost:3000' : 'https://dealz.vercel.app';
