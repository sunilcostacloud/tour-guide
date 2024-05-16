import { TOUR_GUIDE, TOUR_GUIDE_RESET } from "../actionTypes/tourGuideActionTypes"


export const tourGuideInitialState = {
    run: false,
    steps: []
}

const tourGuideReducer = (state = tourGuideInitialState, action) => {
    switch(action.type){
        case TOUR_GUIDE:
            return{
                ...state,
                run: action.payload.run,
                steps: action.payload.steps
            }
        case TOUR_GUIDE_RESET:
            return{
                ...state,
                run: false,
                steps: []
            }
        default:
            return state
    }
}

export default tourGuideReducer