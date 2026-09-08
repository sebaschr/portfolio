import { useState } from 'react';
import { Reveal } from './Reveal';
import { ItemModal, ITEM_TRANSITIONS, type ItemTransition } from './ItemModal';
import { useLanguage } from '../i18n/LanguageContext';
import { useRestaurantOrder } from './RestaurantOrderContext';
import { menuCategories, menuItems, orderLabels, type MenuItem } from '../data/restaurant';

const pickTransition = (): ItemTransition => ITEM_TRANSITIONS[Math.floor(Math.random() * ITEM_TRANSITIONS.length)];

export const RestaurantMenu = () => {
  const { language } = useLanguage();
  const { addItem } = useRestaurantOrder();
  const [modal, setModal] = useState<{ item: MenuItem; transition: ItemTransition } | null>(null);

  const openItem = (item: MenuItem) => setModal({ item, transition: pickTransition() });

  return (
    <>
      <section className="rest-section">
        <Reveal>
          <h1 className="rest-section-title">{language === 'es' ? 'Menú' : 'Menu'}</h1>
          <p className="rest-section-lead">
            {language === 'es'
              ? 'Toca un plato para verlo. Agrégalo desde ahí a tu pedido.'
              : 'Tap a dish to see it. Add it to your order from there.'}
          </p>
        </Reveal>

        {menuCategories.map((category, catIndex) => {
          const items = menuItems.filter((item) => item.category === category.id);
          return (
            <div key={category.id} className="rest-menu-category">
              <Reveal delay={catIndex * 40}>
                <h2 className="rest-category-title">{category.label[language]}</h2>
              </Reveal>

              <div className="rest-menu-grid">
                {items.map((item, i) => (
                  <Reveal key={item.id} delay={i * 70} className="rest-menu-item">
                    <button type="button" className="rest-menu-item-open" onClick={() => openItem(item)}>
                      <span className={`rest-menu-item-swatch rest-menu-item-swatch--${item.variant}`} aria-hidden="true" />
                      <span className="rest-menu-item-info">
                        <span className="rest-menu-item-name">{item.name[language]}</span>
                        <span className="rest-menu-item-description">{item.description[language]}</span>
                      </span>
                      <span className="rest-menu-item-price">${item.price.toFixed(2)}</span>
                    </button>
                    <button
                      type="button"
                      className="rest-menu-item-add"
                      onClick={() => addItem(item.id)}
                      aria-label={`${orderLabels.add[language]}: ${item.name[language]}`}
                    >
                      +
                    </button>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <ItemModal item={modal?.item ?? null} transition={modal?.transition ?? 'zoom'} onClose={() => setModal(null)} />
    </>
  );
};
