import { Reveal } from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import { restaurantAbout, restaurantInfo } from '../data/restaurant';

export const RestaurantAbout = () => {
  const { language } = useLanguage();

  return (
    <section className="rest-section">
      <Reveal>
        <h1 className="rest-section-title">{language === 'es' ? 'Nosotros' : 'About'}</h1>
        <p className="rest-section-lead">
          {restaurantInfo.location[language]} · {restaurantInfo.hours[language]}
        </p>
      </Reveal>

      <div className="rest-about-sections">
        {restaurantAbout.map((section, i) => (
          <Reveal key={section.title.en} delay={i * 80} className="rest-about-section">
            <h2 className="rest-category-title">{section.title[language]}</h2>
            <p className="rest-about-text">{section.text[language]}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
