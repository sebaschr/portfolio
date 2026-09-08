import { useState } from 'react';
import clsx from 'clsx';
import { Reveal } from './Reveal';
import { ItemModal, ITEM_TRANSITIONS, type ItemTransition } from './ItemModal';
import { useLanguage } from '../i18n/LanguageContext';
import { useRestaurantOrder } from './RestaurantOrderContext';
import { menuCategories, menuItems, orderLabels, menuViewLabels, type MenuItem } from '../data/restaurant';

const pickTransition = (): ItemTransition => ITEM_TRANSITIONS[Math.floor(Math.random() * ITEM_TRANSITIONS.length)];

export const RestaurantMenu = () => {
  const { language } = useLanguage();
  const { addItem } = useRestaurantOrder();
  const [modal, setModal] = useState<{ item: MenuItem; transition: ItemTransition } | null>(null);
  const [view, setView] = useState<'list' | 'book'>('list');
  const [pulsingId, setPulsingId] = useState<string | null>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageDirection, setPageDirection] = useState<'next' | 'prev'>('next');

  const openItem = (item: MenuItem) => setModal({ item, transition: pickTransition() });

  const handleAdd = (id: string) => {
    addItem(id);
    setPulsingId(id);
  };

  const goToPage = (index: number, direction: 'next' | 'prev') => {
    setPageDirection(direction);
    setPageIndex(index);
  };

  const currentCategory = menuCategories[pageIndex];
  const currentItems = menuItems.filter((item) => item.category === currentCategory.id);

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

          <div className="rest-view-toggle" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={view === 'list'}
              className={clsx('rest-view-toggle-btn', { 'rest-view-toggle-btn--active': view === 'list' })}
              onClick={() => setView('list')}
            >
              {menuViewLabels.list[language]}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={view === 'book'}
              className={clsx('rest-view-toggle-btn', { 'rest-view-toggle-btn--active': view === 'book' })}
              onClick={() => setView('book')}
            >
              {menuViewLabels.book[language]}
            </button>
          </div>
        </Reveal>

        {view === 'list' ? (
          menuCategories.map((category, catIndex) => {
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
                        className={clsx('rest-menu-item-add', { 'rest-menu-item-add--pulse': pulsingId === item.id })}
                        onClick={() => handleAdd(item.id)}
                        onAnimationEnd={() => setPulsingId((prev) => (prev === item.id ? null : prev))}
                        aria-label={`${orderLabels.add[language]}: ${item.name[language]}`}
                      >
                        +
                      </button>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="rest-book">
            <div key={pageIndex} className={clsx('rest-book-page', `rest-book-page--${pageDirection}`)}>
              <span className="rest-book-page-number">
                {menuViewLabels.pageOf[language]} {pageIndex + 1} / {menuCategories.length}
              </span>
              <h2 className="rest-book-category-title">{currentCategory.label[language]}</h2>

              <div className="rest-book-items">
                {currentItems.map((item) => (
                  <div key={item.id} className="rest-book-item">
                    <button type="button" className="rest-book-item-open" onClick={() => openItem(item)}>
                      <span className="rest-book-item-name">{item.name[language]}</span>
                      <span className="rest-book-item-description">{item.description[language]}</span>
                    </button>
                    <div className="rest-book-item-footer">
                      <span className="rest-book-item-price">${item.price.toFixed(2)}</span>
                      <button
                        type="button"
                        className={clsx('rest-menu-item-add', { 'rest-menu-item-add--pulse': pulsingId === item.id })}
                        onClick={() => handleAdd(item.id)}
                        onAnimationEnd={() => setPulsingId((prev) => (prev === item.id ? null : prev))}
                        aria-label={`${orderLabels.add[language]}: ${item.name[language]}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rest-book-nav">
              <button
                type="button"
                className="rest-book-nav-btn"
                disabled={pageIndex === 0}
                onClick={() => goToPage(pageIndex - 1, 'prev')}
                aria-label={menuViewLabels.prevPage[language]}
              >
                ←
              </button>
              <div className="rest-book-dots">
                {menuCategories.map((c, i) => (
                  <button
                    key={c.id}
                    type="button"
                    className={clsx('rest-book-dot', { 'rest-book-dot--active': i === pageIndex })}
                    onClick={() => goToPage(i, i > pageIndex ? 'next' : 'prev')}
                    aria-label={c.label[language]}
                  />
                ))}
              </div>
              <button
                type="button"
                className="rest-book-nav-btn"
                disabled={pageIndex === menuCategories.length - 1}
                onClick={() => goToPage(pageIndex + 1, 'next')}
                aria-label={menuViewLabels.nextPage[language]}
              >
                →
              </button>
            </div>
          </div>
        )}
      </section>

      <ItemModal item={modal?.item ?? null} transition={modal?.transition ?? 'zoom'} onClose={() => setModal(null)} />
    </>
  );
};
