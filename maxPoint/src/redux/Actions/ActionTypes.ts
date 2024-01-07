import { Slide } from "../../types/types";

export type TitleActionType = {
  type: "CHANGE_PRESENTATION_TITLE";
  payload: string;
};

export type AddSlideActionType = {
  type: "CREATE_NEW_SLIDE";
  payload: Slide;
};

export type SetIdActionType = {
  type: "SET_SLIDE_ID";
  payload: string;
};

export type RemoveSlideActionType = {
  type: "REMOVE_SLIDE";
  payload: string;
};

export type ChangeSlideOrderActionType = {
  type: "CHANGE_SLIDE_ORDER";
  payload: {
    from: number;
    to: number;
  };
};

export type ToggleAreaActionType = {
  type: "TOGGLE_AREA";
  payload: {
    event: React.MouseEvent<HTMLDivElement, MouseEvent>;
    id: string;
  };
};

export type SetPositionActionType = {
  type: "SET_POSITION";
  payload: {
    x: number;
    y: number;
  };
};

export type SetSizeActionType = {
  type: "SET_SIZE";
  payload: {
    size: {
      height: number;
      width: number;
    };
  };
};

export type ActionType =
  | TitleActionType
  | AddSlideActionType
  | SetIdActionType
  | RemoveSlideActionType
  | ChangeSlideOrderActionType
  | ToggleAreaActionType
  | SetPositionActionType
  | SetSizeActionType;
