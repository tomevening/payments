import {
  cashPayments,
  cryptoPayments,
  fiats as fiatsConstant,
  footerLinks as footerLinksConstant,
} from '@/constants';
import { ECurrency } from '@/enums';
import { type TFiat, type TPaymentMethod } from '@/types';
import { defineStore } from 'pinia';
import { shallowRef } from 'vue';

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

  const footerLinks = getFooterLinks();

  const paymentMethods: Map<ECurrency, TPaymentMethod[]> = new Map([
    [ECurrency.CRYPTO, getCryptoPayments()],
    [ECurrency.CASH, getCashPayments()],
  ]);

  const chosenPaymentMethod = shallowRef<ECurrency>(ECurrency.CASH);

  function setPaymentMethod(newMethod: ECurrency) {
    chosenPaymentMethod.value = newMethod;
  }

  const fiats = getFiats();

  const chosenFiat = shallowRef<TFiat>(fiats[0]);

  return {
    chosenPaymentMethod,
    paymentMethods,
    setPaymentMethod,
    fiats,
    footerLinks,
    chosenFiat,
  };
});
