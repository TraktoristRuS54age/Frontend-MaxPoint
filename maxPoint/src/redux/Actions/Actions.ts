import * as ActionCreator from "./ActionCreator";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

export const useAppActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ ...ActionCreator }, dispatch);
};
