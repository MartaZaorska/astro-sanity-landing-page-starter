/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SANITY_PROJECT_ID: string;
  readonly SANITY_API_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
