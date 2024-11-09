import {
  cashPayments,
  cryptoPayments,
  fiats as fetchedFiats,
  footerLinks as fetchedFooterLinks,
} from '@/constants';
import { ECurrency } from '@/enums';
import { type TPaymentMethod } from '@/types';
import { defineStore } from 'pinia';
import { shallowRef, type ShallowRef } from 'vue';

export const useStoreMain = defineStore('use-store-main', () => {
  function fetchCashPayments() {
    return cashPayments;
  }
  function fetchCryptoPayments() {
    return cryptoPayments;
  }
  function fetchFiats() {
    return fetchedFiats;
  }
  function fetchFooterLinks() {
    return fetchedFooterLinks;
  }

  const paymentMethods: Map<ECurrency, TPaymentMethod[]> = new Map([
    [ECurrency.CRYPTO, fetchCryptoPayments()],
    [ECurrency.CASH, fetchCashPayments()],
  ]);

  const chosenPayment: ShallowRef<ECurrency> = shallowRef(ECurrency.CASH);

  function changePaymentMethod(newMethod: ECurrency) {
    chosenPayment.value = newMethod;
  }

  const fiats = fetchFiats();
  const footerLinks = fetchFooterLinks();

  return {
    chosenPayment,
    paymentMethods,
    changePaymentMethod,
    fiats,
    footerLinks,
  };
});
