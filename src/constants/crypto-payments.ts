import type { TPaymentMethod } from '@/types';

export const cryptoPayments: TPaymentMethod[] = [
  {
    name: 'Bitcoin',
    srcIcon: '/images/payments-crypto/bitcoin.svg',
    isActive: false,
  },
  {
    name: 'Ethirium',
    srcIcon: '/images/payments-crypto/ethirium.svg',
    isActive: false,
  },
];
