import FireSvg from '../assets/icons/fire.svg';
import { TextSection } from './TextSection';
import { PageWrapper } from './PageWrapper';

export const ErrorPage = () => {

  return (

    <PageWrapper style={{ display: "flex", justifyContent: "center" }}>

      <TextSection
        image={FireSvg}
        title="idk where you are man"
      />

    </PageWrapper>

  );
};
