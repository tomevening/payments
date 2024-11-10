import {
  cashPayments,
  cryptoPayments,
  fiats as fiatsConstant,
  footerLinks as footerLinksConstant,
} from '@/constants';
import { ECurrency } from '@/enums';
import { type TPaymentMethod } from '@/types';
import { defineStore } from 'pinia';
import { shallowRef, type ShallowRef } from 'vue';

export const useStoreMain = defineStore('use-store-main', () => {
  function getCashPayments() {
    return cashPayments;
  }
  function getCryptoPayments() {
    return cryptoPayments;
  }
  function getFiats() {
    return fiatsConstant;
  }
  function getFooterLinks() {
    return footerLinksConstant;
  }

  const paymentMethods: Map<ECurrency, TPaymentMethod[]> = new Map([
    [ECurrency.CRYPTO, getCryptoPayments()],
    [ECurrency.CASH, getCashPayments()],
  ]);

  const chosenPayment: ShallowRef<ECurrency> = shallowRef(ECurrency.CASH);

  function changePaymentMethod(newMethod: ECurrency) {
    chosenPayment.value = newMethod;
  }

  const fiats = getFiats();
  const footerLinks = getFooterLinks();

  return {
    chosenPayment,
    paymentMethods,
    changePaymentMethod,
    fiats,
    footerLinks,
  };
});
