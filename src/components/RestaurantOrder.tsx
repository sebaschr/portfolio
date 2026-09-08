import { Reveal } from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import { useRestaurantOrder } from './RestaurantOrderContext';
import { menuItems, orderLabels } from '../data/restaurant';

const money = (n: number) => `$${n.toFixed(2)}`;

export const RestaurantOrder = () => {
  const { language } = useLanguage();
  const { quantities, addItem, removeItem, clear, subtotal, service, vat, total } = useRestaurantOrder();

  const lines = Object.entries(quantities)
    .map(([id, qty]) => ({ item: menuItems.find((m) => m.id === id), qty }))
    .filter((line): line is { item: (typeof menuItems)[number]; qty: number } => Boolean(line.item));

  return (
    <section className="rest-section">
      <Reveal>
        <h1 className="rest-section-title">{language === 'es' ? 'Pedido' : 'Order'}</h1>
      </Reveal>

      {lines.length === 0 ? (
        <Reveal>
          <p className="rest-order-empty">{orderLabels.empty[language]}</p>
        </Reveal>
      ) : (
        <>
          <div className="rest-order-lines">
            {lines.map(({ item, qty }, i) => (
              <Reveal key={item.id} delay={i * 60} className="rest-order-line">
                <span className="rest-order-line-name">{item.name[language]}</span>
                <div className="rest-order-line-qty">
                  <button type="button" onClick={() => removeItem(item.id)} aria-label={orderLabels.remove[language]}>
                    −
                  </button>
                  <span>{qty}</span>
                  <button type="button" onClick={() => addItem(item.id)} aria-label={orderLabels.add[language]}>
                    +
                  </button>
                </div>
                <span className="rest-order-line-price">{money(item.price * qty)}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="rest-order-summary">
            <div className="rest-order-summary-row">
              <span>{orderLabels.subtotal[language]}</span>
              <span>{money(subtotal)}</span>
            </div>
            <div className="rest-order-summary-row">
              <span>{orderLabels.service[language]}</span>
              <span>{money(service)}</span>
            </div>
            <div className="rest-order-summary-row">
              <span>{orderLabels.vat[language]}</span>
              <span>{money(vat)}</span>
            </div>
            <div className="rest-order-summary-row rest-order-summary-row--total">
              <span>{orderLabels.total[language]}</span>
              <span>{money(total)}</span>
            </div>
            <button type="button" className="rest-btn rest-btn--ghost" onClick={clear}>
              {orderLabels.clear[language]}
            </button>
          </Reveal>
        </>
      )}
    </section>
  );
};
