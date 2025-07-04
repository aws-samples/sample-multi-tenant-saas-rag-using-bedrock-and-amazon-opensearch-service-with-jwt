/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_ENDPOINT: string;
  readonly VITE_APP_USER_POOL_ID: string;
  readonly VITE_APP_USER_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
    readonly VITE_APP_REGION: string
    readonly VITE_APP_USER_POOL_ID: string
    readonly VITE_APP_USER_CLIENT_ID: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }