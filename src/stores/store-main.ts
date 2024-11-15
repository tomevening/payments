import {
  cashPayments,
  cryptoPayments,
  fiats as fiatsConstant,
  footerLinks as footerLinksConstant,
} from '@/constants';
import { ECurrency } from '@/enums';
import { type TPaymentMethod } from '@/types';
import { defineStore } from 'pinia';

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

  const fiats = getFiats();

  return {
    paymentMethods,
    fiats,
    footerLinks,
  };
});
