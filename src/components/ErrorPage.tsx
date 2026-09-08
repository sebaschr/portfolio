import FireSvg from '../assets/icons/fire.svg';
import { TextSection } from './TextSection';
import { PageWrapper } from './PageWrapper';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';

export const ErrorPage = () => {
  const { language } = useLanguage();

  return (

    <PageWrapper style={{ display: "flex", justifyContent: "center" }}>

      <TextSection
        image={FireSvg}
        title={strings[language].error.title}
      />

    </PageWrapper>

  );
};
