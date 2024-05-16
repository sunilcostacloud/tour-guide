import Joyride, { STATUS } from "react-joyride";
import { useGlobalContext } from "../../context/GlobalContext";
import { tourGuideResetAction } from "../../context/actions/tourGuideActions";

const TourGuide = ({children}) => {
    const { tourGuideState, tourGuideDispatch } = useGlobalContext();

    const handleJoyrideCallback = (data) => {
      const { status } = data;
      const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];
  
      if (finishedStatuses.includes(status)) {
        tourGuideDispatch(tourGuideResetAction());
      }
    };
  
    return (
      <div>
        <Joyride
          callback={handleJoyrideCallback}
          continuous
          run={tourGuideState?.run}
          steps={tourGuideState?.steps}
          scrollToFirstStep
          showProgress
          showSkipButton
          hideCloseButton
          styles={{
            options: {
              zIndex: 10000,
            },
          }}
        />
        {children}
      </div>
    );
}

export default TourGuide