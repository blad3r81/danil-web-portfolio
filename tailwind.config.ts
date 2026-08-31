import type { Config } from 'tailwindcss';
const config: Config = { content:['./app/**/*.{js,ts,jsx,tsx}'], theme:{extend:{colors:{ink:'var(--ink)',paper:'var(--paper)',lime:'var(--lime)',line:'var(--line)',muted:'var(--muted)'}}}, plugins:[] };
export default config;
