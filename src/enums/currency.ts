export const ECurrency = {
  CASH: 0,
  CRYPTO: 1,
} as const;
export type ECurrency = (typeof ECurrency)[keyof typeof ECurrency];
