/// <reference types="vite/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string
  }
}
