import { CREATE_POLICY, CLAIM_FORM } from "../redux_actions/types";

const initialState = {
  amount: 0,
};

const moneyReducer = (someMoney = initialState, action) => {
  switch (action.type) {
    case CREATE_POLICY:
      return someMoney + action.payload.amount; // adds money for the registry - client bought new policy
    case CLAIM_FORM:
      return someMoney - action.payload.amount; //pays the client for his claim
    default:
      return someMoney;
  }
};

export default moneyReducer;
