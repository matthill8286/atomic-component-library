export interface Global {
  document: Document
  window: Window
}

declare let global: Global

export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type TranslatedText = string
