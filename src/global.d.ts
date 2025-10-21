type MathaleaModule = { default: new () => unknown };

declare global {
  interface Window {
    MathALEA?: Record<string, MathaleaModule>;
  }
}

export {};