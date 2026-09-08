import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import { restaurantInfo, menuItems } from '../data/restaurant';

export const RestaurantHome = () => {
  const { language } = useLanguage();
  const featured = menuItems.slice(0, 3);

  return (
    <>
      <section className="rest-hero grain-overlay">
        <div className="dot-field rest-hero-dots" aria-hidden="true" />
        <div className="rest-hero-content">
          <Reveal>
            <p className="rest-eyebrow">Demo</p>
            <h1 className="rest-hero-title">{restaurantInfo.name}</h1>
            <p className="rest-hero-tagline">{restaurantInfo.tagline[language]}</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="rest-hero-ctas">
              <Link className="rest-btn rest-btn--primary" to="/lab/restaurant/menu">
                {language === 'es' ? 'Ver Menú' : 'View Menu'}
              </Link>
              <Link className="rest-btn rest-btn--ghost" to="/lab/restaurant/reservations">
                {language === 'es' ? 'Reservar' : 'Reserve'}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rest-section">
        <Reveal>
          <h2 className="rest-section-title">{language === 'es' ? 'Algunos Favoritos' : 'A Few Favorites'}</h2>
        </Reveal>
        <div className="rest-featured-grid">
          {featured.map((item, i) => (
            <Reveal key={item.id} delay={i * 90} className={`rest-featured-tile rest-featured-tile--${item.variant}`}>
              <span className="rest-featured-name">{item.name[language]}</span>
              <span className="rest-featured-price">${item.price.toFixed(2)}</span>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};
