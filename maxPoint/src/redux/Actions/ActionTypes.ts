import { Image, Presentation, Primitive, Slide, Text } from "../../types/types";
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
    height: number;
    width: number;
  };
};

export type CreateTextActionType = {
  type: "CREATE_TEXT";
  payload: Text;
};

export type CreateImageActionType = {
  type: "CREATE_IMAGE";
  payload: Image;
};

export type UploadActionType = {
  type: "UPLOAD_PRESENTATION";
  payload: Presentation;
};

export type CreatePrimitiveActionType = {
  type: "CREATE_PRIMITIVE";
  payload: Primitive;
};
export type SetTextValueActionType = {
  type: "SET_TEXT_VALUE";
  payload: string;
};

export type SetTextSizeActionType = {
  type: "SET_TEXT_SIZE";
  payload: number;
};

export type SetTextFontFamilyActionType = {
  type: "SET_TEXT_FONT_FAMILY";
  payload: string;
};

export type SetTextBoldActionType = {
  type: "SET_TEXT_BOLD";
};

export type SetTextFontStyleActionType = {
  type: "SET_TEXT_FONT_STYLE";
};

export type SetTextDecorationActionType = {
  type: "SET_TEXT_DECORATION";
};

export type ObjectDeleteActionType = {
  type: "OBJECT_DELETE";
};

export type SetColorActionType = {
  type: "SET_COLOR";
  payload: string;
};

export type ActionType =
  | TitleActionType
  | AddSlideActionType
  | SetIdActionType
  | RemoveSlideActionType
  | ChangeSlideOrderActionType
  | ToggleAreaActionType
  | SetPositionActionType
  | SetSizeActionType
  | CreateTextActionType
  | CreateImageActionType
  | UploadActionType
  | CreatePrimitiveActionType
  | SetTextValueActionType
  | SetTextSizeActionType
  | SetTextFontFamilyActionType
  | SetTextBoldActionType
  | SetTextFontStyleActionType
  | SetTextDecorationActionType
  | ObjectDeleteActionType
  | SetColorActionType;
