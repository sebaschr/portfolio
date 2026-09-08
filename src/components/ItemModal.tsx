import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useLanguage } from '../i18n/LanguageContext';
import { useRestaurantOrder } from './RestaurantOrderContext';
import { orderLabels, type MenuItem } from '../data/restaurant';

export const ITEM_TRANSITIONS = ['zoom', 'slide-up', 'slide-side', 'flip', 'blur'] as const;
export type ItemTransition = (typeof ITEM_TRANSITIONS)[number];

type ItemModalProps = {
  item: MenuItem | null;
  transition: ItemTransition;
  onClose: () => void;
};

export const ItemModal: React.FC<ItemModalProps> = ({ item, transition, onClose }) => {
  const { language } = useLanguage();
  const { addItem } = useRestaurantOrder();

  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('hide-overflow');
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('hide-overflow');
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="item-modal-overlay" onClick={onClose}>
      <div
        key={`${item.id}-${transition}`}
        className={clsx('item-modal', `item-modal--${transition}`)}
        role="dialog"
        aria-modal="true"
        aria-label={item.name[language]}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="item-modal-close" aria-label="Close" onClick={onClose}>
          &times;
        </button>
        <div className={clsx('item-modal-image', `item-modal-image--${item.variant}`, 'grain-overlay')} aria-hidden="true" />
        <div className="item-modal-body">
          <h3 className="item-modal-name">{item.name[language]}</h3>
          <p className="item-modal-description">{item.description[language]}</p>
          <div className="item-modal-footer">
            <span className="item-modal-price">${item.price.toFixed(2)}</span>
            <button
              type="button"
              className="item-modal-add"
              onClick={() => {
                addItem(item.id);
                onClose();
              }}
            >
              {orderLabels.add[language]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
