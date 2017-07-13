import { combineReducers } from "redux";
import messages from "./messages";
import auth from "./auth";
import companies from "./companies";

export default combineReducers({
  messages,
  auth,
  companies
});
