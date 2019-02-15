import { Action } from "redux";

export interface BasicAction<Type> extends Action {
  readonly type: Type;
};