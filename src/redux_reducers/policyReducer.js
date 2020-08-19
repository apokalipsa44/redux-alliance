import { CREATE_POLICY, DELETE_POLICY } from "../redux_actions/types";

const initialState = {
    name: ""
};

const policyReducer = (listOfPolicies=initialState, action) => {
  switch (action.type) {
    case CREATE_POLICY:
      return [...listOfPolicies, action.payload.name]; //merge objects
    case DELETE_POLICY:
        return listOfPolicies.filter(policy => policy !== action.payload.name);
    default:
      return listOfPolicies;
  }
};

export default policyReducer;
