import  {combineReducers}  from "redux";
import  claimReducer  from "./claimReducer";
import  policyReducer  from "./policyReducer";
import  moneyReducer  from "./moneyReducer";

export default combineReducers({
  claim: claimReducer,
  policy: policyReducer,
  money: moneyReducer,
});
