import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';

export const Footer = () => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <button onClick={scrollToTop} className="footer-button">{strings[language].footer.upTop}</button>
    </footer>

  );
};
