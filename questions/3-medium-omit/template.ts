export type MyOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] }
