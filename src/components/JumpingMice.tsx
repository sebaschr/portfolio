import PalmTreeSvg from '../assets/icons/palmtree.svg';
import { TextSection } from './TextSection';
import { PageWrapper } from './PageWrapper';

export const JumpingMice = () => {

  return (

    <PageWrapper style={{ display: "flex", justifyContent: "center" }}>

      <TextSection
        image={PalmTreeSvg}
        title="Under Construction"
        uppercase
      />
    </PageWrapper>

  );
};
