declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SECRET_USER: string;
    }
  }
}

export {};
