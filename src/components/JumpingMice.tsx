import PalmTreeSvg from '../assets/icons/palmtree.svg';
import { TextSection } from './TextSection';

export const JumpingMice = () => {

  return (

    <div className="wrapper" style={{ display: "flex", justifyContent: "center" }}>

      <TextSection
        image={PalmTreeSvg}
        title="Under Construction"
        uppercase
      />
    </div>

  );
};
