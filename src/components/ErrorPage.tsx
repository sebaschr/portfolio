import FireSvg from '../assets/icons/fire.svg';
import { TextSection } from './TextSection';

export const ErrorPage = () => {

  return (

    <div className="wrapper" style={{ display: "flex", justifyContent: "center" }}>

      <TextSection
        image={FireSvg}
        title="idk where you are man"
      />

    </div>

  );
};
