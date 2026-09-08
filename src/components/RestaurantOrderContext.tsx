import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { menuItems, taxRates } from '../data/restaurant';
import { useLanguage } from '../i18n/LanguageContext';

type Toast = { id: number; name: string };

type OrderContextValue = {
  quantities: Record<string, number>;
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  itemCount: number;
  subtotal: number;
  service: number;
  vat: number;
  total: number;
  toast: Toast | null;
};

const RestaurantOrderContext = createContext<OrderContextValue | undefined>(undefined);

const TOAST_DURATION = 2400;

export const RestaurantOrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language } = useLanguage();
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [toast, setToast] = useState<Toast | null>(null);

  const addItem = useCallback(
    (id: string) => {
      setQuantities((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
      const item = menuItems.find((m) => m.id === id);
      if (item) setToast({ id: Date.now(), name: item.name[language] });
    },
    [language]
  );

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), TOAST_DURATION);
    return () => clearTimeout(timer);
  }, [toast]);

  const removeItem = useCallback((id: string) => {
    setQuantities((prev) => {
      const next = { ...prev };
      const current = next[id] ?? 0;
      if (current <= 1) {
        delete next[id];
      } else {
        next[id] = current - 1;
      }
      return next;
    });
  }, []);

  const clear = useCallback(() => setQuantities({}), []);

  const { itemCount, subtotal } = useMemo(() => {
    let count = 0;
    let sum = 0;
    for (const [id, qty] of Object.entries(quantities)) {
      const item = menuItems.find((m) => m.id === id);
      if (!item) continue;
      count += qty;
      sum += item.price * qty;
    }
    return { itemCount: count, subtotal: sum };
  }, [quantities]);

  const service = subtotal * taxRates.service;
  const vat = (subtotal + service) * taxRates.vat;
  const total = subtotal + service + vat;

  const value: OrderContextValue = {
    quantities,
    addItem,
    removeItem,
    clear,
    itemCount,
    subtotal,
    service,
    vat,
    total,
    toast,
  };

  return <RestaurantOrderContext.Provider value={value}>{children}</RestaurantOrderContext.Provider>;
};

export const useRestaurantOrder = () => {
  const ctx = useContext(RestaurantOrderContext);
  if (!ctx) throw new Error('useRestaurantOrder must be used within a RestaurantOrderProvider');
  return ctx;
};
