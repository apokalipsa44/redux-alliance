import { CLAIM_FORM } from "../redux_actions/types";

const initialState = {
  name: "",
  amountOfMoney: 0,
};

const claimsProcessed = (listOfClaims = initialState, action) => {
  switch (action.type) {
    case CLAIM_FORM:
      return [...listOfClaims, action.payload]; //merge objects
    default:
      return listOfClaims;
  }
};

export default claimsProcessed;
