/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VERCEL: string; // Vercel передає "1" при збірці
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
