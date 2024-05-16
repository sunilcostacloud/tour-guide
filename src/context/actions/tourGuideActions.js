import { AboutSteps } from "../../components/about/AboutSteps";
import { HomeSteps } from "../../components/home/HomeSteps";
import { TOUR_GUIDE, TOUR_GUIDE_RESET } from "../actionTypes/tourGuideActionTypes";

export const tourGuideAction = (payload) => {
  const { pathname, run } = payload;

  let steps = [];
  if (pathname === "/") {
    steps = HomeSteps;
  } else if (pathname === "/about") {
    steps = AboutSteps;
  }

  const updatedPayload = {
    steps,
    run,
  };

  return {
    type: TOUR_GUIDE,
    payload: updatedPayload,
  };
};

export const tourGuideResetAction = () => {
  return {
    type: TOUR_GUIDE_RESET,
  };
};
