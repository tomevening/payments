export const EChosenPayment = {
  CASH: 0,
  CRYPTO: 1,
} as const;
export type EChosenPayment =
  (typeof EChosenPayment)[keyof typeof EChosenPayment];
