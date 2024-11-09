import { ECurrency } from '@/enums';
import { type TFiat, type TPaymentMethod } from '@/types';
import { defineStore } from 'pinia';
import { shallowRef, type ShallowRef } from 'vue';

export const useStoreMain = defineStore('use-store-main', () => {
  const cashPayments: TPaymentMethod[] = [
    {
      name: 'Картой РФ',
      srcIcon: '/images/payments/RUCard.png',
      isActive: true,
    },
    {
      name: 'Картой МИР',
      srcIcon: '/images/payments/MirCard.png',
      isActive: false,
    },
    {
      name: 'СБП',
      srcIcon: '/images/payments/СБП.png',
      isActive: false,
    },
    {
      name: 'Payeer',
      srcIcon: '/images/payments/Payeer.png',
      isActive: false,
    },
    {
      name: 'SteamPay',
      srcIcon: '/images/payments/SteamPay.png',
      isActive: false,
    },
    {
      name: 'Мегафон',
      srcIcon: '/images/payments/Мегафон.png',
      isActive: false,
    },
    {
      name: 'Билайн',
      srcIcon: '/images/payments/Билайн.png',
      isActive: false,
    },
    {
      name: 'Теле2',
      srcIcon: '/images/payments/Теле2.png',
      isActive: false,
    },
    {
      name: 'PayPal',
      srcIcon: '/images/payments/PayPal.png',
      isActive: false,
    },
    {
      name: 'Stripe',
      srcIcon: '/images/payments/Stripe.png',
      isActive: false,
    },
    {
      name: 'FKWallet',
      srcIcon: '/images/payments/FKWallet.png',
      isActive: false,
    },
    {
      name: 'Lava',
      srcIcon: '/images/payments/Lava.png',
      isActive: false,
    },
    {
      name: 'Volet',
      srcIcon: '/images/payments/Volet.png',
      isActive: false,
    },
    {
      name: 'PerfectMoney',
      srcIcon: '/images/payments/PerfectMoney.png',
      isActive: false,
    },
    {
      name: 'Другой',
      srcIcon: '/images/payments/Other.png',
      isActive: false,
    },
    {
      name: 'Cryptomus',
      srcIcon: '/images/payments/Cryptomus.png',
      isActive: false,
    },
  ];

  const cryptoPayments: TPaymentMethod[] = [
    {
      name: 'Cryptomus',
      srcIcon: '/images/payments/Cryptomus.png',
      isActive: false,
    },
  ];

  const paymentMethods: Map<ECurrency, TPaymentMethod[]> = new Map([
    [ECurrency.CRYPTO, cryptoPayments],
    [ECurrency.CASH, cashPayments],
  ]);

  const chosenPayment: ShallowRef<ECurrency> = shallowRef(ECurrency.CASH);

  function changePaymentMethod(newMethod: ECurrency) {
    chosenPayment.value = newMethod;
  }

  const fiats: TFiat[] = [
    {
      name: 'RUB',
      srcIcon: '/images/flagRound.svg',
      isActive: true,
    },
    {
      name: 'RUB',
      srcIcon: '/images/flagRound.svg',
      isActive: false,
    },
    {
      name: 'RUB',
      srcIcon: '/images/flagRound.svg',
      isActive: false,
    },
    {
      name: 'RUB',
      srcIcon: '/images/flagRound.svg',
      isActive: false,
    },
    {
      name: 'RUB',
      srcIcon: '/images/flagRound.svg',
      isActive: false,
    },
    {
      name: 'RUB',
      srcIcon: '/images/flagRound.svg',
      isActive: false,
    },
    {
      name: 'RUB',
      srcIcon: '/images/flagRound.svg',
      isActive: false,
    },
    {
      name: 'RUB',
      srcIcon: '/images/flagRound.svg',
      isActive: false,
    },
    {
      name: 'RUB',
      srcIcon: '/images/flagRound.svg',
      isActive: false,
    },
    {
      name: 'RUB',
      srcIcon: '/images/flagRound.svg',
      isActive: false,
    },
    {
      name: 'RUB',
      srcIcon: '/images/flagRound.svg',
      isActive: false,
    },
  ];

  return {
    chosenPayment,
    paymentMethods,
    changePaymentMethod,
    fiats,
  };
});
